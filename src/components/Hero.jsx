// src/components/Hero.js
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I AM ABDELRAHMAN",
        "I AM A FRONT-END DEVELOPER",
        "I AM A FULL STACK DEVELOPER",
        "I AM A PROBLEM SOLVER",
        "I AM A TEAM PLAYER",
        "I AM A CONTINUOUS LEARNER",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-center py-40 bg-black text-white flex flex-col md:flex-row items-center justify-center"
      style={{ paddingLeft: 20, paddingRight: 20 }}
    >
      {/* Profile photo */}
      <motion.img
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
        src="/images/profile.jpeg"
        alt="Profile"
        className="rounded-full w-48 h-48 border-4 border-gray-800 mb-8 md:mb-0 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      />

      {/* Main content */}
      <div className="md:ml-12 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl font-bold mb-4"
        >
          Abdelrahman Omar
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl mb-4 h-8"
        >
          <span ref={el} className="typing-text"></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center md:justify-start gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/abdo-omar-b95301363/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Abdoomar2002"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:abdo20omar20@gmail.com"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
