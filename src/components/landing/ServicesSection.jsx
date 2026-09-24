import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Cloud,
  Workflow,
  TrendingUp,
  Search,
  Code,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import Reveal from "./Reveal";

const features = [
  { icon: Globe, title: "Website and e-commerce launches" },
  { icon: Cloud, title: "Cloud setup, migration, and support" },
  { icon: Workflow, title: "ERP and workflow automation" },
  { icon: TrendingUp, title: "SEO and digital growth execution" },
];

const cards = [
  {
    num: "01",
    icon: Search,
    title: "Understand",
    desc: "We map your business goals, users and constraints before writing code.",
    accent: "blue",
  },
  {
    num: "02",
    icon: Code,
    title: "Build",
    desc: "Iterative, transparent development with weekly demos and feedback loops.",
    accent: "emerald",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Launch",
    desc: "Staged rollouts, performance and security checks before going live.",
    accent: "violet",
  },
  {
    num: "04",
    icon: LifeBuoy,
    title: "Support",
    desc: "Monitoring, maintenance and ongoing optimisation after launch.",
    accent: "amber",
  },
];

const accentMap = {
  blue: {
    border: "border-blue-200",
    iconBg: "bg-blue-50 text-blue-600",
    num: "text-blue-400",
    hover: "hover:border-blue-400 hover:shadow-blue-100",
  },
  emerald: {
    border: "border-emerald-200",
    iconBg: "bg-emerald-50 text-emerald-600",
    num: "text-emerald-400",
    hover: "hover:border-emerald-400 hover:shadow-emerald-100",
  },
  violet: {
    border: "border-violet-200",
    iconBg: "bg-violet-50 text-violet-600",
    num: "text-violet-400",
    hover: "hover:border-violet-400 hover:shadow-violet-100",
  },
  amber: {
    border: "border-amber-200",
    iconBg: "bg-amber-50 text-amber-600",
    num: "text-amber-400",
    hover: "hover:border-amber-400 hover:shadow-amber-100",
  },
};

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, hsl(210 100% 97%) 0%, hsl(220 40% 98%) 50%, hsl(0 0% 100%) 100%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 items-start">
          {/* Left column */}
          <Reveal>
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3.5 py-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span className="text-xs font-semibold text-cyan-800">
                Built for practical business outcomes
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-6 font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-balance text-slate-900">
              From first idea to live system,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Drishte
              </span>{" "}
              keeps the full stack connected.
            </h2>

            {/* Subtext */}
            <p className="mt-5 text-base text-slate-500 leading-relaxed max-w-xl text-pretty">
              A strong IT partner should help with planning, execution, launch,
              and ongoing improvement. That is why our services cover the places
              where business websites, cloud infrastructure, software, and growth
              marketing meet.
            </p>

            {/* Features grid in a white card */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-lg border border-blue-200 bg-blue-50 text-blue-600 shrink-0">
                      <f.icon className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium text-slate-700 pt-1.5 leading-snug">
                      {f.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/services"
              className="group mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all"
            >
              Explore all services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          {/* Right column — 2x2 service cards */}
          <Reveal delay={0.12} className="lg:pt-2">
            <div className="grid grid-cols-2 gap-4">
              {cards.map((c) => {
                const a = accentMap[c.accent];
                return (
                  <div
                    key={c.num}
                    className={`group rounded-xl border ${a.border} bg-white p-5 shadow-sm ${a.hover} hover:shadow-lg transition-all`}
                  >
                    {/* Number + icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`grid place-items-center w-10 h-10 rounded-lg ${a.iconBg}`}
                      >
                        <c.icon className="w-5 h-5" strokeWidth={1.75} />
                      </span>
                      <span
                        className={`font-display font-bold text-sm tabular-nums ${a.num}`}
                      >
                        {c.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-display font-semibold text-base text-slate-900">
                      {c.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                      {c.desc}
                    </p>

                    {/* Arrow */}
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-slate-700 group-hover:gap-1.5 transition-all">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}