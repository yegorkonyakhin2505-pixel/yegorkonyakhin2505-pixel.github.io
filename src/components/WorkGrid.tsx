"use client";

import { useEffect, useRef, useState } from "react";
import { BUSINESSES, INFLUENCERS, type Case } from "@/lib/work";
import { runLazyGsap } from "@/lib/motion";
import { media } from "@/lib/site";

function Tile({ c, i }: { c: Case; i: number }) {
  const box = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [playing, setPlaying] = useState(false);

  // The <video> (and therefore its poster) is only created once the tile is close to the
  // viewport, so 15 posters and clips are not fetched on page load.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "320px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Touch devices have no hover: play only while the tile is mostly on screen
  useEffect(() => {
    const v = vid.current;
    if (!v || window.matchMedia("(pointer: fine)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.6) {
          v.play().catch(() => {});
          setPlaying(true);
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: [0, 0.6] }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [near]);

  const play = () => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    vid.current?.play().catch(() => {});
    setPlaying(true);
  };
  const pause = () => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    vid.current?.pause();
    setPlaying(false);
  };

  return (
    <div className="work-card group" onMouseEnter={play} onMouseLeave={pause}>
      <div ref={box} className={`relative overflow-hidden rounded-xl bg-card ${c.landscape ? "aspect-video" : "aspect-[9/16]"}`}>
        <div
          className={`absolute inset-0 transition-all duration-500 ease-out group-hover:scale-[1.04] ${
            playing ? "" : "brightness-[.85]"
          }`}
          style={{ background: c.art }}
        >
          {/* still poster by default; video plays on hover (desktop) / in view (mobile) */}
          {near && (
            <video
              ref={vid}
              className="h-full w-full object-cover"
              src={media(`/media/work/${c.slug}.mp4`)}
              poster={media(`/media/work/${c.slug}-poster.jpg`)}
              title={`${c.title} — ${c.tag}`}
              muted
              loop
              playsInline
              preload="none"
              onError={(e) => ((e.target as HTMLVideoElement).style.display = "none")}
            />
          )}
        </div>
        <span
          className={`absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-[10px] text-white/90 backdrop-blur-sm transition-opacity duration-300 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          ▶
        </span>
        <span className="display absolute bottom-2 left-3 text-3xl text-white/15">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <div>
          <h3 className="display text-sm md:text-base">{c.title}</h3>
          <p className="mt-0.5 text-xs text-muted">{c.tag}</p>
          <p className="hidden">{c.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WorkGrid() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    return runLazyGsap(root.current, (gsap) => {
      gsap.utils.toArray<HTMLElement>(".work-heading").forEach((h) => {
        gsap.from(h, {
          y: 70,
          autoAlpha: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: h, start: "top 88%" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          autoAlpha: 0,
          duration: 0.8,
          delay: (i % 3) * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 92%" },
        });
      });
    });
  }, []);

  return (
    <section id="work" ref={root} className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <h2 className="work-heading display mb-10 text-5xl md:mb-14 md:text-[4.5vw]">
        For <span className="text-accent">businesses</span>
      </h2>
      <p className="-mt-6 mb-10 max-w-2xl text-sm leading-relaxed text-muted md:mb-14">
        Work by our team across Dubai: barbershops, car clubs, podcasts, car rental, clothing, nightlife, esports, karaoke, real estate and product films.
      </p>
      {/* 10 tiles → always two even rows of 5 on desktop */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        {BUSINESSES.map((c, i) => (
          <Tile key={c.slug} c={c} i={i} />
        ))}
      </div>

      <h2 className="work-heading display mb-10 mt-24 text-5xl md:mb-14 md:mt-32 md:text-[4.5vw]">
        For <span className="text-accent">influencers</span>
      </h2>
      {/* 3 vertical tiles spread across the row (columns 1, 3, 5), then the 2 horizontal films below */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        {INFLUENCERS.filter((c) => !c.landscape).map((c, i) => (
          <div key={c.slug} className={i === 1 ? "md:col-start-3" : i === 2 ? "md:col-start-5" : ""}>
            <Tile c={c} i={i} />
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 md:mt-4 md:grid-cols-2 md:gap-4">
        {INFLUENCERS.filter((c) => c.landscape).map((c, i) => (
          <Tile key={c.slug} c={c} i={i + INFLUENCERS.filter((x) => !x.landscape).length} />
        ))}
      </div>
    </section>
  );
}
