import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/figma";
import { TypewriterText } from "./TypewriterText";
import { GlitchText } from "./GlitchText";
import {
  ChevronDown,
  Github,
  Linkedin,
  Send,
  Download,
  Folder,
} from "lucide-react";
import ButtonMotion from "./UI/ButtonMontion";
import photo from "../assets/photo.svg";
import cvFile from "../../public/files/Korostelov_CV.pdf";

export function HeroSection() {
  const roles = ["Software Engineer", "Mobile Dev", "Full Stack"];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Fronik123", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/korostelovm/",
      label: "LinkedIn",
    },
    // { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
    { icon: Send, href: "https://t.me/nikolya_78", label: "Telegram" },
  ];

  const handleScroll = (elementId: string) => {
    document
      .getElementById(`${elementId}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Korostelov_CV.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-[900px] h-screen flex items-center justify-center md:pt-20  relative overflow-hidden"
    >
      <motion.div
        className="hidden md:block absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-gray-300 rounded-lg"
        animate={{
          rotate: [0, 45, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-primary"
            >
              👋 Hello, I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl"
            >
              <GlitchText>Mykola</GlitchText>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-500 font-medium"
            >
              I'm a{" "}
              <TypewriterText
                texts={roles}
                className="text-black font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-500 text-lg max-w-lg leading-relaxed font-medium"
            >
              Software Engineer who enjoys turning ideas into working products.
              I am always striving to learn new things and improve my skills.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4"
            >
              <ButtonMotion
                onClick={() => handleScroll("skills")}
                title="Skills"
              />

              <ButtonMotion
                onClick={() => handleScroll("projects")}
                outline
                Icon={Folder}
                title="Project"
              />

              <ButtonMotion
                Icon={Download}
                onClick={handleDownload}
                outline
                title="CV"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center  hover:bg-black hover:text-white transition-colors bg-gray-200"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    cursor: "pointer",
                  }}
                  target="_blank"
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative">
                <ImageWithFallback
                  src={photo}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
                  animate={{ opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-gray-600 rounded-full"
              />
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gray-300 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-300 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative top-5 left-1/2  transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleScroll("skills")}
          >
            <span className="text-md font-medium text-muted-foreground mb-2">
              Scroll down
            </span>

            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
