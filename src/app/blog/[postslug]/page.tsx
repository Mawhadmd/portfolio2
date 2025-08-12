import { BlogNavigation, HeroSection, ArticleContainer } from "../(components)";
import { Metadata } from "next";
import Article from "./(Article)/Article";
import { getPost } from "./getPost";
import { Suspense } from "react";
import Loading from "./(Article)/loading";

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
      tags: post.category ? [post.category] : undefined,
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
  };

  return metadata;
}

export default async function PostPage({
  params: paramsPromise,
}: {
  params: Promise<{ postslug: string }>;
}) {
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
        <Suspense fallback={<Loading />}>
         <Article params={paramsPromise}/>
        </Suspense>
      </ArticleContainer>
    </div>
  );
}
