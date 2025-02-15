'use client'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { Input } from '@/components/ui/input'
import { cn, foratPhone } from '@/lib/utils'
import Link from 'next/link'
import React, { useActionState, useEffect, useRef, useState } from 'react'
import { sendOtp, verifyOtp } from '@/app/actions/auth/otp'
import ErrorTxt from '@/components/ui/errortxt'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'

function page() {
    const [state, formAction, pending] = useActionState(sendOtp, null)
    const [phone, setPhone] = useState('');
    const [step, setStep] = useState(1);
    const [timer, setTimer] = useState(100);
    const [allowSentOtp, setAllowSentOtp] = useState(true);
    const [pin, setPin] = useState(null);
    const intervalRef = useRef(null);
    const [resending, setResending] = useState(false);
    useEffect(() => {
        if (state?.success) {
            setStep(2);
            setPin(state.pin);
            setAllowSentOtp(false);
        }
    }, [state])
    useEffect(() => {
        if (!allowSentOtp) {
            setTimer(60);
        }
    }, [allowSentOtp])
    useEffect(() => {
        if (timer == 60) {
            intervalRef.current = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return;
        }
        if (timer == 0) {
            setAllowSentOtp(true);
            clearInterval(intervalRef.current);
        }
    }, [timer])



    const [validationState, validationFormAction, validationPending] = useActionState(verifyOtp, null)

    useEffect(() => {
        if (validationState?.success) {
            alert('OTP verified')
        }
    }, [validationState])
    return (
        <main className='relative overflow-hidden py-10 lg:py-20'>
            <div className="container relative z-10">
                <div className="max-w-md">

                    {step == 1 ? <form action={formAction} className="flex lg:col-span-2 formElement flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="phone" className="text-black mb-5 font-semibold !leading-snug text-xl lg:text-4xl">What is your Phone <br /> Number?</label>
                            <div>
                                <div className="flex items-center relative">
                                    <div className='absolute  h-14   text-neutral-600 border-r pr-4 py-2 text-base  md:text-lg pl-4  flex items-center '>+91</div>
                                    <Input placeholder="Enter your phone number" error={state?.error ? true : false} value={phone} onChange={(e) => { setPhone(e.target.value) }} className="pl-16 md:pl-20 md:text-lg h-14" name="phone" type="tel" id="phone" />
                                </div>

                                {state?.error && <ErrorTxt>{state.message}</ErrorTxt>}

                            </div>
                        </div>

                        <div className="flex">
                            {/* <Button size={"xl"} className loading={pending} disabled={!allowSentOtp}>  Get OTP</Button> */}
                            <Button size={"xl"} className loading={pending}>  Get OTP</Button>

                        </div>
                    </form> :
                        <form action={validationFormAction} className="flex lg:col-span-2 formElement flex-col gap-5 ">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="phone" className="text-black  font-semibold !leading-snug text-xl lg:text-4xl">Enter the 4-digit code sent via SMS at <br /> {foratPhone(`+91${phone}`)}</label>
                                <button type="button" disabled={!allowSentOtp} onClick={() => { setStep(1) }} className="text-primary-500 text-left disabled:opacity-70 disabled:cursor-auto text-base my-2  hover:enabled:text-theme2">Changed your mobile number?</button>

                                <input type="hidden" value={pin} name='pin' />
                                <input type="hidden" value={phone} name='phone' />
                                <div>
                                    <InputOTP name="otp" maxLength={6}>
                                        <InputOTPGroup className="w-1/2">
                                            <InputOTPSlot className="bg-white  h-14 text-base md:text-lg" index={0} />
                                            <InputOTPSlot className="bg-white  h-14 text-base md:text-lg" index={1} />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup className="w-1/2">
                                            <InputOTPSlot className="bg-white  h-14 text-base md:text-lg" index={2} />
                                            <InputOTPSlot className="bg-white  h-14 text-base md:text-lg" index={3} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                    {validationState?.error && <ErrorTxt>Invalid OTP</ErrorTxt>}
                                </div>



                                <div className="flex justify-between my-2 gap-1 flex-wrap items-start">
                                    <button type="button" onClick={async () => {
                                        setResending(true)
                                        const formData = new FormData()
                                        formData.append('phone', phone)
                                        const response = await sendOtp(null, formData)
                                        if (response.success) {
                                            setPin(response.pin)
                                            setAllowSentOtp(false)
                                            setResending(false)
                                        }
                                        else {
                                            setResending(false)
                                        }

                                    }} disabled={!allowSentOtp || resending} className="text-primary-500 disabled:opacity-70 disabled:cursor-auto text-basse  hover:enabled:text-theme2">Resend Code {timer > 0 && <span>in {timer}s</span>}</button>
                                </div>

                            </div>

                            <div className="flex justify-between items-center gap-4">
                                <button type='button' onClick={() => { setStep(1) }} >
                                    {/* prev */}
                                    <Icon icon="akar-icons:arrow-left" width="30" height="30" />
                                </button>
                                <Button size={"xl"} loading={validationPending}> Next</Button>
                            </div>
                        </form>}
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