interface ArticleContentProps {
  content: string;
  className?: string;
}

export default function ArticleContent({
  content,
  className = "mt-8 prose-code:bg-Primary/50 prose-code:border prose-code:border-border/50 prose-code:text-Text/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-lg prose-code:text-sm prose-code:font-medium prose-code:before:content-[''] prose-code:after:content-[''] prose marker:text-Text dark:prose-invert max-w-none prose-img:mx-auto prose-img:block prose-iframe:mx-auto prose-iframe:block ",
}: ArticleContentProps) {
  return (
    <article
      className={className}
      role="region"
      aria-labelledby="article-title"
      aria-label="Article content"
         dangerouslySetInnerHTML={{ __html: content }} 
    >

    </article>
  );
}
