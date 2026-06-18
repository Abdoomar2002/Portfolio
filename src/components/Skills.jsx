import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { fadeUp, reveal, stagger } from "../utils/motion";

const skills = {
  "Languages": {
    icon: "🔤",
    items: ["C#", "TypeScript", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  "Backend (.NET)": {
    icon: "⚙️",
    items: ["ASP.NET Core", "Web API", "Minimal APIs", ".NET 8 / 9 / 10", "EF Core", "LINQ", "SignalR", "RESTful APIs"],
  },
  "Frontend": {
    icon: "🎨",
    items: ["Angular", "React.js", "Next.js", "RxJS", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Bootstrap", "SCSS"],
  },
  "Architecture & Patterns": {
    icon: "🧩",
    items: ["Clean Architecture", "DDD", "CQRS", "MediatR", "Vertical Slice", "Multi-Tenant SaaS", "SOLID", "Design Patterns", "DI"],
  },
  "APIs & Integrations": {
    icon: "🔌",
    items: ["REST", "SOAP", "XML", "SFTP", "Webhooks", "OAuth2", "JWT", "ASP.NET Identity", "Amazon SP-API", "DATEV", "Odoo ERP"],
  },
  "Databases & DevOps": {
    icon: "🛠️",
    items: ["SQL Server", "PostgreSQL", "SQLite", "T-SQL", "Docker", "Git & CI/CD", "IIS", "Windows Services", "Azure", "Swagger", "Serilog", "xUnit"],
  },
};

const marquee = ["C#", ".NET", "ASP.NET Core", "Angular", "React", "Next.js", "TypeScript", "EF Core", "SQL Server", "CQRS", "DDD", "SignalR", "Docker", "Azure"];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          tag="Skills"
          title="My technical"
          highlight="toolkit"
          subtitle="The .NET-centric stack I rely on to take a product from first commit to production — paired with modern Angular and React front-ends."
        />

        <motion.div
          variants={stagger(0.08)}
          {...reveal}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {Object.entries(skills).map(([category, { icon, items }]) => (
            <motion.div key={category} variants={fadeUp} className="card-premium p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-2xl group-hover:scale-110 transition-transform">
                  {icon}
                </span>
                <h3 className="text-lg font-bold text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* infinite tech marquee */}
      <div className="marquee mt-14 py-4 border-y border-white/5">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="font-display text-2xl sm:text-3xl font-semibold text-white/15 px-6 whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
