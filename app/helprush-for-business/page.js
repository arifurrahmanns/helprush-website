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
                <div className="grid items-center lg:grid-cols-5 gap-10">
                    <div className='lg:col-span-3'>
                        <h2 className='text-2xl font-bold !leading-tight lg:text-4xl'>
                            Grow Your Business with HelpRush
                        </h2>
                        <p className='txt mt-3 max-w-3xl'>
                            Whether you're a small business or a large enterprise, HelpRush simplifies your service needs with vetted professionals, instant bookings, and seamless management.
                        </p>
                        <div className='mt-5 lg:mt-8'>
                            <ul className='flex flex-col gap-3 font-medium'>
                                <li className='lg:flex gap-2'>
                                    <Icon icon='teenyicons:trend-up-outline' className='text-theme text-2xl' />

                                    Reach thousands of new customers
                                </li>
                                <li className='lg:flex gap-2'>
                                    <Icon icon='guidance:tools' className='text-theme text-2xl' />
                                    Manage teams & boost productivity
                                </li>
                                <li className='lg:flex gap-2'>
                                    <Icon icon='carbon:show-data-cards' className='text-theme text-2xl' />
                                    Data-driven insights for growth
                                </li>

                            </ul>
                            <Link href="/signup" className="btn inline-block mt-5 lg:mt-8">Signup Now</Link>
                        </div>
                    </div>
                    <img className='w-full lg:col-span-2' src="/img/Data analysis-rafiki.svg" alt="" />
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
                        <CarouselPrevious className="hidden lg:flex" />
                        <CarouselNext className="hidden lg:flex" />
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
                                <Link href={"/signup"} className="btn !bg-theme2 !text-black">Get Started for Free</Link>
                                <Link href={""} className="btn !border !border-primary !px-10 !border-solid !bg-white !text-theme">Sign In</Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section id="appSection" className="py-10  lg:py-20 bg-neutral-50">
        <div className="container">
          <h3>
            It’s easier in the apps
          </h3>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex p-2 rounded-lg   items-center mt-10  serviceCrd flex-col lg:flex-row gap-5">
              <img src="/img/qr1.png" className="w-36" alt="" />
              <div>
                <h5 className="font-semibold text-center lg:text-left text-xl  lg:text-2xl">Download HelpRush app </h5>
                <a href="#" className="text-theme justify-center lg:justify-start text-lg flex items-center mt-1 lg:mt-2 gap-2">Scan to download <Icon className="text-xl" icon="humbleicons:arrow-right" /></a>
              </div>
            </div>
            <div className="flex  p-2 rounded-lg items-center serviceCrd mt-10  flex-col lg:flex-row gap-5">
              <img src="/img/qr2.png" className="w-36" alt="" />
              <div>
                <h5 className="font-semibold text-center lg:text-left text-xl  lg:text-2xl">Download Provider app  </h5>
                <a href="#" className="text-theme justify-center lg:justify-start text-lg flex items-center mt-1 lg:mt-2 gap-2">Scan to download <Icon className="text-xl" icon="humbleicons:arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
        </main>
    )
}

export default page