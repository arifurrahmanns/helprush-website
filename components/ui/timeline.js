import { cn } from '@/lib/utils'
import React from 'react'

function Timeline(
    { items = [] }
) {
    return (
        <div className='relative timeLineWidget '>

            {items.map((item, index) => {
                return (
                    <div key={index}
                        style={{
                            "--theme": item.bg,
                            "--text-color": item.text,
                        }}
                        className={cn("item relative pl-5 lg:pl-8", index !== items.length - 1 && "before:absolute before:w-[3px]  before:h-full before:top-0 before:left-0 before:transform  before:z-10 pb-5 lg:pb-8", item.bg && `after:bg-[--after-bg] before:bg-[--theme]`)}>
                        <div className="absolute text-2xl left-0 top-0 transform -translate-x-1/2  w-10 h-10 flex items-center justify-center rounded-full bg-white text-[--theme] shadow-lg border-[3px] border-[--theme] z-10">
                                {item.icon}
                            </div>
                        <div className={cn(`bg-[--theme] p-3 lg:p-4 rounded-xl inline-block` , item.text && `text-[--text-color]`)}
                           
                        >
                            
                            <h2 className='text-lg lg:text-xl font-semibold mb-1'>
                                {
                                    item.title
                                }
                            </h2>

                            {
                                item.content
                            }
                        </div>

                    </div>
                )
            }

            )}

        </div>
    )
}

export default Timeline