import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Abdoomar2002",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdo-omar-b95301363/",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Eng_AbdoOmar",
    path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
  },
];

const floatingBadges = [
  { label: ".NET", className: "-left-6 top-10", delay: 0 },
  { label: "Angular", className: "-right-4 top-4", delay: 0.4 },
  { label: "React", className: "-left-10 bottom-16", delay: 0.8 },
  { label: "Next.js", className: "-right-8 bottom-8", delay: 1.2 },
];

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full-Stack .NET Developer",
        "ASP.NET Core Engineer",
        ".NET &amp; Angular Specialist",
        "React &amp; Next.js Developer",
        "Clean Architecture &amp; DDD",
      ],
      typeSpeed: 65,
      backSpeed: 35,
      backDelay: 1800,
      startDelay: 600,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-tag mb-6"
          >
            Open to new opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mt-4"
          >
            Hi, I'm <span className="text-gradient">Abdelrahman&nbsp;Omar</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-xl sm:text-2xl font-display text-[var(--text-secondary)] h-9"
          >
            <span ref={el} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I build secure, high-performance web applications end-to-end with{" "}
            <span className="text-white font-semibold">C#, ASP.NET Core</span> and{" "}
            <span className="text-white font-semibold">Angular / React</span> — backed by Clean
            Architecture, DDD, CQRS, and large-scale third-party integrations. 3+ years delivering
            for clients across Egypt, Germany, and the Gulf.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#projects" className="btn-primary">
              View my work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="mailto:abdo20omar20@gmail.com" className="btn-ghost">
              Get in touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex gap-3 justify-center lg:justify-start"
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.08 }}
                className="grid place-items-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] text-[var(--text-secondary)] hover:text-primary hover:border-primary/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 60 }}
          className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80"
        >
          {/* spinning conic ring */}
          <div className="absolute inset-0 rounded-full ring-conic animate-spin-slow blur-[2px] opacity-90" />
          <div className="absolute inset-[6px] rounded-full bg-background" />
          {/* glow */}
          <div className="absolute inset-0 rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, #2dd4bf, transparent 65%)" }} />
          <img
            src="/images/profile.jpeg"
            alt="Abdelrahman Omar"
            className="absolute inset-[12px] rounded-full object-cover w-[calc(100%-24px)] h-[calc(100%-24px)] border border-white/10"
          />

          {/* floating tech badges */}
          {floatingBadges.map((b) => (
            <motion.span
              key={b.label}
              className={`absolute ${b.className} chip !bg-background/80 !backdrop-blur-md shadow-lg`}
              style={{ animation: `floatY 6s ease-in-out ${b.delay}s infinite` }}
            >
              {b.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="grid place-items-center w-6 h-10 rounded-full border border-white/15">
          <motion.span
            animate={{ y: [2, 12, 2] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
