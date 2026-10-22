import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Technology Solutions" },
  { value: "99%", label: "Client Focus" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40 bg-slate-950">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/15 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl text-white tracking-tighter tabular-nums leading-none">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="mt-4 text-sm font-medium text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}