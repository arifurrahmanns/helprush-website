'use client'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import React, { useActionState, useEffect, useState } from 'react'

import { useLayoutData } from '@/app/providers/UseLayoutData'
import CustomerSignupForm from '@/components/ui/customer-signup-form'
import ProviderSignupForm from '@/components/ui/provider-signup-form'


function page() {

    const usertype = useLayoutData();

    return (
        <main className='relative overflow-hidden py-10 lg:py-20'>
            <div className="container relative z-10">
                <div className="max-w-md">


                    {usertype === 'customer' && <CustomerSignupForm />}
                    {usertype === 'provider' && <ProviderSignupForm />}

                


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