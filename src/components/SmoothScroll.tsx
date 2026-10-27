"use client";

import { useEffect } from "react";
import { loadGsap, wantsMotion, whenIdle } from "@/lib/motion";

// Lenis smooth scrolling driven by GSAP's ticker. Desktop only, loaded after idle, so phones never
// download Lenis or GSAP and hydration is never delayed by them.
export default function SmoothScroll() {
  useEffect(() => {
    if (!wantsMotion()) return;

    let cancelled = false;
    let dispose: (() => void) | undefined;

    const cancelIdle = whenIdle(() => {
      Promise.all([import("lenis"), loadGsap(), import("gsap/ScrollTrigger")]).then(([{ default: Lenis }, gsap, { ScrollTrigger }]) => {
        if (cancelled || !gsap) return;
        const lenis = new Lenis({ lerp: 0.12 });
        lenis.on("scroll", ScrollTrigger.update);

        // Single RAF loop: GSAP's ticker drives Lenis so scroll + animations never compete
        const raf = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        dispose = () => {
          gsap.ticker.remove(raf);
          lenis.destroy();
        };
      });
    });

    return () => {
      cancelled = true;
      cancelIdle();
      dispose?.();
    };
  }, []);

  return null;
}
