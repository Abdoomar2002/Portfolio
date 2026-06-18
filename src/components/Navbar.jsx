import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 h-14 transition-all duration-300 ${
            scrolled
              ? "bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
              : "border border-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl ring-conic animate-spin-slow">
              <span className="absolute inset-[2px] rounded-[10px] bg-background grid place-items-center font-display font-bold text-white">
                A
              </span>
            </span>
            <span className="font-display font-semibold text-white hidden sm:block tracking-tight">
              Abdelrahman<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? "text-white" : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(90deg,#2dd4bf,#7c5cff)" }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden sm:inline-flex btn-primary !py-2 !px-4 text-sm">
              Let's talk
            </a>
            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden grid place-items-center w-10 h-10 rounded-xl border border-white/10 text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 rounded-2xl bg-background/95 backdrop-blur-xl border border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-2">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium ${
                    active === link.id ? "text-white bg-white/5" : "text-[var(--text-secondary)]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">
                Let's talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
