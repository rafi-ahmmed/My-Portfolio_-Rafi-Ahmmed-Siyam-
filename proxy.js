import { getToken } from 'next-auth/jwt';
import { signOut } from 'next-auth/react';
import { NextResponse } from 'next/server';

export async function proxy(request) {
   // console.log(request.nextUrl.pathname);
   const response = NextResponse.next();
   
   const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
   });
   console.log('Access token', token);

   if (!token) {
      console.log('Not sign in');
      return NextResponse.redirect(new URL('/Login', request.url));
   }

   const validEmail = ['rafi.ahmmed920@gmail.com', 'rafiahmmed920@gmail.com','rafi220330@gmail.com'];

   if (!validEmail.includes(token?.email)) {
      response.cookies.delete('next-auth.session-token');
      response.cookies.delete('__Secure-next-auth.session-token');
      return NextResponse.redirect(new URL('/', request.url));
   }

   return NextResponse.next();
}

export const config = {
   matcher: ['/dashboard/:path*'],
};
