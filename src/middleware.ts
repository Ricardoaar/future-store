import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const config = {
  matcher: [
    "/login",
    "/signup/:path*",
    "/store/:path*",
    "/"
  ]
};

export function middleware(req: NextRequest) {
  const token = cookies().get("token");
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", req.nextUrl.origin);
  const init = {
    headers: requestHeaders
  };

  if (token) {
    return NextResponse.redirect(new URL("/store", req.url), {
      headers: requestHeaders
    });
  }

  return NextResponse.next({ request: init });
}