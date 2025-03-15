'use client';
import { useLayoutData } from '@/app/providers/UseLayoutData';
import Services from '@/components/archive/services';
import Subcategories from '@/components/archive/subcategories';
import React, { useEffect, useState } from 'react'

function page() {
    const category = useLayoutData();
    const [currentSubCategory, setCurrentSubCategory] = React.useState(null);

    const [filters, setFilters] = useState({
        category_id: category.id
    });

    useEffect(() => {
        if (currentSubCategory) {
            setFilters({
                ...filters,
                sub_category_id: currentSubCategory
            })
        } else {
            setFilters({
                category_id: category.id
            })
        }

    }, [currentSubCategory])

   

    return (
        <>
            <section id="top" className='py-10 lg:py-20'>
                <div className="container">
                    <h1 className='text-2xl font-bold text-theme lg:text-4xl'>{category.title}</h1>
                    <div className="mt-5">
                        <Subcategories current={currentSubCategory} clicked={(subCategory) => {
                       
                            setCurrentSubCategory(subCategory === currentSubCategory ? null : subCategory);
                        }} category_id={category.id} />
                    </div>

                    <div className="mt-10">
                        <Services filters={
                          filters
                        } />
                    </div>
                </div>
            </section>
        </>
    )
}

export default page