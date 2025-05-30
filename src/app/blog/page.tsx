import PostCard from "@/blog/components/PostCard";
import { FiSearch, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { Post } from "@/models/posts.database";

const Page = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:5173";
  const res = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });
  const posts = await res.json();
  return (
    <div className="min-h-screen bg-Primary">
      {/* Header Section */}
      <div className="max-w-7xl flex-col flex min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex">
          <Link
            href="/"
            className="w-fit text-Text flex items-center justify-start cursor-pointer hover:bg-Text/20 bg-Secondary p-1 rounded h-full"
          >
            <FiArrowLeft className="mr-1" />
            Portfolio
          </Link>
          <div className="text-center mb-12 flex-1">
            <h1 className="text-4xl font-bold text-Text mb-4">My Blog</h1>
            <p className="text-Muted text-lg">
              Thoughts, tutorials, and insights about technology
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-3 rounded-lg bg-Secondary/10 border border-border text-Text placeholder-Muted focus:outline-none focus:ring-2 focus:ring-border"
            />
            <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-Muted" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shadow p-2 flex-1 rounded-2xl">
          {posts.map((post: Post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              author={"Mohammed Awad"}
              date={Date.parse(post.created_at.toString()).toString()}
              image={post.thumbnail}
              category={post.catagory || "General"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
