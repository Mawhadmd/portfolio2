import { Post } from './../../../models/posts.database';
import { supabase } from "@/lib/supabase";

import { NextResponse } from "next/server";
export async function GET() {
    const { data, error,statusText } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });
    if (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ error: "Failed to fetch posts", reason: error.cause, statusText: statusText }, { status: 500 });
    }
  return NextResponse.json(data as Post[], {
    status: 200
  });
}
