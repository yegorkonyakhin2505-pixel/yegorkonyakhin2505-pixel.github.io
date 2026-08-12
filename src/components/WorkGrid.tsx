"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Case = { title: string; slug: string; tag: string; stat: string; art: string };

// Client names kept private — industry labels only, footage speaks for itself.
// Stats are placeholders until Yegor supplies real numbers.
const BUSINESSES: Case[] = [
  { title: "Barbershops", slug: "barbershop", tag: "Content & Reels", stat: "+120% bookings", art: "radial-gradient(circle at 70% 20%, color-mix(in oklab, var(--accent) 65%, #fff) 0%, #101012 65%)" },
  { title: "BMW Car Club", slug: "bmw-club", tag: "Event Films & Socials", stat: "890k views", art: "linear-gradient(220deg, color-mix(in oklab, var(--accent) 55%, #000) 0%, #060607 80%)" },
  { title: "Podcasts", slug: "podcast", tag: "Production & Clips", stat: "1.2M clip views", art: "radial-gradient(circle at 30% 80%, color-mix(in oklab, var(--accent) 70%, #000) 0%, #101012 70%)" },
  { title: "Car Rental", slug: "car-rental", tag: "Promo & Socials", stat: "2.4x enquiries", art: "linear-gradient(150deg, color-mix(in oklab, var(--accent) 70%, #000) 0%, #101012 70%)" },
  { title: "Clothing Brand", slug: "clothing", tag: "Campaign Content", stat: "310k views", art: "linear-gradient(320deg, color-mix(in oklab, var(--accent) 60%, #000) 0%, #0b0b0d 75%)" },
  { title: "Nightlife & Clubs", slug: "nightclub", tag: "Event Coverage", stat: "sold-out nights", art: "radial-gradient(circle at 50% 10%, color-mix(in oklab, var(--accent) 55%, #fff) 0%, #0d0d10 70%)" },
  { title: "Esports Team", slug: "esports", tag: "Montages & Socials", stat: "1.8M views", art: "linear-gradient(200deg, color-mix(in oklab, var(--accent) 65%, #000) 0%, #08080a 80%)" },
  { title: "Karaoke Lounge", slug: "karaoke", tag: "Promo & Reels", stat: "+95% footfall", art: "radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--accent) 60%, #fff) 0%, #0c0c0f 65%)" },
  { title: "Real Estate", slug: "real-estate", tag: "Social Growth", stat: "+180% engagement", art: "linear-gradient(150deg, color-mix(in oklab, var(--accent) 75%, #000) 0%, #101012 70%)" },
  { title: "Product Ads", slug: "laptop", tag: "Tech & Promo Films", stat: "4.1x ROAS", art: "linear-gradient(260deg, color-mix(in oklab, var(--accent) 60%, #000) 0%, #0b0b0d 75%)" },
];

const INFLUENCERS: Case[] = [
  { title: "Lifestyle Creator", slug: "inf-lifestyle", tag: "Reels & Growth", stat: "+210k followers", art: "linear-gradient(140deg, color-mix(in oklab, var(--accent) 70%, #000) 0%, #0c0c0f 75%)" },
  { title: "Gym & Fitness", slug: "inf-gym", tag: "Content System", stat: "4.8M reach", art: "radial-gradient(circle at 60% 30%, color-mix(in oklab, var(--accent) 60%, #fff) 0%, #0c0c0f 65%)" },
  { title: "Cinematic Films", slug: "inf-cinematic", tag: "Signature Edits", stat: "2.4M views", art: "linear-gradient(230deg, color-mix(in oklab, var(--accent) 55%, #000) 0%, #08080a 80%)" },
  { title: "Creator Montages", slug: "inf-montage", tag: "Fast-Cut Edits", stat: "+160% watch time", art: "radial-gradient(circle at 25% 75%, color-mix(in oklab, var(--accent) 65%, #000) 0%, #0c0c0f 70%)" },
  { title: "Behind the Scenes", slug: "inf-backstage", tag: "Production Content", stat: "12 brand deals", art: "linear-gradient(300deg, color-mix(in oklab, var(--accent) 60%, #000) 0%, #0a0a0d 75%)" },
  { title: "Gym Workouts", slug: "inf-workout", tag: "Training Content", stat: "+3.1M plays", art: "radial-gradient(circle at 75% 70%, color-mix(in oklab, var(--accent) 55%, #fff) 0%, #0b0b0e 68%)" },
];

function Tile({ c, i }: { c: Case; i: number }) {
  return (
    <div className="work-card group">
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-card">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          style={{ background: c.art }}
        >
          {/* real footage drops in automatically: /media/work/<slug>.mp4 (muted loop), else .jpg */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/media/work/${c.slug}.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={`/media/work/${c.slug}.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={(e) => ((e.target as HTMLVideoElement).style.display = "none")}
          />
        </div>
        <span className="display absolute bottom-2 left-3 text-3xl text-white/15">
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className="absolute right-2.5 top-2.5 rounded-full bg-black/40 px-2.5 py-1 text-[10px] text-white/90 backdrop-blur-sm">
          {c.stat}
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
