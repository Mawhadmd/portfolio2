import { Post } from "@/models/posts.database";
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { PostCard } from "../(components)";

const BlogPostsList = async () => {
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?status=published`,
    {
      cache: "no-store",
    }
  );

  const posts = await res.json();

  return (
    <div
      className={`${
        posts.length > 0
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "flex items-center justify-center min-h-[400px]"
      }`}
      role="region"
      aria-label="Blog posts"
    >
      {posts.length > 0 ? (
        posts.map((post: Post, index: number) => (
          <article
            key={post.id}
            className="group animate-fadeIn"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <PostCard
              title={post.title}
              content={post.content}
              id={post.id}
              created_at={post.created_at}
              thumbnail={post.thumbnail}
              status={post.status}
              updated_at={new Date(post.created_at.toString())}
              category={post.category || "General"}
              slug={post.slug}
            />
          </article>
        ))
      ) : (
        <div className="text-center space-y-4" role="status" aria-live="polite">
          <div className="w-20 h-20 mx-auto bg-Secondary/20 rounded-full flex items-center justify-center">
            <FiBookOpen className="w-8 h-8 text-Muted" />
          </div>
          <h3 className="text-2xl font-semibold text-Text">No articles yet</h3>
          <p className="text-Muted max-w-md">
            We&apos;re working on some amazing content. Check back soon for
            insightful articles and tutorials!
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPostsList;
