// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Lawyer Case Management System",
    technologies: ["C#", "WinForms", "SQLite", "Excel Export"],
    description: "Manages cases, sessions, and notifications for a lawyer. Included push notifications and Excel report export.",
    timeline: "Dec 2022 – May 2023",
    imageUrl: "/images/lawyer-system.png",
  },
  {
    id: 2,
    title: "Construction Company Landing Page",
    technologies: ["PHP", "HTML", "CSS"],
    description: "Simple 3-page site for a construction company. Company later shut down.",
    timeline: "May 2023",
    imageUrl: "/images/construction.png",
  },
  {
    id: 3,
    title: "Avvio Lighting Web App",
    technologies: ["React", "API", "Cookies"],
    description: "Product showcase web app with shareable links and user experience tracking.",
    timeline: "July 2023",
    imageUrl: "/images/avvio.png",
  },
  {
    id: 4,
    title: "Gold Market Management System",
    technologies: ["C#", ".NET", "SQLite"],
    description: "Tracks inventory, customer borrowing, weight calculations, and gold categories.",
    timeline: "Nov 2023 – Feb 2024",
    imageUrl: "/images/gold-market.png",
  },
  {
    id: 5,
    title: "Saf7a Platform",
    technologies: ["React", ".NET", "Redux", "JWT", "WebSocket"],
    description: "Educational platform dashboard for centers, including real-time communication.",
    timeline: "March 2024 – Present",
    imageUrl: "/images/saf7a.png",
  },
  {
    id: 6,
    title: "Graduation Delivery App",
    technologies: ["React Native"],
    description: "App where people post delivery jobs and couriers compete to accept them.",
    timeline: "April – July 2024",
    imageUrl: "/images/delivery-app.png",
  },
  {
    id: 7,
    title: "Club and Construction Landing Pages",
    technologies: ["Next.js"],
    description: "Quick landing pages to promote a Saudi club and a construction company.",
    timeline: "July 2024",
    imageUrl: "/images/landing-pages.png",
  },
  {
    id: 8,
    title: "DSRent Platform",
    technologies: ["Next.js", ".NET", "SMS API"],
    description: "Converted WordPress site to Next.js, added dashboard, and integrated messaging.",
    timeline: "Aug – Nov 2024",
    imageUrl: "/images/dsrent.png",
  },
  {
    id: 9,
    title: "Police Station Execution System",
    technologies: ["C#", ".NET", "SQL Server"],
    description: "Multi-station system for execution management across six locations.",
    timeline: "Nov 2024",
    imageUrl: "/images/police-system.png",
  },
  {
    id: 10,
    title: "POS System for Supermarket",
    technologies: ["C#", ".NET", "SQL Server"],
    description: "User-friendly cashier system for managing inventory and daily transactions.",
    timeline: "Dec 2024",
    imageUrl: "/images/pos.png",
  },
  {
    id: 11,
    title: "Autism Evaluation App",
    technologies: ["C#", ".NET"],
    description: "Implements the Gilliam Autism Rating Scale to assess child development.",
    timeline: "Jan 2025",
    imageUrl: "/images/autism-app.png",
  },
  {
    id: 12,
    title: "HR Training Management System",
    technologies: ["C#", ".NET", "SQL Server"],
    description: "Tracks trainings, attendees, departments, costs, and financial reports.",
    timeline: "Feb – March 2025",
    imageUrl: "/images/hr-system.png",
  },
  {
    id: 13,
    title: "ERP & Landing Page (Juman Intelligent Systems)",
    technologies: ["Angular", "Next.js", ".NET"],
    description: "Started ERP system and landing page before leaving the company.",
    timeline: "April – May/June 2025",
    imageUrl: "/images/erp.png",
  },
  {
    id: 14,
    title: "Tollab (Saf7a)",
    technologies: ["Angular"],
    description: "Ongoing educational video platform for all academic levels. First Angular project.",
    timeline: "June 2025 – Present",
    imageUrl: "/images/tollab.png",
  },
];

const Projects = () => {
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
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative h-48 overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.timeline}</p>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
