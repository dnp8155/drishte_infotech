import React from "react";
import { ArrowRight, Globe, Cloud, Boxes, Smartphone, Search, Megaphone } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const services = [
  { icon: Globe, title: "Web Platforms", items: ["WordPress", "Shopify", "Wix Studio"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["AWS Cloud", "Migration", "DevOps"] },
  { icon: Boxes, title: "Custom Systems", items: ["ERP Solutions", "Workflows", "Integrations"] },
  { icon: Smartphone, title: "Mobile App", items: ["iOS App", "Android App", "Flutter"] },
  { icon: Search, title: "SEO Services", items: ["On-Page SEO", "Technical SEO", "Link Building"] },
  { icon: Megaphone, title: "Digital Marketing", items: ["PPC Campaigns", "Social Media", "Content Marketing"] },
];

export default function ExpertSolutions() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Expert Solutions
            </span>
            <h2 className="mt-3 font-display font-bold tracking-tight text-3xl sm:text-4xl text-balance">
              Expert solutions for every digital challenge.
            </h2>
          </div>
          <a
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary shrink-0"
          >
            View all 11+ services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group relative overflow-hidden h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 card-hover hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="w-5 h-5" strokeWidth={2} />
                  </span>
                  <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary/60" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Explore <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}