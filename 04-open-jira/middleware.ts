import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {


  return NextResponse.next();

  console.log({ req: req.nextUrl });
}

export const config = {
    mather: '/api/:path'
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }