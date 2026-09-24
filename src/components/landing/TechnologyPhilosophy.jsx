import React from "react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const principles = [
  { num: "01", title: "Simple", desc: "Make complex systems easier to use." },
  { num: "02", title: "Scalable", desc: "Build foundations that can grow." },
  { num: "03", title: "Practical", desc: "Focus on real-world business outcomes." },
];

export default function TechnologyPhilosophy() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/15 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            How We Think
          </span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1]">
            Use the right technology. Not the most technology.
          </h2>
          <p className="mt-5 text-slate-400 text-pretty leading-relaxed max-w-xl">
            We choose technology based on the problem, the people using it, and the
            business outcome it needs to create.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid sm:grid-cols-3 gap-5" gap={0.08}>
          {principles.map((p) => (
            <StaggerItem key={p.num}>
              <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-7 hover:border-primary/40 transition-colors">
                <span className="font-display font-bold text-3xl text-primary/40 tabular-nums">{p.num}</span>
                <h3 className="mt-4 font-display font-semibold text-xl text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}