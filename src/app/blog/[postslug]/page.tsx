import { Post } from "@/models/posts.database";
import { supabase } from "@/lib/supabase";

import { FiCalendar, FiUser, FiTag, FiHome } from "react-icons/fi";
import ShareButtons from "./ShareButtons";
import Link from "next/link";
import DisqusComments from "./disqus"; // <-- import the new component
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

export default async function PostPage({
  params,
}: {
  params: Promise<{ postslug: string }>;
}) {
  const { postslug } = await params;
  console.log(postslug);
  const post = await getPost(postslug);

  if (!post) {
    console.log("Couldn't find page", post);
    return <ErrorPage ErrorType={'NotFound'}/>;
  }else if (post.status !== "published") {
    return (
      <ErrorPage ErrorType={'isDraft'}/>
    );
  }

  // Disqus config


  return (
    <div className="min-h-screen bg-Primary/5 bg-gradient-to-b from-Secondary/45">
      <article className="min-h-screen w-full xl:w-2/3 mx-auto flex flex-col">
        {/* Navigation Button */}
        <div className="fixed  top-4 left-4 z-10">
          <Link
            href="/blog"
            className="flex items-center gap-2 px-2 py-2 bg-Primary/80 hover:bg-Primary text-Text rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
          >
            <FiHome className="h-4 w-4" />
          </Link>
        </div>

        {/* Hero Section */}
        <div
          className={`relative h-[20vh] w-full overflow-hidden px-4 md:px-8 flex items-end justify-center`}
        >
          {/* {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="text-black"></div>
          )} */}
        </div>

        {/* Content Container */}
        <div className="flex-1 flex relative px-4 md:px-8">
          <div className="max-w-4xl flex-1 mx-auto bg-Primary/50 w-full border border-Secondary rounded-t-2xl shadow-lg p-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-Muted">
                <div className="flex items-center gap-2">
                  <FiUser className="h-4 w-4" />
                  <span>Mohammed Awad</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="h-4 w-4" />
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiTag className="h-4 w-4" />
                  <span className="px-2 py-1 bg-Secondary/20 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-Text leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Content */}
                <div className="mt-8 prose prose-headings:text-Text prose-strong:text-Text max-w-none 
  prose-img:mx-auto prose-img:block prose-iframe:mx-auto prose-iframe:block">
              <div
                className="text-Text"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <ShareButtons title={post.title} />
            </div>
            {/* Disqus Comments */}
            <div className="mt-12">
                
              <DisqusComments post={post}  />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
