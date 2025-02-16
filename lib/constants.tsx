import { User, Building2, Laptop, Globe, Github } from "lucide-react";

export const DOCK_DATA = [
  { Icon: User, tooltip: "About me", link: "#about-me" },
  { Icon: Building2, tooltip: "Work Experience", link: "#work" },
  { Icon: Laptop, tooltip: "Projects", link: "#projects" },
];

export const SKILLS = [
  "JavaScript",
  "React",
  "Node.js",
  "CSS",
  "HTML",
  "TypeScript",
  "Git",
  "Java",
  "PHP",
  "Python",
  "API Integration",
  "NLP",
  "SQL",
  "NoSQL",
  "MongoDB",
  "PostgreSQL",
  "Microservices",
  "REST",
];





export const PROJECTS = [
  {
    title: "Chat App",
    href: "#",
    dates: "2024 - Present",
    active: true,
    description: `
A real-time chat application built with React and Node.js, featuring authentication, secure messaging, and a responsive UI.

### Key Features
• **WebSockets Integration**: Achieves seamless real-time communication using **Socket.io**.
• **User Authentication**: Secure login and registration system with JWT-based authentication.
• **Modern UI**: Built with **Tailwind CSS**, ensuring a clean and intuitive experience.
    `,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    links: [
      {
        type: "Source",
        href: "#",
        icon: <Github />,
      },
    ],
    image: "/images/chat-app.png",
  },
  {
    title: "Zoom Clone (TalkSpace)",
    href: "#",
    dates: "2024 - Present",
    active: true,
    description: `
A video conferencing app inspired by Zoom, enabling real-time audio, video, and chat functionality.

### Key Features
• **WebRTC Integration**: Supports high-quality video and audio calls.
• **Screen Sharing**: Allows users to share their screens during meetings.
• **Chat & Messaging**: Built-in real-time messaging for enhanced communication.
    `,
    technologies: ["React", "Node.js", "Express.js", "WebRTC", "Socket.io", "Tailwind CSS"],
    links: [
      {
        type: "Source",
        href: "#",
        icon: <Github />,
      },
    ],
    image: "",
  },
  {
    title: "Web Scraper Bot",
    href: "#",
    dates: "2023",
    active: true,
    description:
      "An automation bot built with Python that scrapes data from various websites, processes information, and stores it in a database for analysis.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Requests", "MongoDB"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Mawhadmd/Amazon-Scrapper-Selenium",
        icon: <Github />,
      },
    ],
    image: "../src/assets/projects/Webscraping.png",
  },
  {
    title: "Portfolio Website",
    href: "#",
    dates: "2024 - Present",
    active: true,
    description: `
A personal portfolio website to showcase my projects, skills, and experience.

### Key Features
• **Dark & Light Mode**: Fully responsive design with theme toggling.
• **Smooth Animations**: Utilized **Framer Motion** for seamless user experience.
• **Optimized Performance**: Built with **Next.js** for fast loading and SEO optimization.
    `,
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    links: [
      {
        type: "Website",
        href: "#",
        icon: <Globe />,
      },
      {
        type: "Source",
        href: "#",
        icon: <Github />,
      },
    ],
    image: "/images/portfolio.png",
  },
];
