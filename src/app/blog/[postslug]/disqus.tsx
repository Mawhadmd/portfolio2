"use client";

import dynamic from "next/dynamic";

const DiscussionEmbed = dynamic(
  () => import("disqus-react").then((mod) => mod.DiscussionEmbed),
  { ssr: false }
);
interface DisqusCommentsProps {
  shortname: string;
  config: {
    url: string;
    identifier: string;
    title: string;
    language?: string;
  };
}

export default function DisqusComments({ shortname, config }: DisqusCommentsProps) {
  return (
    <DiscussionEmbed shortname={shortname} config={config} />
  );
}