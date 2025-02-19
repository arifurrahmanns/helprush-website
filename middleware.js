import { auth } from "@/auth"
import { NextResponse } from 'next/server'

export default auth((req) => {
    if (!req.auth) {
        //if current url has /dashboard 
        if (req.nextUrl.pathname.includes('/dashboard')) {
            //redirect to login
            const newUrl = new URL("/login", req.nextUrl.origin)
            return NextResponse
                .redirect(newUrl)
        }
    }
    if (req.auth) {
        //if current url is /login or /signup redirect to dashboard
        if (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup') {
            const newUrl = new URL("/dashboard", req.nextUrl.origin)
            return NextResponse.redirect(newUrl)
        }
    }
})

export const config = {
    matcher: ['/dashboard/:path*', '/login/:path*', '/signup/:path*'],

}