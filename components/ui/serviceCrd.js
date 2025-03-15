import { Icon } from '@iconify/react'
import React from 'react'

function ServiceCrd({ service }) {

    return (
        <div className='serviceCrd rounded-2xl overflow-hidden flex flex-col'>
            <img src={service.image} className='aspect-[6/4] object-cover' alt="" />

            <div className="p-4 flex flex-col justify-between grow">
                <div>
                    <h2 className='font-semibold line-clamp-2 text-base leading-snug lg:text-xl lead'>
                        {service.name}

                    </h2>
                    <p className='text-neutral-500 line-clamp-2 text-sm  lg:text-base'>
                        {service.description}
                    </p>
                    <div className="meta mt-2">
                        {/* rating */}
                        <div className="flex  text-sm lg:text-base text-neutral-500 gap-1 leading-none items-center">
                            <Icon className='text-[#FFBD00] text-sm lg:text-base' icon="icon-park-solid:star" />
                            <span >
                                4.2
                            </span>
                            <span>
                                ({service.number_of_reviews})
                            </span>
                        </div>
                    </div>
                </div>
                <button className='rounded-2xl border border-[#F2A01E]  w-full p-3 text-[#F2A01E] mt-4 hover:bg-[#F2A01E] hover:text-white  block uppercase font-semibold text-sm lg:text-lg'>
                    Book Now
                </button>
            </div>
        </div>
    )
}

export default ServiceCrd