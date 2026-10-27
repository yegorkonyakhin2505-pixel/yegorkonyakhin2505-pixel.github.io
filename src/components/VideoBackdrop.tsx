"use client";

import { useEffect, useRef, useState } from "react";
import { runLazyGsap, wantsMotion, whenIdle } from "@/lib/motion";
import { media } from "@/lib/site";

export default function VideoBackdrop() {
  const root = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  // Only fetch the 2.3 MB showreel where it is actually visible and wanted: desktop widths,
  // no reduced-motion preference, no data-saver. Phones get the aurora backdrop only.
  // Decided after idle so the showreel never competes with the first paint.
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const cancel = whenIdle(() => {
      if (wantsMotion()) setAllowVideo(true);
    });
    return cancel;
  }, []);

  useEffect(() => {
    if (!ready) return;
    // gentle depth drift: the fixed video eases upward slightly as the page scrolls
    return runLazyGsap(root.current, (gsap) => {
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
    });
  }, [ready]);

  return (
    <div ref={root} aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {allowVideo && (
        <video
          className="vb-media h-full w-full object-cover will-change-transform"
          style={{ opacity: ready ? "var(--video-op)" : 0, transition: "opacity 1s ease" }}
          src={media("/showreel.mp4")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setReady(true)}
          onError={() => setReady(false)}
        />
      )}
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
