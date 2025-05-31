import React from "react";
import Image from "next/image";
import { Post } from "@/models/posts.database";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import HtmlRenderer from "./HtmlRenderer";

const PostCard: React.FC<Post> = ({
  title,
  content,
  thumbnail,
  slug,
  updated_at,
  category,
}) => {
  const dateString = updated_at!.toLocaleDateString();
  const author = "Mohammed Awad"
  return (
    <div className="bg-Secondary/5 backdrop-blur-lg rounded-xl overflow-hidden border border-border hover:border-border/50 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer ">
      <div className="bg-Primary relative h-48 w-full">
        <Link href={`/blog/${slug}`} className="absolute inset-0">
        {thumbnail ? (
          <Image
            src={thumbnail.toString()}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-Secondary/10 flex items-center justify-center">
            <FiFileText className="h-16 w-16 text-Muted" />
          </div>
        )}</Link>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-sm font-medium text-Text bg-Secondary/80 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <Link href={`/blog/${slug}`}>
        <h2 className="text-xl font-semibold text-Text mb-2 line-clamp-2">
          {title}
        </h2></Link>
        <HtmlRenderer classname={"text-Muted mb-4 line-clamp-3"} html={content}/>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-Primary/50 flex items-center justify-center  p-1 ">
              <span className="text-Text text-sm font-medium">{author.charAt(0)}</span>
            </div>
            <span className="text-sm text-Muted">{author}</span>
          </div>
          <span className="text-sm text-Muted">{dateString}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
