import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, reveal, stagger } from "../utils/motion";

const projects = [
  {
    id: "adlerdoo",
    title: "AdlerDoo — Marketplace & ERP Platform",
    category: "Full-Stack",
    technologies: ["ASP.NET Core", ".NET", "EF Core", "SQL Server", "Odoo", "OAuth2"],
    description:
      "Enterprise multi-tenant DDD platform integrating European marketplaces and shipping carriers with Odoo ERP via XML, SFTP, SOAP & OAuth2 — a public webhook hub plus an on-premise app per customer.",
    timeline: "2023 – Present",
    monogram: "AD",
    featured: true,
  },
  {
    id: "meine-anzeige",
    title: "Meine Anzeige — Ad-Space Marketplace",
    category: "Full-Stack",
    technologies: ["ASP.NET Core 8", "EF Core", "Identity", "SignalR", "Angular"],
    description:
      "Full-stack German marketplace connecting advertisers with advertising-space owners — real-time messaging and image-rich listings with Google Maps locations.",
    timeline: "2024 – 2025",
    monogram: "MA",
    featured: true,
  },
  {
    id: "academic-accounting",
    title: "Academic Accounting System",
    category: "Full-Stack",
    technologies: ["ASP.NET Core 8", "Minimal APIs", "Vertical Slice", "EF Core", "JWT", "Angular"],
    description:
      "Financial & operations platform with role-based access, installment plans, and daily cash reconciliation (system vs. actual balance per payment method).",
    timeline: "2025",
    monogram: "AA",
    featured: true,
  },
  {
    id: "agroreuse",
    title: "Agroreuse — Circular-Economy Marketplace",
    category: "Full-Stack",
    technologies: [".NET 10", "Clean Architecture", "MediatR", "EF Core", "Angular"],
    description:
      "Marketplace for reusing agricultural by-products, built on Clean Architecture with CQRS, real-time updates, and Firebase notifications.",
    timeline: "2025",
    monogram: "AG",
    featured: true,
  },
  {
    id: 5,
    title: "Saf7a — Education Platform",
    category: "Full-Stack",
    technologies: ["React", ".NET", "Redux", "JWT", "SignalR"],
    description:
      "A full education-management platform for academic centers with a real-time dashboard, role-based access, and live reporting.",
    timeline: "2024 – Present",
    image: "/images/saf7a.png",
    featured: true,
  },
  {
    id: 8,
    title: "DSRent — Car-Rental Platform",
    category: "Full-Stack",
    technologies: ["Next.js", ".NET", "SQL Server", "SMS API"],
    description:
      "Sole technical lead — owned the backend, admin dashboard, website, and server infrastructure, hardening authentication, data access, and query performance.",
    timeline: "2024",
    image: "/images/dsrent.png",
    featured: true,
  },
  {
    id: "products-api",
    title: "Products Management API",
    category: "Full-Stack",
    technologies: ["ASP.NET Core 8", "CQRS", "MediatR", "EF Core", "Angular"],
    description:
      "A reference API that keeps category product-counts in sync via Domain Events — without coupling aggregates through foreign keys.",
    timeline: "2025",
    monogram: "PM",
  },
  {
    id: 14,
    title: "Tollab — Learning Platform",
    category: "Full-Stack",
    technologies: ["Angular", ".NET", "TypeScript"],
    description:
      "An e-learning platform delivering videos, homework, and tests across all academic levels — built with a modern Angular front-end.",
    timeline: "2025 – Present",
    image: "/images/tollab.png",
  },
  {
    id: 13,
    title: "ERP System & Landing (Juman)",
    category: "Full-Stack",
    technologies: ["Angular", "Next.js", ".NET"],
    description: "Kicked off an enterprise ERP system and a marketing landing page for an intelligent-systems company.",
    timeline: "2025",
    image: "/images/erp.png",
  },
  {
    id: 15,
    title: "Egy Courses Platform",
    category: "Full-Stack",
    technologies: ["React", "REST API", "Payments"],
    description: "An online-courses marketplace with affiliate marketing, payments, and an admin management dashboard.",
    timeline: "2024 – 2025",
    image: "/images/egy-courses.png",
  },
  {
    id: 9,
    title: "Police Case Management",
    category: "Desktop",
    technologies: ["C#", ".NET", "SQL Server"],
    description: "A multi-station case & records management system deployed across six police stations, with Excel/PDF export.",
    timeline: "2024",
    image: "/images/police.png",
  },
  {
    id: 11,
    title: "Autism Evaluation App",
    category: "Desktop",
    technologies: ["C#", ".NET", "Reporting"],
    description: "A clinical tool implementing a standardized autism rating scale to assess child development and generate reports.",
    timeline: "2025",
    image: "/images/gilliam.png",
  },
  {
    id: 12,
    title: "HR Training Management",
    category: "Desktop",
    technologies: ["C#", ".NET", "SQL Server"],
    description: "Tracks training programs, attendees, departments, costs, and generates detailed financial reports.",
    timeline: "2025",
    image: "/images/hr.png",
  },
  {
    id: 10,
    title: "Supermarket POS",
    category: "Desktop",
    technologies: ["C#", ".NET", "SQLite"],
    description: "A user-friendly cashier (point-of-sale) system for managing inventory and daily transactions.",
    timeline: "2024",
    image: "/images/cash.png",
  },
  {
    id: 4,
    title: "Gold Market Management",
    category: "Desktop",
    technologies: ["C#", ".NET", "SQLite"],
    description: "Tracks inventory, customer borrowing, weight calculations, and gold categories for a jewelry business.",
    timeline: "2023 – 2024",
    image: "/images/gold.png",
  },
  {
    id: 1,
    title: "Lawyer Case Management",
    category: "Desktop",
    technologies: ["C#", "WinForms", "SQLite"],
    description: "Manages legal cases, sessions, and reminders for a law office, with notifications and Excel report export.",
    timeline: "2022 – 2023",
    image: "/images/low-office.png",
  },
];

const filters = ["All", "Full-Stack", "Desktop"];

const covers = [
  "linear-gradient(135deg,#2dd4bf,#0ea5e9)",
  "linear-gradient(135deg,#7c5cff,#2dd4bf)",
  "linear-gradient(135deg,#ff4d8d,#7c5cff)",
  "linear-gradient(135deg,#38bdf8,#6366f1)",
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          tag="Portfolio"
          title="Selected"
          highlight="projects"
          subtitle="Full-stack .NET platforms with Angular & React front-ends, enterprise integrations, and a few standout desktop systems."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "text-background bg-primary shadow-glow"
                  : "text-[var(--text-secondary)] border border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={stagger(0.06)}
          {...reveal}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                layout
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8 }}
                className="card-premium overflow-hidden group"
              >
                <div className="relative h-44 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className="w-full h-full grid place-items-center transition-transform duration-500 group-hover:scale-110"
                      style={{ background: covers[i % covers.length] }}
                    >
                      <span className="font-display text-5xl font-bold text-white/90 drop-shadow">{project.monogram}</span>
                      <div className="absolute inset-0 grid-bg opacity-25" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                  {project.featured && (
                    <span className="absolute top-3 left-3 chip !bg-primary !text-background !border-primary font-bold">
                      ★ Featured
                    </span>
                  )}
                  <span className="absolute top-3 right-3 chip !bg-background/70 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white leading-snug mb-2">{project.title}</h3>
                  <p className="text-xs text-primary font-medium mb-3">{project.timeline}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={fadeUp} {...reveal} className="text-center mt-12">
          <a href="https://github.com/Abdoomar2002" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Explore more on GitHub
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
