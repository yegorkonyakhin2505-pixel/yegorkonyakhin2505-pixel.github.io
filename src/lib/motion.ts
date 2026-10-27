// src/lib/motion.ts
// Motion policy for the whole site.
//
// Animations that need JavaScript (GSAP scroll reveals, Lenis smooth scrolling, the magnetic
// button, the showreel drift) run only on desktop-width viewports without reduced-motion or
// data-saver. Phones and tablets get the same layout, static, and never download the animation
// chunks: that is what Lighthouse mobile measures and what most visitors use. The hero and
// aurora intros are CSS animations (see globals.css), so they cost nothing on any device.
//
// Everything here is loaded lazily, after the browser is idle, so hydration finishes first.

export const MOTION_QUERY = "(min-width: 768px)";

export function wantsMotion(): boolean {
  if (typeof window === "undefined") return false;
  if (!window.matchMedia(MOTION_QUERY).matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  if (nav.connection?.saveData) return false;
  return true;
}

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

// Runs `cb` once the main thread is idle (or after a short timeout). Returns a cancel function.
export function whenIdle(cb: () => void, timeout = 1500): () => void {
  const w = window as IdleWindow;
  if (w.requestIdleCallback) {
    const id = w.requestIdleCallback(cb, { timeout });
    return () => w.cancelIdleCallback?.(id);
  }
  const id = window.setTimeout(cb, 200);
  return () => window.clearTimeout(id);
}

export type Gsap = typeof import("gsap")["default"];
export type GsapContext = ReturnType<Gsap["context"]>;

let gsapPromise: Promise<Gsap> | null = null;

// GSAP + ScrollTrigger as one lazily-loaded chunk, shared by every component. Resolves to null
// when motion is not wanted, so callers can simply `if (!gsap) return`.
export function loadGsap(): Promise<Gsap | null> {
  if (!wantsMotion()) return Promise.resolve(null);
  if (!gsapPromise) {
    gsapPromise = Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([g, st]) => {
      g.default.registerPlugin(st.ScrollTrigger);
      return g.default;
    });
  }
  return gsapPromise;
}

// Waits for idle, loads GSAP, runs `setup` inside a gsap.context scoped to `scope`, and returns a
// cleanup that cancels or reverts everything. Use from a useEffect: `return runLazyGsap(...)`.
export function runLazyGsap(scope: Element | null, setup: (gsap: Gsap) => void): () => void {
  let ctx: GsapContext | undefined;
  let cancelled = false;
  const cancelIdle = whenIdle(() => {
    loadGsap().then((gsap) => {
      if (!gsap || cancelled) return;
      ctx = gsap.context(() => setup(gsap), scope ?? undefined);
    });
  });
  return () => {
    cancelled = true;
    cancelIdle();
    ctx?.revert();
  };
}
