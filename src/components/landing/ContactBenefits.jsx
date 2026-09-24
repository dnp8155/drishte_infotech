import React from "react";
import { Clock, ShieldCheck, MessageSquare } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const benefits = [
  { icon: Clock, title: "Prompt response", desc: "Most inquiries are reviewed quickly during business hours." },
  { icon: ShieldCheck, title: "Confidential discussion", desc: "Project details are treated with care from the first message." },
  { icon: MessageSquare, title: "Practical guidance", desc: "We focus on the next useful decision, not a generic pitch." },
];

export default function ContactBenefits() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Stagger className="grid sm:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 card-hover hover:-translate-y-1">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <b.icon className="w-6 h-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display font-semibold text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}