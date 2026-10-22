import React from "react";
import { Boxes, TrendingUp, Workflow, LifeBuoy } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const cards = [
  { icon: Boxes, title: "Custom Systems", desc: "ERP, workflows and integrations tailored to how your team actually works." },
  { icon: TrendingUp, title: "Growth Marketing", desc: "SEO, PPC and content engineered around pipeline, not vanity metrics." },
  { icon: Workflow, title: "Automation", desc: "Remove repetitive work with reliable pipelines that run while you sleep." },
  { icon: LifeBuoy, title: "Support & Monitoring", desc: "Proactive uptime, maintenance and a team that picks up on the first ring." },
];

const tags = ["Reliable delivery", "Scalable systems", "Future-ready tech"];

export default function WhatWeDo() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What We Do
          </span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-3xl sm:text-4xl text-balance">
            Everything your business needs to run online — under one roof.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid sm:grid-cols-2 gap-4">
          {cards.map((c) => (
            <StaggerItem key={c.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 card-hover hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center w-14 h-14 shrink-0 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <c.icon className="w-7 h-7" strokeWidth={2} />
                  </span>
                  <h3 className="font-display font-semibold text-xl">{c.title}</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}