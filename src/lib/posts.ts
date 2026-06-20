import { supabase } from "@/lib/supabase";
import { Post } from "@/models/posts.database";

export type PostStatus = "published" | "draft" | "all";

/**
 * Fetches posts directly from Supabase.
 *
 * Server components should call this instead of fetching the /api/posts route
 * over HTTP — it avoids a wasted network round-trip and works during build /
 * prerendering (no base URL required).
 */
export async function getPosts(
  status: PostStatus = "published"
): Promise<Post[]> {
  let query = supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (status !== "all") {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  return (data as Post[]) ?? [];
}
