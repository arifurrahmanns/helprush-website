'use client'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
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
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20">
                    <div className="flex flex-col lg:col-span-3 justify-center">
                        <h1 className="text-3xl lg:text-5xl font-bold text-neutral-900">
                            Welcome back!
                        </h1>
                        <p className="mt-3 lg:mt-5 text-lg lg:text-xl text-neutral-700">
                            Sign in to your account to continue
                        </p>
                    </div>
                    {step == 1 ? <form action={formAction} className="flex lg:col-span-2 formElement flex-col gap-5 border bg-white p-5  lg:p-10 rounded shadow-sm">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="phone" className="text-neutral-700">Phone</label>
                            <div>
                                <div className="flex items-center relative">
                                    <div className='absolute  h-10   text-neutral-600 border-r pr-2 py-2 text-base  md:text-sm pl-2  flex items-center '>+91</div>
                                    <Input error={state?.error ? true : false} value={phone} onChange={(e) => { setPhone(e.target.value) }} className="pl-12" name="phone" type="tel" id="phone" />
                                </div>

                                {state?.error && <ErrorTxt>{state.message}</ErrorTxt>}

                            </div>
                        </div>

                        <Button size={"lg"} loading={pending} disabled={!allowSentOtp}>  Send OTP</Button>
                    </form> :
                        <form action={validationFormAction} className="flex lg:col-span-2 formElement flex-col gap-5 border bg-white p-5  lg:p-10 rounded shadow-sm">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="otp" className="text-neutral-700">OTP</label>
                                <input type="hidden" value={pin} name='pin'/>
                                <input type="hidden" value={phone} name='phone'/>
                                <div>
                                    <InputOTP name="otp" maxLength={6}>
                                        <InputOTPGroup className="w-1/2">
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup className="w-1/2">
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                    {validationState?.error && <ErrorTxt>Invalid OTP</ErrorTxt>}
                                </div>



                                <div className="flex justify-between gap-1 flex-wrap items-start">
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

                                    }} disabled={!allowSentOtp || resending} className="text-primary-500 disabled:opacity-70 disabled:cursor-auto text-xs  hover:enabled:text-theme2">Resend OTP {timer > 0 && <span>in {timer}s</span>}</button>
                                    <button type="button" disabled={!allowSentOtp} onClick={() => { setStep(1) }} className="text-primary-500 disabled:opacity-70 disabled:cursor-auto text-xs  hover:enabled:text-theme2">Change phone number</button>
                                </div>

                            </div>

                            <Button size={"lg"} loading={validationPending}>  Verify OTP</Button>
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