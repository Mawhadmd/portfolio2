import { Post } from "@/models/posts.database";
import { supabase } from "@/lib/supabase";
import { FiCalendar, FiUser, FiTag, FiHome } from "react-icons/fi";
import ShareButtons from "./ShareButtons";
import Link from "next/link";
import ErrorPage from "./ErrorPage";

async function getPost(slug: string): Promise<Post | null> {
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

import { Metadata } from 'next';


export async function generateMetadata(
  {params: paramsPromise}: { params: Promise<{ postslug: string }>}
): Promise<Metadata> {
  const params = await paramsPromise;
  const post = await getPost(params?.postslug);

  if (!post) {
    return {
      title: 'Not Found - Mohammed Awad',
      description: 'This blog post could not be found.',
      alternates: {
        canonical: `https://moawad.dev/blog/${params?.postslug}`,
      },
    };
  }

  return {
    title: post.title,
    description: `${post.title} - Read this insightful blog post.`,
    alternates: {
      canonical: `https://moawad.dev/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.title,
      type: 'article',
      url: `https://moawad.dev/blog/${post.slug}`,
    },
  };
}



export default async function PostPage({
  params: paramsPromise,
}: {
  params: Promise<{ postslug: string }>;
}) {


  const params = await paramsPromise;
  const postslug  =  params?.postslug;
  console.log(postslug);
  const post = await getPost(postslug);

  if (!post) {
    console.log("Couldn't find page", post);
    return <ErrorPage ErrorType={"NotFound"} />;
  } else if (post.status !== "published") {
    return <ErrorPage ErrorType={"isDraft"} />;
  }

  return (
    <div className="min-h-screen bg-Primary/5 bg-gradient-to-b from-Secondary/45">
      <article
        className="min-h-screen w-full xl:w-2/3 mx-auto flex flex-col"
        role="main"
      >
        {/* Navigation Button */}
        <nav
          className="fixed top-4 left-4 z-10"
          role="navigation"
          aria-label="Blog navigation"
        >
          <Link
            href="/blog"
            className="flex items-center gap-2 px-2 py-2 bg-Primary/80 hover:bg-Primary text-Text rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
            aria-label="Return to blog homepage"
          >
            <FiHome className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Blog Home</span>
          </Link>
        </nav>

        {/* Hero Section */}
        <header
          className="relative h-[20vh] w-full overflow-hidden px-4 md:px-8 flex items-end justify-center"
          role="banner"
        >
          {/* Placeholder for future thumbnail implementation */}
          <div className="sr-only">
            Article header section - thumbnail will be displayed here when
            available
          </div>
        </header>

        {/* Content Container */}
        <main className="flex-1 flex relative px-4 md:px-8" role="main">
          <div className="max-w-4xl flex-1 mx-auto bg-Primary/50 w-full border border-Secondary rounded-t-2xl shadow-lg p-8">
            {/* Article Header */}
            <header className="space-y-6" role="banner">
              <div
                className="flex flex-wrap items-center gap-4 text-sm text-Muted"
                role="group"
                aria-label="Article metadata"
              >
                <div
                  className="flex items-center gap-2"
                  role="group"
                  aria-label="Author information"
                >
                  <FiUser className="h-4 w-4" aria-hidden="true" />
                  <span>Mohammed Awad</span>
                </div>
                <div
                  className="flex items-center gap-2"
                  role="group"
                  aria-label="Publication date"
                >
                  <FiCalendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={new Date(post.created_at).toISOString()}>
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div
                  className="flex items-center gap-2"
                  role="group"
                  aria-label="Article category"
                >
                  <FiTag className="h-4 w-4" aria-hidden="true" />
                  <span
                    className="px-2 py-1 bg-Secondary/20 rounded-full"
                    role="text"
                    aria-label={`Category: ${post.category}`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold text-Text leading-tight"
                id="article-title"
              >
                {post.title}
              </h1>
            </header>

            {/* Article Content */}
            <section
              className="mt-8 prose prose-headings:text-Text prose-strong:text-Text max-w-none prose-img:mx-auto prose-img:block prose-iframe:mx-auto prose-iframe:block"
              role="region"
              aria-labelledby="article-title"
              aria-label="Article content"
            >
              <div
                className="text-Text"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </section>

            {/* Share Section */}
            <section
              className="mt-12 pt-8 border-t border-border"
              role="region"
              aria-label="Share article"
            >
              <h2 className="sr-only">Share this article</h2>
              <ShareButtons title={post.title} />
            </section>

            {/* Comments Section */}
            {/* <section
              className="mt-12"
              role="region"
              aria-label="Article comments and discussion"
            >
              <h2 className="text-2xl font-bold text-Text mb-6">
                Comments & Discussion
              </h2>
              <div role="group" aria-label="Disqus comments widget">
                <DisqusComments post={post} />
              </div>
            </section> */}
          </div>
        </main>
      </article>
    </div>
  );
}
