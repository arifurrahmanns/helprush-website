import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useActionState, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ErrorTxt from '@/components/ui/errortxt'
import { Icon } from '@iconify/react'
import { register } from '@/app/actions/auth/signup'
import { useLayoutData } from '@/app/providers/UseLayoutData'
import Otpverification from '../auth/otpverification'


function CustomerSignupForm() {
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

    useEffect(() => {
        if (state?.error) {
            setErrors([state.message])
        }
        if (state?.success) {
            setStep(4)
        }
    }, [state])


    return (
        <div>

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
    )
}

export default CustomerSignupForm