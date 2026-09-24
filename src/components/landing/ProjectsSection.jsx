import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    category: "Web Platform",
    name: "Northwind Commerce",
    desc: "A headless e-commerce platform handling 50k+ monthly orders with real-time inventory and automated fulfilment.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    outcome: "3x faster checkout",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    category: "ERP System",
    name: "Vertex Operations Cloud",
    desc: "Unified ERP connecting sales, inventory and finance across 12 business locations into one dashboard.",
    tags: ["Laravel", "MySQL", "AWS"],
    outcome: "50% less overhead",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  {
    category: "Mobile App",
    name: "Helix Field Service",
    desc: "iOS and Android app for field technicians with offline-first sync, live dispatch and photo reporting.",
    tags: ["Flutter", "Supabase", "Firebase"],
    outcome: "40% faster jobs",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl leading-[1.05] text-balance">
            Work that speaks for itself.
          </h2>
        </Reveal>

        <div className="mt-16 sm:mt-20 space-y-20 sm:space-y-28">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={p.name} delay={0.05}>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Image */}
                  <div className={`overflow-hidden rounded-lg bg-muted ${reversed ? "md:order-2" : ""}`}>
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>

                  {/* Content */}
                  <div className={reversed ? "md:order-1" : ""}>
                    <span className="text-sm font-medium text-primary">{p.category}</span>
                    <h3 className="mt-3 font-display font-bold text-3xl sm:text-4xl tracking-tight">{p.name}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed max-w-md text-pretty">{p.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-sm font-medium text-muted-foreground">{t}</span>
                      ))}
                    </div>
                    <div className="mt-8 flex items-center gap-6">
                      <span className="font-display font-semibold text-sm text-foreground">{p.outcome}</span>
                      <Link
                        to="/services"
                        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                      >
                        View Case Study
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}