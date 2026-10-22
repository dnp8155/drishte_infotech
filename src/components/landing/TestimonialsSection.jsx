import React from "react";
import { Star } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const testimonials = [
  {
    quote: "They understood our business before touching the code. The ERP they built replaced three separate systems and cut our operational overhead by half.",
    name: "Rahul Mehta",
    role: "CEO, Vertex Logistics",
    initials: "RM",
  },
  {
    quote: "From discovery to launch, the communication was clear and the delivery was dependable. Our new platform handles 50k orders a month without a hiccup.",
    name: "Sara Chen",
    role: "COO, Northwind Commerce",
    initials: "SC",
  },
  {
    quote: "We finally have a technology partner that stays after launch. Their support and ongoing improvements have been exactly what we needed to scale.",
    name: "Daniel Okoro",
    role: "Founder, Helix Services",
    initials: "DO",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</span>
          <h2 className="mt-3 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Built with our clients, not just for them.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid md:grid-cols-3 gap-5" gap={0.08}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="h-full flex flex-col rounded-2xl border border-border bg-card p-7 card-hover hover:shadow-lg hover:shadow-primary/5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-5 text-pretty leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-primary/10 text-primary font-display font-semibold text-sm">
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
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