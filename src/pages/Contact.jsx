import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <main className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">Get in Touch</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Have a project in mind or want to discuss potential opportunities?
          I'd love to hear from you. Feel free to reach out through any of the following channels.
        </p>
        
        <Contact />
      </motion.div>
    </main>
  );
};

export default ContactPage; 