import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
    {
        name: 'John Doe',
        company: 'Company Name',
        designation: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',

    },
    {
        name: 'John Doe',
        company: 'Company Name',
        designation: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
    },
    {
        name: 'John Doe',
        company: 'Company Name',
        designation: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
    },
    {
        name: 'John Doe',
        company: 'Company Name',
        designation: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
    },
    {
        name: 'John Doe',
        company: 'Company Name',
        designation: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
    },
    {
        name: 'John Doe',
        company: 'Company Name',
        designation: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
    },
    {
        name: 'John Doe',
        company: 'Company Name',
        designation: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
    },
    {
        name: 'John Doe',
        company: 'Company Name',
        designation: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
    },
    {
        name: 'John Doe',
        company: 'Company Name',
        designation: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
    },
    {
        name: 'John Doe',
        company: 'Company Name',
        designation: 'CEO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
    },
];

function page() {
    return (
        <main>
            <div className="container py-10 lg:py-20">
                <h2 className='text-2xl font-bold !leading-tight lg:text-4xl'>
                    Powering Businesses with <br /> On-Demand Services
                </h2>
                <p className='txt mt-3 max-w-3xl'>
                    Whether you're a small business or a large enterprise, HelpRush simplifies your service needs with vetted professionals, instant bookings, and seamless management.
                </p>
                <div className='mt-5 lg:mt-8'>
                    <ul className='flex flex-col gap-2'>
                        <li className='lg:flex gap-2'>
                            <Icon icon='fluent:checkbox-checked-16-filled' className='text-theme text-2xl' />
                            <strong>
                                Instant & Scheduled Bookings
                            </strong> - Get services when you need them, from quick fixes to long-term contracts.
                        </li>
                        <li className='lg:flex gap-2'>
                            <Icon icon='fluent:checkbox-checked-16-filled' className='text-theme text-2xl' />
                            <strong>Vetted & Verified Providers</strong> - Background-checked professionals for your peace of mind
                        </li>
                        <li className='lg:flex gap-2'>
                            <Icon icon='fluent:checkbox-checked-16-filled' className='text-theme text-2xl' />
                            <strong>Transparent Pricin</strong> - No hidden costs; pay only for what you need.
                        </li>
                        <li className='lg:flex gap-2'>
                            <Icon icon='fluent:checkbox-checked-16-filled' className='text-theme text-2xl' />
                            <strong>Easy Team Management</strong> - Assign services, track expenses, and manage invoices effortlessly
                        </li>
                        <li className='lg:flex gap-2'>
                            <Icon icon='fluent:checkbox-checked-16-filled' className='text-theme text-2xl' />
                            <strong> Dedicated Business Support</strong> - Priority customer service for all your queries.
                        </li>
                    </ul>
                    <Link href="/signup" className="btn inline-block mt-5 lg:mt-8">Signup Now</Link>
                </div>
            </div>
            <div className="container pb-10 lg:pb-20">
                <h4 className='text-2xl font-bold'>
                    How It Works?
                </h4>
                <div className="mt-5 lg:mt-8 grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-4">
                    <div className="col">
                        <img className='rounded-lg  aspect-[6/4] object-cover' src="/img/uugg877.jpg" alt="" />
                        <h3 className='mt-4 font-bold text-lg'>
                            Sign Up & Set Up
                        </h3>
                        <p>
                            Create a business account &
                            define service needs.
                        </p>
                    </div>
                    <div className="col">
                        <img className='rounded-lg  aspect-[6/4] object-cover' src="/img/67hbvh76.jpg" alt="" />
                        <h3 className='mt-4 font-bold text-lg'>
                            Browse & Book
                        </h3>
                        <p>
                            Choose from a range of service providers.
                        </p>
                    </div>
                    <div className="col">
                        <img className='rounded-lg aspect-[6/4] object-cover' src="/img/jhdsud87w8e.jpg" alt="" />
                        <h3 className='mt-4 font-bold text-lg'>
                            Manage & Track
                        </h3>
                        <p>
                            Stay in control with an intuitive dashboard
                        </p>
                    </div>
                    <div className="col">
                        <img className='rounded-lg  aspect-[6/4] object-cover' src="/img/asi829e.jpg" alt="" />
                        <h3 className='mt-4 font-bold text-lg'>
                            Pay & Simplify
                        </h3>
                        <p>
                            Consolidated billing & digital receipts.
                        </p>
                    </div>
                </div>
                <div className="mt-5 text-center lg:mt-10">
                    <Link href="/signup" className="btn min-w-[200px] inline-block">Start Now</Link>
                </div>
            </div>
            <div className="container pb-10 lg:pb-20">
                <h4 className='text-2xl font-bold'>
                    Solutions for Every Business Type                </h4>
                <div className="mt-5 lg:mt-8 grid gap-5 lg:gap-10 grid-cols-2 lg:grid-cols-3">
                    <div className="col">
                        <img className='w-16' src="/img/workplace.png" alt="" />
                        <h3 className='mt-4 font-bold text-base'>
                            Offices & Coworking Spaces
                        </h3>
                        <p className='!text-sm txt'>
                            Keep your work environment running smoothly by hiring Top rated Pros on demand.
                        </p>
                    </div>
                    <div className="col">
                        <img className='w-16' src="/img/five.png" alt="" />
                        <h3 className='mt-4 font-bold text-base'>
                            Retail & Hospitality
                        </h3>
                        <p className='!text-sm txt'>
                            Quick service solutions for seamless operations.
                        </p>
                    </div>
                    <div className="col">
                        <img className='w-16' src="/img/real-estate.png" alt="" />
                        <h3 className='mt-4 font-bold text-base'>
                            Real Estate & Property Management
                        </h3>
                        <p className='!text-sm txt'>
                            Maintenance, cleaning & emergency repairs.
                        </p>
                    </div>
                    <div className="col">
                        <img className='w-16' src="/img/manufacturing.png" alt="" />
                        <h3 className='mt-4 font-bold text-base'>
                            Manufacturing & Warehousing
                        </h3>
                        <p className='!text-sm txt'>
                            Skilled technicians on demand
                        </p>
                    </div>
                    <div className="col">
                        <img className='w-16' src="/img/logistics.png" alt="" />
                        <h3 className='mt-4 font-bold text-base'>
                            Logistics & E-commerce
                        </h3>
                        <p className='!text-sm txt'>
                            Last-mile workforce for support & setup.
                        </p>
                    </div>

                </div>
                <div className="mt-5 text-center lg:mt-10">
                    <Link href="/signup" className="btn min-w-[200px] inline-block">Find a custom solution for your Business</Link>
                </div>
            </div>
            <div className="container pb-10 max-w-3xl lg:pb-20">
                <h4 className='text-2xl font-bold text-center'>HelpRush vs. Traditional Service Hiring           </h4>
                <Table className="border mt-8 ">

                    <TableBody>
                        <TableRow >
                            <TableCell className=" text-base border p-3">Feature</TableCell>
                            <TableCell className="border  text-base text-center bg-gray-100 py-3">HelpRush</TableCell>
                            <TableCell className="border  text-base text-center py-3">Traditional Hiring</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium border p-3 text-base">Instant Booking</TableCell>
                            <TableCell className="border bg-gray-100 text-center py-3"><Icon className='text-green-500 mx-auto' icon="material-symbols:check-box-rounded" width="24" height="24" /></TableCell>
                            <TableCell className="border text-center py-3"><Icon className='text-red-600 mx-auto' icon="emojione-monotone:cross-mark-button" width="20" height="20" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium border p-3 text-base">Vetted Providers</TableCell>
                            <TableCell className="bg-gray-100 border text-center py-3"><Icon className='text-green-500 mx-auto' icon="material-symbols:check-box-rounded" width="24" height="24" /></TableCell>
                            <TableCell className="border text-center py-3"><Icon className='text-red-600 mx-auto' icon="emojione-monotone:cross-mark-button" width="20" height="20" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium border p-3 text-base">Cost Transparency</TableCell>
                            <TableCell className="bg-gray-100 border text-center py-3"><Icon className='text-green-500 mx-auto' icon="material-symbols:check-box-rounded" width="24" height="24" /></TableCell>
                            <TableCell className="border text-center py-3"><Icon className='text-red-600 mx-auto' icon="emojione-monotone:cross-mark-button" width="20" height="20" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium border p-3 text-base">Multi-Service Access</TableCell>
                            <TableCell className="bg-gray-100 border text-center py-3"><Icon className='text-green-500 mx-auto' icon="material-symbols:check-box-rounded" width="24" height="24" /></TableCell>
                            <TableCell className="border text-center py-3"><Icon className='text-red-600 mx-auto' icon="emojione-monotone:cross-mark-button" width="20" height="20" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium border p-3 text-base">Digital Tracking & Reports</TableCell>
                            <TableCell className="bg-gray-100 border text-center py-3"><Icon className='text-green-500 mx-auto' icon="material-symbols:check-box-rounded" width="24" height="24" /></TableCell>
                            <TableCell className="border text-center py-3"><Icon className='text-red-600 mx-auto' icon="emojione-monotone:cross-mark-button" width="20" height="20" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>

            <div className="pb-10 lg:pb-20">
                <div className="container">
                    <Carousel>
                        <CarouselContent className="py-5">
                            {
                                testimonials.map((testimonial, index) => (
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                                        <div className="bg-white p-5 lg:p-8 rounded-lg shadow-md border border-gray-50">
                                            <p className='txt'>
                                                {testimonial.content}
                                            </p>
                                            <div className="mt-5">
                                                <strong className='text-lg font-bold'>
                                                    {testimonial.name}
                                                </strong>
                                                <p className='!text-sm txt'>
                                                    {testimonial.designation} at {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious className="hidden lg:flex"/>
                        <CarouselNext className="hidden lg:flex"/>
                    </Carousel>

                </div>
            </div>
            <div className="pb-10 lg:pb-20">
                <div className="container">
                    <div className="grid items-center  lg:grid-cols-2 gap-10">
                        <div className='lg:order-2'>
                            <img src="/img/983snjs.jpg" alt="" className="w-full" />
                        </div> <div>
                            <h3 className='text-2xl lg:text-5xl !leading-tight font-bold'>
                                Upgrade Your Business Operations Today
                            </h3>
                            <p className="txt mt-2 lg:mt-3 lg:!text-lg">
                                Sign up and start managing services in minutes!
                            </p>
                            <div className="flex mt-5 items-start lg:mt-8 flex-col gap-5 lg:flex-row">
                                <Link href={"/signup"} className="btn">Sign Up for Free</Link>
                                <Link href={""} className="btn !bg-theme2 !text-black">Sign Up for Free</Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default page