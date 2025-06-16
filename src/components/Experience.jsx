// src/components/Experience.js
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer (Part-time)",
    company: "Tollab (Saf7a Project)",
    location: "Remote, Kuwait",
    startDate: "2024-03",
    endDate: null,
    description: "Built and maintained a large educational dashboard with real-time reporting for academic centers. Currently working on a new Angular-based platform (Tollab) for educational videos, homework, and tests across all academic levels.",
    technologies: ["Angular", ".NET", "React", "WebSocket", "Redux", "JWT", "SQL Server"]
  },
  {
    title: "Freelance Software Engineer",
    company: "Various Clients",
    location: "Remote",
    startDate: "2022-12",
    endDate: null,
    description: "Delivered various client projects including landing pages, dashboards, and management systems using C#, .NET, React, and PHP. Provided full-cycle development from concept to deployment.",
    technologies: ["C#", ".NET", "WinForms", "React", "Next.js", "SQL Server", "PHP"]
  },
  {
    title: "Full Stack Web Developer",
    company: "Juman Intelligent Systems",
    location: "Remote, UAE",
    startDate: "2025-04",
    endDate: "2025-05",
    description: "Contributed to the development of an ERP system and built a landing page using Angular and .NET before leaving the company.",
    technologies: ["Angular", ".NET", "TypeScript", "SCSS", "SQL Server"]
  },
  {
    title: "Junior Software Engineer",
    company: "DSRent",
    location: "Remote, Saudi Arabia",
    startDate: "2024-08",
    endDate: "2024-11",
    description: "Served as the sole technical lead responsible for website migration to Next.js, building a custom dashboard, managing backend systems, and integrating an SMS notification service.",
    technologies: ["Next.js", "React", ".NET", "SQL Server", "Bootstrap"]
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
  };

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Professional Journey
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gray-800 border-4 border-black transform -translate-x-1/2"></div>

                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                  className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {experience.title}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-lg text-gray-300">
                          {experience.company}
                        </p>
                        <p className="text-sm text-gray-400">
                          {experience.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">
                        {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
