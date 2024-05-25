import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/signin' || path === '/signup'

    const token = request.cookies.get("token")?.value || ''

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/profile',request.url))
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/signin',request.url))
    }

    return NextResponse.redirect(new URL('/journal',request.url))
}

export const config = {
    matcher: [
        // '/profile',
        // '/journal'
    ]
}
