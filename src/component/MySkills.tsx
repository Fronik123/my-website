import { motion } from "framer-motion";
import { Database } from "lucide-react";
import {
  SiJavascript,
  SiNestjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
} from "react-icons/si";

export function MySkills() {
  const highlights = [
    {
      icon: SiNestjs,
      title: "Nest",
      description:
        "Specialized in React development with modern JavaScript/TypeScript",
      color: " to-purple-500",
    },
    {
      icon: SiNodedotjs,
      title: "Node.js",
      description:
        "Building fast, optimized applications with excellent user experience",
    },
    {
      icon: Database,
      title: "Mongodb / MySQL",
      description:
        "Experience working in agile teams and cross-functional environments",
    },
    {
      icon: SiPrisma,
      title: "Prisma",
      description:
        "Experience working in agile teams and cross-functional environments",
    },
  ];

  const stats = [
    { label: "Java Script", icon: SiJavascript },
    { label: "React / React Native", icon: SiReact },
    { label: "Tailwind CSS", icon: SiTailwindcss },
    { label: "Next", icon: SiNextdotjs },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-muted/30 bg-gray-50  relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-gray-200 from-primary/5 to-transparent rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl mb-4 font-semibold"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>
          {/* <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            I'm a passionate React developer with a strong foundation in modern
            web technologies. Over the past 3 years, I've honed my skills in
            creating responsive, performant web applications that deliver
            exceptional user experiences.
          </motion.p> */}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
              >
                <stat.icon className="w-12 h-12 text-primary" />
              </motion.div>
              {/* <motion.div
                className="text-3xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div> */}
              <p className="font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center p-6 rounded-lg bg-background border border-border hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />

              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 relative z-10"
              >
                <item.icon className="w-12 h-12 text-primary" />
              </motion.div>
              <h3 className="mb-2 relative font-medium">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
