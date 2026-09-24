import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";

const checklist = [
  "Strategy matched to your business goals",
  "Design and development aligned",
  "Cloud and infrastructure ready",
  "Marketing and SEO support",
  "Launch and growth support",
  "One accountable technology team",
];

export default function CustomSolution() {
  return (
    <section id="custom" className="py-20 sm:py-28 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
              Need a Custom Solution?
            </span>
            <h2 className="mt-6 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Not sure what you need? We'll help you find the right path.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Every business is different. We combine strategy, implementation, launch
              and ongoing support into a delivery plan built around your goals.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          {/* Right - strategy panel */}
          <Reveal delay={0.15} className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl bg-primary/10 rounded-full" />
            <div className="relative rounded-2xl border border-border bg-card p-7 sm:p-8 shadow-xl shadow-primary/5">
              <div className="flex items-center justify-between pb-5 border-b border-border">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Your delivery plan</div>
                  <div className="mt-1 font-display font-bold text-lg">Drishte Infotech</div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                  Ready to build
                </span>
              </div>
              <ul className="mt-5 space-y-3.5">
                {checklist.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 grid place-items-center w-6 h-6 shrink-0 rounded-full bg-primary/10 text-primary">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </span>
                    <span className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}