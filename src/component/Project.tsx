import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./UI/Card";
import { Button } from "./UI/button";
import { Badge } from "./UI/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./UI/Tabs";
import { ExternalLink, Github, Eye, Monitor, Smartphone } from "lucide-react";
import { ImageWithFallback } from "../figma/figma";
import { motion } from "framer-motion";
import { useState } from "react";

//images
import uspacy from "../assets/uspacy-project.png";
import itech from "../assets/itech-project.png";
import social from "../assets/social-network.png";
import marketplace from "../assets/marketplace.webp";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("web");

  const webProjects = [
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
  ];

  const mobileProjects = [
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const ProjectCard = ({
    project,
    index,
    category,
  }: {
    project: (typeof webProjects)[0];
    index: number;
    category: string;
  }) => (
    <motion.div
      id="projects"
      key={`${category}-${project.id}-${index}`}
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={project.featured ? "lg:col-span-2" : ""}
    >
      <Card
        className={`group overflow-hidden border-0 shadow-xl bg-gradient-to-br from-background to-background/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ${
          project.featured ? "lg:grid lg:grid-cols-2 lg:gap-0" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden ${
            project.featured ? "aspect-[4/3] lg:aspect-auto" : "aspect-video"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

          {/* <motion.div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <div className="flex gap-3">
              <Button
                size="sm"
                className="bg-background/90 text-foreground hover:bg-background"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </motion.div> */}

          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className={project.featured ? "flex flex-col justify-center" : ""}>
          <CardHeader className="pb-4">
            <CardTitle className=" text-black text-xl font-semibold duration-300">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {project.technologies.map((tech, techIndex) => (
                <motion.div
                  key={`${category}-tech-${project.id}-${tech}-${techIndex}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: techIndex * 0.05 + 0.3, type: "spring" }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 text-primary border-gray-400 hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  asChild
                  className="bg-black text-white from-primary hover:from-primary/90 hover:to-primary/70"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />

                    {project.live ? "Live Demo" : "Watch video"}
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="hover:bg-primary/5 border-primary/20"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code {project.githubUrlSecondary ? "(Frontend)" : ""}
                  </a>
                </Button>
              </motion.div>
              {project.githubUrlSecondary && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="hover:bg-primary/5 border-primary/20"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code (Backend)
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );

  const ProjectGrid = ({
    projects,
    category,
  }: {
    projects: typeof webProjects;
    category: string;
  }) => (
    <motion.div
      key={`grid-${category}`}
      className="grid lg:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={`card-${category}-${project.id}`}
          project={project}
          index={index}
          category={category}
        />
      ))}
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(120,119,198,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl text-center mb-12 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="web" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-[400px] grid-cols-2 bg-gray-200 backdrop-blur-sm border border-gray-300">
                  <TabsTrigger
                    value="web"
                    className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-lg data-[state=active]:bg-white"
                  >
                    <Monitor className="w-4 h-4" />
                    Web Development
                  </TabsTrigger>
                  <TabsTrigger
                    value="mobile"
                    className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-lg data-[state=active]:bg-white"
                  >
                    <Smartphone className="w-4 h-4" />
                    Mobile Apps
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="web" className="mt-0">
                {activeTab === "web" && (
                  <motion.div
                    key="web-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <ProjectGrid projects={webProjects} category="web" />
                  </motion.div>
                )}
              </TabsContent>

              <TabsContent value="mobile" className="mt-0">
                {activeTab === "mobile" && (
                  <motion.div
                    key="mobile-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <ProjectGrid projects={mobileProjects} category="mobile" />
                  </motion.div>
                )}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
