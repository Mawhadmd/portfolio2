import "@/styles/globals.css"
import {  Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import NProgressProvider from "../components/NProgressProvider";


const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Mohammed Awad - Software Developer",
  description:
    "Enthusiastic Software Engineer committed to continuous learning and skill enhancement for a thriving future career in Technology.",
  metadataBase: new URL("https://moawad.dev/"),
  alternates: {
    canonical: "https://moawad.dev",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        try {
          var theme = localStorage.getItem('theme') ?? 
          (window.matchMedia("(prefers-color-scheme: dark)").matches? "dark": "light");
          document.documentElement.setAttribute('data-theme', theme);
        } catch(e) {}
      })();
    `,
          }}
        />
      </head>
      <body className={`${montserrat.className} antialiased h-fit overflow-y-scroll relative text-Text bg-Primary `}>
        <Suspense>
          <NProgressProvider>{children}</NProgressProvider>
        </Suspense>
      </body>
      <GoogleAnalytics gaId="G-E7N2FMT2W0" />
    </html>
  );
}
