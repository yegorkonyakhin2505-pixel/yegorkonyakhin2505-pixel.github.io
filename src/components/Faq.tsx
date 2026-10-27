// Visible FAQ (native <details>, no JS) + matching FAQPage JSON-LD. Always rendered together.
import JsonLd from "@/components/JsonLd";
import { buildFaqPage } from "@/lib/schema";
import type { Faq as FaqItem } from "@/lib/faqs";

export default function Faq({ items, path, title = "Questions", compact = false }: { items: FaqItem[]; path: string; title?: string; compact?: boolean }) {
  return (
    <section id="faq" className={compact ? "mx-auto max-w-4xl px-6 py-20 md:py-28" : "mt-16"}>
      <JsonLd data={buildFaqPage(items, path)} />
      <h2 className={`display ${compact ? "mb-10 text-4xl md:text-6xl" : "mb-8 text-3xl md:text-4xl"}`}>
        {title.split(" ").slice(0, -1).join(" ")} <span className="text-accent">{title.split(" ").slice(-1)}</span>
      </h2>
      <div className="divide-y divide-line border-y border-line">
        {items.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium md:text-lg [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>
              <span className="mt-0.5 text-accent transition-transform group-open:rotate-45" aria-hidden>+</span>
            </summary>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
