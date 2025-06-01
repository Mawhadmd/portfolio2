import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const { slug, title, content, category, thumbnail, status } =
      await req.json();

    if (!slug) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }



    const updateData = {
      updated_at: new Date().toISOString(),
        title : title,
        content : content,
        category : category,
        thumbnail : thumbnail,
        status : status,
    };


    const { data, error, statusText } = await supabase
      .from("posts")
      .update(updateData)
      .eq("slug", slug)
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
