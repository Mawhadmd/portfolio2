interface ArticleContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ArticleContainer({
  children,
  className = "max-w-4xl flex-1 border border-border mx-auto bg-Secondary w-full sm:rounded-t-2xl shadow-lg p-8",
}: ArticleContainerProps) {
  return (
    <main className="flex-1 StyledLinks flex relative sm:px-8" role="main">
      <div className={className}>{children}</div>
    </main>
  );
}
