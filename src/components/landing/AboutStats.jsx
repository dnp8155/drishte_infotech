import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";

const stats = [
  { value: "100+", label: "Happy Clients" },
  { value: "250+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
];

export default function AboutStats() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/15 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white text-balance max-w-2xl mx-auto leading-tight">
            Built for businesses that want to move forward.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tight">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="mt-3 text-sm font-medium text-slate-400">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}