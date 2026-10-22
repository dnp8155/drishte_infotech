import React from "react";
import { Truck, Stethoscope, Landmark, ShoppingBag, Factory, GraduationCap } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const industries = [
  { icon: Truck, name: "Logistics & Supply Chain", desc: "ERP, fleet tracking and real-time inventory systems that keep goods moving." },
  { icon: Stethoscope, name: "Healthcare", desc: "Patient management, scheduling and secure data platforms built for compliance." },
  { icon: Landmark, name: "Finance & Fintech", desc: "Secure payment, lending and reporting automation with audit-ready accuracy." },
  { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Online stores, POS integration and order management that scale with demand." },
  { icon: Factory, name: "Manufacturing", desc: "Production tracking, quality control and inventory systems for shop-floor efficiency." },
  { icon: GraduationCap, name: "Education", desc: "Learning platforms, admissions and student management systems that engage." },
];

export default function IndustriesWeServe() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Industries We Serve</span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Deep experience across the sectors that matter.
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty leading-relaxed">
            We bring domain understanding to every project — building technology that
            fits how your industry actually works.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" gap={0.06}>
          {industries.map((ind) => (
            <StaggerItem key={ind.name}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 card-hover hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ind.icon className="w-6 h-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display font-semibold text-lg">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}