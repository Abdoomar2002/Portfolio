import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, reveal, stagger } from "../utils/motion";

const certificates = [
  { title: "Internship — ITIDA", date: "2021", image: "/images/itida.png" },
  { title: "Code Challenge — Fatura", date: "2021", image: "/images/Fatura.jpg" },
  { title: "Code Challenge — Squadio", date: "2022", image: "/images/Squadio.png" },
  { title: "Scout Leadership — Assiut University", date: "2022", image: "/images/soft1.jpg" },
  { title: "Human For Good — Assiut University", date: "2021", image: "/images/sof2.jpg" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          tag="Achievements"
          title="Certificates &"
          highlight="recognition"
          subtitle="Internships, code challenges, and community work along the way."
        />

        <motion.div variants={stagger(0.08)} {...reveal} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c, i) => (
            <motion.div key={i} variants={fadeUp} className="card-premium overflow-hidden group">
              <div className="h-44 overflow-hidden bg-white/5">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white leading-snug">{c.title}</h3>
                <p className="text-sm text-primary mt-1">{c.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
