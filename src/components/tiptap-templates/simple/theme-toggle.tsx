"use client";

import * as React from "react";

// --- UI Primitives ---
import { Button } from "@/components/tiptap-ui-primitive/button";

// --- Icons ---
import { MoonStarIcon } from "@/components/tiptap-icons/moon-star-icon";
import { SunIcon } from "@/components/tiptap-icons/sun-icon";
import ThemeControl from "@/lib/ThemeControl";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"dark" | "light">(() =>
    ThemeControl()
  );

  React.useEffect(() => {
    const handleStorage = () => setTheme(ThemeControl());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleTheme = () => {
    setTheme(ThemeControl(true));
  };

  return (
    <Button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      data-style="ghost"
    >
      {theme === "dark" ? (
        <MoonStarIcon className="tiptap-button-icon" />
      ) : (
        <SunIcon className="tiptap-button-icon" />
      )}
    </Button>
  );
}
