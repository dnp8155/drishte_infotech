import React from "react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const groups = [
  { label: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript"] },
  { label: "Backend", items: ["Node.js", "Express", "Laravel", "PHP"] },
  { label: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"] },
  { label: "Cloud", items: ["AWS", "Docker", "CI/CD"] },
  { label: "CMS & Commerce", items: ["WordPress", "WooCommerce", "Shopify"] },
];

export default function TechnologyStack() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Stack
          </span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Modern tools. Practical engineering.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8" gap={0.05}>
          {groups.map((g) => (
            <StaggerItem key={g.label}>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground pb-3 border-b border-border">
                  {g.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium hover:border-primary/40 hover:bg-primary/5 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}