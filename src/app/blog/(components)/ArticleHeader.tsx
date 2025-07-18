'use client'
import { FiCalendar, FiUser, FiTag, FiClock } from "react-icons/fi";

interface ArticleHeaderProps {
  title: string;
  author?: string;
  createdAt: string;
  category?: string;
  HTMLcontent: string;
}

export default function ArticleHeader({
  title,
  author = "Mohammed Awad",
  createdAt,
  category,
  HTMLcontent,
}: ArticleHeaderProps) {
  // Better reading time calculation
  const calculateReadingTime = (htmlContent: string): number => {
    // Remove HTML tags and get plain text
    const plainText = htmlContent.replace(/<[^>]*>/g, "");

    // Remove extra whitespace and split into words
    const words = plainText
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    // Average reading speed: 200-250 WPM, we'll use 225
    const wordsPerMinute = 225;
    const readingTime = Math.ceil(words.length / wordsPerMinute);

    // Ensure minimum 1 minute
    return Math.max(1, readingTime);
  };

  const minutesToRead = calculateReadingTime(HTMLcontent);

  return (
    <header className="space-y-6" role="banner">
    

      <h1
        className="text-4xl md:text-5xl font-bold text-Text leading-tight"
        id="article-title"
      >
        {title}
      </h1>
       <div 
       
            className="flex flex-wrap items-center gap-4 text-sm text-Muted"
        role="group"
        aria-label="Article metadata"
       >
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Reading time"
        >
          <FiClock className="h-4 w-4" aria-hidden="true" />
          <span aria-label={`${minutesToRead} minute read`}>
            {minutesToRead} min read
          </span>
        </div>	<div>&#8226;</div> <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Publication date"
        >
          <FiCalendar className="h-4 w-4" aria-hidden="true" />
          <time dateTime={new Date(createdAt).toISOString()}>
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
 
        <div>&#8226;</div>
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Author information"
        >
          <FiUser className="h-4 w-4" aria-hidden="true" />
          <span>{author}</span>
        </div>
      
        {category && (
           <> <div>&#8226;</div>
          <div
            className="flex items-center gap-2"
            role="group"
            aria-label="Article category"
          >
            <FiTag className="h-4 w-4" aria-hidden="true" />
            <span
              className="px-2 py-1 bg-Secondary/20 rounded-full"
              role="text"
              aria-label={`Category: ${category}`}
            >
              {category}
            </span>
          </div></>
        )}
       

       </div>
    </header>
  );
}
