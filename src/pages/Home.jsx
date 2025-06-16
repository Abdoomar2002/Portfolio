import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import FeaturedProjects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import Experience from '../components/Experience.jsx';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 gradient-text">Welcome to My Portfolio</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I'm a passionate Full Stack Developer with expertise in React, Angular, and .NET technologies.
          Explore my work and let's create something amazing together.
        </p>
      </motion.div>

      <section id="featured-projects" className="mb-16">
        <FeaturedProjects />
      </section>

      <section id="skills" className="mb-16">
        <Skills />
      </section>

      <section id="experience" className="mb-16">
        <Experience />
      </section>

      <section id="contact" className="mb-16">
        <Contact />
      </section>
    </main>
  );
};

export default Home; 