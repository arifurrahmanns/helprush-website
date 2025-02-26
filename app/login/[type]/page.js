'use client'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { cn, foratPhone } from '@/lib/utils'
import React, { useActionState, useEffect, useRef, useState } from 'react'

import Otpverification from '@/components/auth/otpverification'

import { login } from '@/app/actions/auth/login'
import { getSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'
import ErrorTxt from '@/components/ui/errortxt'

function page() {
    const params = useParams();

    
    const router = useRouter();
    const [err, setErr] = useState(null);

    return (
        <main className='relative overflow-hidden py-10 lg:py-20'>
            <div className="container relative z-10">
                <div className="max-w-md">

                    <Otpverification callBack={async (data) => {
                        if (data.user) {
                            const user = {
                                first_name: data.user.first_name,
                                last_name: data.user.last_name,
                                email: data.user.email,
                                contact_number: data.user.contact_number,
                                type: data.user.type,
                                user_id: data.user.id,

                            }
                            const response = await login(
                                {
                                    user,
                                    token: data.token
                                }
                            );
                            if (response) {
                                await getSession();
                                router.push('/')
                            }
                            return;
                        }

                    }} />
                    {err && <ErrorTxt>
                        {err}
                    </ErrorTxt>}
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