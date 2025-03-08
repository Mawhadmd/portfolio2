type Theme ='dark' | 'light' 
export function getPreferredTheme(): Theme {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme: Theme): void {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

function getStoredTheme(): Theme  {
    return localStorage.getItem("theme") as Theme;
}

function toggleTheme(currentTheme: Theme): Theme {
    return currentTheme === "light" ? "dark" : "light";
}

export default function ThemeControl(ToggleTheme?: boolean):Theme  {
    let theme = getStoredTheme();

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
