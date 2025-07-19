import ShareButtons from "../[postslug]/ShareButtons";

interface ShareSectionProps {
  title: string;
  className?: string;
}

export default function ShareSection({
  title,
  className,
}: ShareSectionProps) {
  return (
    <> 
    <section className={className} role="region" aria-label="Share article">
      <h2 className="sr-only">Share this article</h2>
      <ShareButtons title={title} />
    </section></>
   
  );
}
