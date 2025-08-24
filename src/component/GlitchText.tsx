import { motion } from "framer-motion";
import { useState } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

  const createGlitchText = (text: string) => {
    return text
      .split("")
      .map((char) =>
        Math.random() < 0.3
          ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
          : char
      )
      .join("");
  };

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onHoverStart={() => setIsGlitching(true)}
      onHoverEnd={() => setIsGlitching(false)}
    >
      <span className="relative z-10">{children}</span>

      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-red-500 opacity-70 -z-10"
            animate={{
              x: [-2, 2, -1, 1, 0],
              y: [-1, 1, -2, 2, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            {createGlitchText(children)}
          </motion.span>

          <motion.span
            className="absolute top-0 left-0 text-blue-500 opacity-70 -z-10"
            animate={{
              x: [2, -2, 1, -1, 0],
              y: [1, -1, 2, -2, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 0.1,
            }}
          >
            {createGlitchText(children)}
          </motion.span>
        </>
      )}
    </motion.span>
  );
}
