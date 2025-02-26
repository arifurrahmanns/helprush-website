'use client'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useActionState, useEffect, useState } from 'react'
import { Country, State, City } from 'country-state-city';
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { sendOtp } from '@/app/actions/auth/otp'
import { Button } from '@/components/ui/button'
import Otpverification from '@/components/auth/otpverification'
import ErrorTxt from '@/components/ui/errortxt'
import { Icon } from '@iconify/react'
import { register } from '@/app/actions/auth/signup'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useLayoutData } from '@/app/providers/UseLayoutData'


function page() {
    const [step, setStep] = useState(1);
    const [error, setError] = useState(null);
    const [values, setValues] = useState({
        phone: '',
        f_name: '',
        l_name: '',
        email: '',

    });

    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const [state, formAction, pending] = useActionState(register, null)

    const usertype = useLayoutData();

    // add more fields to the form action
    useEffect(() => {
        if (state?.error) {
            setErrors([state.message])
        }
        if (state?.success) {
            setStep(4)
        }
    }, [state])

    return (
        <main className='relative overflow-hidden py-10 lg:py-20'>
            <div className="container relative z-10">
                <div className="max-w-md">

                    {step === 1 && <>
                        <Otpverification callBack={(data) => {
                            if (!data.user && !data.token) {
                                setStep(2)
                                setValues({
                                    ...values,
                                    phone: data.phone
                                })
                            } else {
                                setError("The phone number is already registered, please login to continue")
                            }
                        }} />
                        {error && <ErrorTxt>
                            {error}
                        </ErrorTxt>}
                    </>}

                    <form action={formAction} method='post'>
                        <input type="hidden" name='phone' value={values.phone} />
                        <input type="hidden" name='type' value={usertype} />

                        <div className={cn("flex-col gap-3", step === 2 ? 'flex' : 'hidden')}>


                            <div>
                                <label className="text-black block mb-5 font-semibold !leading-snug text-xl lg:text-4xl">What is your name?</label>
                                <div className='grid lg:grid-cols-2 gap-3'>
                                    <div>
                                        <Input name="f_name" value={values.f_name} onChange={(e) => {
                                            setValues({
                                                ...values,
                                                f_name: e.target.value
                                            })
                                        }} className="h-14  md:text-lg" size="lg" placeholder="First Name" />
                                    </div>
                                    <div>
                                        <Input name="l_name" value={values.l_name} onChange={(e) => {
                                            setValues({
                                                ...values,
                                                l_name: e.target.value
                                            })
                                        }} className="h-14  md:text-lg" size="lg" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <button type='button' onClick={() => { setStep(1) }} >
                                    {/* prev */}
                                    <Icon icon="akar-icons:arrow-left" width="30" height="30" />
                                </button>
                                <Button type="button" size={"xl"} disabled={values.f_name?.length <= 0 || values.l_name?.length <= 0} onClick={() => {
                                    setStep(3)
                                }}> Next</Button>
                            </div>




                        </div>

                        <div className={cn("flex-col gap-3", step === 3 ? 'flex' : 'hidden')}>
                            <div>
                                <label className="text-black block mb-5 font-semibold !leading-snug text-xl lg:text-4xl">What is your email?</label>
                                <Input name="email" value={values.email} type="email" onChange={(e) => {
                                    setValues({
                                        ...values,
                                        email: e.target.value
                                    })
                                }} className="h-14  md:text-lg" size="lg" placeholder="Email" />
                            </div>

                            <div className="-mt-3">
                                {errors.map((error, index) => {
                                    return <ErrorTxt key={index}>{error}</ErrorTxt>
                                }
                                )}
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <button type='button' onClick={() => { setStep(2) }} >
                                    {/* prev */}
                                    <Icon icon="akar-icons:arrow-left" width="30" height="30" />
                                </button>
                                <Button size={"xl"} loading={pending}> Next</Button>
                            </div>
                        </div>


                        {step === 4 && <div>
                            <label className="text-black block mb-5 font-semibold !leading-snug text-xl lg:text-4xl"> Congratulations🎉 You successfully registered</label>
                            <p className='text-lg'>
                            Please <Link className='underline  text-indigo-700' href={"/login"}>login</Link>  to continue
                            </p>
                         
                        </div>}

                    </form>


                </div>
                <div className="mt-20 lg:mt-40 max-w-4xl">
                    <p>
                        HelpRush is built with businesses in mind, offering a platform where you can connect with thousands of new customers while seamlessly managing your teams, boosting productivity, and organizing work. With smart data insights to drive growth and social benefits for your team, HelpRush empowers your business to thrive.
                    </p>
                </div>
            </div>


            <AnimatedGridPattern
                numSquares={300}
                maxOpacity={0.1}
                duration={1}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(60vw_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-10%] opacity-55 w-[100%] h-[140%] skew-y-12",
                )}
            />
        </main>
    )
}

export default page