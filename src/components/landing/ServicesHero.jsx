import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Cloud, Link2 } from "lucide-react";
import Reveal from "./Reveal";

const statCards = [
  { value: "11+", label: "Core Services" },
  { value: "250+", label: "Projects Delivered" },
  { value: "100+", label: "Happy Clients" },
];

const miniCards = [
  { icon: Rocket, title: "Launch", desc: "Ship fast with a tested, ready-to-grow foundation." },
  { icon: Cloud, title: "Scale", desc: "Cloud architecture that grows with your demand." },
  { icon: Link2, title: "Grow", desc: "Marketing & SEO that compounds your reach." },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-radial-fade" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h1 className="mt-6 font-display font-bold tracking-tight text-balance text-[2.6rem] sm:text-5xl lg:text-[64px] leading-[1.05]">
              Expert digital services from{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-500 bg-clip-text text-transparent">
                launch to scale
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed max-w-xl">
              Choose the exact support your business needs — from a single landing
              page to a full cloud migration and growth engine. Every service is built
              around measurable outcomes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#capability"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:bg-accent transition-colors"
              >
                Explore Services
              </a>
            </div>
          </Reveal>

          {/* Right - cohesive dashboard */}
          <Reveal delay={0.15} className="relative">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 -z-10 blur-3xl bg-primary/12 rounded-full" />

              <div className="relative rounded-2xl border border-border bg-card p-5 shadow-xl shadow-primary/5">
                {/* Dashboard header */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">Drishte Dashboard</span>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {statCards.map((s) => (
                    <div key={s.label} className="rounded-xl border border-border bg-muted/40 p-4 text-center">
                      <div className="font-display font-bold text-2xl sm:text-3xl text-primary tabular-nums leading-none">
                        {s.value}
                      </div>
                      <div className="mt-1.5 text-[10px] sm:text-[11px] text-muted-foreground font-medium leading-tight">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Capability cards */}
                <div className="grid sm:grid-cols-3 gap-3 mt-3">
                  {miniCards.map((c) => (
                    <div
                      key={c.title}
                      className="group rounded-xl border border-border bg-background p-4 hover:border-primary/40 transition-colors"
                    >
                      <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <c.icon className="w-5 h-5" strokeWidth={2} />
                      </span>
                      <h3 className="mt-3 font-display font-semibold text-sm">{c.title}</h3>
                      <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}