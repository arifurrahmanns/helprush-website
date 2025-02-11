import Link from 'next/link'
import React from 'react'

function Categories() {
    const categories = [
        {
            name: "Architecture & Interior design",
            icon: "/img/staircase.png",
            link: "/"
        },
        {
            name: "Carpenting, Plumbing & Masonary",
            icon: "/img/carpenter.png",
            link: "/"
        },
        {
            name: "Electric & Gadgets",
            icon: "/img/engineering.png",
            link: "/"
        },
        {
            name: "Engineering & Construction",
            icon: "/img/helmet.png",
            link: "/"
        },

    ]
    return (
        <div className='grid mt-5 lg:mt-8 grid-cols-2 gap-2 lg:gap-5 lg:grid-cols-5'>
            {categories.map((category, index) => {
                return (
                    <div key={index} className='bg-[#f5f5f5] hover:bg-[#f1f1f1] rounded-md border border-neutral-100'>
                        <Link className='text-center h-full  flex flex-col justify-between   p-2 lg:p-4 ' href={category.link}>
                            <img className='rounded-md lg:w-16 w-12 lg:h-16 h-12 object-contain mx-auto mb-3' src={category.icon} alt={category.name} />
                            <p className='leading-tight text-[13px] lg:text-[15px] text-neutral-700 font-medium'>
                                {category.name}
                            </p>
                        </Link>
                    </div>
                )
            })}
            <div className='bg-[#f5f5f5] hover:bg-[#f1f1f1] rounded-md border border-neutral-100'>
                <Link href={'/categories'} className='text-center h-full  flex flex-col justify-center   p-4 '>
                    <img className='rounded-md lg:w-16 w-12 lg:h-16 h-12 object-contain mx-auto mb-3'  src='/img/more.png' alt='More' />
                    <p className='leading-tight text-[13px] lg:text-[15px] text-neutral-700 font-medium'>
                        More
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Categories