import React from "react";
import {
  ShieldCheck,
  Zap,
  Layers,
  Users,
  Eye,
  LifeBuoy,
  Check,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";

const sideCards = [
  {
    icon: Users,
    metric: "01",
    title: "One team",
    desc: "Design, cloud, development, and growth stay connected.",
  },
  {
    icon: Eye,
    metric: "99%",
    title: "Clarity",
    desc: "Clear priorities, ownership, and communication at every step.",
  },
  {
    icon: LifeBuoy,
    metric: "24/7",
    title: "Support mindset",
    desc: "Built with uptime, maintenance, and future changes in mind.",
  },
];

const gridCards = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "Security-first execution",
    desc: "We build with secure delivery practices so your systems stay protected from day one.",
    tags: ["Safer deployments", "Clean implementation", "Risk-aware delivery"],
    color: "bg-blue-500",
  },
  {
    icon: Zap,
    num: "02",
    title: "Fast and practical delivery",
    desc: "You get momentum quickly with clear milestones and practical decisions that move things forward.",
    tags: ["Clear milestones", "Faster launches", "Less back-and-forth"],
    color: "bg-amber-500",
  },
  {
    icon: Layers,
    num: "03",
    title: "Scalable technical foundations",
    desc: "From websites to ERP, we build systems that grow with your business without rewrites.",
    tags: ["Growth-ready architecture", "Cloud-friendly systems", "Long-term maintainability"],
    color: "bg-emerald-500",
  },
  {
    icon: Check,
    num: "04",
    title: "One team across the stack",
    desc: "Design, development, cloud, and growth handled by one accountable team that understands your business.",
    tags: ["Single point of contact", "Aligned execution", "Better business context"],
    color: "bg-violet-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(210 100% 98%) 0%, hsl(0 0% 100%) 60%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Top — header + side cards */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left — header */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-xs font-semibold text-blue-700">
                Why Choose Us
              </span>
            </div>

            <h2 className="mt-6 font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-balance text-slate-900">
              A reliable IT partner{" "}
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                for long-term growth
              </span>
            </h2>

            <p className="mt-5 text-base text-slate-500 leading-relaxed max-w-lg text-pretty">
              We combine website development, cloud support, apps, ERP systems,
              SEO, and digital marketing into one delivery flow so your business
              gets faster progress, clearer ownership, and better results.
            </p>
          </Reveal>

          {/* Right — 3 side cards */}
          <div className="flex flex-col gap-4">
            {sideCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                  <span className="grid place-items-center w-14 h-14 rounded-full bg-blue-500 text-white shrink-0 shadow-sm">
                    <c.icon className="w-6 h-6" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-base text-slate-900">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                  <span className="ml-auto font-display font-bold text-lg text-blue-100 tabular-nums hidden sm:block">
                    {c.metric}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom — 4 feature cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gridCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:shadow-blue-100/50 hover:border-blue-200 transition-all">
                {/* Decorative gradient */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  {/* Icon + number badge */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid place-items-center w-11 h-11 rounded-xl ${c.color} text-white shadow-sm`}
                    >
                      <c.icon className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <span className="grid place-items-center w-7 h-7 rounded-full border border-slate-200 bg-slate-50 text-xs font-bold text-slate-400 tabular-nums">
                      {c.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-display font-semibold text-base text-slate-900">
                    {c.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600"
                      >
                        <Check className="w-3 h-3 text-slate-400" strokeWidth={2.5} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}