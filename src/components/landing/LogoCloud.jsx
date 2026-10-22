import React from "react";
import Reveal from "./Reveal";

const logos = ["Nexora", "Cloudpeak", "Vantix", "Lumio", "Orbita", "Quantix"];

export default function LogoCloud() {
  return (
    <section className="py-10 sm:py-12 border-y border-border bg-card/50">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by teams scaling across India and beyond
          </p>
          <div className="mt-7 relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
              {logos.map((l) => (
                <div
                  key={l}
                  className="flex items-center justify-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20" />
                  <span className="font-display font-bold text-base tracking-tight">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}