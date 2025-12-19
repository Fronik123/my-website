import marketplace from "../assets/marketplace.webp";
import trainSchedule from "../assets/train-schedule.png";

export const mobileProjects = [
  {
    id: "mobile-1",
    title: "Marketplace",
    description:
      "Marketplace is a mobile app built with React Native for posting and searching ads. It supports adding products, viewing offers, and has a user-friendly interface.",
    image: marketplace,
    technologies: ["React Native", "Firebase", "AsyncStorage", "Navigation"],
    liveUrl:
      "https://drive.google.com/file/d/1WkwwwLUYYzs21i7wSS7AF7XYo9Mfiogb/view?usp=sharing",
    githubUrl: "https://github.com/Fronik123/native-card",
    githubUrlSecondary: "",
    featured: true,
    live: false,
  },
  {
    id: "mobile-2",
    title: "Train schedule",
    description:
      "Native mobile application for food ordering with real-time tracking, payment integration, and restaurant management system.",
    image: trainSchedule,
    technologies: [
      "React Native Expo",
      "TypeScript",
      "Nest",
      "Tailwindcss",
      "AsyncStorage",
      "TanStack Query",
      "JWT",
    ],
    liveUrl:
      "https://drive.google.com/file/d/1MuW01RIFO5XywJC38MfdB2bmr5_MpMhY/view",
    githubUrl: "https://github.com/Fronik123/train-schedule",
    githubUrlSecondary: "",
    featured: false,
    live: false,
  },
  // {
  //   id: "mobile-2",
  //   title: "Food Delivery App",
  //   description:
  //     "Native mobile application for food ordering with real-time tracking, payment integration, and restaurant management system.",
  //   image:
  //     "https://images.unsplash.com/photo-1588919350188-7b13c8b44f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzU1NTk2Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   technologies: [
  //     "React Native",
  //     "Redux",
  //     "Firebase",
  //     "Maps API",
  //     "Push Notifications",
  //   ],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   githubUrlSecondary: "#",
  //   featured: false,
  //   live: true,
  // },
  // {
  //   id: "mobile-3",
  //   title: "Social Chat App",
  //   description:
  //     "Real-time messaging application with group chats, media sharing, and video calls. Built with modern React Native architecture.",
  //   image:
  //     "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjaGF0JTIwYXBwfGVufDF8fHx8MTc1NTU5Njc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   technologies: [
  //     "React Native",
  //     "Socket.io",
  //     "WebRTC",
  //     "Realm",
  //     "Animations",
  //   ],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   githubUrlSecondary: "#",
  //   featured: false,
  //   live: true,
  // },
];
