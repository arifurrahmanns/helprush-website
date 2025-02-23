'use client';
import { useLayoutData } from '@/app/providers/UseLayoutData';
import Segments from '@/components/archive/segments';
import React from 'react'

function page() {
    const category = useLayoutData();
    console.log(category)

    return (
        <>
            <section id="top" className='py-10 lg:py-20'>
                <div className="container">
                    <h1 className='text-2xl font-bold text-theme lg:text-4xl'>{category.title}</h1>
                    <div className="mt-10 ">
                        <Segments />
                    </div>

                    <div className="grid mt-10 lg:mt-20 grid-cols-5 gap-5">
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default page