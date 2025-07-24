
import { supabase } from "@/lib/supabase";
import { Post } from "@/models/posts.database";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { data, error, statusText } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", (await params).slug)
      .single();

    if (error) {
      console.error("Error fetching post:", error);
      return NextResponse.json(
        {
          error: "Failed to fetch post",
          reason: error.cause,
          statusText: statusText,
        },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(data as Post, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
