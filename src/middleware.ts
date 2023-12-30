import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const config = {
  matcher: [
    "/login",
    "/signup/:path*"
  ]
};

export function middleware(req: NextRequest) {
  const token = cookies().get("token");
  if (cookies().get("token")) {
    return NextResponse.redirect(new URL("/store", req.url));
  }
}