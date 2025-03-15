'use client';
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import PrevButton from '../ui/PrevButton';
import NextButton from '../ui/NextButton';
import { Icon } from '@iconify/react';
import { getSubcategories } from '@/app/actions/service/service';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';
function Subcategories({ category_id, clicked, current }) {


    const [subcategories, setSubcategories] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        (async () => {
            try {
                const res = await getSubcategories(category_id);
                setSubcategories(res?.data?.data.map((subcategory) => {
                    return {
                        name: subcategory.name,
                        // icon: subcategory.image ? subcategory.image : '/img/placeholderimage.jpg',
                        // des: subcategory.description,
                        id: subcategory.id
                    }
                }));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])


    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (


        <>
            <div className="w-full justify-between flex gap-1 items-center">
                <button ref={prevRef} className=" bg-white shadow w-8 flex items-center justify-center h-8 rounded-full text-black">
                    <Icon icon="uiw:left" className='text-lg' />
                </button>
                <button ref={nextRef} className="  order-3 bg-white shadow flex items-center justify-center w-8 h-8 rounded-full text-black">
                    <Icon icon="uiw:right" className='text-lg' />
                </button>


                <Swiper className="grow arrSlider"
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },


                    }}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    pagination={{ clickable: true }}
                >
                    {!loading ? subcategories.map((subcategory, index) => (
                        <SwiperSlide key={subcategory.id}>
                            <button onClick={() => {
                                clicked(subcategory.id);
                            }} className={cn(
                                "rounded-full w-full line-clamp-1 border bg-gray-100 block p-2 text-xs font-semibold md:text-sm text-center  lg:text-base",
                                current === subcategory.id ? "bg-theme text-white" : "text-neutral-500"
                            )}>
                                {subcategory.name}
                            </button>

                        </SwiperSlide>
                    )) :

                        Array(5).fill().map((_, index) => {
                            return (
                                <SwiperSlide>
                                    <div>
                                        <Skeleton className="h-[42px]  rounded-full" />
                                    </div>
                                </SwiperSlide>

                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )

}

export default Subcategories