"use client";
import { SetStateAction, useEffect, useState } from "react";
import { FloatingDock as FloatingDockUI } from "./ui/floating-dock-Aceternity";
import {
  IconHome,
  IconFileCv,
  IconSun,
  IconMoon,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import ThemeControl from "@/lib/ThemeControl";
import { Themetype } from "@/App";

export function FloatingDock({ThemeColor, setThemeColor}: {ThemeColor:Themetype, setThemeColor: React.Dispatch<React.SetStateAction<Themetype>>}) {

  function toggleLightMode(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setThemeColor(ThemeControl(true));
  }

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
      title: "Projects",
      icon: (
        <IconDeviceLaptop className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: ThemeColor == "dark" ? "Light Mode" : "Dark Mode",
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
    <>
      <FloatingDockUI mobileClassName="hidden" items={DOCK_DATA} />
    </>
  );
}
