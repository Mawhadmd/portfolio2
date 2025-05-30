import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  author,
  date,
  image,
  category,
}) => {
  return (
    <div className="bg-Secondary/5 backdrop-blur-lg rounded-xl overflow-hidden border border-border hover:border-border/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="relative h-48 w-full">
        <Image
          src={image.toString()}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-sm font-medium text-Text bg-Secondary/80 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-Text mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-Muted mb-4 line-clamp-3">{content}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-Secondary/20 flex items-center justify-center">
              <span className="text-Text text-sm font-medium">
                {author.charAt(0)}
              </span>
            </div>
            <span className="text-sm text-Muted">{author}</span>
          </div>
          <span className="text-sm text-Muted">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
