import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASectionNew() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/15 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-3xl">
            Have a business problem worth solving?
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-xl text-pretty">
            Let's turn it into technology that actually works.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-b border-slate-600 pb-1 text-sm font-semibold text-white hover:border-primary hover:text-primary transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}