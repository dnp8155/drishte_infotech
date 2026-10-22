import React from "react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const rows = [
  { num: "01", title: "Not Just Code", desc: "We understand the workflow behind the software." },
  { num: "02", title: "Not Just Design", desc: "We design experiences around real users and real operations." },
  { num: "03", title: "Not Just Delivery", desc: "We stay involved from planning through launch." },
  { num: "04", title: "Not Just Launch", desc: "We help maintain, optimize and evolve what we build." },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Difference
            </span>
            <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Technology decisions with business context.
            </h2>
          </Reveal>

          <Stagger className="flex flex-col" gap={0.06}>
            {rows.map((r, i) => (
              <StaggerItem key={r.num}>
                <div className={`group flex items-start gap-6 py-7 ${i !== 0 ? "border-t border-border" : ""}`}>
                  <span className="font-display font-bold text-2xl text-primary/30 tabular-nums shrink-0 group-hover:text-primary transition-colors">
                    {r.num}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{r.title}</h3>
                    <p className="mt-1.5 text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}