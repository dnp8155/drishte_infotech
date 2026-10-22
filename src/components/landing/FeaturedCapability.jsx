import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, LayoutDashboard, Package, Users, Settings, ShoppingBag } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  { title: "Built around your workflow", desc: "We map your operations before writing a single line of code." },
  { title: "Scalable architecture", desc: "Systems designed to grow with your business, not against it." },
  { title: "Production-ready engineering", desc: "Tested against real business load before it goes live." },
];

const nav = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Package, label: "Orders" },
  { icon: ShoppingBag, label: "Products" },
  { icon: Users, label: "Customers" },
  { icon: Settings, label: "Settings" },
];

const orders = [
  { id: "#ORD-2841", customer: "Northwind Traders", amount: "₹48,200", status: "Shipped" },
  { id: "#ORD-2840", customer: "Vertex Logistics", amount: "₹1,24,500", status: "Processing" },
  { id: "#ORD-2839", customer: "Helix Services", amount: "₹32,800", status: "Shipped" },
  { id: "#ORD-2838", customer: "Acme Corp", amount: "₹76,100", status: "Processing" },
];

export default function FeaturedCapability() {
  return (
    <section className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <span className="text-sm font-medium text-primary">Custom Software</span>
          <h2 className="mt-4 font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-[1.05] text-balance">
            Software built around the way your business works.
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Large B2B software mockup */}
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="ml-3 text-xs text-slate-500 font-mono truncate">operations.drishte.infotech</span>
              </div>

              <div className="grid sm:grid-cols-[140px_1fr]">
                {/* Sidebar — hidden on mobile */}
                <div className="hidden sm:block border-r border-slate-800 p-3 space-y-0.5">
                  {nav.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 px-2.5 py-2 rounded text-xs ${
                        item.active ? "bg-primary/10 text-primary font-medium" : "text-slate-500"
                      }`}
                    >
                      <item.icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="p-4 sm:p-5 min-w-0">
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <h4 className="text-sm font-semibold text-white">Recent Orders</h4>
                    <span className="text-[10px] text-slate-500 shrink-0">Updated 2m ago</span>
                  </div>
                  <div>
                    {orders.map((o, i) => (
                      <div
                        key={o.id}
                        className={`flex items-center justify-between py-2.5 gap-2 ${
                          i !== orders.length - 1 ? "border-b border-slate-800/60" : ""
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="hidden xs:inline text-xs font-mono text-slate-500 shrink-0">{o.id}</span>
                          <span className="text-xs text-slate-300 truncate">{o.customer}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs font-medium text-white">{o.amount}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded ${
                              o.status === "Shipped"
                                ? "bg-emerald-500/10 text-emerald-400"
                                : "bg-amber-500/10 text-amber-400"
                            }`}
                          >
                            {o.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text with checkmarks */}
          <Reveal delay={0.15}>
            <div className="space-y-8">
              {features.map((f) => (
                <div key={f.title}>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" strokeWidth={2.5} />
                    <h3 className="font-display font-semibold text-lg text-white">{f.title}</h3>
                  </div>
                  <p className="mt-2 text-slate-400 leading-relaxed pl-8">{f.desc}</p>
                </div>
              ))}
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary"
              >
                Explore capabilities
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}