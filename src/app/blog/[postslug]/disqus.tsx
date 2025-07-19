"use client";
import React from "react";

import { Post } from "@/models/posts.database";
import { DiscussionEmbed } from "disqus-react";
import { themeContext } from "@/context/themeContext";
export default function DisqusComments({ post }: { post: Post }) {

  const {theme} = React.useContext(themeContext);


  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://moawad.dev";

  const disqusConfig = {
    url: `${baseUrl}/blog/${post.slug}`,
    identifier: post.slug,
    title: post.title,
  };
  console.log(theme, disqusConfig);
  return (
    <>
      
        <DiscussionEmbed
          key={theme}
          shortname="moawad"
          config={disqusConfig}
        />
      
    </>
  );
}
