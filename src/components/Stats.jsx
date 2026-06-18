import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { fadeUp, reveal, stagger } from "../utils/motion";

const stats = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 5, suffix: "", label: "Countries served" },
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 10, suffix: "+", label: "API integrations" },
];

const Counter = ({ to, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="relative py-10">
      <motion.div
        variants={stagger(0.12)}
        {...reveal}
        className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="card-premium px-6 py-8 text-center"
          >
            <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-[var(--text-secondary)]">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
