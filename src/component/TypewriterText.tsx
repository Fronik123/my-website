import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
}

export function TypewriterText({ texts, className = "" }: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        if (currentText !== fullText) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          setTypeSpeed(100);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText !== "") {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          setTypeSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typeSpeed]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-1 h-6 bg-current ml-1"
      />
    </span>
  );
}
