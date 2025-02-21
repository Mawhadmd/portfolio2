import { useEffect } from "react";
import { FloatingDock as FloatingDockUI } from "./ui/floating-dock-Aceternity";
import { IconHome, IconFileCv, IconSun, IconMoon } from "@tabler/icons-react";

export function FloatingDock({setThemeColor,ThemeColor}: { 
  setThemeColor: React.Dispatch<React.SetStateAction<"dark" | "light">>;
  ThemeColor: string;}) {
  function toggleLightMode(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    if (ThemeColor === "dark") {
      setThemeColor("light");
    } else {
      setThemeColor("dark");
    }
  }
  useEffect(() => {
    localStorage.setItem('theme',ThemeColor)
    document.documentElement.setAttribute("data-theme", ThemeColor);
  }, [ThemeColor]);
  const DOCK_DATA = [
    {
      title: "Home",
      icon: (
        <IconHome className=" h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#top",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "https://docs.google.com/document/d/1P97pfa8Cv2oR2PBpD1QVbEBvM-B2_DTPOjAHs96Fryg/edit?usp=sharing",
    },
    {
      title:  ThemeColor == "dark" ? (
        'Light Mode'
      ) : (
        "Dark Mode"
      ),
      icon:
        ThemeColor == "dark" ? (
          <IconMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
        ) : (
          <IconSun className="h-full w-full text-neutral-600 dark:text-neutral-300" />
        ),
      href: "#",
      onClick: toggleLightMode,
    },
  ];
  return (
    < >
      <FloatingDockUI mobileClassName="hidden" items={DOCK_DATA} />
    </>
  );
}
