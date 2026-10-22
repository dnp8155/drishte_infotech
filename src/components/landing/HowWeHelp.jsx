import React from "react";
import { ClipboardList, Hammer, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const stages = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Plan",
    desc: "We dig into your business problem, map goals and constraints, and define the right approach before any code is written.",
    tags: ["Discovery", "Scope", "Roadmap"],
  },
  {
    num: "02",
    icon: Hammer,
    title: "Build",
    desc: "Design and development happen in short, transparent iterations with weekly demos and tight feedback loops.",
    tags: ["Design", "Develop", "Review"],
  },
  {
    num: "03",
    icon: Rocket,
    title: "Launch",
    desc: "Staged rollouts with performance, security and quality checks before anything reaches your production environment.",
    tags: ["Test", "Deploy", "Validate"],
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Grow",
    desc: "Monitoring, maintenance and ongoing optimisation keep your system fast, secure and ready to scale.",
    tags: ["Monitor", "Optimize", "Scale"],
  },
];

export default function HowWeHelp() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold text-blue-600">How We Work</span>
          </div>
          <h2 className="mt-6 font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-balance text-slate-900">
            From idea to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              growth.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed text-pretty">
            A clear, transparent process that takes you from first conversation
            to continuous improvement — no black boxes.
          </p>
        </Reveal>

        {/* Horizontal timeline */}
        <div className="mt-16 relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-[42px] left-[8%] right-[8%] h-px bg-gradient-to-r from-blue-200 via-slate-200 to-emerald-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stages.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div className="group flex flex-col items-center text-center lg:items-center">
                  {/* Node */}
                  <div className="relative">
                    <span className="relative z-10 grid place-items-center w-[84px] h-[84px] rounded-full border-2 border-slate-200 bg-white font-display font-bold text-lg text-slate-300 shadow-sm transition-all duration-300 group-hover:border-blue-400 group-hover:text-blue-600 group-hover:shadow-lg group-hover:shadow-blue-100">
                      {s.num}
                    </span>
                    {/* Icon badge */}
                    <span className="absolute -bottom-1 -right-1 z-20 grid place-items-center w-9 h-9 rounded-full bg-blue-500 text-white shadow-md ring-4 ring-slate-50 transition-transform duration-300 group-hover:scale-110">
                      <s.icon className="w-4.5 h-4.5" strokeWidth={2} />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6 max-w-[240px]">
                    <h3 className="font-display font-semibold text-lg text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                      {s.desc}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {s.tags.map((t, ti) => (
                        <React.Fragment key={t}>
                          <span className="inline-flex items-center rounded-md bg-white border border-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                            {t}
                          </span>
                          {ti < s.tags.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-slate-300 self-center" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}