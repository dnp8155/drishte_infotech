import React from "react";
import Reveal from "./Reveal";

const categories = [
  { title: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript"] },
  { title: "Backend", items: ["Node.js", "Express", "Laravel", "PHP"] },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"] },
  { title: "Cloud", items: ["AWS", "Docker", "CI/CD", "Nginx"] },
  { title: "Commerce", items: ["WordPress", "WooCommerce", "Shopify"] },
  { title: "Mobile", items: ["Flutter", "React Native", "Kotlin"] },
];

export default function TechStack() {
  return (
    <section className="py-24 sm:py-32 bg-primary/[0.03]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl max-w-2xl leading-[1.05] text-balance">
            Built with a modern, proven stack.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg text-pretty">
            We choose technologies for reliability, scalability and long-term
            maintainability — not hype.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 divide-y divide-border">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="grid grid-cols-[100px_1fr] sm:grid-cols-[180px_1fr] gap-6 sm:gap-12 py-6 items-baseline group"
              >
                <span className="font-display font-semibold text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {cat.title}
                </span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="font-display text-lg sm:text-2xl text-foreground tracking-tight hover:text-primary transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}