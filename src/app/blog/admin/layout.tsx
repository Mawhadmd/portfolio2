import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Admin | Mohammed Awad",
  description: "Admin panel for managing blog posts and content.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
