'use client'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useState } from 'react'
import { Country, State, City } from 'country-state-city';
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'


function page() {
    const [state, setState] = useState(null)
    return (
        <main className='relative overflow-hidden py-10 lg:py-20'>
            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20">
                    <div className="flex flex-col lg:col-span-3 justify-center">
                        <h1 className="text-3xl lg:text-5xl font-bold text-neutral-900">
                            Register Now
                        </h1>
                        <p className="mt-3 lg:mt-5 text-lg lg:text-xl text-neutral-700">
                            Sign up for a new account
                        </p>
                    </div>
                    <div className="flex lg:col-span-2 formElement flex-col gap-5 border bg-white p-5  lg:p-10 rounded shadow-sm">
                        <div className="grid lg:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="fname" className="text-neutral-700">First Name</label>
                                <Input type="text" id="fname" className="input" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="lname" className="text-neutral-700">Last Name</label>
                                <Input type="text" id="lname" className="input" />
                            </div>
                        </div>

                        {/* email */}
                        <div className="flex flex-col gap-3">
                            <label htmlFor="email" className="text-neutral-700">Email</label>
                            <Input type="email" id="email" className="input" />
                        </div>

                        {/* phone */}

                        <div className="flex flex-col gap-3">
                            <label htmlFor="phone" className="text-neutral-700">Phone</label>
                            <Input type="tel" id="phone" className="input" />
                        </div>

                        {/* address line 1 */}
                        <div className="flex flex-col gap-3">
                            <label htmlFor="address1" className="text-neutral-700">Address</label>
                            <Input type="text" id="address1" className="input" />
                        </div>



                        {/* state */}
                        <div className="flex flex-col gap-3">
                            <label htmlFor="state" className="text-neutral-700">State</label>
                           
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select state" />
                                </SelectTrigger>
                                <SelectContent>
                                    {State.getStatesOfCountry('IN').map((state) => (

                                        <SelectItem value={state.isoCode}>{state.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {/* city */}
                        <div className="flex flex-col gap-3">
                            <label htmlFor="city" className="text-neutral-700">City</label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select city" />
                                </SelectTrigger>
                                <SelectContent>

                                    {state && City.getCitiesOfState('IN', state).map((city) => (
                                        <SelectItem value={city.name}>{city.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                        </div>

                        {/* post code */}
                        <div className="flex flex-col gap-3">
                            <label htmlFor="postcode" className="text-neutral-700">Post Code</label>
                            <Input type="text" id="postcode" className="input" />
                        </div>
                        <button className="btn btn-primary">Sign Up</button>
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