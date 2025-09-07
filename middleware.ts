import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if the request is for admin routes
  if (pathname.startsWith('/admin')) {
    // Get the auth token from cookies
    const token = request.cookies.get('auth_token')?.value
    
    // If no token, redirect to login
    if (!token) {
      const loginUrl = new URL('/login', request.url)
      // Add a redirect parameter to redirect back to admin after login
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }
  
  // If user is on login page and has a token, redirect to admin
  if (pathname === '/login') {
    const token = request.cookies.get('auth_token')?.value
    if (token) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/login',
    '/forgot-password',
    '/reset-password/:path*'
  ]
}
