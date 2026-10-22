import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Calendar,
  Building2,
  Search,
  Filter
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import FooterNew from "@/components/landing/FooterNew";
import PageHero from "@/components/landing/PageHero";
import Reveal from "@/components/landing/Reveal";
import CTASection from "@/components/landing/CTASectionNew";
import { projectsData, categories } from "@/data/projects";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="Our Work & Case Studies"
        title="Transformative Solutions Crafted With Precision"
        subtitle="Explore our portfolio of web platforms, enterprise software, mobile apps, and cloud AI systems built for modern businesses."
      />

      <main className="pb-24">
        {/* Filters & Search Toolbar */}
        <section className="py-8 border-b border-border/60 bg-muted/20">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                          : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search tech, title, industry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
            {filteredProjects.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-lg text-muted-foreground font-medium">
                  No projects match your current filter or search criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, idx) => (
                  <Reveal key={project.id} delay={idx * 0.05}>
                    <div className="group flex flex-col h-full rounded-2xl border border-border/70 bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary/90 hover:bg-primary px-3 py-1.5 rounded-full backdrop-blur-sm transition-all"
                          >
                            Quick Overview <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-background/90 backdrop-blur-md text-foreground border border-border shadow-xs">
                          {project.category}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-primary" /> {project.client}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" /> {project.year}
                          </span>
                        </div>

                        <h3 className="text-xl font-display font-bold tracking-tight group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {project.shortDesc}
                        </p>

                        {/* Impact Highlight */}
                        <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
                          <div className="flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs font-medium text-foreground leading-tight">
                              {project.outcome}
                            </span>
                          </div>
                        </div>

                        {/* Tech Tags */}
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-secondary text-secondary-foreground border border-border/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            Read Case Study →
                          </button>
                          <div className="flex items-center gap-3">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                              >
                                Live Demo <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Modal for Detailed Project View */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center text-sm font-bold shadow-md transition-all"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground shadow">
                    {activeModalProject.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold">
                    {activeModalProject.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span><strong>Client:</strong> {activeModalProject.client}</span>
                    <span><strong>Year:</strong> {activeModalProject.year}</span>
                    <span><strong>Outcome:</strong> {activeModalProject.outcome}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Project Overview
                  </h4>
                  <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
                    {activeModalProject.fullDesc}
                  </p>
                </div>

                {/* Key Metrics */}
                {activeModalProject.metrics && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Impact & Performance
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {activeModalProject.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-secondary/50 border border-border text-center"
                        >
                          <div className="text-lg font-bold font-display text-primary">
                            {m.value}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Technologies & Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs in Modal */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-sm"
                    >
                      Visit Live Website <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link
                    to="/contact"
                    onClick={() => setActiveModalProject(null)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition"
                  >
                    Discuss a Similar Project <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 text-sm font-medium rounded-full border border-border text-foreground hover:bg-accent transition sm:ml-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global CTA Section */}
        <CTASection />
      </main>

      <FooterNew />
    </div>
  );
}
