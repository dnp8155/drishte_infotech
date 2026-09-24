import React from "react";
import { ShieldCheck, Gauge, Handshake } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const pillars = [
  { num: "01", icon: ShieldCheck, title: "Trust", desc: "Clear ownership and honest communication at every step." },
  { num: "02", icon: Gauge, title: "Speed", desc: "Iterative delivery with weekly demos and fast feedback loops." },
  { num: "03", icon: Handshake, title: "Long-Term Ownership", desc: "We stay accountable well beyond launch day." },
];

export default function WhyBusinesses() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Businesses Choose Us
          </span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Built for trust, speed, and long-term ownership.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid sm:grid-cols-3 gap-5" gap={0.08}>
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 card-hover hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start justify-between">
                  <span className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <p.icon className="w-7 h-7" strokeWidth={1.75} />
                  </span>
                  <span className="font-display font-bold text-4xl text-primary/15 tabular-nums leading-none">
                    {p.num}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display font-semibold text-xl">{p.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}