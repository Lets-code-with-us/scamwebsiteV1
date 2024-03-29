import { NextRequest,NextResponse } from "next/server";



export async function middleware(request:NextRequest) {
     
    const path=request.nextUrl.pathname;


    const publicPath = path === "/login" || path === "/signup" || path==="/" ;
    
    const token = request.cookies.get("token")?.value || '';


    if(publicPath && token){
        return NextResponse.redirect(new URL ('/profile',request.nextUrl))
    }
    
    if(!publicPath && !token){
        return NextResponse.redirect(new URL("/login",request.nextUrl))
    }
    


}

export const config={
    matcher:[
        '/',
        '/profile',
        '/login',
        '/signup',
        '/trend'
    ]

}