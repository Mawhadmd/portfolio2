import { NextResponse } from "next/server";
import { createToken } from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Get the admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { error: "Admin password not configured" },
        { status: 500 }
      );
    }

    // Check if the provided password matches
    if (password === adminPassword) {
      // Create a JWT token
      const token = await createToken({ role: "admin" });
      return NextResponse.json({ success: true, token });
    }

    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error: " + error },
      { status: 500 }
    );
  }
}
