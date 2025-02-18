import { auth } from "@/auth"
import { NextResponse } from 'next/server'

export default auth((req) => {
    if (!req.auth) {
        const newUrl = new URL("/login", req.nextUrl.origin)
        // return Response.redirect(newUrl)
        return NextResponse.redirect(newUrl)
    }
})

export const config = {
    matcher: '/dashboard/:path*',
}