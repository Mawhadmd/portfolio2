import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(request: NextRequest) {
  
  if (request.nextUrl.pathname.startsWith("/blog/admin")) {
    // Skip middleware for login page
    if (request.nextUrl.pathname === "/blog/admin/login") {
      return NextResponse.next();
    }

    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/blog/admin/login", request.url));
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.redirect(new URL("/blog/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/blog/admin/:path*",
};
