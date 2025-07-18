import { Post } from "@/models/posts.database";
import { supabase } from "@/lib/supabase";
import ErrorPage from "./ErrorPage";
import {
  BlogNavigation,
  HeroSection,
  ArticleContainer,
  ArticleHeader,
  ArticleContent,
  ShareSection,
} from "../(components)";

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

import { Metadata } from "next";

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ postslug: string }>;
}): Promise<Metadata> {
  const params = await paramsPromise;
  const post = await getPost(params?.postslug);

  if (!post) {
    return {
      title: "Not Found - Mohammed Awad",
      description: "This blog post could not be found.",
      alternates: {
        canonical: `https://moawad.dev/blog/${params?.postslug}`,
      },
    };
  }

  // Create a proper description from post content
  const createDescription = (htmlContent: string): string => {
    // Remove HTML tags and get plain text
    const plainText = htmlContent.replace(/<[^>]*>/g, "");
    // Take first 160 characters for SEO
    const description = plainText.trim().substring(0, 157);
    return description.length === 157 ? description + "..." : description;
  };

  const description = createDescription(post.content);
  const publishedTime = new Date(post.created_at).toISOString();
  const metadata = {
    title: `${post.title} - Mohammed Awad`,
    description,
    keywords: post.category ? [post.category] : undefined,
    authors: [{ name: "Mohammed Awad" }],
    creator: "Mohammed Awad",
    publisher: "Mohammed Awad",
    alternates: {
      canonical: `https://moawad.dev/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: `https://moawad.dev/blog/${post.slug}`,
      siteName: "Mohammed Awad - Portfolio",
      locale: "en_US",
      images: [
        {
          url: post.thumbnail || "https://moawad.dev/og-default-blog.jpg", // Add a default image
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime,
      authors: ["Mohammed Awad"],
      section: post.category,
      tags: post.category
        ? [post.category]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      creator: "@Mawhadmd", // Your Twitter handle
      images: [post.thumbnail || "https://moawad.dev/og-default-blog.jpg"],
    },
    robots: {
      index: post.status === "published",
      follow: post.status === "published",
      googleBot: {
        index: post.status === "published",
        follow: post.status === "published",
      },
    },
  }
  console.log("Generated metadata:", metadata);
  return metadata;
}

export default async function PostPage({
  params: paramsPromise,
}: {
  params: Promise<{ postslug: string }>;
}) {
  const params = await paramsPromise;
  const postslug = params?.postslug;
  console.log(postslug);
  const post = await getPost(postslug);

  if (!post) {
    console.log("Couldn't find page", post);
    return <ErrorPage ErrorType={"NotFound"} />;
  } else if (post.status !== "published") {
    return <ErrorPage ErrorType={"isDraft"} />;
  }

  return (
    <div
      className=" min-h-screen w-full xl:w-2/3 mx-auto flex flex-col"
      role="main"
    >
      {/* Navigation Button */}
      <BlogNavigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Content Container */}
      <ArticleContainer>
        {/* Article Header */}
        <ArticleHeader
          title={post.title}
          createdAt={post.created_at.toString()}
          category={post.category}
          HTMLcontent={post.content}
        />

        {/* Article Content */}
        <ArticleContent content={post.content} />

        {/* Share Section */}
        <ShareSection title={post.title} />

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
      </ArticleContainer>
    </div>
  );
}
