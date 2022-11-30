import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const cookie = request.cookies.get("user");
  // const secret = new TextEncoder().encode(process.env.KEY);
  // if (cookie) {
  //   const { payload } = await jose.jwtVerify(cookie?.value, secret);
  //   const requestHeaders = new Headers(request.headers);
  //   requestHeaders.set("userId", payload.id);
  //   const response = NextResponse.next({
  //     request: {
  //       // New request headers
  //       headers: requestHeaders,
  //     },
  //   });
  //   return response;
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:function*",
};
