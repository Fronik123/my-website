import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./UI/Card";
import { Badge } from "./UI/Badge";
import { experiences } from "../data/myExperience";

export function MyExperience() {
  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-semibold">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2   backdrop-blur-sm shadow-lg border-gray-300">
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-2xl mb-5 text-foreground font-bold group-hover:text-primary transition-colors">
                      {experience.position}
                    </CardTitle>

                    <CardDescription className="text-lg font-medium text-primary">
                      {experience.company}
                    </CardDescription>

                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>

                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-2">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-m font-semibold mb-3 text-foreground">
                        Key Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={`${tech}-${techIndex}`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: techIndex * 0.05 + 0.3,
                              type: "spring",
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs bg-gray-100 text-primary border-gray-400 hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>

                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
