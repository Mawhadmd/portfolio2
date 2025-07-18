interface HeroSectionProps {
  children?: React.ReactNode;
  className?: string;
}

export default function HeroSection({
  children,
  className = "relative h-[20vh] w-full overflow-hidden px-4 md:px-8 flex items-end justify-center",
}: HeroSectionProps) {
  return (
    <header className={className} role="banner">
      {children || (
        <div className="sr-only">
          Article header section - thumbnail will be displayed here when
          available
        </div>
      )}
    </header>
  );
}
