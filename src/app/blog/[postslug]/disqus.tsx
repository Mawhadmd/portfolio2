'use client'

import { Post } from "@/models/posts.database";
import {DiscussionEmbed} from "disqus-react"; // changed this line

export default function DisqusComments({ post }: {post:Post}) {
const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const disqusConfig = {
    url: pageUrl,
    identifier: post.slug,
    title: post.title,
  };

  return (
       <div className="disqus-container">
        <DiscussionEmbed shortname="moawad" config={disqusConfig} />
       </div>

  );
}
