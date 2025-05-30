type Theme = "dark" | "light";

export function getPreferredTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"; // Default theme for server-side
}

function setTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  window.localStorage.setItem("theme", theme);
}

function getStoredTheme(): Theme {
  const theme = window.localStorage.getItem("theme") as Theme;
  if (theme === "dark" || theme === "light") return theme;

  return getPreferredTheme();
}

function toggleTheme(currentTheme: Theme): Theme {
  return currentTheme === "light" ? "dark" : "light";
}

export default function ThemeControl(ToggleTheme?: boolean): Theme {
  let theme = getStoredTheme();
  console.log("Current theme:", theme);
  if (!theme) {
    theme = getPreferredTheme();
    setTheme(theme);
  } else {
    setTheme(theme);
  }

  if (ToggleTheme) {
    theme = toggleTheme(theme);
    setTheme(theme);
  }

  return theme;
}
