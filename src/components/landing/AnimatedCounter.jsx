import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  // parse numeric portion
  const numMatch = String(value).match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const prefix = String(value).slice(0, numMatch?.index ?? 0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(num * eased * 10) / 10);
      if (p < 1) requestAnimationFrame(tick);
      else setDisplay(num);
    };
    requestAnimationFrame(tick);
  }, [inView, num, duration]);

  const isFloat = num % 1 !== 0;
  const shown = isFloat ? display.toFixed(1) : Math.round(display);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{shown}{suffix}
    </span>
  );
}