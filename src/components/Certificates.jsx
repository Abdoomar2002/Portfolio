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
    image: "/images/fatura.jpg",
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
      className="py-20 "
    >
      <h2 className="text-4xl font-bold text-center mb-8">Certificates</h2>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        style={{ padding: 20 }}
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white text-black rounded-lg shadow-md flex items-center flex-col gap-4"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-75 h-75 mr-4"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold">{certificate.title}</h3>
              <p className="text-gray-500">{certificate.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
