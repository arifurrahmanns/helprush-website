'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'

function NavMenu() {
    const [opend, seOpened] = useState(false)
    return (
        <>
            <nav className="lg:ml-10  navMenu flex  flex-1">
                <ul className="flex flex-col gap-3 lg:gap-5 navs " style={{display: opend ? 'flex' : 'none'}}>
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
                        <Link href="/login">Login</Link>
                    </li>
                    <li className="block lg:hidden">
                        <Link className="bg-theme !text-white text-primary py-0.5 px-3  rounded-full " href="/sign-up">Signup</Link>
                    </li>
                </ul>
                <ul className="controls ml-auto flex gap-4">
                    <li>
                        <Link className="flex gap-1 items-center" href="/">
                            <Icon icon="ci:globe" width="24" height="24" />
                            EN
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/help">Help</Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/login">Login</Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link className="bg-white !text-theme py-0.5 px-2 rounded-full " href="/sign-up">Signup</Link>
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
        </>
    )
}

export default NavMenu