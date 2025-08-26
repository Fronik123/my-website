import uspacy from "../assets/uspacy-project.png";
import itech from "../assets/itech-project.png";
import social from "../assets/social-network.png";
import trailhive from "../assets/tamplate_trailhive.png";

export const webProjects = [
  {
    id: "web-1",
    title: "Social network",
    description:
      "Fullstack is a social network developed using Next.js, TypeScript, and Express. It supports registration, authorization, post sharing, and user interaction.",
    image: social,
    // image:
    //   "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBzZXR1cHxlbnwxfHx8fDE3NTU2MzcwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Prisma",
    ],
    liveUrl:
      "https://drive.google.com/file/d/1YWi479ELRKJ8X3Yqfth-naNgOrSegWdq/view?usp=sharing",
    githubUrl: "https://github.com/Fronik123/social-network-front",
    githubUrlSecondary: "https://github.com/Fronik123/social-network-backend",
    featured: true,
    live: false,
  },
  {
    id: "web-2",
    title: "Uspacy",
    description:
      "React web application using Formik and Tailwind CSS, designed for event registration. It features convenient input forms, validation, and a modern adaptive interface.",
    image: uspacy,
    // image:
    //   "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzU1NTgxOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Formik", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://fronik123.github.io/uspacy/",
    githubUrl: "https://github.com/Fronik123/uspacy",
    githubUrlSecondary: "",
    featured: false,
    live: true,
  },
  {
    id: "web-3",
    title: "Itech web",
    description:
      "Is a modern adaptive landing page created using HTML and CSS. The project features cross-browser layout, flexible adaptation to various devices, and smooth animations.",
    image: itech,
    technologies: ["HTML 5", "SCSS", "Animation", "Bootstrap"],
    liveUrl: "https://fronik123.github.io/itech-web/",
    githubUrl: "https://github.com/Fronik123/itech-web",
    githubUrlSecondary: "",
    featured: false,
    live: true,
  },
  {
    id: "web-4",
    title: "TrailHive",
    description:
      "This is a modern website created in Webflow, dedicated to recreation and an active lifestyle in nature. It has convenient navigation, responsive design, beautiful animations, and uses CMS to manage content about the best places to relax and routes.",
    image: trailhive,
    technologies: ["Webflow", "CMS", "JavaScript", "Animation", "Adaptive"],
    liveUrl: "https://trailhive-a6d391.webflow.io/",
    githubUrl: "",
    githubUrlSecondary: "",
    featured: false,
    live: true,
  },
];
