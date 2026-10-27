"use client";

import { useEffect, useRef } from "react";
import FilmTape from "@/components/FilmTape";
import { BRAND } from "@/lib/site";
import { loadGsap, wantsMotion, whenIdle } from "@/lib/motion";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const spot = useRef<HTMLDivElement>(null);
  const cta = useRef<HTMLAnchorElement>(null);

  // The entrance animation is pure CSS (globals.css, desktop only), so the hero text is painted
  // immediately on every device. JavaScript only adds the pointer spotlight and the magnetic
  // button, on desktop, after the page is idle.
  useEffect(() => {
    if (!wantsMotion()) return;

    const spotEl = spot.current;
    let raf = 0;
    let px = 0;
    let py = 0;
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          spotEl?.style.setProperty("--sx", `${px}px`);
          spotEl?.style.setProperty("--sy", `${py}px`);
        });
      }
    };
    window.addEventListener("pointermove", onMove);

    let cleanupMagnet: (() => void) | undefined;
    const cancelIdle = whenIdle(() => {
      loadGsap().then((gsap) => {
        const btn = cta.current;
        if (!gsap || !btn) return;
        const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
        const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });
        const move = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
        };
        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", leave);
        cleanupMagnet = () => {
          btn.removeEventListener("mousemove", move);
          btn.removeEventListener("mouseleave", leave);
          gsap.set(btn, { clearProps: "x,y" });
        };
      });
    });

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
      cancelIdle();
      cleanupMagnet?.();
    };
  }, []);

  return (
    <section ref={root} className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pb-24 pt-32 md:px-10">
      <FilmTape />
      <div
        ref={spot}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(520px circle at var(--sx, 50%) var(--sy, 30%), color-mix(in oklab, var(--accent) 16%, transparent), transparent 70%)",
        }}
      />

      {/* The keyword-bearing H1 is the small kicker; the big display line stays the visual headline. */}
      <h1 className="hero-fade mb-6 text-xs font-normal uppercase tracking-[0.18em] text-muted md:text-sm md:tracking-[0.25em]">
        Social media &amp; video marketing agency in Dubai, UAE
      </h1>
      <p className="display relative z-10 text-[9.4vw] leading-[0.95] md:text-[7.5vw]" aria-label="We make brands impossible to ignore.">
        <span className="hero-line block overflow-hidden">
          <span className="block">
            We make <span className="text-accent">brands</span>
          </span>
        </span>
        <span className="hero-line block overflow-hidden">
          <span className="block">impossible to ignore.</span>
        </span>
      </p>
      <div className="relative z-10 mt-10 flex flex-wrap items-center gap-8">
        <a
          ref={cta}
          href="#work"
          className="hero-fade inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-fg transition-shadow hover:shadow-[0_0_40px_-8px_var(--accent)]"
        >
          See our work <span aria-hidden>↓</span>
        </a>
        <p className="hero-fade max-w-sm text-sm leading-relaxed text-muted">
          {BRAND} is a Dubai video and social media marketing agency. We film, script, edit, post and report for UAE businesses and creators, from AED 5,000 a month.
        </p>
      </div>
      <p className="hero-fade absolute bottom-10 left-6 text-xs uppercase tracking-[0.3em] text-muted md:left-10">
        Scroll ↓
      </p>
    </section>
  );
}
