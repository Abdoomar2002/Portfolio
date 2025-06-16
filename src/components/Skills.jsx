// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";

const skills = {
  frontend: [
    "React.js",
    "Angular",
    "Vue.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "jQuery"
  ],
  backend: [
    "C#",
    "ASP.NET Core",
    "ASP.NET MVC",
    "ASP.NET WebForms",
    "Entity Framework Core",
    "RESTful APIs",
    "Web API",
    "OOP",
    "Design Patterns",
    "SOLID Principles",
    "LINQ"
  ],
  databases: [
    "SQL Server",
    "SQLite"
  ],
  devops_tools: [
    "Git",
    "GitHub",
    "Deployment via Vercel",
    "Manual CI flows",
    "Basic DNS and Email Configuration"
  ],
  project_management: [
    "Trello",
    "Jira"
  ],
  testing: [
    "Jest",
    "Manual UI testing",
    "Excel-based output validation"
  ],
  soft_skills: [
    "Problem-solving",
    "Time management",
    "Team collaboration",
    "Adaptability",
    "Self-learning",
    "Communication"
  ],
  other: [
    "WebSocket",
    "JWT",
    "Agile/Scrum",
    "Debugging .NET Applications",
    "Deploying .NET Web Applications",
    "Building Scalable Web Systems",
    "YouTube Content Creation (SOLID & Design Patterns)"
  ]
};

const categoryIcons = {
  frontend: "💻",
  backend: "⚙️",
  databases: "🗄️",
  devops_tools: "🛠️",
  project_management: "📋",
  testing: "🧪",
  soft_skills: "🤝",
  other: "✨"
};

const categoryTitles = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  databases: "Databases",
  devops_tools: "DevOps & Tools",
  project_management: "Project Management",
  testing: "Testing & Quality",
  soft_skills: "Soft Skills",
  other: "Other Skills"
};

const Skills = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Technical Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{categoryIcons[category]}</span>
                <h3 className="text-xl font-bold text-white">
                  {categoryTitles[category]}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgb(31, 41, 55)",
                    }}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuously expanding my skill set to stay at the forefront of web development technologies and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
