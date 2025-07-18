import Link from "next/link";
import { FiHome } from "react-icons/fi";

interface BlogNavigationProps {
  href?: string;
  label?: string;
  icon?: React.ReactNode;
}

export default function BlogNavigation({
  href = "/blog",
  label = "Blog Home",
  icon = <FiHome className="h-4 w-4" aria-hidden="true" />,
}: BlogNavigationProps) {
  return (
    <nav
      className="fixed top-4 left-4 z-10"
      role="navigation"
      aria-label="Return to blog home"
    >
      <Link
        href={href}
        className="flex items-center gap-2 px-2 py-2 bg-Secondary hover:bg-Primary text-Text rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
        aria-label={`Return to ${label.toLowerCase()}`}
      >
        {icon}
        <span className="sr-only">{label}</span>
      </Link>
    </nav>
  );
}
