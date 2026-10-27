"use client";

import { useEffect, useState } from "react";
import { wantsMotion, whenIdle } from "@/lib/motion";
import { media } from "@/lib/site";

/**
 * Infinite "video tape" hero background built from the team's real footage —
 * two rows of small muted clips (compressed 8s loops in /media/tape/) drifting
 * in opposite directions. On small screens the clips render as gradient frames
 * to keep scrolling smooth; on desktop the clips are attached after the page is idle.
 */

const ROW_A = ["barbershop", "bmw-club", "podcast", "car-rental", "clothing", "nightclub", "esports", "karaoke", "laptop", "phone", "real-estate"];
const ROW_B = ["inf-gym", "inf-cinematic", "inf-montage", "inf-backstage", "inf-workout", "img-1248", "img-3038", "img-6880", "img-8397"];

function TapeSquare({ slug, n, playVideo }: { slug: string; n: number; playVideo: boolean }) {
  const [ok, setOk] = useState(true);
  return (
    <div
      className="relative h-48 w-32 shrink-0 overflow-hidden rounded-lg border border-line md:h-56 md:w-40"
      style={{
        background: `linear-gradient(${135 + n * 40}deg, color-mix(in oklab, var(--accent) ${25 + (n % 5) * 12}%, #0a0a0c), #0a0a0c 85%)`,
      }}
    >
      {playVideo && ok && (
        <video
          className="h-full w-full object-cover"
          src={media(`/media/tape/${slug}.mp4`)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setOk(false)}
        />
      )}
    </div>
  );
}

function TapeRow({ clips, duration, reverse, playVideo }: { clips: string[]; duration: number; reverse: boolean; playVideo: boolean }) {
  return (
    <div className="overflow-hidden">
      <div
        className="animate-marquee flex w-max gap-4"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex gap-4 pr-4">
            {clips.map((slug, i) => (
              <TapeSquare key={slug} slug={slug} n={i} playVideo={playVideo} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FilmTape() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    // videos only on larger screens, attached after idle — phones keep the gradient frames
    const cancel = whenIdle(() => {
      if (wantsMotion()) setPlayVideo(true);
    });
    return cancel;
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-35">
      <div className="absolute left-[-5vw] top-1/2 w-[110vw] -translate-y-1/2 -rotate-3 space-y-4">
        <TapeRow clips={ROW_A} duration={90} reverse={false} playVideo={playVideo} />
        <TapeRow clips={ROW_B} duration={75} reverse playVideo={playVideo} />
      </div>
      {/* wash so the headline stays readable over the tape */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--bg) 68%, transparent), color-mix(in oklab, var(--bg) 30%, transparent) 45%, color-mix(in oklab, var(--bg) 78%, transparent))",
        }}
      />
    </div>
  );
}
