'use client'
import React from 'react'
import { Button } from './button'
import { logOut } from '@/app/actions/auth/logout'
import { useRouter } from 'next/navigation'
import { getSession } from 'next-auth/react';

function LogoutBtn() {
    const router = useRouter()



    const performLogout = async () => {
        const response = await logOut();
        if (response) {
            const session = await getSession();
            router.push('/login')
        }
    }
    return (
        <Button onClick={() => {
            performLogout()
        }} >Logout</Button>
    )
}

export default LogoutBtn