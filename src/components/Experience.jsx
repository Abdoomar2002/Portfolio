import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, reveal, stagger } from "../utils/motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tecsee",
    location: "Onsite · Cairo, Egypt",
    period: "08/2025 – Present",
    points: [
      "Delivering full-stack features end-to-end with ASP.NET Core and Angular / React as part of an onsite engineering team.",
      "Building secure, well-tested .NET solutions following Clean Architecture, SOLID principles, and proven design patterns.",
    ],
    technologies: ["ASP.NET Core", "C#", "EF Core", "Angular", "React", "SQL Server"],
  },
  {
    title: "Full Stack Developer — International Clients",
    company: "Independent / Contract",
    location: "Remote · Egypt, Germany, Kuwait, KSA, UAE",
    period: "12/2022 – 08/2025",
    points: [
      "Built and scaled AdlerDoo — a multi-tenant DDD platform unifying German & European marketplaces with Odoo ERP, architected as a public webhook/OAuth2 hub plus an on-premise app deployed per customer.",
      "Engineered end-to-end marketplace integrations via XML & SFTP for Galaxus, Media Markt, and Netto, with bidirectional order sync, plus SOAP integrations with DB Schenker & DPD carriers for labels, booking, and tracking.",
      "Implemented Amazon integrations and financial settlement reconciliation across Amazon, Kaufland, eBay, and Otto — plus DATEV accounting export for German tax compliance.",
      "Led and mentored a team of 2–4 developers — code reviews, integration patterns, and scalable, maintainable backend delivery.",
      "Architected scalable ASP.NET Core backends (Clean Architecture, CQRS, EF Core) with React, Angular & Next.js front-ends — JWT/Identity auth, SignalR real-time, and PDF/Excel reporting.",
      "Acted as sole technical lead for a car-rental platform, owning backend, admin dashboard, website, and server infrastructure end to end.",
    ],
    technologies: ["ASP.NET Core", ".NET", "Angular", "React", "Next.js", "EF Core", "SQL Server", "OAuth2", "SOAP", "SignalR"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader
          tag="Experience"
          title="My professional"
          highlight="journey"
          subtitle="Leading delivery and shipping production .NET software for clients across Egypt, Germany, and the Gulf."
        />

        <motion.div variants={stagger(0.12)} {...reveal} className="relative">
          {/* gradient timeline line */}
          <div
            className="absolute left-4 sm:left-5 top-2 bottom-2 w-0.5"
            style={{ background: "linear-gradient(180deg,#2dd4bf,#7c5cff,#ff4d8d)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={fadeUp} className="relative pl-12 sm:pl-16">
                {/* node */}
                <span className="absolute left-4 sm:left-5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-glow" />
                <div className="card-premium p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-[var(--text-muted)]">{exp.location}</p>
                    </div>
                    <span className="chip whitespace-nowrap self-start">{exp.period}</span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
