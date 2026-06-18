import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, reveal, stagger } from "../utils/motion";

const degree = {
  title: "B.Sc. in Computer & Information Sciences",
  org: "Assiut University",
  period: "10/2020 – 07/2024",
  meta: "CGPA 3.2",
  description:
    "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management, and Operating Systems.",
};

const learning = [
  { title: "ASP.NET Core 9 & Entity Framework Core", org: "Udemy", year: "2025" },
  { title: "Design Patterns & SOLID Principles", org: "Udemy — Dmitri Nesteruk", year: "2025" },
  { title: "Microservices Architecture & DDD", org: "Udemy", year: "2025" },
  { title: "Angular — Complete Guide", org: "Udemy — Maximilian Schwarzmüller", year: "2024" },
  { title: "React.js Masterclass", org: "Udemy — Maximilian Schwarzmüller", year: "2023" },
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          tag="Education"
          title="Degree &"
          highlight="continuous learning"
          subtitle="A computer-science degree backed by a steady habit of hands-on, architecture-focused learning."
        />

        {/* Degree */}
        <motion.div variants={fadeUp} {...reveal} className="card-premium p-7 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white">{degree.title}</h3>
              <p className="text-primary font-medium">{degree.org} · {degree.meta}</p>
            </div>
            <span className="chip whitespace-nowrap self-start">{degree.period}</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">{degree.description}</p>
        </motion.div>

        {/* Continuous learning */}
        <motion.div variants={stagger(0.08)} {...reveal} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {learning.map((e, i) => (
            <motion.div key={i} variants={fadeUp} className="card-premium p-6">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-bold text-white leading-snug">{e.title}</h3>
                <span className="chip whitespace-nowrap">{e.year}</span>
              </div>
              <p className="text-primary text-sm font-medium">{e.org}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
