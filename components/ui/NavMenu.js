'use client'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'

function NavMenu() {
    const [opend, seOpened] = useState(false)
    const [loginOpenend, setLoginOpened] = useState(false)
    return (
        <header id="mainHeader" className={cn("bg-theme  py-3 text-white", loginOpenend && 'active')}>
            <div className="container">
                <div className="flex  items-center">
                    <Link href="/" className="logo">
                        <div className="flex items-center">

                            HelpRush
                        </div>
                    </Link>
                    <nav className="lg:ml-10  navMenu flex  flex-1">
                        <ul className="flex flex-col gap-3 lg:gap-5 navs " style={{ display: opend ? 'flex' : 'none' }}>
                            <li>
                                <Link href="/about">Hire</Link>
                            </li>
                            <li>
                                <Link href="/contact">Serve</Link>
                            </li>
                            <li>
                                <Link href="/contact">Business</Link>
                            </li>
                            <li>
                                <Link href="/contact">About</Link>
                            </li>
                            <li className="block lg:hidden">
                                <Link href="/help">Help</Link>
                            </li>
                            <li className="block lg:hidden">
                                <button className='text-[#006d5b]' onClick={() => { setLoginOpened(true) }} href="/login">Login</button>
                            </li>
                            <li className="block lg:hidden">
                                <Link className="bg-theme !text-white text-primary py-0.5 px-3 !inline-block rounded-full " href="/signup">Sign Up</Link>
                            </li>
                        </ul>
                        <ul className="controls ml-auto flex gap-2">
                            <li>
                                <Link className="flex gap-1 items-center" href="/">
                                    <Icon icon="ci:globe" width="16" height="16" />
                                    EN
                                </Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href="/help">Help</Link>
                            </li>
                            <li className="hidden loginBtn lg:block">
                                <button onClick={() => { setLoginOpened(true) }} href="/login">Login</button>

                                <div className="menuPopup">
                                    <div className="container">
                                        <div className="inner">

                                            <button className='closeBtn' onClick={() => { setLoginOpened(false) }}>
                                                <Icon icon="material-symbols:close-rounded" />
                                            </button>
                                            <div className="grid lg:grid-cols-2 gap-10 lg:gap-24">
                                                <div>
                                                    <a className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/login">
                                                        <div className="flex items-end gap-2">
                                                            Login to Offer Services
                                                            <Icon icon="akar-icons:arrow-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/login">
                                                        <div className="flex items-end gap-2">
                                                            Login to Book Services
                                                            <Icon icon="akar-icons:arrow-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/login">
                                                        <div className="flex items-end gap-2">
                                                            Login for Business
                                                            <Icon icon="akar-icons:arrow-right" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hidden lg:block">
                                <Link className="bg-white !text-black py-2  px-3 rounded-full hdrbtn " href="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </nav>

                    <button onClick={() => { seOpened(!opend) }} className="ml-3 lg:hidden navtoggle">
                        <Icon icon="material-symbols:menu-rounded" style={{
                            display: opend ? 'none' : 'block'
                        }} />
                        <Icon icon="material-symbols:close-rounded"
                            style={{
                                display: opend ? 'block' : 'none'
                            }} />
                    </button>
                </div>
            </div>
        </header>

    )
}

export default NavMenu