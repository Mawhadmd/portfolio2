import PostCard from "./(components)/PostCard";
import {
  FiSearch,
  FiArrowLeft,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiBookOpen,

  FiCode,
  FiZap,
  FiHeart,
} from "react-icons/fi";
import Link from "next/link";
import { Post } from "@/models/posts.database";
import { headers } from "next/headers";
import { MdAdminPanelSettings } from "react-icons/md";

async function blogDashboard() {
  const host = (await headers()).get("host");
  const res = await fetch(`http://${host}/api/posts?status=published`, {
    cache: "no-store",
  });
  const posts = await res.json();
  return (
    <div className="min-h-screen bg-gradient-to-br from-Primary via-Primary to-Secondary/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-Secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-Primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 opacity-10 animate-float">
          <FiCode className="w-8 h-8 text-Text" />
        </div>
        <div className="absolute top-3/4 right-1/4 opacity-10 animate-float-delayed">
          <FiZap className="w-6 h-6 text-Text" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-10 animate-float">
          <div className="text-xs font-mono text-Text">&lt;/&gt;</div>
        </div>
      </div>
      {/* Navigation Bar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-Secondary/20 hover:bg-Secondary/30 text-Text transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-border/20"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="mailto:contact@moawad.dev"
              className="p-2 rounded-lg text-Text/70 hover:text-Text hover:bg-Secondary/20 transition-all duration-300"
              aria-label="Email"
            >
              <FiMail size={20} />
            </Link>
            <Link
              href="https://github.com/Mawhadmd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-Text/70 hover:text-Text hover:bg-Secondary/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mhmdawad/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-Text/70 hover:text-Text hover:bg-Secondary/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </Link>
            <Link
              href="https://x.com/Mawhadmd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-Text/70 hover:text-Text hover:bg-Secondary/20 transition-all duration-300"
              aria-label="Twitter"
            >
              <FiTwitter size={20} />
            </Link>
            <Link
              href="blog/admin"
              className="p-2 rounded-lg text-Text/70 hover:text-Text hover:bg-Secondary/20 transition-all duration-300"
              aria-label="Admin"
            >
              <MdAdminPanelSettings size={20} />
            </Link>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-Secondary/20 text-Muted backdrop-blur-sm border border-border/20">
            <FiBookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Developer Blog</span>
          </div>{" "}
          <h1 className="text-5xl md:text-6xl font-bold text-Text relative">
            <span className="bg-gradient-to-r from-Text via-accent to-Text bg-clip-text text-transparent animate-gradient-x">
              Tech Insights & Tutorials
            </span>
            <div className="absolute -top-2 -right-2 animate-bounce delay-1000">
              <FiHeart className="w-6 h-6 text-Text/20" />
            </div>
          </h1>
          <p className="text-xl text-Muted max-w-2xl mx-auto leading-relaxed">
            Exploring the latest in web development, programming insights, and
            technical deep dives
          </p>
          {/* Stats */}
          <div className="flex items-center justify-center pt-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-Text">
                <FiBookOpen className="w-5 h-5" />
                <span>{posts.length}</span>
              </div>
              <p className="text-sm text-Muted">Articles Published</p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-Secondary/20 to-Secondary/10 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
          <div className="relative bg-Secondary/10 backdrop-blur-sm border border-border/20 rounded-2xl p-1">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-Muted w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-20 sm:pr-24 py-3 sm:py-4 bg-transparent text-Text placeholder-Muted focus:outline-none text-base sm:text-lg"
              />
              <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2">
                <span className="text-xs text-Muted bg-Secondary/20 px-2 py-1 rounded-md border border-border/20">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Posts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-Text mb-2">Latest Articles</h2>
          <p className="text-Muted">
            Stay updated with the latest trends and insights
          </p>
        </div>

        <div
          className={`${
            posts.length > 0
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex items-center justify-center min-h-[400px]"
          }`}
        >
          {posts.length > 0 ? (
            posts.map((post: Post, index: number) => (
              <div
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
              </div>
            ))
          ) : (
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-Secondary/20 rounded-full flex items-center justify-center">
                <FiBookOpen className="w-8 h-8 text-Muted" />
              </div>
              <h3 className="text-2xl font-semibold text-Text">
                No articles yet
              </h3>
                <p className="text-Muted max-w-md">
                We&apos;re working on some amazing content. Check back soon for
                insightful articles and tutorials!
                </p>
            </div>
          )}
        </div>
      </div>{" "}
      {/* Footer */}
      <footer className="border-t border-border/20 bg-Secondary/5 backdrop-blur-sm relative overflow-hidden">
        {/* Footer Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
          <div className="absolute top-0 right-1/3 w-24 h-24 bg-Secondary/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-Text">
                About This Blog
              </h3>
              <p className="text-Muted leading-relaxed">
                Sharing knowledge about web development, programming best
                practices, and the latest in tech innovation.
              </p>
              {/* Developer Signature */}
              <div className="flex items-center gap-2 pt-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-xs text-Muted font-mono">
                  crafted with passion
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-Text">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "TypeScript",
                ].map((category, index) => (
                  <span
                    key={category}
                    className="px-3 py-1 text-sm bg-Secondary/20 text-Text rounded-full border border-border/20 hover:bg-Secondary/30 transition-colors cursor-pointer"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-Text">Connect</h3>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/Mawhadmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-lg bg-Secondary/20 text-Text hover:bg-Secondary/30 transition-all duration-300 hover:scale-110"
                >
                  <FiGithub
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mhmdawad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-lg bg-Secondary/20 text-Text hover:bg-Secondary/30 transition-all duration-300 hover:scale-110"
                >
                  <FiLinkedin
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </Link>
                <Link
                  href="https://x.com/Mawhadmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-lg bg-Secondary/20 text-Text hover:bg-Secondary/30 transition-all duration-300 hover:scale-110"
                >
                  <FiTwitter
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </Link>
              </div>
              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs text-Muted">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/20 text-center">
            <p className="text-Muted text-sm">
              © {new Date().getFullYear()} Mohamed Awad. All rights reserved. Built with Next.js and
              Tailwind CSS.
            </p>
            {/* Easter egg */}
            <p className="text-xs text-Muted/50 mt-2 font-mono">
              {"// TODO: Add more awesome content 🚀"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default blogDashboard;
