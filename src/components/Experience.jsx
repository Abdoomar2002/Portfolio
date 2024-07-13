// src/components/Experience.js
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const jobs = [
    {
      title: "Instructor, Human For Good",
      date: "12/2023 – present",
      description:
        "Taught a comprehensive course on React JS and Desktop Application from basics to advanced levels.",
    },
    {
      title: "Software Engineer, Free lancer",
      date: "12/2022 – present",
      description: `Developed legal business organization applications to help lawyers manage cases,
notifications, and file organization.
- Created a web application for Avvio Lighting to help customers discover different
models and contact the sales team.
12/2022 – present
- Built a dashboard for the application Saf7a,EgClubs `,
    },
    {
      title: "Coach, TechnoStem Academy",
      date: "12/2023 – 2/2024",
      description: `Coached students in a hardware course and guided them in competition
participation (First Lego League)`,
    },
    {
      title: "intership, ITIDA, NTI",
      date: "08/2021 – 9/2021",
      description: ` Completed 90 hours in IoT technology and 30 hours in soft skills training.
`,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gradient-to-r from-indigo-950 to-purple-900 text-white"
      style={{ paddingLeft: 20, paddingRight: 20 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Professional Experience
        </h2>
        {jobs.map((e) => {
          return (
            <div className="mb-8">
              <h3 className="text-2xl font-bold">{e.title}</h3>
              <p className="text-lg font-semibold">{e.title}</p>
              <ul className="list-disc list-inside">
                <li>{e.description}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>

        {/* Example of a job entry */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold">Instructor, Human For Good</h3>
          <p className="text-lg font-semibold">12/2023 – present</p>
          <ul className="list-disc list-inside">
            <li>
              Taught a comprehensive course on React JS and Desktop Application
              from basics to advanced levels.
            </li>
          </ul>
        </div>

        {/* Add more job entries as needed */}
      </div>
    </motion.div>
  );
};

export default Experience;
