"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Case = { title: string; slug: string; tag: string; art: string };

// Client names kept private — industry labels only, footage speaks for itself.
// No performance stats shown: only real, client-approved numbers belong here.
const BUSINESSES: Case[] = [
  { title: "Barbershops", slug: "barbershop", tag: "Content & Reels", art: "radial-gradient(circle at 70% 20%, color-mix(in oklab, var(--accent) 65%, #fff) 0%, #101012 65%)" },
  { title: "BMW Car Club", slug: "bmw-club", tag: "Event Films & Socials", art: "linear-gradient(220deg, color-mix(in oklab, var(--accent) 55%, #000) 0%, #060607 80%)" },
  { title: "Podcasts", slug: "podcast", tag: "Production & Clips", art: "radial-gradient(circle at 30% 80%, color-mix(in oklab, var(--accent) 70%, #000) 0%, #101012 70%)" },
  { title: "Car Rental", slug: "car-rental", tag: "Promo & Socials", art: "linear-gradient(150deg, color-mix(in oklab, var(--accent) 70%, #000) 0%, #101012 70%)" },
  { title: "Clothing Brand", slug: "clothing", tag: "Campaign Content", art: "linear-gradient(320deg, color-mix(in oklab, var(--accent) 60%, #000) 0%, #0b0b0d 75%)" },
  { title: "Nightlife & Clubs", slug: "nightclub", tag: "Event Coverage", art: "radial-gradient(circle at 50% 10%, color-mix(in oklab, var(--accent) 55%, #fff) 0%, #0d0d10 70%)" },
  { title: "Esports Team", slug: "esports", tag: "Montages & Socials", art: "linear-gradient(200deg, color-mix(in oklab, var(--accent) 65%, #000) 0%, #08080a 80%)" },
  { title: "Karaoke Lounge", slug: "karaoke", tag: "Promo & Reels", art: "radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--accent) 60%, #fff) 0%, #0c0c0f 65%)" },
  { title: "Real Estate", slug: "real-estate", tag: "Social Growth", art: "linear-gradient(150deg, color-mix(in oklab, var(--accent) 75%, #000) 0%, #101012 70%)" },
  { title: "Product Ads", slug: "laptop", tag: "Tech & Promo Films", art: "linear-gradient(260deg, color-mix(in oklab, var(--accent) 60%, #000) 0%, #0b0b0d 75%)" },
];

const INFLUENCERS: Case[] = [
  { title: "Lifestyle Creator", slug: "inf-lifestyle", tag: "Reels & Growth", art: "linear-gradient(140deg, color-mix(in oklab, var(--accent) 70%, #000) 0%, #0c0c0f 75%)" },
  { title: "Gym & Fitness", slug: "inf-gym", tag: "Content System", art: "radial-gradient(circle at 60% 30%, color-mix(in oklab, var(--accent) 60%, #fff) 0%, #0c0c0f 65%)" },
  { title: "Cinematic Films", slug: "inf-cinematic", tag: "Signature Edits", art: "linear-gradient(230deg, color-mix(in oklab, var(--accent) 55%, #000) 0%, #08080a 80%)" },
  { title: "Creator Montages", slug: "inf-montage", tag: "Fast-Cut Edits", art: "radial-gradient(circle at 25% 75%, color-mix(in oklab, var(--accent) 65%, #000) 0%, #0c0c0f 70%)" },
  { title: "Behind the Scenes", slug: "inf-backstage", tag: "Production Content", art: "linear-gradient(300deg, color-mix(in oklab, var(--accent) 60%, #000) 0%, #0a0a0d 75%)" },
  { title: "Gym Workouts", slug: "inf-workout", tag: "Training Content", art: "radial-gradient(circle at 75% 70%, color-mix(in oklab, var(--accent) 55%, #fff) 0%, #0b0b0e 68%)" },
];

function Tile({ c, i }: { c: Case; i: number }) {
  const vid = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

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
  }, []);

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
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-card">
        <div
          className={`absolute inset-0 transition-all duration-500 ease-out group-hover:scale-[1.04] ${
            playing ? "" : "brightness-[.85]"
          }`}
          style={{ background: c.art }}
        >
          {/* still poster by default; video plays on hover (desktop) / in view (mobile) */}
          <video
            ref={vid}
            className="h-full w-full object-cover"
            src={`/media/work/${c.slug}.mp4`}
            poster={`/media/work/${c.slug}-poster.jpg`}
            muted
            loop
            playsInline
            preload="metadata"
            onError={(e) => ((e.target as HTMLVideoElement).style.display = "none")}
          />
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
        </div>
      </div>
    </div>
  );
}

export default function WorkGrid() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={root} className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <h2 className="work-heading display mb-10 text-5xl md:mb-14 md:text-[4.5vw]">
        For <span className="text-accent">businesses</span>
      </h2>
      {/* 10 tiles → always two even rows of 5 on desktop */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        {BUSINESSES.map((c, i) => (
          <Tile key={c.slug} c={c} i={i} />
        ))}
      </div>

      <h2 className="work-heading display mb-10 mt-24 text-5xl md:mb-14 md:mt-32 md:text-[4.5vw]">
        For <span className="text-accent">influencers</span>
      </h2>
      {/* 6 tiles → one complete row on desktop, no orphans */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
        {INFLUENCERS.map((c, i) => (
          <Tile key={c.slug} c={c} i={i} />
        ))}
      </div>
    </section>
  );
}
