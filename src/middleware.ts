// middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

import { NextRequest, NextResponse } from 'next/server';

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
};

export function middleware(request: NextRequest): any {
  // Clone the request headers and set a new header `x-version`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-version', '13');

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-version`
  response.headers.set('x-version', '13');
  return response;
}

// export function middleware(request: NextRequest) {
//   // Call our authentication function to check the request
//   if (!isAuthenticated(request)) {
//     // Respond with JSON indicating an error message
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Auth failed',
//       },
//       {
//         status: 401,
//       },
//     );
//   }
// }

export const stuff = 1;
