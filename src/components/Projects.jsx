// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "LOW Office, Desktop App",
    link: "https://www.youtube.com/watch?v=3oAb8mh-GQY&t=3s",
    github: "https://github.com/Abdoomar2002/LowOffice",
    description:
      "Developed an application for legal business organization, facilitating case management and notification systems using .NET, EF, SQL, PDF reader, Excel reader, pop notification, and print files.",
    imageUrl: "/images/low-office.png", // Example path to project image
  },
  {
    id: 2,
    title: "Abu Fas, desktop App",
    link: "https://dekkat-eleangaz.000webhostapp.com/",
    github: "https://github.com/Abdoomar2002/AbuFas",
    description: `Managed the market's operations including billing, locker management, and salary management using
C#.NET, authentication and authorization, bill print, EF, SQL, multi-page, and archive.`,
    imageUrl: "/images/AbuFas.png", // Example path to project image
  },
  {
    id: 3,
    title: "Avvio Lighting, E-commerce web app",
    link: "https://avviolighting.com",
    github: "https://github.com/Abdoomar2002/AvvioLighting",
    description: `Developed a web app for a lighting factory to help customers explore different models and connect with the
sales team using React JS, routing, Node.js backend, state management, and handling side effects.`,
    imageUrl: "/images/avvioLighting.png", // Example path to project image
  },
  {
    id: 4,
    title: "DEKKAT ELENGAZ, Landing Page",
    link: "https://dekkat-eleangaz.000webhostapp.com/",
    github: "https://github.com/Abdoomar2002/dekat-alengaz",
    description:
      "Created a web project for a company providing insulation services using PHP, multi-page, email sending, and hosting.",
    imageUrl: "/images/dekkat.png", // Example path to project image
  },
  {
    id: 5,
    title: "HATLEY, Mobile App",
    link: "https://github.com/Abdoomar2002/Graduation_Project/tree/UserApp",
    github:
      "https://github.com/Abdoomar2002/Graduation_Project/tree/DeliveryApp",
    description: `Built a delivery app for easy ordering as a graduation project using React Native, navigation, backend
connectivity, real-time notification, and tracking system.`,
    imageUrl: "/images/Hatley.png", // Example path to project image
  },
  {
    id: 6,
    title: "Saf7a, dashboard",
    link: "https://saf7a.net/",
    github: "Private",
    description: `Created a dashboard for the Saf7a application using React JS, Redux, router, backend connectivity, and
beautiful UI, working with a mid-level teammate`,
    imageUrl: "/images/saf7a.png", // Example path to project image
  },
  {
    id: 7,
    title: "Eg Clubs, Landing Page",
    link: "http://egclubs.com/",
    github: "Private",
    description:
      "Created a web project for a company the manage all the clubs and hostel of the ministry of sport and youth.",
    imageUrl: "/images/Egclub.png", // Example path to project image
  },
  // Add more projects
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="p-4 border rounded shadow-lg overflow-hidden"
            >
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex justify-around">
                {project.github == "Private" ? (
                  <h3 className="text-2xl font-bold mb-2">Private repo</h3>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-2xl font-bold mb-2"
                  >
                    Github link
                  </a>
                )}
                <br />
                <a
                  href={project.link}
                  target="_blank"
                  className="text-2xl font-bold mb-2"
                >
                  Active link
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
