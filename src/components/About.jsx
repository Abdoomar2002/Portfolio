import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, fromLeft, reveal, stagger } from "../utils/motion";

const highlights = [
  {
    icon: "⚙️",
    title: "Backend (.NET)",
    desc: "ASP.NET Core Web API & Minimal APIs, EF Core, SQL Server — Clean Architecture, DDD & CQRS.",
  },
  {
    icon: "🎨",
    title: "Frontend",
    desc: "Angular & React (with Next.js), TypeScript, RxJS, Redux Toolkit & TanStack Query.",
  },
  {
    icon: "🔌",
    title: "Integrations",
    desc: "REST, SOAP, XML, SFTP, Webhooks & OAuth2 — Amazon SP-API, DATEV, and Odoo ERP.",
  },
  {
    icon: "🚀",
    title: "Delivery",
    desc: "Multi-tenant SaaS, JWT / Identity auth, SignalR real-time, PDF/Excel reporting & CI/CD.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          tag="About me"
          title="Full-Stack .NET engineer who"
          highlight="ships end-to-end"
          subtitle="As comfortable architecting a scalable ASP.NET Core back-end as I am crafting the Angular or React interface in front of it."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <motion.div variants={fromLeft} {...reveal} className="card-premium p-8">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I'm a <span className="text-white font-semibold">Full-Stack .NET Developer</span> with 3+
              years of experience designing and shipping secure, high-performance web applications end
              to end using <span className="text-white font-semibold">C#, ASP.NET Core, and Angular / React</span>.
              I have a strong command of Entity Framework Core, SQL Server, and TypeScript.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
              My work runs deep in <span className="text-white font-semibold">Clean Architecture, DDD,
              CQRS, multi-tenant SaaS</span>, RESTful APIs, and large-scale third-party integrations
              (REST, SOAP, XML, SFTP, OAuth2). I've led delivery, mentored developer teams, and
              partnered with international stakeholders across Egypt, Germany, Kuwait, Saudi Arabia,
              and the UAE — turning complex business requirements into reliable, scalable software.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Arabic — Native", "English — Fluent", "German — Basic", "Cairo, Egypt"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-5">
              <span className="text-primary font-semibold">Leadership:</span> Team Leader at Human For
              Good (2020–2024) — led 10 volunteers supporting 100+ students. I also share what I learn
              on my{" "}
              <a href="https://www.youtube.com/@Eng_AbdoOmar" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold">YouTube channel</a>{" "}
              (SOLID &amp; Design Patterns).
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div variants={stagger(0.1)} {...reveal} className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <motion.div key={h.title} variants={fadeUp} className="card-premium p-6">
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{h.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
