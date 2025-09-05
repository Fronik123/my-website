import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./UI/Card";
import { Button } from "./UI/Button";
import { Badge } from "./UI/Badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./UI/Tabs";
import { ExternalLink, Github, Monitor, Smartphone } from "lucide-react";
import { ImageWithFallback } from "../figma/figma";
import { motion } from "framer-motion";
import { useState } from "react";

//data
import { webProjects } from "../data/showCaseseWeb";
import { mobileProjects } from "../data/showCaseseMobile";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("web");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // const cardVariants = {
  //   hidden: { opacity: 0, y: 30, scale: 0.95 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //     transition: { duration: 0.5, ease: "easeOut" },
  //   },
  // };

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
      // variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={project.featured ? "lg:col-span-2" : " "}
    >
      <Card
        className={`group bg-white overflow-hidden border-0 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ${
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
          <CardHeader className="pb-4 ">
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

            <div className="flex gap-3 flex-wrap">
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

              {project.githubUrl && (
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
              )}

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
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      // className="grid grid-cols-1 gap-6"
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
      className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden bg-gray-100"
    >
      {/* Background decorations */}

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl text-center mb-12 font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text "
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
                    <span className="block  max-[350px]:hidden">
                      Web Development
                    </span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="mobile"
                    className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-lg data-[state=active]:bg-white"
                  >
                    <Smartphone className="w-4 h-4" />

                    <span className="block  max-[350px]:hidden">
                      Mobile Apps
                    </span>
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
