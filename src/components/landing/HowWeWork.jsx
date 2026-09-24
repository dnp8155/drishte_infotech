import React, { useRef } from "react";
import { Search, Code, Rocket, RefreshCw } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  { n: "01", icon: Search, title: "Understand the business", desc: "We map your goals, users and constraints before writing code." },
  { n: "02", icon: Code, title: "Build with clarity", desc: "Iterative, transparent development with weekly demos." },
  { n: "03", icon: Rocket, title: "Launch with confidence", desc: "Staged rollouts, performance and SEO checks before going live." },
  { n: "04", icon: RefreshCw, title: "Improve continuously", desc: "Monitoring, maintenance and ongoing optimisation after launch." },
];

export default function HowWeWork() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <Reveal className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
              How We Work
            </span>
            <h2 className="mt-6 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              A simple process from first conversation to ongoing improvement.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty max-w-md">
              No black boxes. You always know what we're building, why, and what
              comes next.
            </p>
          </Reveal>

          {/* Right - vertical timeline */}
          <div ref={ref} className="relative pl-8 sm:pl-10">
            {/* Track */}
            <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-border" />
            {/* Progress line */}
            <motion.div
              className="absolute left-3 sm:left-4 top-2 w-px bg-gradient-to-b from-primary to-cyan-400"
              style={{ height: lineHeight }}
            />

            <div className="flex flex-col gap-8">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <div className="group relative">
                    <span className="absolute -left-8 sm:-left-10 top-1 grid place-items-center w-7 h-7 rounded-full border-2 border-primary/30 bg-card text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                      <s.icon className="w-3.5 h-3.5" strokeWidth={2} />
                    </span>
                    <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 card-hover">
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-sm text-primary tabular-nums">{s.n}</span>
                        <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}