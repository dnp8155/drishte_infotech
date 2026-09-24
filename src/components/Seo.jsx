import { useEffect } from "react";

/**
 * Reusable SEO component for SPA pages.
 * Sets document title, meta description, canonical URL, Open Graph tags,
 * and injects JSON-LD structured data for rich results.
 */
export default function Seo({
  title,
  description,
  canonical,
  type = "website",
  jsonLd,
  keywords,
}) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (attr, key, content) => {
      if (!content) return;
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    // Canonical
    if (canonical) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // JSON-LD structured data
    if (jsonLd) {
      const id = "seo-jsonld";
      let script = document.head.querySelector(`script[data-seo="${id}"]`);
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-seo", id);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      // Leave tags in place on unmount to avoid flicker on rapid navigation;
      // next page's <Seo> will overwrite them.
    };
  }, [title, description, canonical, type, jsonLd, keywords]);

  return null;
}