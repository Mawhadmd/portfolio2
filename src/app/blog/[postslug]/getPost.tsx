import { supabase } from "@/lib/supabase";
import { Post } from "@/models/posts.database";

export async function getPost(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.log(data);
    console.log(error);
    return null;
  }
  return data as Post;
}