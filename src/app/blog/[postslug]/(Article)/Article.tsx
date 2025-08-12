import { Link } from "lucide-react";
import React from "react";
import {
  ArticleHeader,
  ArticleContent,
  ShareSection,
} from "../../(components)";
import DisqusComments from "../disqus";
import ErrorPage from "../ErrorPage";
import { getPost } from "../getPost";

const Article = async ({
  params,
}: {
  params: Promise<{ postslug: string }>;
}) => {
  const paramss = await params;
  const postslug = paramss?.postslug;

  const post = await getPost(postslug);

  if (!post) {
    console.log("Couldn't find page", post);
    return <ErrorPage ErrorType={"NotFound"} />;
  } else if (post.status !== "published") {
    return <ErrorPage ErrorType={"isDraft"} />;
  }
  return (
    <>
      <ArticleHeader
        title={post.title}
        createdAt={post.created_at.toString()}
        category={post.category}
        HTMLcontent={post.content}
      />

      {/* Article Content */}
      <ArticleContent content={post.content} />
      <hr className="text-Text" />
      {/* Share Section */}
      <div className="text-Muted  my-12 flex flex-col items-center w-full ">
        <ShareSection title={post.title} />
        <div>OR</div>
        <div>
          <Link href="/blog">Back to the Home Page</Link>
        </div>
      </div>
      <hr className="text-Text" />
      {/* Comments Section */}
      <section
        className="mt-12"
        role="region"
        aria-label="Article comments and discussion"
      >
        {<DisqusComments post={post} />}
      </section>
    </>
  );
};

export default Article;
