import React from 'react';
import { motion } from 'framer-motion';
import FeaturedProjects from '../components/Projects';

const Projects = () => {
  return (
    <main className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">My Projects</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Here are some of my featured projects that showcase my skills and experience
          in web development. Each project represents a unique challenge and solution.
        </p>
        
        <FeaturedProjects />
      </motion.div>
    </main>
  );
};

export default Projects; 