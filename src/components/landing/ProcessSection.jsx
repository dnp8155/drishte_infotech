import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  { num: "01", title: "Discover", desc: "We map your business goals, users and constraints before writing a single line of code." },
  { num: "02", title: "Design", desc: "We define the right experience and system architecture for your specific needs." },
  { num: "03", title: "Build", desc: "Iterative, transparent development with weekly demos and short feedback loops." },
  { num: "04", title: "Launch", desc: "Staged rollouts, performance and security checks before going into production." },
  { num: "05", title: "Grow", desc: "Monitoring, maintenance and ongoing optimisation long after launch day." },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          {/* Left — sticky heading */}
          <Reveal>
            <div className="lg:sticky lg:top-32 self-start">
              <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl leading-[1.05] text-balance">
                How we turn ideas into technology.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm text-pretty">
                A clear, transparent process from first conversation to ongoing
                improvement. No black boxes.
              </p>
            </div>
          </Reveal>

          {/* Right — vertical timeline with scroll progress */}
          <Reveal delay={0.1}>
            <div ref={ref} className="relative pl-8 sm:pl-10">
              {/* Track */}
              <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-border" />
              {/* Progress line */}
              <motion.div
                className="absolute left-3 sm:left-4 top-2 w-px bg-gradient-to-b from-primary to-cyan-400"
                style={{ height: lineHeight }}
              />

              <div className="flex flex-col gap-10">
                {steps.map((s, i) => (
                  <div key={s.num} className="relative group">
                    <span className="absolute -left-8 sm:-left-10 top-1 grid place-items-center w-7 h-7 rounded-full border-2 border-primary/30 bg-card text-primary text-xs font-bold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                      {i + 1}
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-display font-bold text-xs text-primary/50 tabular-nums">{s.num}</span>
                        <h3 className="font-display font-semibold text-xl">{s.title}</h3>
                      </div>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}