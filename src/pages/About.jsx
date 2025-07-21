import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">About Me</h1>

        <div className="space-y-8">
          <section className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300">
                  <span className="text-primary">Name:</span> Abdelrahman Omar
                </p>
                <p className="text-gray-300">
                  <span className="text-primary">Email:</span>{" "}
                  abdo20omar20@gmail.com
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="text-primary">Location:</span> Remote
                </p>
                <p className="text-gray-300">
                  <span className="text-primary">Languages:</span> Arabic,
                  English
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Professional Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I am a Full Stack Developer with expertise in React, Angular, and
              .NET technologies. My focus is on creating scalable, user-friendly
              web applications that solve real-world problems. With a strong
              foundation in both front-end and back-end development, I bring
              ideas to life through clean, efficient code and intuitive user
              interfaces.
            </p>
          </section>

          <section className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Key Achievements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Developed and maintained multiple full-stack applications using
                React and .NET
              </li>
              <li>
                Created educational content and tutorials for web development
              </li>
              <li>
                Successfully managed and delivered projects within tight
                deadlines
              </li>
              <li>
                Contributed to open-source projects and technical communities
              </li>
            </ul>
          </section>
        </div>
      </motion.div>
    </main>
  );
};

export default About;
