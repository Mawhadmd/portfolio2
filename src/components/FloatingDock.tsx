import { useEffect, useState } from "react";
import { FloatingDock as FloatingDockUI } from "./ui/floating-dock";
import { IconHome, IconFileCv, IconSun, IconMoon } from "@tabler/icons-react";

export function FloatingDock() {
  const [ThemeColor, setThemeColor] = useState<"light" | "dark">(
    "light"
  );
  function toggleLightMode() {
    if (ThemeColor === "dark") {
      setThemeColor("light");
    } else {
      setThemeColor("dark");
    }
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", ThemeColor);

  }, [ThemeColor]);
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className=" h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#top",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://docs.google.com/document/d/1P97pfa8Cv2oR2PBpD1QVbEBvM-B2_DTPOjAHs96Fryg/edit?usp=sharing",
    },
    {
      title: "Mode",
      icon:
        ThemeColor == "dark" ? (
          <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ) : (
          <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
      href: "javascript:void(0);",
      onClick: toggleLightMode,
    },
  ];
  return (
    <div className="flex items-center justify-center fixed bottom-3 w-full">
      <FloatingDockUI mobileClassName="hidden" items={links} />
    </div>
  );
}
