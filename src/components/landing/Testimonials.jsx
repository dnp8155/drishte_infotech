import React from "react";
import { Star, Quote } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const testimonials = [
  {
    quote: "Drishti rebuilt our checkout and migrated us to AWS in six weeks. Page speed doubled and our conversion jumped 18%.",
    name: "Priya Nair",
    role: "Founder, Vantix Retail",
    initials: "PN",
    color: "#0066FF",
  },
  {
    quote: "They treat the project like it's their own. Weekly demos, clear priorities, and a team that actually picks up the phone.",
    name: "Rohan Mehta",
    role: "CTO, Cloudpeak SaaS",
    initials: "RM",
    color: "#10b981",
  },
  {
    quote: "Our ERP integration was stuck for months. Drishti untangled it and shipped a working system faster than we expected.",
    name: "Sneha Patel",
    role: "Ops Lead, Orbita Logistics",
    initials: "SP",
    color: "#8b5cf6",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Client Stories
          </span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-3xl sm:text-4xl text-balance">
            Teams ship faster with Drishti in their corner.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="group relative h-full rounded-3xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/15" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-5 text-foreground/90 leading-relaxed text-pretty">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="grid place-items-center w-11 h-11 rounded-full text-white font-bold text-sm"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-display font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}