import React from "react";
import {
  Globe, Cloud, Boxes, Smartphone, Search, Megaphone,
  ShieldCheck, Workflow, BarChart3, Server, Zap, LifeBuoy, ArrowRight,
} from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const groups = [
  {
    label: "Build",
    items: [
      { icon: Globe, title: "Web Platforms", desc: "WordPress, Shopify & Wix Studio builds that load fast and convert.", tags: ["WordPress", "Shopify", "Wix"], core: true },
      { icon: Boxes, title: "Custom Systems", desc: "ERP, workflows and integrations tailored to your team.", tags: ["ERP", "Workflows", "APIs"], core: true },
      { icon: Smartphone, title: "Mobile Apps", desc: "Native iOS, Android and cross-platform Flutter apps.", tags: ["iOS", "Android", "Flutter"] },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { icon: Cloud, title: "Cloud & DevOps", desc: "AWS architecture, migration and CI/CD pipelines that scale.", tags: ["AWS", "Migration", "DevOps"], core: true },
      { icon: ShieldCheck, title: "Security & Audits", desc: "Pen testing, hardening and compliance reviews.", tags: ["Audit", "Hardening", "Compliance"] },
      { icon: Zap, title: "Performance", desc: "Speed optimization and Core Web Vitals tuning.", tags: ["Speed", "CWV", "CDN"] },
      { icon: LifeBuoy, title: "Support & Maintenance", desc: "Proactive uptime, monitoring and a team that responds.", tags: ["Uptime", "Monitoring", "SLA"] },
    ],
  },
  {
    label: "Grow",
    items: [
      { icon: Search, title: "SEO Services", desc: "On-page, technical and link building for durable rankings.", tags: ["On-Page", "Technical", "Links"] },
      { icon: Megaphone, title: "Digital Marketing", desc: "PPC, social and content engineered around pipeline.", tags: ["PPC", "Social", "Content"] },
      { icon: BarChart3, title: "Analytics & Data", desc: "Dashboards and reporting that make decisions obvious.", tags: ["BI", "Dashboards", "ETL"] },
    ],
  },
  {
    label: "Optimize",
    items: [
      { icon: Workflow, title: "Automation", desc: "Remove repetitive work with reliable pipelines.", tags: ["Zapier", "Scripts", "Pipelines"] },
      { icon: Server, title: "IT Consulting", desc: "Architecture reviews and roadmap planning sessions.", tags: ["Roadmap", "Review", "Strategy"] },
    ],
  },
];

export default function CapabilityStack() {
  return (
    <section id="capability" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What We Build
          </span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Everything your digital presence needs in one place.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Each service can stand alone or connect into a broader delivery plan —
            so you can start small and expand without changing partners.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {groups.map((g) => (
            <div key={g.label}>
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {g.label}
                  </span>
                  <span className="flex-1 h-px bg-border" />
                </div>
              </Reveal>
              <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" gap={0.05}>
                {g.items.map((s) => (
                  <StaggerItem key={s.title}>
                    <div
                      className={`group relative h-full rounded-2xl border p-6 card-hover hover:-translate-y-1 ${
                        s.core
                          ? "border-primary/30 bg-primary/[0.03] hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
                          : "border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`grid place-items-center w-12 h-12 rounded-xl transition-colors ${
                          s.core
                            ? "bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                            : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                        }`}>
                          <s.icon className="w-6 h-6" strokeWidth={1.75} />
                        </span>
                        {s.core && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/70">
                            Core
                          </span>
                        )}
                      </div>
                      <h3 className="mt-4 font-display font-semibold text-lg">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {s.tags.map((t) => (
                          <span key={t} className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="absolute bottom-6 right-6 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}