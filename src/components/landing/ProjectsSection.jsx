import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

import { projectsData } from "@/data/projects";

const projects = projectsData.filter((p) => p.featured);

export default function ProjectsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Case Studies & Showcase</span>
              <h2 className="mt-2 font-display font-bold tracking-tight text-4xl sm:text-5xl leading-[1.05] text-balance">
                Work that speaks for itself.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Explore All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 sm:mt-20 space-y-20 sm:space-y-28">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            const projectTitle = p.title || p.name;
            const projectDesc = p.shortDesc || p.desc;
            return (
              <Reveal key={projectTitle} delay={0.05}>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Image */}
                  <div className={`overflow-hidden rounded-xl bg-muted border border-border/60 shadow-sm ${reversed ? "md:order-2" : ""}`}>
                    <img
                      src={p.image}
                      alt={projectTitle}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>

                  {/* Content */}
                  <div className={reversed ? "md:order-1" : ""}>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                    <h3 className="mt-3 font-display font-bold text-3xl sm:text-4xl tracking-tight">{projectTitle}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed max-w-md text-pretty">{projectDesc}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50">{t}</span>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                      <span className="font-display font-semibold text-sm text-foreground">{p.outcome}</span>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          Live Site
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}
                      <Link
                        to="/portfolio"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Case Study →
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:shadow-md hover:shadow-primary/25 hover:-translate-y-0.5 transition-all"
          >
            View Full Portfolio Archive <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}