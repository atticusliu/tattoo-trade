import { NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

// --- for the routes below, add ad hoc ---
// TODO: assess the below as we go along

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
  return await updateSession(req);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}