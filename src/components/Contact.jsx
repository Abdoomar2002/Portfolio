// src/components/Contact.js
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center py-20 bg-white"
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-xl mb-4">
          Reach out to me via email or connect on social media.
        </p>
        <motion.p whileHover={{ scale: 1.1 }} className="mb-4">
          Email:{" "}
          <a href="mailto:abdo20omar20@gmail.com" className="text-blue-500">
            abdo20omar20@gmail.com
          </a>
        </motion.p>
        <motion.p whileHover={{ scale: 1.1 }} className="mb-4">
          Whatsapp:{" "}
          <a
            href="https://wa.me/+201025784881"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            +201025784881
          </a>
        </motion.p>
        <motion.p whileHover={{ scale: 1.1 }} className="mb-4">
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/abdo-omar-5b636b219"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/abdo-omar-5b636b219
          </a>
        </motion.p>
        <motion.p whileHover={{ scale: 1.1 }} className="mb-4">
          GitHub:{" "}
          <a
            href="https://github.com/abdoomar2002"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/abdoomar2002
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Contact;
