"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({
  minimum: 0.3,
  easing: "ease-in-out",
  speed: 800, // Slower for testing
  showSpinner: false,
});

export default function NProgressProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the first render (initial page load)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Complete progress when route has changed
    NProgress.done();
  }, [pathname, searchParams]);

  useEffect(() => {
    let navigating = false;
    const handleClick = (e: MouseEvent) => {
      // Only respond to left-clicks with no modifier keys
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link) {
        const href = link.getAttribute("href");
        // Only start progress for internal routes (not hash links or external)
        if (href && !href.startsWith("#") && !href.startsWith("http")) {
          if (!navigating) {
            navigating = true;
            NProgress.start();
            // Reset navigating after a short delay in case navigation is cancelled
            setTimeout(() => {
              navigating = false;
           
            }, 1000);
          }
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <>{children}</>;
}
