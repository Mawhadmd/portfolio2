"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState,  } from "react";
import ThemeControl from "@/lib/ThemeControl";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">();
  useEffect(() => {
    setTheme(ThemeControl())
  }, []);
  const toggleTheme = () => {
    const newTheme = ThemeControl(true)
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-Primary ">
      {children}

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 p-2 bg-Secondary/20 backdrop-blur-lg rounded-full border border-border hover:bg-Secondary/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2 cursor-pointer"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <FiMoon className="w-6 h-6 text-Text" />
        ) : (
          <FiSun className="w-6 h-6 text-Text" />
        )}
      </button>
    </div>
  );
}
