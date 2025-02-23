import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import PrevButton from '../ui/PrevButton';
import NextButton from '../ui/NextButton';
import { Icon } from '@iconify/react';
function Segments() {
    const segments = [
        {
            name: 'Carpenting',
            id: 1,
            image: '/img/Hammer.png'
        },
        {
            name: 'Plumbing',
            id: 2,
            image: '/img/segment2.png'
        },
        {
            name: 'Masonry',
            id: 3,
            image: '/img/segment3.png'
        },
        {
            name: 'Electrical',
            id: 4,
            image: '/img/segment4.png'
        },
        {
            name: 'Carpenting',
            id: 5,
            image: '/img/Hammer.png'
        },
        {
            name: 'Plumbing',
            id: 6,
            image: '/img/segment2.png'
        },
        {
            name: 'Masonry',
            id: 7,
            image: '/img/segment3.png'
        },
        {
            name: 'Electrical',
            id: 8,
            image: '/img/segment4.png'
        },
        {
            name: 'Carpenting',
            id: 9,
            image: '/img/Hammer.png'
        },
        {
            name: 'Plumbing',
            id: 10,
            image: '/img/segment2.png'
        },
        {
            name: 'Masonry',
            id: 11,
            image: '/img/segment3.png'
        },
        {
            name: 'Electrical',
            id: 12,
            image: '/img/segment4.png'
        },
        {
            name: 'Carpenting',
            id: 13,
            image: '/img/Hammer.png'
        },
        {
            name: 'Plumbing',
            id: 14,
            image: '/img/segment2.png'
        },
        {
            name: 'Masonry',
            id: 15,
            image: '/img/segment3.png'
        },
        {
            name: 'Electrical',
            id: 16,
            image: '/img/segment4.png'
        },

    ]
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
                    {segments.map((segment, index) => (
                        <SwiperSlide key={index} className="text-center">
                            <div className="w-14 mx-auto items-center flex justify-center rounded-full h-14 lg:w-24 lg:h-24 bg-[#CCFBF1]" >
                                <img className='w-[50%] object-contain' src={segment.image} alt={segment.name} />
                            </div>

                            <p className="text-xs font-semibold md:text-sm text-center mt-2 lg:text-lg">{segment.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )

}

export default Segments