import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {

    if ( req.nextUrl.pathname.startsWith('/api/entries/')) {
        const id = req.nextUrl.pathname.replace('/api/entries/', '');
        const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

        console.log({ req: req.nextUrl.pathname })
        
        if ( !checkMongoIDRegExp.test(id) ) {
            const url = req.nextUrl.clone();
            url.pathname = '/api/bad-request';
            
            return NextResponse.rewrite(url);
        }   
    }

  return NextResponse.next();
}

export const config = {
    matcher: [
        '/api/entries/:path'
    ]
}

