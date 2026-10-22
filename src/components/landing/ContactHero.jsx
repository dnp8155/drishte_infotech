import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck, MessageSquare, Check, AlertCircle, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import { base44 } from "@/api/base44Client";

const contactCards = [
  { icon: Mail, label: "Email", value: "tmaharshi7@gmail.com", href: "mailto:tmaharshi7@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 84698 11808", href: "tel:+918469811808" },
  { icon: MapPin, label: "Office", value: "Vadodara, Gujarat, India", href: "https://www.google.com/maps/place/Vadodara,Gujarat" },
];

const projectTypes = [
  "Web Platform (WordPress / Shopify / Wix)",
  "Cloud & DevOps (AWS / Migration)",
  "Custom System / ERP",
  "Mobile App (iOS / Android / Flutter)",
  "SEO Services",
  "Digital Marketing",
  "Other / Not sure yet",
];

export default function ContactHero() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", details: "" });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await base44.functions.invoke("submitContact", { ...form });
      if (res.data?.error) {
        setStatus("error");
        setErrorMsg(res.data.error);
      } else {
        setStatus("success");
        setForm({ name: "", email: "", company: "", type: "", details: "" });
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.response?.data?.error || err.message || "Something went wrong.");
    }
  };

  const field = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)]" />
      <div className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="absolute -top-20 -left-20 -z-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left */}
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
                Contact Drishte Infotech — Vadodara, Gujarat
              </span>
              <h1 className="mt-6 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl leading-[1.1]">
                Contact a web, cloud & SEO company in Vadodara for your next digital project.
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed text-pretty max-w-lg">
                Share what you want to build, improve, automate, or grow. From
                websites and e-commerce to ERP, mobile apps, cloud and SEO — we
                help businesses across Vadodara, Gujarat and India choose a
                sensible next step.
              </p>

              <address className="mt-10 flex flex-col gap-4 not-italic">
                {contactCards.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
                  >
                    <span className="grid place-items-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <c.icon className="w-6 h-6" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                      <div className="mt-0.5 font-display font-semibold">{c.value}</div>
                    </div>
                  </a>
                ))}
              </address>
            </div>
          </Reveal>

          {/* Right - Form */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-9 shadow-xl shadow-primary/5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Project Inquiry</div>
              <h2 className="mt-2 font-display font-bold tracking-tight text-2xl sm:text-3xl">Send us the details</h2>
              <p className="mt-2 text-sm text-muted-foreground">The more context you share, the faster we can recommend the right path.</p>

              <form onSubmit={submit} className="mt-7 flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Full name</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`mt-1.5 ${field}`} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Work email</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`mt-1.5 ${field}`} placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Company</label>
                  <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={`mt-1.5 ${field}`} placeholder="Company name" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Project type</label>
                  <select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className={`mt-1.5 ${field}`}>
                    <option value="" disabled>Select a project type</option>
                    {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">Project details</label>
                  <textarea required rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className={`mt-1.5 ${field} resize-none`} placeholder="Tell us what you want to build, improve, automate or grow..." />
                </div>
                {status === "error" && (
                  <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === "sending" ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : status === "success" ? (
                    <>Inquiry sent <Check className="w-4 h-4" /></>
                  ) : (
                    <>Send inquiry <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /></>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}