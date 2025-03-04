import { cn } from '@/lib/utils'
import React from 'react'

function Timeline(
    { items = [] }
) {
    return (
        <div className='relative timeLineWidget '>

            {items.map((item, index) => {
                return (
                    <div key={index} className={cn("item relative after:content[' '] after:absolute after:w-[15px] after:h-[15px] after:bg-black after:rounded-full after:top-0 after:left-0 after:transform after:-translate-x-[calc(50%-1.5px)] after:z-10 pl-5 lg:pl-8" , index !== items.length -1 &&"before:absolute before:w-[3px] before:bg-black before:h-full before:top-0 before:left-0 before:transform  before:z-10 pb-5 lg:pb-8")}>
                        <h2 className='text-lg font-semibold mb-1'>
                            {
                                item.title
                            }
                        </h2>
                        {
                            item.content
                        }
                    </div>
                )
            }

            )}

        </div>
    )
}

export default Timeline