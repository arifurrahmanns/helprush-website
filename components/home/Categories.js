'use client'

import { getCategories } from '@/app/actions/service/service';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton';
import { Icon } from '@iconify/react';



function Categories() {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getCategories();

            setLoading(false);
            const catresponse = response?.data?.data.map((category) => {
                return {
                    name: category.name,
                    icon: category.image ? category.image : '/img/placeholderimage.jpg',
                    des: category.description,
                    id: category.id
                }
            });

            setCategories(catresponse);
        })()

    }, []);


    return (
        <div className='grid mt-5 lg:mt-8 grid-cols-2 gap-2 lg:gap-5 lg:grid-cols-5'>
            {!loading ? categories.map((category, index) => {
                return (
                    <div key={index} className='bg-[#f8f8f8]  rounded-xl border border-neutral-100 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-105'>
                        <Link className='text-center h-full  flex flex-col justify-between   p-2 lg:p-4 ' href={`category/${category.id}`}>
                            <img className='lg:w-24 w-20 lg:h-24 h-20 object-contain rounded mx-auto mb-3' src={category.icon} alt={category.name} />
                            <p className='leading-tight text-lg uppercase text-black font-medium'>
                                {category.name}
                            </p>
                            <p className='leading-tight line-clamp-2 text-[13px] mt-3 lg:text-[14px] text-neutral-700 font-medium'>
                                {category.des}
                            </p>
                        </Link>
                    </div>
                )
            }) : <>
                <Skeleton className="h-[210px] rounded-xl" /> <Skeleton className="h-[210px] rounded-xl" /> <Skeleton className="h-[210px] rounded-xl" /><Skeleton className="h-[210px] rounded-xl" />
            </>
            }
            {!loading ? <div className='bg-[#f8f8f8]  rounded-xl border border-neutral-100 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-105'>
                <Link href={'/categories'} className='text-center h-full  flex flex-col justify-center   p-4 '>
                    {/* <img className='rounded-md lg:w-16 w-12 lg:h-16 h-12 object-contain mx-auto mb-3' src='/img/more.png' alt='More' /> */}
                    <Icon icon="ph:arrow-right-bold" className='lg:w-16 w-12 lg:h-16 h-12 object-contain mx-auto mb-3 text-theme' />
                </Link>
            </div> : <Skeleton className="h-[210px] rounded-xl" />}
      
        </div>
    )
}

export default Categories