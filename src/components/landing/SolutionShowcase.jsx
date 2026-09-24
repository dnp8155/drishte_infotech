import React from "react";
import { Workflow, Database, ShieldCheck, Clock, TrendingUp, Users } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const challenges = [
  {
    icon: Workflow,
    title: "Manual, repetitive operations",
    desc: "We automate workflows that slow your team down — from data entry to approvals to reporting.",
    outcome: "Save 15+ hours / week",
  },
  {
    icon: Database,
    title: "Disconnected systems",
    desc: "We unify your tools into one connected platform so data flows and teams stay aligned.",
    outcome: "Single source of truth",
  },
  {
    icon: ShieldCheck,
    title: "Security and compliance gaps",
    desc: "We build with security best practices — authentication, encryption and access control built in.",
    outcome: "Enterprise-grade security",
  },
  {
    icon: Clock,
    title: "Slow, outdated processes",
    desc: "We replace spreadsheets and manual tracking with real-time dashboards and automated alerts.",
    outcome: "Real-time visibility",
  },
  {
    icon: TrendingUp,
    title: "Scaling without breaking",
    desc: "We architect systems that handle growth — more users, more data, more locations — without rewrites.",
    outcome: "Built to scale 10x",
  },
  {
    icon: Users,
    title: "Poor customer experience",
    desc: "We design intuitive interfaces that make every interaction faster, clearer and more reliable.",
    outcome: "Higher satisfaction",
  },
];

export default function SolutionShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What We Solve</span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Real business challenges, solved with technology.
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty leading-relaxed">
            We don't just write code — we understand the problem first, then build the
            right system to solve it.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" gap={0.06}>
          {challenges.map((c) => (
            <StaggerItem key={c.title}>
              <div className="group h-full flex flex-col rounded-2xl border border-border bg-card p-7 card-hover hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="w-6 h-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {c.outcome}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}