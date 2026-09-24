import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Globe,
  Cloud,
  Boxes,
  TrendingUp,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";

const metrics = [
  { value: "100+", label: "Happy Clients" },
  { value: "250+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime Focus" },
  { value: "10+", label: "Years Experience" },
];

const featureCards = [
  {
    icon: Globe,
    title: "Web Platforms",
    desc: "Websites & apps built for speed",
    to: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure",
    to: "/services",
  },
];

const services = [
  {
    icon: Boxes,
    title: "Custom Systems",
    desc: "ERP, internal tools and business software shaped around your workflows.",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    desc: "SEO, performance optimisation and digital marketing that drives results.",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Intelligent workflows that remove repetitive manual work from your team.",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Support & Monitoring",
    desc: "Ongoing maintenance, security and monitoring long after launch day.",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100 text-violet-600",
  },
];

const needs = ["Reliable delivery", "Scalable systems", "Future-ready tech"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 0%, hsl(214 100% 97%) 0%, hsl(220 60% 99%) 50%, hsl(0 0% 100%) 100%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-start">
          {/* Left column */}
          <Reveal>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5">
              <Zap className="w-3.5 h-3.5 text-blue-600" fill="currentColor" />
              <span className="text-xs font-semibold text-slate-700">
                Your Growth. Our Technology.
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-display font-bold tracking-tight text-[2.5rem] sm:text-5xl lg:text-[56px] leading-[1.05] text-balance text-slate-900">
              Digital infrastructure with{" "}
              <span className="text-primary">one team.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl text-pretty">
              Drishte Infotech helps businesses plan, build, launch and improve
              digital systems that are reliable, scalable and easy to keep moving
              forward.
            </p>

            {/* Two feature cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {featureCards.map((card) => (
                <Link
                  key={card.title}
                  to={card.to}
                  className="group rounded-xl border border-slate-200 bg-white/80 p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-slate-200/60 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <card.icon className="w-5 h-5" strokeWidth={2} />
                    </span>
                    <h3 className="font-display font-semibold text-base text-slate-900">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Metric bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-x-8 sm:gap-x-10 gap-y-4">
              {metrics.map((m, i) => (
                <React.Fragment key={m.label}>
                  <div>
                    <div className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-slate-900 tabular-nums">
                      {m.value}
                    </div>
                    <div className="mt-0.5 text-xs sm:text-sm text-slate-500">
                      {m.label}
                    </div>
                  </div>
                  {i < metrics.length - 1 && (
                    <div className="hidden sm:block w-px h-9 bg-slate-200" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </Reveal>

          {/* Right column — What We Do grid */}
          <Reveal delay={0.12} className="lg:pt-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xl shadow-slate-200/50">
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <span className="text-[11px] font-bold tracking-[0.25em] text-slate-400">
                  WHAT WE DO
                </span>
                <span className="text-[11px] font-medium text-slate-300">
                  04 services
                </span>
              </div>

              {/* 2x2 service grid */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className={`group rounded-xl p-4 ${s.bg} hover:shadow-md transition-all cursor-pointer`}
                  >
                    <span
                      className={`grid place-items-center w-9 h-9 rounded-lg ${s.iconBg}`}
                    >
                      <s.icon className="w-4 h-4" strokeWidth={2} />
                    </span>
                    <h3 className="mt-3 font-display font-semibold text-sm text-slate-800">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                      {s.desc}
                    </p>
                    <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-slate-600 group-hover:text-primary group-hover:gap-1.5 transition-all">
                      Learn more
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer — client needs */}
              <div className="mt-5 pt-5 border-t border-slate-100">
                <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 mb-3">
                  WHAT CLIENTS TYPICALLY NEED
                </p>
                <div className="flex flex-wrap gap-2">
                  {needs.map((n) => (
                    <span
                      key={n}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {n}
                    </span>
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