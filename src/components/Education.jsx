// src/components/Education.js
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "Bachelor of Computer and Information Sciences",
      university: "Assiut University",
      graduation: "2024",
      cgpa: 3.2,
      description: "Focused on software development, algorithms, and computer systems.",
    },
    {
      id: 2,
      degree: "Web Development Bootcamp",
      university: "Udemy - Angela Yu",
      graduation: "2022",
      description: "Comprehensive web development course covering HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      id: 3,
      degree: "Desktop Application Development",
      university: "College Course",
      graduation: "2023",
      description: "Learned .NET Framework fundamentals and desktop application development.",
    },
    {
      id: 4,
      degree: "React.js Masterclass",
      university: "Udemy - Maximilian Schwarzmuller",
      graduation: "2023",
      description: "Advanced React.js concepts, hooks, and state management.",
    },
    {
      id: 5,
      degree: "Angular Development",
      university: "Udemy - Maximilian Schwarzmuller",
      graduation: "2024",
      description: "Web development with Angular, including navigation and state management.",
    },
    {
      id: 6,
      degree: "Design Patterns and SOLID Principles",
      university: "Udemy - Dimitri ",
      graduation: "2025",
      description: "Design Patterns and SOLID Principles.",
    },
    {
      id: 7,
      degree: "microservices architecture and DDD",
      university: "Udemy",
      graduation: "2025",
      description: "Microservices architecture and DDD.",
    },
    {
      id: 8,
      degree: "ASP.NET Core 9 and Entity Framework Core",
      university: "Udemy",
      graduation: "2025",
      description: "ASP.NET Core 9 and Entity Framework Core.",
    },
  ];

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 bg-black text-white"
      style={{ paddingLeft: 20, paddingRight: 20 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Education
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {educations.map((education) => (
          <motion.div
            key={education.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">{education.degree}</h3>
                <p className="text-lg text-gray-300">{education.university}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-white">{education.graduation}</p>
                {education.cgpa && (
                  <p className="text-sm text-gray-400">CGPA: {education.cgpa}</p>
                )}
              </div>
            </div>
            <p className="text-gray-400">{education.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Education;
