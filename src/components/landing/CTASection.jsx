import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-foreground px-6 py-16 sm:px-12 sm:py-20 text-center">
            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-purple-500/20" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute inset-0 bg-grid opacity-[0.07]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/80">
                Ready when you are
              </span>
              <h2 className="mt-6 font-display font-bold tracking-tight text-3xl sm:text-5xl text-balance text-white max-w-3xl mx-auto">
                Let's build something that{" "}
                <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  moves your business forward.
                </span>
              </h2>
              <p className="mt-5 text-white/60 max-w-xl mx-auto text-pretty">
                Tell us what you want to build, improve, automate, or grow. We'll
                help you choose a sensible next step — no pressure, no pitch.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}