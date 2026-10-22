import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import Reveal from "./Reveal";

export default function ServicesCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 sm:px-12 sm:py-20 lg:py-24 text-center">
            <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <Compass className="w-3.5 h-3.5" />
                Ready When You Are
              </span>
              <h2 className="mt-6 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1]">
                Let's build something that{" "}
                <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  moves your business forward.
                </span>
              </h2>
              <p className="mt-5 text-slate-300 text-pretty leading-relaxed">
                Tell us what you want to build, improve, automate, or grow. We'll help
                you choose a sensible next step — no pressure, no pitch.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-all"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}