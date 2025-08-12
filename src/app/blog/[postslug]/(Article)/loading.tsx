import React from "react";
import {
  FiClock,
  FiUser,
  FiCalendar,
  FiTag,
  FiShare2,
  FiTwitter,
  FiLinkedin,
  FiLink,
} from "react-icons/fi";

const Loading = () => {
  return (
    <>
      {/* ArticleHeader Skeleton */}
      <header className="space-y-6">
        {/* Title skeleton */}
        <div className="space-y-3">
          <div className="h-15 bg-border animate-pulse rounded-lg"></div>
          <div className="h-15 w-4/5 bg-border animate-pulse rounded-lg"></div>
        </div>
        {/* Metadata skeleton */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2 animate-pulse">
            <FiUser className="w-4 h-4 text-Muted/50" />
            <div className="h-4 w-24 bg-border rounded"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <FiCalendar className="w-4 h-4 text-Muted/50" />
            <div className="h-4 w-20 bg-border rounded"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <FiTag className="w-4 h-4 text-Muted/50" />
            <div className="h-4 w-16 bg-border rounded"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <FiClock className="w-4 h-4 text-Muted/50" />
            <div className="h-4 w-14 bg-border rounded"></div>
          </div>
        </div>
        {/* Thumbnail skeleton */}
        <div className="h-80 bg-border animate-pulse rounded-lg"></div>
      </header>

      {/* ArticleContent Skeleton */}
      <div className="mt-8 prose prose-code:bg-Primary/50 prose-code:border prose-code:border-border/50 prose-code:text-Text/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-lg prose-code:text-sm prose-code:font-medium prose-code:before:content-[''] prose-code:after:content-[''] marker:text-Text dark:prose-invert max-w-none prose-img:mx-auto prose-img:block prose-iframe:mx-auto prose-iframe:block">
        {/* Paragraph blocks */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="space-y-3 mb-6 animate-pulse"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="h-4 bg-border rounded w-full"></div>
            <div className="h-4 bg-border rounded w-11/12"></div>
            <div className="h-4 bg-border rounded w-5/6"></div>
            {/* Random shorter lines */}
            {Math.random() > 0.6 && (
              <div className="h-4 bg-border rounded w-3/4"></div>
            )}
          </div>
        ))}

        {/* Heading skeleton */}
        <div className="h-8 bg-border animate-pulse rounded-lg w-2/3 my-8"></div>

        {/* More content blocks */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i + 12}
            className="space-y-3 mb-6 animate-pulse"
            style={{ animationDelay: `${(i + 12) * 50}ms` }}
          >
            <div className="h-4 bg-border rounded w-full"></div>
            <div className="h-4 bg-border rounded w-10/12"></div>
            {Math.random() > 0.5 && (
              <div className="h-4 bg-border rounded w-4/5"></div>
            )}
          </div>
        ))}

        {/* Code block skeleton */}
        <div className="bg-Primary/50 border border-border/50 rounded-lg p-4 my-8 space-y-2 animate-pulse">
          <div className="h-3 bg-border/60 rounded w-1/4"></div>
          <div className="h-3 bg-border/60 rounded w-5/6"></div>
          <div className="h-3 bg-border/60 rounded w-3/4"></div>
          <div className="h-3 bg-border/60 rounded w-4/5"></div>
          <div className="h-3 bg-border/60 rounded w-2/3"></div>
        </div>

        {/* Another heading skeleton */}
        <div className="h-7 bg-border animate-pulse rounded-lg w-1/2 my-8"></div>

        {/* Final content blocks */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i + 20}
            className="space-y-3 mb-6 animate-pulse"
            style={{ animationDelay: `${(i + 20) * 50}ms` }}
          >
            <div className="h-4 bg-border rounded w-full"></div>
            <div className="h-4 bg-border rounded w-9/12"></div>
            {Math.random() > 0.7 && (
              <div className="h-4 bg-border rounded w-5/6"></div>
            )}
          </div>
        ))}

        {/* Image placeholder */}
        <div className="w-full h-64 bg-border/30 rounded-lg border border-border/50 animate-pulse flex items-center justify-center my-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-border/60 rounded-lg mx-auto mb-3"></div>
            <div className="h-3 w-24 bg-border/60 rounded mx-auto"></div>
          </div>
        </div>
      </div>

      {/* ShareSection Skeleton */}
      <div className="mt-12 pt-8 border-t border-border/30">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <FiShare2 className="w-5 h-5 text-Muted/50" />
            <div className="h-6 w-28 bg-border animate-pulse rounded"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-border/30 animate-pulse rounded-lg">
              <FiTwitter className="w-4 h-4 text-Muted/50" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-border/30 animate-pulse rounded-lg">
              <FiLinkedin className="w-4 h-4 text-Muted/50" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-border/30 animate-pulse rounded-lg">
              <FiLink className="w-4 h-4 text-Muted/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section Skeleton */}
      <div className="mt-12 pt-8 border-t border-border/30">
        <div className="space-y-4">
          <div className="h-6 w-32 bg-border animate-pulse rounded"></div>
          <div className="h-40 bg-border/20 rounded-lg border border-border/30 animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
