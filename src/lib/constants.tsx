import {  Globe, Github } from "lucide-react";
import ChattyImage from "../../public/Chatty.png";
import TalkSpaceImage from "../../public/TalkSpace.png";
import WebScrapingImage from "../../public/Webscraping.png";
import { IconBrandGithub, IconBrandX, IconFile } from "@tabler/icons-react";
import { Linkedin } from "lucide-react";
import PortfolioImage from "../../public/Portfolio.png";

export const TokenExpireDays = 30;
export const ICONMAPS = [
  { src: IconFile, alt: "Resume" },
  {
    src: IconBrandGithub,
    alt: "Github",
    link: "https://github.com/Mawhadmd",
  },
  {
    src: Linkedin,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/mhmdawad/",
  },
  { src: IconBrandX, alt: "Twitter", link: "https://x.com/Mawhadmd" },
];
export const SKILLS = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "CSS",
  "HTML",
  "TypeScript",
  "Git",
  "React Native",
  "Expo",
  "PHP",
  "Python",
  "API Integration",
  "MongoDB",
  "PostgreSQL",
  "REST API",
];





export const PROJECTS = [
  {
    title: "Chat App",
    href: "https://chatty001a.netlify.app/",
    dates: "Aug 2024 - Present",
    active: true,
    description: `
A real-time chat application built with React and Node.js, featuring authentication, secure messaging, and a responsive UI.

### Key Features
• **WebSockets Integration**: Achieves seamless real-time communication using **Socket.io**.
• **User Authentication**: Secure login and registration system with JWT-based authentication.
• **Modern UI**: Built with **Tailwind CSS**, ensuring a clean and intuitive experience.
    `,
    technologies: ["React.js", "Node.js", "Next.js", "Express.js", "PostgreSQL", "Socket.io", "Tailwind CSS", "Supabase"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Mawhadmd/Chat-App-React",
        icon: <Github />,
      },  {
        type: "Website",
        href: "https://chatty001a.netlify.app/#",
        icon: <Globe />,
      },
    ],
    image: ChattyImage,
  },
  {
    title: "TalkSpace",
    href: "#",
    dates: "Jan 2025 - Present",
    active: true,
    description: `
A video conferencing app inspired by Zoom, enabling real-time audio, video, and chat functionality.

### Key Features
• **WebRTC Integration**: Supports high-quality video and audio calls.
• **Screen Sharing**: Allows users to share their screens during meetings.
• **Chat & Messaging**: Built-in real-time messaging for enhanced communication.
    `,
    technologies: ["React.js", "Node.js", "Express.js", "WebRTC", "Socket.io", "Tailwind CSS"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Mawhadmd/Talk-Space",
        icon: <Github />,
      },
    ],
    image: TalkSpaceImage,
  },
  {
    title: "Amazon Search Web Scraper",
    href: "#",
    dates: "2023",
    active: true,
    description:
      "An automation bot built with Python that scrapes data from various websites, processes information, and stores it in a database for analysis.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Requests"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Mawhadmd/Amazon-Scrapper-Selenium",
        icon: <Github />,
      },
    ],
    image: WebScrapingImage,
  },
  {
    title: "Portfolio Website",
    href: "#",
    dates: "Jan 2025 - Present",
    active: true,
    description: `
A personal portfolio website to showcase my projects, skills, and experience.

### Key Features
• **Dark & Light Mode**: Fully responsive design with theme toggling.
• **Smooth Animations**: Utilized **Framer Motion** for seamless user experience.
• **Custom Design**: Designed with **Aceternity UI** and **Motion Premitives** for a unique look.
    `,
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Aceternity UI", "Motion Premitives" ],
    links: [
      {
        type: "Website",
        href: "https://moawadportfolio.netlify.app/",
        icon: <Globe />,
      },
      {
        type: "Source",
        href: "https://github.com/Mawhadmd/portfolio2",
        icon: <Github />,
      },
    ],
    image: PortfolioImage,
  },
];
