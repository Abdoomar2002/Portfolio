// src/components/Certificates.js
import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Intership, itida",
    date: "2021",
    image: "/images/itida.png",
  },
  {
    title: "Code Challenge, Fatura",
    date: "2021",
    image: "/images/Fatura.jpg",
  },
  {
    title: "Code Challenge, Squadio",
    date: "2022",
    image: "/images/Squadio.png",
  },
  {
    title: "Scout, Assiut University",
    date: "2022",
    image: "/images/soft1.jpg",
  },
  {
    title: "Human For Good, Assiut University",
    date: "2021",
    image: "/images/sof2.jpg",
  },
];

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 bg-black"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Certificates</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        style={{ padding: 20 }}
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
            className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center flex-col gap-4"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-75 h-75 mr-4"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
              <p className="text-gray-400">{certificate.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
