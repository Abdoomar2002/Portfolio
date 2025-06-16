// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-20 bg-white"
      style={{ paddingLeft: 20, paddingRight: 20 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-black">Profile</h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-black"
        >
          A versatile software engineer skilled in web development (React),
          mobile apps (React Native), back-end technologies (PHP, C#), and
          desktop applications (C#). Proficient in C, C++, Java, Node.js, and
          Python (web scraping). Excels in dynamic environments and
          cross-functional team collaboration. Seeking a challenging role to
          leverage diverse skills and contribute to innovative projects.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
