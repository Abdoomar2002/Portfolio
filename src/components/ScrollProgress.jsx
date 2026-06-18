import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Slim gradient progress bar pinned to the very top of the page.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
    >
      <div
        className="h-full w-full"
        style={{ background: "linear-gradient(90deg, #2dd4bf, #38bdf8, #7c5cff, #ff4d8d)" }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
