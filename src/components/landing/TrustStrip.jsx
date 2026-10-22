import React from "react";
import Reveal from "./Reveal";

const sectors = ["Logistics", "Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Real Estate", "Hospitality"];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-12">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
            Trusted across sectors
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {sectors.map((s, i) => (
              <React.Fragment key={s}>
                <span className="text-base font-display font-semibold text-muted-foreground/70 hover:text-foreground transition-colors">
                  {s}
                </span>
                {i < sectors.length - 1 && <span className="hidden sm:inline w-1 h-1 rounded-full bg-border" />}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}