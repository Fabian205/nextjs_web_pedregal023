import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

/* export async function verifyCookie(request) {
  const jwt = request.cookies.get("myTokenName");
  if(jwt){
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode(process.env.NEXTAUTH_SECRET)
    );
    console.log(payload);   
    return NextResponse.next();
  }
} */