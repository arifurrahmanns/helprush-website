'use client'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'

function NavMenu({ loggedIn }) {
    console.log(loggedIn)
    const [opend, seOpened] = useState(false)
    const [loginOpenend, setLoginOpened] = useState(false)
    const [signupOpenend, setSignupOpened] = useState(false)
    return (
        <header id="mainHeader" className={cn("bg-theme  py-3 text-white", loginOpenend && 'loginActive', signupOpenend && 'signupActive')}>
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
                            {!loggedIn && <li className="block lg:hidden">
                                <button className='text-[#006d5b]' onClick={() => { setLoginOpened(true) }}>Login</button>
                            </li>}
                            {!loggedIn && <li className="block lg:hidden">
                                <button onClick={() => {
                                    setSignupOpened(true)
                                }} className="bg-theme !text-white text-primary py-0.5 px-3 !inline-block rounded-full " >Sign Up</button>
                            </li>}
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
                            {!loggedIn && <li className="hidden loginBtn lg:block">
                                <button onClick={() => { setLoginOpened(true) }} >Login</button>

                                <div className="menuPopup login">
                                    <div className="container">
                                        <div className="inner">

                                            <button className='closeBtn' onClick={() => { setLoginOpened(false) }}>
                                                <Icon icon="material-symbols:close-rounded" />
                                            </button>
                                            <div className="grid lg:grid-cols-2 gap-10 lg:gap-24">
                                                <div>
                                                    <Link onClick={() => {
                                                        setLoginOpened(false)
                                                    }} className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/login">
                                                        <div className="flex items-end gap-2">
                                                            Login to Offer Services
                                                            <Icon icon="akar-icons:arrow-right" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link onClick={() => {
                                                        setLoginOpened(false)
                                                    }} className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/login">
                                                        <div className="flex items-end gap-2">
                                                            Login to Book Services
                                                            <Icon icon="akar-icons:arrow-right" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link onClick={() => {
                                                        setLoginOpened(false)
                                                    }} className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/login">
                                                        <div className="flex items-end gap-2">
                                                            Login for Business
                                                            <Icon icon="akar-icons:arrow-right" />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>}
                            {!loggedIn && <li className="hidden signupBtn lg:block">
                                <button onClick={() => { setSignupOpened(true) }} className="!bg-white !text-black py-2  px-3 rounded-full hdrbtn " >Sign Up</button>

                                <div className="menuPopup signup">
                                    <div className="container">
                                        <div className="inner">

                                            <button className='closeBtn' onClick={() => { setSignupOpened(false) }}>
                                                <Icon icon="material-symbols:close-rounded" />
                                            </button>
                                            <div className="grid lg:grid-cols-2 gap-10 lg:gap-24">
                                                <div>
                                                    <Link onClick={() => {
                                                        setSignupOpened(false)
                                                    }} className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/signup">
                                                        <div className="flex items-end gap-2">
                                                            Signup to Offer Services
                                                            <Icon icon="akar-icons:arrow-right" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link onClick={() => {
                                                        setSignupOpened(false)
                                                    }} className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/signup">
                                                        <div className="flex items-end gap-2">
                                                            Signup to Book Services
                                                            <Icon icon="akar-icons:arrow-right" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link onClick={() => {
                                                        setSignupOpened(false)
                                                    }} className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/signup">
                                                        <div className="flex items-end gap-2">
                                                            Signup as Business
                                                            <Icon icon="akar-icons:arrow-right" />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>}
                            {loggedIn && <li className="hidden lg:block">
                                <Link href="/dashboard">Profile</Link>
                            </li>}
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