// Update the import path below to the correct relative path if PostCard exists elsewhere, for example:
import PostCard from "./(components)/PostCard";
// Or create the file at src/blog/components/PostCard.tsx if it does not exist.
import {
  FiSearch,
  FiArrowLeft,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,

} from "react-icons/fi";
import Link from "next/link";
import { Post } from "@/models/posts.database";
import { headers } from "next/headers";
import { MdAdminPanelSettings } from "react-icons/md";

async function blogDashboard() {
  const host = (await headers()).get("host");
  const res = await fetch(`http://${host}/api/posts`, { cache: "no-store" });
  const posts = await res.json();
  return (
    <div className=" min-h-screen bg-Primary">
      {/* Header Section */}
      <div className="max-w-7xl flex-col flex min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex mb-12 items-center relative">
          <Link
            href="/"
            className="absolute top-0 h-[50%] w-fit rounded-2xl transition duration-500  text-Text flex items-center justify-start cursor-pointer hover:bg-Text/90 hover:text-Primary bg-Secondary p-2 font-medium"
          >
            <FiArrowLeft className="mr-1" />
            Portfolio
          </Link>
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-Text mb-4">My Blog</h1>
            <p className="text-Muted text-lg">
              Thoughts, tutorials, and insights about technology
            </p>
          </div>
          <div className="absolute top-0 right-0 flex items-center gap-4">
            <Link
              href="mailto:contact@moawad.dev"
              className="text-Text/80 hover:text-Text/60 transition-colors"
              aria-label="Email"
            >
              <FiMail size={24} />
            </Link>
            <Link
              href="https://github.com/Mawhadmd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-Text/80 hover:text-Text/60 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mhmdawad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-Text/80 hover:text-Text/60 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </Link>
            <Link
              href="https://x.com/Mawhadmd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-Text/80 hover:text-Text/60 transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter size={24} />
            </Link>
            <Link
              href="blog/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-Text/80 hover:text-Text/60 transition-colors"
              aria-label="Admin"
            >
              <MdAdminPanelSettings size={24} />
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className=" w-full px-4 py-3 rounded-lg bg-Secondary/10 border border-border text-Text placeholder-Muted focus:outline-none focus:ring-2 focus:ring-border"
            />
            <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-Muted " />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div
          className={`grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-sm border-Secondary border p-2  flex-1  rounded-2xl ${
            posts.length > 0
              ? "bg-Secondary"
              : "bg-Primary !flex items-center justify-center "
          }`}
        >
          {posts.length > 0 ? (
            posts.map((post: Post) => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.content}
                id={post.id}
                created_at={post.created_at}
                thumbnail={post.thumbnail}
                status={post.status}
                updated_at={new Date(post.created_at.toString())}
                category={post.category || "General"}
                slug={post.slug}              />
            ))
          ) : (
            <h2 className="text-Text/50 text-3xl mx-auto">
              No posts available
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default blogDashboard;
