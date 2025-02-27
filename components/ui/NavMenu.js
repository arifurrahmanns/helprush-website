'use client'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import { getSession, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function NavMenu(props) {
    // console.log(loggedIn)
    const [loggedIn, setLoggedIn] = useState(props.loggedIn)
    const [opend, setOpened] = useState(false)
    const [loginOpenend, setLoginOpened] = useState(false)
    const [signupOpenend, setSignupOpened] = useState(false)
    const { status, update } = useSession()
    const roactiveSegment = useSelectedLayoutSegment();

    useEffect(() => {
        (async () => {
            // const session = await getSession();

            if (status == "authenticated") {
                setLoggedIn(true);
                console.log('logged in')
                return;
            }
            if (status == "unauthenticated") {
                setLoggedIn(false);
                console.log('logged out')
                return;
            }

        })()
        // checkSession();
    }, [status]);

    const routeClicked = () => {
        setLoginOpened(false)
        setSignupOpened(false)
        setOpened(false)
    }
    useEffect(() => {

    }, [roactiveSegment])




    return (
        <header id="mainHeader" className={cn("bg-theme  py-3 text-white", loginOpenend && 'loginActive', signupOpenend && 'signupActive')}>
            <div className="container">
                <div className="flex  items-center">
                    <Link onClick={routeClicked} href="/" className="logo">
                        <div className="flex items-center">

                            HelpRush
                        </div>
                    </Link>
                    <nav className="lg:ml-10  navMenu flex  flex-1">
                        <ul className="lg:!flex lg:flex-row flex-col gap-3 lg:gap-5 navs " style={{ display: opend ? 'flex' : 'none' }}>
                            <li>
                                <Link onClick={routeClicked} href="/about">Hire</Link>
                            </li>
                            <li>
                                <Link onClick={routeClicked} href="/contact">Serve</Link>
                            </li>
                            <li>
                                <Link onClick={routeClicked} href="/contact">Business</Link>
                            </li>
                            <li>
                                <Link onClick={routeClicked} href="/contact">About</Link>
                            </li>
                            <li className="block lg:hidden">
                                <Link onClick={routeClicked} href="/help">Help</Link>
                            </li>
                            {!loggedIn && <li className="block lg:hidden">
                                <button className='text-[#006d5b]' onClick={() => {
                                    setLoginOpened(true)
                                    setOpened(false)
                                }}>Login</button>
                            </li>}
                            {!loggedIn && <li className="block lg:hidden">
                                <button onClick={() => {
                                    setSignupOpened(true)
                                    setOpened(false)
                                }} className="bg-theme !text-white text-primary py-0.5 px-3 !inline-block rounded-full " >Sign Up</button>
                            </li>}
                            {loggedIn && <li className="block lg:hidden">
                                <Link onClick={routeClicked} href="/dashboard">Profile</Link>
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
                                <Link onClick={routeClicked} href="/help">Help</Link>
                            </li>
                            {!loggedIn && <li className="hidden loginBtn lg:block">
                                <button onClick={() => {
                                    setLoginOpened(true)
                                    setOpened(false)
                                }} >Login</button>

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
                                <button onClick={() => {
                                    setSignupOpened(true)
                                    setOpened(false)
                                }} className="!bg-white !text-black py-2  px-3 rounded-full hdrbtn " >Sign Up</button>

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
                                                    }} className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/signup/provider">
                                                        <div className="flex items-end gap-2">
                                                            Signup to Offer Services
                                                            <Icon icon="akar-icons:arrow-right" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link onClick={() => {
                                                        setSignupOpened(false)
                                                    }} className='!text-2xl lg:!pb-16 !border-black !rounded-none !pb-10 border-b text-black hover:text-neutral-700 lg:!text-4xl !font-medium' href="/signup/customer">
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
                                <Link onClick={routeClicked}  href="/dashboard">Profile</Link>
                            </li>}
                        </ul>
                    </nav>

                    <button onClick={() => { setOpened(!opend) }} className="ml-3 lg:hidden navtoggle">
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