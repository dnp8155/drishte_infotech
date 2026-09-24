import React from "react";
import { Search, Code, Rocket, Headphones, ArrowRight } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const steps = [
  { n: "01", icon: Search, title: "Understand", desc: "We map your goals, users and constraints before a single line of code." },
  { n: "02", icon: Code, title: "Build", desc: "Iterative, transparent development with weekly demos and clean handoffs." },
  { n: "03", icon: Rocket, title: "Launch", desc: "Staged rollouts, performance and SEO checks before you go live." },
  { n: "04", icon: Headphones, title: "Support", desc: "Ongoing monitoring, maintenance and a team that stays accountable." },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            How We Work
          </span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-3xl sm:text-4xl text-balance">
            From first idea to live system, Drishti keeps the full stack connected.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <StaggerItem key={s.n}>
              <div className="group relative h-full rounded-2xl border border-border bg-background p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 card-hover hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="w-6 h-6" strokeWidth={2} />
                  </span>
                  <span className="font-display font-bold text-2xl text-muted-foreground/30 tabular-nums">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-5 h-5 text-border -translate-y-1/2" />
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}