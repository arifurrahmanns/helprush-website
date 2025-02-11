import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <main className='relative overflow-hidden py-10 lg:py-20'>
            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-5xl font-bold text-neutral-900">
                            Welcome back!
                        </h1>
                        <p className="mt-3 lg:mt-5 text-lg lg:text-xl text-neutral-700">
                            Sign in to your account to continue
                        </p>
                    </div>
                    <div className="flex formElement flex-col gap-5 border bg-white p-10 rounded shadow-sm">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="email" className="text-neutral-700">Email</label>
                            <input type="email" id="email" className="input" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="password" className="text-neutral-700">Password</label>
                            <input type="password" id="password" className="input" />

                            <Link href="/forgot-password" className="text-indigo-500 text-sm">Forgot password?</Link>
                        </div>
                        <button className="btn btn-primary">Sign in</button>
                    </div>
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