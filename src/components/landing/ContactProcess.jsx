import React from "react";
import { Check } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const steps = [
  "We review the business goal and current context.",
  "We suggest the right scope, timeline, and starting point.",
  "You receive a clear next step before any commitment.",
];

export default function ContactProcess() {
  return (
    <section className="py-20 sm:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What happens next
            </span>
            <h2 className="mt-3 font-display font-bold tracking-tight text-3xl sm:text-4xl text-balance">
              Clear next steps before the project begins.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-pretty max-w-md">
              You won't get a generic sales pitch — just a focused recommendation
              on the most useful next decision for your situation.
            </p>
          </Reveal>

          <div>
            <Stagger className="flex flex-col gap-4">
              {steps.map((s, i) => (
                <StaggerItem key={i}>
                  <div className="group flex items-start gap-5 rounded-2xl border border-border bg-background p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 card-hover">
                    <span className="grid place-items-center w-11 h-11 shrink-0 rounded-full bg-primary text-primary-foreground font-display font-bold tabular-nums shadow-md shadow-primary/30">
                      {i + 1}
                    </span>
                    <p className="pt-1.5 text-sm sm:text-base text-foreground/90 leading-relaxed">{s}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <div className="mt-4 inline-flex items-start gap-2.5 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                <span>Best for websites, e-commerce, ERP, mobile apps, cloud, SEO, marketing, and ongoing support inquiries.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}