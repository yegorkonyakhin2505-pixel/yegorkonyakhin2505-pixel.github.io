"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Mashrabiya lattice tile — used as a CSS mask so it inherits the theme's fg color
const LATTICE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Cg fill='none' stroke='%23fff' stroke-width='1'%3E%3Crect x='28' y='28' width='40' height='40'/%3E%3Crect x='28' y='28' width='40' height='40' transform='rotate(45 48 48)'/%3E%3Cpath d='M48 0v28M48 68v28M0 48h28M68 48h28M0 0l28 28M96 96L68 68M96 0L68 28M0 96l28-28'/%3E%3C/g%3E%3C/svg%3E\")";

export default function Aurora() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      // Blur is applied once per layer; only transforms animate (compositor-only)
      gsap.to(".au-1", { xPercent: 22, yPercent: -14, scale: 1.15, duration: 26, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".au-2", { xPercent: -18, yPercent: 12, scale: 1.1, duration: 32, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".au-3", { xPercent: 14, yPercent: 18, scale: 1.22, duration: 38, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="au-1 absolute -top-[15%] right-[-12%] h-[55vw] w-[55vw] rounded-full blur-[110px] will-change-transform"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)", opacity: "var(--aurora-1)" }}
      />
      <div
        className="au-2 absolute bottom-[-18%] left-[-14%] h-[48vw] w-[48vw] rounded-full blur-[110px] will-change-transform"
        style={{ background: "radial-gradient(circle, #c9a15c 0%, transparent 70%)", opacity: "var(--aurora-2)" }}
      />
      <div
        className="au-3 absolute left-[22%] top-[30%] h-[40vw] w-[40vw] rounded-full blur-[110px] will-change-transform"
        style={{ background: "radial-gradient(circle, #4a3fa0 0%, transparent 70%)", opacity: "var(--aurora-3)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "var(--fg)",
          opacity: 0.035,
          maskImage: LATTICE,
          maskRepeat: "repeat",
          maskSize: "96px 96px",
          WebkitMaskImage: LATTICE,
          WebkitMaskRepeat: "repeat",
          WebkitMaskSize: "96px 96px",
        }}
      />
    </div>
  );
}
