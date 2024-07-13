// src/components/Education.js
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educations = [
    {
      id: 1,
      school: "Bachelor, Assiut University-Computer and Information",
      date: "10/2020 – 07/2024",
      description: "Bachelor's Degree in Computer Science with a CGPA of 3.2",
    },
    {
      id: 2,
      school: "Web Camp, Udemy",
      date: "04/2022 – 9/2022",
      description: "Completed Angela Yu's course",
    },
    {
      id: 3,
      school: "Desktop Application, College Course",
      date: "10/2022 - 1/2023",
      description:
        "Learned the basics of .NET Framework and desktop application development.",
    },
    {
      id: 4,
      school: "React JS, Udemy",
      date: "10/2022 - 1/2023",
      description: "Completed a course by Maximilian Schwarzmuller",
    },
    {
      id: 5,
      school: "React Native",
      date: "1/2024 - 4/2024",
      description: "Completed a course by Maximilian Schwarzmuller",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gradient-to-r from-indigo-950 to-purple-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Education</h2>
        {educations.map((e) => (
          <div>
            <h3 className="text-2xl font-bold">{e.school}</h3>
            <p className="text-lg font-semibold">{e.date}</p>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
