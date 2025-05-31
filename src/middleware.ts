import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/blog/admin")) {
    const token = request.cookies.get("admin_token")?.value;
    const isAuthenticated = token && (await verifyToken(token));

    // If trying to access login page
    if (request.nextUrl.pathname === "/blog/admin/login") {
      // Redirect to panel if already authenticated
      if (isAuthenticated) {
        return NextResponse.redirect(new URL("/blog/admin/panel", request.url));
      }
      return NextResponse.next();
    }

    // For all other admin routes
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/blog/admin/login", request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/blog/admin/:path*",
};
