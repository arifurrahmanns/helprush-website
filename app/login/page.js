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
import Otpverification from '@/components/auth/otpverification'
import { signIn } from '@/auth'
import { login } from '../actions/auth/login'

function page() {

    return (
        <main className='relative overflow-hidden py-10 lg:py-20'>
            <div className="container relative z-10">
                <div className="max-w-md">

                    <Otpverification callBack={(data) => {
                        console.log(data)
                    }} />
                </div>
                <div className="mt-20 lg:mt-40 max-w-4xl">
                    <p>
                        HelpRush is built with businesses in mind, offering a platform where you can connect with thousands of new customers while seamlessly managing your teams, boosting productivity, and organizing work. With smart data insights to drive growth and social benefits for your team, HelpRush empowers your business to thrive.
                    </p>
                </div>
            </div>
            return <button onClick={() => login()}>Sign In</button>
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