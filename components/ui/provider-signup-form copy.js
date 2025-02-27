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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { City } from 'country-state-city';
import { Label } from './label'
import RadioSegments from './radioSegments'
import SelectSegments from './selectSegments'


function ProviderSignupForm() {
    const [step, setStep] = useState(1);
    const [error, setError] = useState(null);
    const [values, setValues] = useState({
        phone: '',
        f_name: '',
        l_name: '',
        city: '',
        address: '',
        primary_service: '',
        experence_level: '',
        team: '',
        serving_online: '',
        contact_time: '',
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

    const [cities, setCities] = useState([]);

    useEffect(() => {

        const city = City.getCitiesOfState('IN', 'JK')
        setCities(city)

    }, [])


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

                {/* city  */}
                <div className={cn("flex-col gap-3", step === 3 ? 'flex' : 'hidden')}>
                    <div>
                        <label className="text-black block mb-5 font-semibold !leading-snug text-xl lg:text-4xl">City & Service Area</label>



                        <SelectSegments
                            placeholder='Select City'
                            value={values.city}
                            onChnage={(value) => {
                                setValues({
                                    ...values,
                                    city: value
                                })
                            }}
                            options={cities.map((city, index) => {
                                return { label: city.name, value: city.name }
                            }
                            )}
                        />
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <button type='button' onClick={() => { setStep(2) }} >
                            {/* prev */}
                            <Icon icon="akar-icons:arrow-left" width="30" height="30" />
                        </button>
                        <Button type="button" size={"xl"} disabled={values.city?.length <= 0} onClick={() => {
                            setStep(4)
                        }}> Next</Button>
                    </div>
                </div>

                {/* primary service */}
                <div className={cn("flex-col gap-3", step === 4 ? 'flex' : 'hidden')}>
                    <div>
                        <label className="text-black block mb-5 font-semibold !leading-snug text-xl lg:text-4xl">Primary Service Category</label>



                        <SelectSegments
                            placeholder='Select Service Category'
                            value={values.primary_service}
                            onChnage={(value) => {
                                setValues({
                                    ...values,
                                    primary_service: value
                                })
                            }}
                            options={[
                                { label: 'Cleaning', value: 'cleaning' },
                                { label: 'Plumbing', value: 'plumbing' },
                                { label: 'Electrician', value: 'electrician' },
                                { label: 'Carpenter', value: 'carpenter' },
                                { label: 'Painter', value: 'painter' },
                                { label: 'Gardener', value: 'gardener' },
                                { label: 'Mover', value: 'mover' },
                                { label: 'Handyman', value: 'handyman' }
                            ]}
                        />

                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <button type='button' onClick={() => { setStep(3) }} >
                            {/* prev */}
                            <Icon icon="akar-icons:arrow-left" width="30" height="30" />
                        </button>
                        <Button type="button" size={"xl"} disabled={values.primary_service?.length <= 0} onClick={() => {
                            setStep(5)
                        }}> Next</Button>
                    </div>
                </div>
                {/* Experience Level */}
                <div className={cn("flex-col gap-3", step === 5 ? 'flex' : 'hidden')}>
                    <div>
                        <label className="text-black block mb-5 font-semibold !leading-snug text-xl lg:text-4xl">Experience Level</label>




                        <RadioSegments
                            name={'experence_level'}
                            options={[
                                { label: 'Beginner', value: 'beginner' },
                                { label: '1-3 Years', value: '1-3 years' },
                                { label: '3+ Years', value: '3+ years' },
                                { label: 'Business Owner', value: 'business owner' }
                            ]}
                            value={values.experence_level}
                            onChange={(value) => {
                                setValues({
                                    ...values,
                                    experence_level: value
                                })
                            }

                            }
                        />

                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <button type='button' onClick={() => { setStep(4) }} >
                            {/* prev */}
                            <Icon icon="akar-icons:arrow-left" width="30" height="30" />
                        </button>
                        <Button type="button" size={"xl"} disabled={values.experence_level?.length <= 0} onClick={() => {
                            setStep(6)
                        }}> Next</Button>
                    </div>
                </div>

                {/* Additional Business Details */}
                <div className={cn("flex-col gap-3", step === 6 ? 'flex' : 'hidden')}>
                    <div>
                        <label className="text-black block mb-5 font-semibold !leading-snug text-xl lg:text-4xl">Additional Business Details</label>
                        <div className='flex flex-col gap-5'>

                            <div>
                                <Label className="lg:text-lg text-neutral-700">Do you work independently or with a team?</Label>
                                <div className='pt-3'>
                                    {/* Radio: Solo | Have a Team | Own a Business */}


                                    <RadioSegments
                                        name={'team'}
                                        options={[
                                            { label: 'Solo', value: 'solo' },
                                            { label: 'Have a Team', value: 'team' },
                                            { label: 'Own a Business', value: 'business' }
                                        ]}
                                        value={values.team}
                                        onChange={(value) => {
                                            setValues({
                                                ...values,
                                                team: value
                                            })
                                        }}

                                    />
                                </div>
                            </div>
                            <div>
                                <Label className="lg:text-lg text-neutral-700">Are you already serving customers online? </Label>
                                {/* (Yes/No) */}
                                <div className='pt-3'>


                                    <RadioSegments
                                        name={'serving_online'}
                                        options={[
                                            { label: 'Yes', value: 'yes' },
                                            { label: 'No', value: 'no' }
                                        ]}
                                        value={values.serving_online}
                                        onChange={(value) => {
                                            setValues({
                                                ...values,
                                                serving_online: value
                                            })
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label className="lg:text-lg text-neutral-700">Preferred Contact Time</Label>
                                <div className='pt-3'>
                                    {/* Dropdown: Anytime, Morning, Afternoon, Evening */}


                                    <SelectSegments
                                        placeholder='Select Time'
                                        value={values.contact_time}
                                        onChnage={(value) => {
                                            setValues({
                                                ...values,
                                                contact_time: value
                                            })
                                        }}
                                        options={[
                                            { label: 'Anytime', value: 'anytime' },
                                            { label: 'Morning', value: 'morning' },
                                            { label: 'Afternoon', value: 'afternoon' },
                                            { label: 'Evening', value: 'evening' }
                                        ]}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <button type='button' onClick={() => { setStep(5) }} >
                            {/* prev */}
                            <Icon icon="akar-icons:arrow-left" width="30" height="30" />
                        </button>
                        <Button type="button" size={"xl"} onClick={() => {
                            setStep(7)
                        }}> Next</Button>
                    </div>
                </div>


               


                {step === 7 && <div>
                    <label className="text-black block mb-5 font-semibold !leading-snug text-xl lg:text-4xl"> Congratulations🎉 You successfully registered</label>
                    <p className='text-lg'>
                        Thanks! Our team will review your details and invite you to sign up on the HelpRush app soon.
                    </p>

                </div>}
            </form>
        </div>
    )
}

export default ProviderSignupForm