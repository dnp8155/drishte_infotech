import React from "react";
import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, subtitle, lastUpdated }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)]" />
      <div className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 -z-10 w-[500px] h-[300px] rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {lastUpdated && (
            <p className="mt-4 text-xs text-muted-foreground/60 uppercase tracking-wider">
              Last Updated: {lastUpdated}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}