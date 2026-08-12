"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIERS = [
  {
    name: "Starter",
    tagline: "Get consistent",
    price: "AED 5,000",
    popular: false,
    features: [
      "2 videos every week",
      "Filmed by our team",
      "Scripts written for every video",
      "Professionally edited",
      "End-of-month analytics report",
    ],
  },
  {
    name: "Growth",
    tagline: "Level up",
    price: "AED 8,000",
    popular: true,
    features: [
      "3 videos every week",
      "Filmed, scripted & edited",
      "Access to AI-generated content",
      "End-of-month analytics report",
    ],
  },
  {
    name: "Scale",
    tagline: "Own your market",
    price: "AED 17,000",
    popular: false,
    features: [
      "6 videos every week",
      "Everything in Starter & Growth",
      "In-depth social media analysis",
      "Niche & competitor analysis",
      "Full strategy for your business",
    ],
  },
];

export default function Packages() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".pkg-heading", {
        y: 90,
        autoAlpha: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".pkg-heading", start: "top 85%" },
      });
      gsap.from(".pkg-card", {
        y: 70,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pkg-grid", start: "top 82%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="packages" ref={root} className="border-t border-line px-6 py-28 md:px-10 md:py-40">
      <div className="pkg-heading mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-20">
        <h2 className="display text-6xl md:text-[6vw]">
          Pick your<br />
          <span className="text-accent">package</span>
        </h2>
        <p className="max-w-xs text-base leading-relaxed text-muted">
          Every tier: we film, we script, we edit, we report. Cancel anytime.
        </p>
      </div>

      <div className="pkg-grid grid gap-6 lg:grid-cols-3">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={`pkg-card relative flex flex-col rounded-3xl border p-8 transition-colors md:p-10 ${
              t.popular ? "border-accent bg-card" : "border-line bg-card/50"
            }`}
          >
            {t.popular && (
              <span className="absolute -top-3.5 left-8 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-fg">
                Most popular
              </span>
            )}
            <p className="text-sm uppercase tracking-[0.25em] text-muted">{t.tagline}</p>
            <h3 className="display mt-3 text-4xl">{t.name}</h3>
            <p className="mt-6 text-3xl font-semibold">
              {t.price}
              <span className="ml-1 text-base font-normal text-muted">/ month</span>
            </p>
            <ul className="mt-8 flex-1 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-base">
                  <span className="mt-0.5 text-accent">✦</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-10 rounded-full px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider transition-colors ${
                t.popular
                  ? "bg-accent text-accent-fg hover:opacity-90"
                  : "border border-line hover:bg-accent hover:text-accent-fg hover:border-transparent"
              }`}
            >
              Enquire
            </a>
          </div>
        ))}
      </div>

      {/* website development — custom pricing */}
      <a
        href="#contact"
        className="group mt-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-line bg-card/50 px-8 py-6 transition-colors hover:border-accent md:px-10"
      >
        <div>
          <h3 className="display text-2xl md:text-3xl">Website Development</h3>
          <p className="mt-1 text-sm text-muted">
            Custom builds like this one — pricing depends on the project. Get in touch for a quote.
          </p>
        </div>
        <span className="rounded-full border border-line px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors group-hover:bg-accent group-hover:text-accent-fg group-hover:border-transparent">
          Enquire
        </span>
      </a>
    </section>
  );
}
