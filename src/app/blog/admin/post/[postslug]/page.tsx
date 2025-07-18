import { Post } from "@/models/posts.database";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import { FiHome } from "react-icons/fi";
import {
  BlogNavigation,
  HeroSection,
  ArticleContainer,
  AdminArticleHeader,
  ArticleContent,
  ShareSection,
} from "../../../(components)";


async function getPost(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data as Post;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ postslug: string }>;
}) {
  const { postslug } = await params;
  const post = await getPost(postslug);

  if (!post) notFound();

  return (
    <>
 
        <div className="min-h-screen w-full xl:w-2/3 mx-auto flex flex-col">
          {/* Navigation Button */}
          <BlogNavigation
            href="/blog/admin/panel"
            label="Admin Panel"
            icon={<FiHome className="h-4 w-4" aria-hidden="true" />}
          />

          {/* Hero Section */}
          <HeroSection className="relative h-[10vh] w-full overflow-hidden px-4 md:px-8 flex items-end justify-center" />

          {/* Content Container */}
          <ArticleContainer>
            {/* Admin Article Header with Status */}
            <AdminArticleHeader
              title={post.title}
              createdAt={post.created_at.toString()}
              category={post.category}
              status={post.status}
            />

            {/* Article Content */}
            <ArticleContent
              content={post.content}
     
            />

            {/* Share Section */}
            <ShareSection title={post.title} />
          </ArticleContainer>
        </div>

    </>
  );
}
