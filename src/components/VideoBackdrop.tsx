"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoBackdrop() {
  const root = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  // Only fetch the 2.3 MB showreel where it is actually visible and wanted: desktop widths,
  // no reduced-motion preference, no data-saver. Phones get the aurora backdrop only.
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    const saveData = Boolean(nav.connection?.saveData);
    if (!reduced && desktop && !saveData) setAllowVideo(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      // gentle depth drift: the fixed video eases upward slightly as the page scrolls
      gsap.fromTo(
        ".vb-media",
        { yPercent: 4, scale: 1.08 },
        {
          yPercent: -4,
          scale: 1.02,
          ease: "none",
          scrollTrigger: { trigger: document.body, start: "top top", end: "max", scrub: 1 },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [ready]);

  return (
    <div ref={root} aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <video
        className="vb-media h-full w-full object-cover will-change-transform"
        style={{ opacity: ready ? "var(--video-op)" : 0, transition: "opacity 1s ease" }}
        src={allowVideo ? "/showreel.mp4" : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={() => setReady(true)}
        onError={() => setReady(false)}
      />
      {/* legibility wash tied to theme background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--bg) 55%, transparent), color-mix(in oklab, var(--bg) 25%, transparent) 40%, color-mix(in oklab, var(--bg) 65%, transparent))",
        }}
      />
    </div>
  );
}
