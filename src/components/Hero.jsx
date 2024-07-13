// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative text-center py-20 bg-gradient-to-r from-indigo-950 to-purple-900 text-white flex flex-col md:flex-row items-center justify-center"
    >
      {/* Profile photo */}
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        src="/images/profile.jpeg" // Update with your profile image path
        alt="Profile"
        className="rounded-full w-48 h-48 border-4 border-white mb-8 md:mb-0"
      />

      {/* Main content */}
      <div className="md:ml-12 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-6xl font-bold mb-4"
        >
          Abdelrahman Omar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-2xl"
        >
          Frontend Software Engineer
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;
