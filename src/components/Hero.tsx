"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import FilmTape from "@/components/FilmTape";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const spot = useRef<HTMLDivElement>(null);
  const cta = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
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

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(".hero-line span", { y: 0 });
        gsap.set(".hero-fade", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.timeline({ defaults: { ease: "power4.out" } })
        .to(".hero-line span", { y: 0, duration: 1.2, stagger: 0.12, delay: 0.15 })
        .to(".hero-fade", { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, "-=0.7");

      const btn = cta.current;
      if (btn) {
        const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
        const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });
        btn.addEventListener("mousemove", (e) => {
          const r = btn.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
        });
        btn.addEventListener("mouseleave", () => {
          xTo(0);
          yTo(0);
        });
      }
    }, root);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
      ctx.revert();
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

      <p className="hero-fade mb-6 translate-y-6 text-sm uppercase tracking-[0.25em] text-muted opacity-0">
        Creative marketing agency — Dubai, UAE
      </p>
      <h1 className="display relative z-10 text-[11vw] leading-[0.95] md:text-[7.5vw]">
        <span className="hero-line block overflow-hidden">
          <span className="block translate-y-full">
            We make <span className="text-accent">brands</span>
          </span>
        </span>
        <span className="hero-line block overflow-hidden">
          <span className="block translate-y-full">impossible to ignore.</span>
        </span>
      </h1>
      <div className="relative z-10 mt-10 flex flex-wrap items-center gap-8">
        <a
          ref={cta}
          href="#work"
          className="hero-fade inline-flex translate-y-6 items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-fg opacity-0 transition-shadow hover:shadow-[0_0_40px_-8px_var(--accent)]"
        >
          See our work <span aria-hidden>↓</span>
        </a>
        <p className="hero-fade max-w-xs translate-y-6 text-sm leading-relaxed text-muted opacity-0">
          Strategy, content and campaigns that turn attention into revenue.
        </p>
      </div>
      <p className="hero-fade absolute bottom-10 left-6 translate-y-6 text-xs uppercase tracking-[0.3em] text-muted opacity-0 md:left-10">
        Scroll ↓
      </p>
    </section>
  );
}
