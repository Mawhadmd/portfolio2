import { Globe, Github } from "lucide-react";
import ChattyImage from "../../public/Chatty.png";
import TalkSpaceImage from "../../public/TalkSpace.png";
import projectmanagement from "../../public/projectManagementFlutter.png";
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
export const CURRENTLYLEARNING = [
  "Docker",
  "Next JS Advanced",
  "Expo | React Native",
  "JOSE (JSON Web Tokens)",
  "Building new projects",
];
export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "CSS",
  "HTML",
  "Git",
  "API Integration",
  "REST API",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "React Native",
  "Expo",
  "Docker",
  "PHP",
];

export const PROJECTS = [
  {
    title: "Chat App",
    href: "https://chatty001a.netlify.app/",
    dates: "Aug 2024 - Present",
    active: true,
    description: `
This is a modern chat app that has many features, including authorization, authentication, real-time, image/audio sharing, and more.

I loved the idea of having my own chat app, use it to talk with friends while knowing exactly how each message is reaching the other side. I built a simple chat app back in my junior years using PHP and Ajax, but it wasn't real-time; instead, it was polling every couple of seconds. I consider this an upgrade of that and my most comprehensive project as of July 1, 2025, and I would love to create more projects and applications like this.

    `,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Tailwind CSS",
      "Supabase",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/Mawhadmd/Chat-App-React",
        icon: <Github />,
      },
      {
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
    dates: "Jan 2025 - Jan 2025",
    active: true,
    description: `
A video conferencing app inspired by Zoom, enabling real-time audio, video, and chat functionality.


I was inspired to undertake this project by my previous chat application, Chatty. Surprisingly, this project didn’t take much time (But it took much brain power), and I found it quite enjoyable since it was based on the earlier one. I utilized React for the front end, along with TypeScript, Tailwind CSS, Peer.js, and Express.js (Socket.io) for the back end.
    `,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "WebRTC",
      "Peer.js",
      "Socket.io",
      "Tailwind CSS",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/Mawhadmd/Talk-Space",
        icon: <Github />,
      },
    ],
    image: TalkSpaceImage,
  },
  // {
  //   title: "Amazon Search Web Scraper",
  //   href: "#",
  //   dates: "2023",
  //   active: true,
  //   description:
  //     "An automation bot built with Python that scrapes data from various websites, processes information, and stores it in a database for analysis.",
  //   technologies: ["Python", "Selenium", "BeautifulSoup", "Requests"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/Mawhadmd/Amazon-Scrapper-Selenium",
  //       icon: <Github />,
  //     },
  //   ],
  //   image: WebScrapingImage,
  // },
  {
    title: "Portfolio Website",
    href: "#",
    dates: "Jan 2025 - Present",
    active: true,
    description: `
A personal portfolio and a blog to showcase my projects, skills, and experience.
    `,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Aceternity UI",
      "Motion Premitives",
      "Supabase",
      "Tiptab",
    ],
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
  {
    title: "Project Management App (Flutter)",
    href: "#",
    dates: "May 2025 - June 2025",
    active: true,
    description: `
This was the final mobile project for my mobile course at university. I used flutter, supabase to create it and it is simple. 

## Main Features

  -Send a Friend request and add friends
  -Add/remove/edit projects
  -Add/remove/edit subtasks for the project
  -Assign friends to each subtask (Was planned)
    `,
    technologies: ["Flutter", "Dart", "Supabase", "REST API"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Mawhadmd/Project-Management-App-Flutter",
        icon: <Github />,
      },
    ],
    image: projectmanagement,
  },
];
