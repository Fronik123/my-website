import { motion } from "framer-motion";
import { Code, Rocket, Users, Coffee, Lightbulb, Heart } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "3+ Years Experience",
      description:
        "Specialized in React development with modern JavaScript/TypeScript",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Performance Focused",
      description:
        "Building fast, optimized applications with excellent user experience",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Experience working in agile teams and cross-functional environments",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Lightbulb },
    { number: "3+", label: "Years Experience", icon: Coffee },
    { number: "100%", label: "Client Satisfaction", icon: Heart },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full"
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
            className="text-3xl md:text-4xl mb-4"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
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
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
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
                <stat.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
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
              </motion.div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center p-6 rounded-lg bg-background border border-border hover:shadow-xl transition-all group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />

              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 relative z-10"
              >
                <item.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="mb-2 relative z-10">{item.title}</h3>
              <p className="text-muted-foreground relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileInView={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4">My Journey</h3>
              <motion.p
                className="text-muted-foreground mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                My journey in React development began 3 years ago, and since
                then I've been continuously learning and adapting to the
                ever-evolving landscape of web development. I specialize in
                creating scalable, maintainable applications using modern React
                patterns and best practices.
              </motion.p>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                I'm passionate about writing clean, efficient code and staying
                up-to-date with the latest industry trends. Whether it's
                implementing complex state management with Redux, optimizing
                performance, or creating beautiful user interfaces, I bring
                dedication and attention to detail to every project.
              </motion.p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg border border-border/50 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundImage:
                    'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
                }}
              />

              <h4 className="mb-4 relative z-10">What I Bring</h4>
              <ul className="space-y-3 text-muted-foreground relative z-10">
                {[
                  "Modern React patterns and hooks",
                  "TypeScript for type-safe development",
                  "State management with Redux/Zustand",
                  "Responsive design with CSS frameworks",
                  "Testing with Jest and React Testing Library",
                  "Performance optimization techniques",
                ].map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
