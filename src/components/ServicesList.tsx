"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: "01",
    title: "Videography & Scripts",
    desc: "Concepts, scriptwriting and shoot days",
    about:
      "We handle the full production: creative concepts built around your brand, scripts and hooks written to stop the scroll, and professional shoot days at your location.",
    includes: ["Creative concepts & hooks", "Scriptwriting", "Professional shoot days", "B-roll & behind-the-scenes", "On-location across Dubai"],
  },
  {
    num: "02",
    title: "Editing",
    desc: "Cuts, captions and sound built for sound-off viewing",
    about:
      "Raw footage in, scroll-stopping content out. Every edit is cut for how people actually watch: fast pacing, bold captions, and sound design that works even on mute.",
    includes: ["Short-form edits (Reels / TikTok / Shorts)", "Captions & subtitles", "Sound design & music", "Color grading", "Fast turnaround"],
  },
  {
    num: "03",
    title: "Social Media Management",
    desc: "Planning, uploading, scheduling, community",
    about:
      "Your accounts run on autopilot. We plan the calendar, write captions, upload and schedule every post, and keep your community engaged — you never touch the post button.",
    includes: ["Monthly content calendar", "Uploading & scheduling", "Captions & hashtags", "Community management & DMs", "Platform optimization"],
  },
  {
    num: "04",
    title: "Monthly Analytics",
    desc: "What grew, what converted, what's next",
    about:
      "At the end of every month you get a clear report: what grew, what converted, and exactly what we double down on next. No vanity metrics, no jargon.",
    includes: ["Monthly performance report", "Reach, growth & conversion numbers", "Best & worst content breakdown", "Next-month strategy call"],
  },
  {
    num: "05",
    title: "AI Platform Development & Integration",
    desc: "AI systems, websites and automations — built and handed over",
    about:
      "We build AI into your business: custom platforms, agents and automations that save hours every week — plus fast, animated websites like the one you're on. Everything set up, integrated and handed over, fully yours.",
    includes: [
      "AI platform development & integration",
      "Custom AI agents & automations",
      "Website development",
      "Company email setup",
      "SEO & AEO",
      "Full handover",
    ],
  },
];

type Service = (typeof SERVICES)[number];

export default function ServicesList() {
  const root = useRef<HTMLElement>(null);
  const modalCard = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<Service | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".svc-row", {
        y: 40,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".svc-rows", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  // pop-in animation + escape-to-close while the box is open
  useEffect(() => {
    if (!open) return;
    if (modalCard.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.from(modalCard.current, { y: 30, scale: 0.96, autoAlpha: 0, duration: 0.35, ease: "power3.out" });
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="services" ref={root} className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <h2 className="display mb-10 text-4xl md:text-6xl">
        What we <span className="text-accent">do</span>
      </h2>

      <div className="svc-rows border-t border-line">
        {SERVICES.map((s) => (
          <button
            key={s.num}
            type="button"
            onClick={() => setOpen(s)}
            className="svc-row group relative grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-5 overflow-hidden border-b border-line py-5 text-left md:gap-8 md:py-7"
          >
            <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-accent/8 transition-transform duration-300 ease-out group-hover:scale-y-100" />
            <span className="display relative text-lg text-accent md:text-xl">{s.num}</span>
            <span className="relative">
              <span className="display block text-2xl transition-transform duration-300 group-hover:translate-x-3 md:text-4xl">
                {s.title}
              </span>
              <span className="mt-1 block text-xs text-muted transition-transform duration-300 group-hover:translate-x-3 md:text-sm">
                {s.desc}
              </span>
            </span>
            <span className="relative text-2xl text-accent transition-transform duration-300 group-hover:rotate-90">
              +
            </span>
          </button>
        ))}
      </div>

      {/* service info box */}
      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
          onClick={close}
        >
          <div
            ref={modalCard}
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl border border-line bg-card p-8 shadow-2xl md:p-10"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              ✕
            </button>
            <p className="display text-lg text-accent">{open.num}</p>
            <h3 className="display mt-2 pr-10 text-3xl md:text-4xl">{open.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted">{open.about}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted">What&apos;s included</p>
            <ul className="mt-3 space-y-2.5">
              {open.includes.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-0.5 text-accent">✦</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
