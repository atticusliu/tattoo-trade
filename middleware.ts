import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/lib/session';
import { cookies } from 'next/headers';
import { JWTPayload } from 'jose';

// --- for the routes below, add ad hoc ---

// protected routes
const protectedRoutes:string[] = [
  '/dashboard',
  '/profile',
];

// public routes
const publicRoutes:string[] = [
  '/',
  '/login',
  '/signup',
  '/about',
  '/contact-us',
  '/policies/terms-of-service',
  '/policies/privacy-policy',
];

export async function middleware(req: NextRequest) {
  // check if current route is protected or public
  const path:string = req.nextUrl.pathname;
  const isProtectedRoute:boolean = protectedRoutes.includes(path);
  const isPublicRoute:boolean = publicRoutes.includes(path);

  // decrypt session from cookie
  const cookie:string|undefined = cookies().get('session')?.value;
  const session:JWTPayload|undefined = await decrypt(cookie);

  // redirect to /login if user isn't authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // redirect to /dashboard if user is authenticated
  if (isPublicRoute && session?.userId && !req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  return NextResponse.next();
}

// routes middleware shouldn't run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}