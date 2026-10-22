import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, DollarSign, Users, ShoppingCart, FolderKanban, Zap, Activity } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  "Built for your workflow",
  "Scalable architecture",
  "Ready for production",
];

const metrics = [
  { icon: DollarSign, label: "Revenue", value: "$48.2k" },
  { icon: Users, label: "Users", value: "12.4k" },
  { icon: ShoppingCart, label: "Orders", value: "1,284" },
  { icon: FolderKanban, label: "Projects", value: "24" },
];

export default function FeaturedService() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />
          <div className="absolute -top-24 right-0 w-[500px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Custom Software</span>
              <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1]">
                Technology built around the way your business works.
              </h2>
              <p className="mt-5 text-slate-300 text-pretty leading-relaxed max-w-lg">
                From internal business systems to customer-facing applications, we
                build software around your exact workflows.
              </p>
              <ul className="mt-7 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-primary/20 text-primary shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-white">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                Explore Custom Software
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            {/* Right - dashboard */}
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur p-5 shadow-2xl">
                {/* sidebar + content */}
                <div className="flex gap-5">
                  {/* mini sidebar */}
                  <div className="hidden sm:flex flex-col gap-2 w-10 shrink-0">
                    {[Activity, DollarSign, Users, ShoppingCart, FolderKanban, Zap].map((Icon, i) => (
                      <span
                        key={i}
                        className={`grid place-items-center w-9 h-9 rounded-lg ${i === 0 ? "bg-primary text-primary-foreground" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"} transition-colors`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                    ))}
                  </div>
                  {/* content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">Overview</span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                        Operational
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {metrics.map((m) => (
                        <div key={m.label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                          <m.icon className="w-4 h-4 text-primary" />
                          <div className="mt-2 font-display font-bold text-xl text-white leading-none">{m.value}</div>
                          <div className="mt-1 text-xs text-slate-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    {/* chart */}
                    <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                      <div className="text-xs text-slate-400 mb-3">Automation Activity</div>
                      <div className="flex items-end gap-1.5 h-16">
                        {[40, 65, 50, 78, 60, 88, 72, 92, 68, 84].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}