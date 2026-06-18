import React from "react";
import { motion } from "framer-motion";
import { fadeUp, reveal } from "../utils/motion";

// Consistent eyebrow + title + subtitle block used at the top of each section.
const SectionHeader = ({ tag, title, highlight, subtitle, align = "center" }) => {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <motion.div
      variants={fadeUp}
      {...reveal}
      className={`flex flex-col gap-4 max-w-2xl mb-14 ${alignment}`}
    >
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && <p className="text-base text-[var(--text-secondary)] leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeader;
