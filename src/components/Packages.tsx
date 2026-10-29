"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { runLazyGsap } from "@/lib/motion";
import PriceFinder from "@/components/PriceFinder";
import { AED, PACKAGES, PRICE_FROM } from "@/lib/site";

/**
 * Homepage pricing section. Exact prices are not published (decision 29 Oct 2026): the
 * section leads with the "Find your price" quiz and keeps one public anchor, the entry
 * price. The three package names and their video volume stay visible for orientation.
 */

const INCLUDED = [
  "Filmed at your location by our team",
  "A script and hook for every video",
  "Editing with captions and sound for sound-off viewing",
  "End-of-month analytics report",
  "Monthly, cancel anytime, no VAT added",
];

export default function Packages() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    return runLazyGsap(root.current, (gsap) => {
      gsap.from(".pkg-heading", {
        y: 90,
        autoAlpha: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".pkg-heading", start: "top 85%" },
      });
      gsap.from(".pkg-col", {
        y: 60,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pkg-grid", start: "top 82%" },
      });
    });
  }, []);

  return (
    <section id="packages" ref={root} className="border-t border-line px-6 py-28 md:px-10 md:py-40">
      <div className="pkg-heading mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
        <h2 className="display text-6xl md:text-[6vw]">
          What would it<br />
          <span className="text-accent">cost you?</span>
        </h2>
        <p className="max-w-xs text-base leading-relaxed text-muted">
          Packages from {AED(PRICE_FROM)} a month. Five quick questions and we reply within 1 working day with the package and the price that fit your business.{" "}
          <Link href="/pricing" className="text-fg underline underline-offset-4 hover:text-accent">
            What is in a package →
          </Link>
        </p>
      </div>

      <div className="pkg-grid grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <div className="pkg-col" id="quiz">
          <PriceFinder />
        </div>

        <aside className="pkg-col flex flex-col gap-6">
          <div className="rounded-2xl border border-line bg-card/50 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted">Three packages, one price each</p>
            <ul className="mt-4 divide-y divide-line">
              {PACKAGES.map((p) => (
                <li key={p.slug} className="flex items-baseline justify-between gap-4 py-3.5">
                  <span className="display text-2xl">
                    {p.name}
                    {"popular" in p && p.popular && (
                      <span className="ml-2 align-middle rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-fg">
                        Popular
                      </span>
                    )}
                  </span>
                  <span className="text-sm text-muted">{p.perWeek}</span>
                </li>
              ))}
              <li className="flex items-baseline justify-between gap-4 py-3.5">
                <span className="display text-2xl">AI platforms</span>
                <span className="text-sm text-muted">quoted per project</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-card/50 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted">Every package includes</p>
            <ul className="mt-4 space-y-3">
              {INCLUDED.map((f) => (
                <li key={f} className="flex items-start gap-3 text-base">
                  <span className="mt-0.5 text-accent">✦</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
