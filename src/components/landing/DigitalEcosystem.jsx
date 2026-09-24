import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const center = { x: 50, y: 50 };
const nodes = [
  { label: "WEB", x: 50, y: 7 },
  { label: "MOBILE", x: 87, y: 22 },
  { label: "SOFTWARE", x: 93, y: 50 },
  { label: "ERP", x: 87, y: 78 },
  { label: "CLOUD", x: 50, y: 93 },
  { label: "AI", x: 13, y: 78 },
  { label: "DATA", x: 7, y: 50 },
  { label: "GROWTH", x: 13, y: 22 },
];

export default function DigitalEcosystem() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Digital Ecosystem
          </span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-2xl sm:text-3xl lg:text-4xl leading-[1.1]">
            One team. The complete digital stack.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-10 h-[340px] sm:h-[420px] max-w-2xl">
            {/* SVG connections */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              {nodes.map((n, i) => (
                <motion.line
                  key={n.label}
                  x1={center.x}
                  y1={center.y}
                  x2={n.x}
                  y2={n.y}
                  stroke="hsl(219 100% 50% / 0.25)"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                />
              ))}
            </svg>

            {/* Center node */}
            <div
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${center.x}%`, top: `${center.y}%` }}
            >
              <div className="relative grid place-items-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl -z-10" />
                <div className="text-center px-2">
                  <div className="font-display font-bold text-[11px] sm:text-xs leading-tight">
                    DRISHTE
                  </div>
                  <div className="font-display font-bold text-[11px] sm:text-xs leading-tight">
                    INFOTECH
                  </div>
                </div>
              </div>
            </div>

            {/* Surrounding nodes */}
            {nodes.map((n, i) => (
              <motion.div
                key={n.label}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: "easeOut" }}
              >
                <div className="group grid place-items-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-border bg-card hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-default">
                  <span className="font-display font-bold text-[10px] sm:text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    {n.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}