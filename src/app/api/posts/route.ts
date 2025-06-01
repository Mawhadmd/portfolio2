import { Post } from "./../../../models/posts.database";
import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const status = searchParams.get("status") || "published";

  // Validate status parameter
  if (!["published", "draft", "all"].includes(status)) {
    return NextResponse.json(
      {
        error:
          "Invalid status parameter. Must be 'published', 'draft', or 'all'",
      },
      { status: 400 }
    );
  }

  let query = supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  // Only apply status filter if not requesting all posts
  if (status !== "all") {
    query = query.eq("status", status);
  }

  const { data, error, statusText } = await query;

  if (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch posts",
        reason: error.cause,
        statusText: statusText,
      },
      { status: 500 }
    );
  }
  return NextResponse.json(data as Post[], {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, category, thumbnail, status } = await req.json();

    // Validate required fields
    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Insert post into Supabase
    const { data, error, statusText } = await supabase
      .from("posts")
      .insert([
        {
          title,
          slug,
          content: content || "",
          category: category || "General",
          thumbnail: thumbnail || null,
          status: status || "draft",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creating post:", error);
      return NextResponse.json(
        {
          error: "Failed to create post",
          reason: error.cause,
          statusText: statusText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      post: data,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const { error, statusText } = await supabase
      .from("posts")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting post:", error);
      return NextResponse.json(
        {
          error: "Failed to delete post",
          reason: error.cause,
          statusText: statusText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json();

    if (!id || !status || !["published", "draft"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid request. ID and valid status are required" },
        { status: 400 }
      );
    }

    const { data, error, statusText } = await supabase
      .from("posts")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating post:", error);
      return NextResponse.json(
        {
          error: "Failed to update post",
          reason: error.cause,
          statusText: statusText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      post: data,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}
