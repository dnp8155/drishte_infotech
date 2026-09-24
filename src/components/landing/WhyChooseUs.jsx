import React from "react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const features = [
  { n: "01", title: "One team", desc: "Design, cloud, development and growth — under one accountable roof." },
  { n: "99%", title: "Clarity", desc: "Clear priorities, ownership and communication at every milestone." },
  { n: "24/7", title: "Support mindset", desc: "Uptime, maintenance and monitoring that never clocks out." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why Choose Us
            </span>
            <h2 className="mt-3 font-display font-bold tracking-tight text-3xl sm:text-4xl text-balance">
              A reliable IT partner for long-term growth.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              We don't disappear after launch. Drishti Infotech becomes an extension
              of your team — owning outcomes, not just deliverables. From the first
              conversation to ongoing support, you get one point of contact, clear
              priorities and technology that grows with your business.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-background p-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["#0066FF", "#22C55E", "#F59E0B", "#EC4899"].map((c, i) => (
                    <span
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-background grid place-items-center text-white text-xs font-bold"
                      style={{ background: c }}
                    >
                      {["D", "I", "T", "E"][i]}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-sm">Trusted by 100+ teams</div>
                  <div className="text-xs text-muted-foreground">From startups to enterprises</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Stagger className="flex flex-col gap-4">
            {features.map((f) => (
              <StaggerItem key={f.n}>
                <div className="group flex items-start gap-5 rounded-2xl border border-border bg-background p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 card-hover">
                  <span className="font-display font-bold text-2xl text-primary tabular-nums shrink-0 w-20">
                    {f.n}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}