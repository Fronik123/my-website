import { motion, useAnimation } from "framer-motion";

import type { LucideIcon } from "lucide-react";

type ButtonMotionProps = {
  outline?: boolean;
  title: string;
  elementId?: string;
  Icon?: LucideIcon;
  onClick?: () => void;
};

function ButtonMotion({
  outline = false,
  title,
  // elementId,
  Icon,
  onClick,
}: ButtonMotionProps) {
  const controls = useAnimation();
  return (
    <>
      {outline ? (
        <motion.button
          // onClick={() =>
          //   document
          //     .getElementById(`${elementId}`)
          //     ?.scrollIntoView({ behavior: "smooth" })
          // }
          onClick={onClick}
          className="flex item-center gap-2 bg-white text-black border border-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all"
          whileHover={{ scale: 1.05, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => controls.start({ y: -3, rotate: 10 })}
          onHoverEnd={() => controls.start({ y: 0, rotate: 0 })}
        >
          {Icon ? (
            <>
              <motion.span
                className="flex items-center"
                transition={{ type: "spring", stiffness: 300 }}
                animate={controls}
              >
                <Icon className="w-5 h-5" />
              </motion.span>

              <span className="font-semibold text-sm">{title}</span>
            </>
          ) : (
            <span className="font-semibold text-sm">{title}</span>
          )}
        </motion.button>
      ) : (
        <motion.button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2 border border-color-black border-border px-4 py-2 rounded-lg hover:bg-muted transition-all text-white bg-black"
          whileHover={{ scale: 1.05, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => controls.start({ y: -3, rotate: 10 })}
          onHoverEnd={() => controls.start({ y: 0, rotate: 0 })}
        >
          {Icon ? (
            <>
              <motion.span
                className="flex items-center"
                transition={{ type: "spring", stiffness: 300 }}
                animate={controls}
              >
                <Icon className="w-5 h-5" />
              </motion.span>

              <span className="font-semibold text-sm">{title}</span>
            </>
          ) : (
            <span className="font-semibold text-sm">{title}</span>
          )}
        </motion.button>
      )}
    </>
  );
}

export default ButtonMotion;
