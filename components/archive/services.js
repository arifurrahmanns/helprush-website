import React, { use, useEffect, useState } from 'react'
import ServiceCrd from '../ui/serviceCrd'
import { getServices } from '@/app/actions/service/service';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Skeleton } from '../ui/skeleton';
import { array, set } from 'zod';
function Services({ filters }) {
    const [services, setServices] = useState([]);
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setServices([]);
        setLoading(true);
        setPage(null);
        (async () => {
        
            
            const res = await getServices(filters);
            if(!res?.data?.data) return;
            setServices((prevData )=>res?.data?.data.map((service) => {
                return {
                    name: service.name,
                    description: service.description,
                    image: service.image ? service.image : 'https://fakeimg.pl/600x400',
                    id: service.id,
                    rating: service.rating ? service.rating : 4.3,
                    number_of_reviews: service.number_of_reviews ? service.number_of_reviews : 100
                }
            }));
            setPage(res?.data);
            setLoading(false);
        })();
    }, [filters])



    return (
        <div>
            <div className='grid grid-cols-2 gap-3 lg:gap-5 lg:grid-cols-4'>

                {!loading? services.map((service, index) => {
                    return (
                        <ServiceCrd key={service.id} service={service} />
                    )
                }) : Array(8).fill().map((_, index) => {
                    return (<Skeleton key={index} className="rounded-2xl overflow-hidden">
                        <Skeleton className='aspect-[6/4] !rounded-none'></Skeleton>
                        <div className="p-4">
                            <Skeleton className='h-8 rounded-none'></Skeleton>
                            <Skeleton className='h-3 rounded-none mt-2'></Skeleton>
                            <Skeleton className='h-5 rounded-none mt-4'></Skeleton>
                            <Skeleton className='h-12 rounded-2xl mt-4'></Skeleton>
                        </div>
                    </Skeleton>)
                })}


            </div>
            {page?.link?.length > 3 && <Pagination className={'mt-10'}>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink isActive>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>}
        </div>
    )
}

export default Services