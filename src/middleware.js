import { NextResponse } from "next/server";
import { jwtVerify } from "jose";


export async function middleware(request) {
  const jwt = request.cookies.get("myTokenName");

  //if(request.nextUrl.pathname.includes('/dashboard')){
  //console.log('validating dashboard')
  if (jwt === undefined) {
    //console.log("first request");
    return NextResponse.redirect(new URL("/loginAdmin", request.url));
  }
  try {
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode(process.env.NEXTAUTH_SECRET)
    );
    //console.log(payload);   
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/loginAdmin", request.url));
  }
}
//return NextResponse.next();
//}
export const config = {
  matcher: ["/home", "/admin/:path*", "/about"],
};
