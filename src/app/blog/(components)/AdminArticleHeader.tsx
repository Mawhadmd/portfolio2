import { FiCalendar, FiUser, FiTag } from "react-icons/fi";

interface AdminArticleHeaderProps {
  title: string;
  author?: string;
  createdAt: string;
  category?: string;
  status: string;
}

export default function AdminArticleHeader({
  title,
  author = "Mohammed Awad",
  createdAt,
  category,
  status,
}: AdminArticleHeaderProps) {
  return (
    <header className="space-y-6" role="banner">
      <div
        className="flex flex-wrap items-center gap-4 text-sm text-Muted"
        role="group"
        aria-label="Article metadata"
      >
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Author information"
        >
          <FiUser className="h-4 w-4" aria-hidden="true" />
          <span>{author}</span>
        </div>
        <div
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
        {category && (
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
          </div>
        )}
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Post status"
        >
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              status === "published"
                ? "bg-green-500/20 text-green-700 dark:text-green-300"
                : "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300"
            }`}
            role="text"
            aria-label={`Status: ${status}`}
          >
            {status}
          </span>
        </div>
      </div>

      <h1
        className="text-4xl md:text-5xl font-bold text-Text leading-tight"
        id="article-title"
      >
        {title}
      </h1>
    </header>
  );
}
