import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Awad - Software Developer",
  description: "Enthusiastic Software Engineer committed to continuous learning and skill enhancement for a thriving future career in Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-E7N2FMT2W0" />
    </html>
  );
}
