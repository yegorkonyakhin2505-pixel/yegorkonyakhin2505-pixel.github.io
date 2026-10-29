"use client";

import Link from "next/link";
import { useState } from "react";
import { INQUIRY_API, PHONE_E164, WHATSAPP_URL } from "@/lib/site";

/**
 * "Find your price": five one-tap questions, then name / WhatsApp / email.
 * Posts to the portal (app.multify.ae/api/inquiries), which stores the lead and
 * pings the team on Telegram. No GSAP, no heavy state: it has to feel instant on a phone.
 * Human-readable answer labels are sent as-is so the portal needs no code mapping.
 */

type Choice = { value: string; hint?: string };
type StepKey = "industry" | "videos" | "needs" | "audience" | "start";
type Step = { key: StepKey; question: string; help?: string; multi?: boolean; choices: Choice[] };

const STEPS: Step[] = [
  {
    key: "industry",
    question: "What is your business?",
    choices: [
      { value: "Real estate" },
      { value: "Car rental or detailing" },
      { value: "Restaurant, lounge or nightlife" },
      { value: "Salon, barbershop or clinic" },
      { value: "Gym or fitness" },
      { value: "Product brand" },
      { value: "Creator or podcast" },
      { value: "Other" },
    ],
  },
  {
    key: "videos",
    question: "How many videos a week do you want?",
    help: "Short-form: Reels, TikTok and Shorts. A rough number is fine.",
    choices: [
      { value: "1–2 a week", hint: "6–8 a month" },
      { value: "3 a week", hint: "about 13 a month" },
      { value: "4–6 a week", hint: "20+ a month" },
      { value: "Not sure yet" },
    ],
  },
  {
    key: "needs",
    question: "What do you need most?",
    help: "Pick everything that applies.",
    multi: true,
    choices: [
      { value: "Filming and editing" },
      { value: "Posting, captions and scheduling" },
      { value: "Strategy and monthly reporting" },
      { value: "Website or AI tools" },
      { value: "Paid ads" },
    ],
  },
  {
    key: "audience",
    question: "How big is your audience today?",
    help: "Instagram and TikTok together.",
    choices: [
      { value: "No accounts yet" },
      { value: "Under 1,000" },
      { value: "1,000 – 10,000" },
      { value: "10,000 – 50,000" },
      { value: "50,000+" },
    ],
  },
  {
    key: "start",
    question: "When do you want to start?",
    choices: [{ value: "This month" }, { value: "Next month" }, { value: "Just exploring" }],
  },
];

type Answers = Record<Exclude<StepKey, "needs">, string> & { needs: string[] };
const EMPTY_ANSWERS: Answers = { industry: "", videos: "", needs: [], audience: "", start: "" };

type Contact = { name: string; phone: string; email: string; business: string; instagram: string; message: string; website: string };
const EMPTY_CONTACT: Contact = { name: "", phone: "", email: "", business: "", instagram: "", message: "", website: "" };

const TOTAL = STEPS.length + 1;

function chipClass(selected: boolean) {
  return [
    "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-[0.95rem] transition-colors duration-200",
    selected ? "border-accent bg-accent/10 text-fg" : "border-line text-muted hover:border-fg hover:text-fg",
  ].join(" ");
}

// `cta` keeps the look inside article pages; the utilities carry it on the homepage.
const BTN = "cta inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent-fg transition-opacity hover:opacity-90 disabled:cursor-not-allowed";
const BTN_GHOST = "cta ghost inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-fg transition-colors hover:border-accent hover:text-accent";

const FIELD =
  "w-full rounded-xl border border-line bg-transparent px-4 py-3.5 text-[0.95rem] text-fg outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

export default function PriceFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [problem, setProblem] = useState<string | null>(null);

  const current = STEPS[step];
  const onContact = step === STEPS.length;

  function pick(s: Step, value: string) {
    if (s.multi) {
      setAnswers((a) => {
        const has = a.needs.includes(value);
        return { ...a, needs: has ? a.needs.filter((v) => v !== value) : [...a.needs, value] };
      });
      return;
    }
    setAnswers((a) => ({ ...a, [s.key]: value }));
    // one tap = next question; a short pause lets the selection register visually
    window.setTimeout(() => setStep((n) => Math.min(n + 1, STEPS.length)), 160);
  }

  function canContinue(s: Step) {
    return s.multi ? answers.needs.length > 0 : answers[s.key] !== "";
  }

  const summary = [
    `Business: ${answers.industry}`,
    `Videos: ${answers.videos}`,
    `Needs: ${answers.needs.join(", ")}`,
    `Audience: ${answers.audience}`,
    `Start: ${answers.start}`,
  ].join("\n");

  const whatsappFallback = `${WHATSAPP_URL}?text=${encodeURIComponent(
    `Hi Multify, I filled in Find your price on your website.\n${summary}\nName: ${contact.name}${contact.business ? `\nBusiness: ${contact.business}` : ""}`
  )}`;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setProblem(null);
    const phoneDigits = contact.phone.replace(/\D/g, "");
    if (contact.name.trim().length < 2) return setProblem("Please add your name.");
    if (phoneDigits.length < 7 || phoneDigits.length > 15) return setProblem("Please add a WhatsApp number we can reach you on.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())) return setProblem("Please check the email address.");

    setStatus("sending");
    try {
      const res = await fetch(INQUIRY_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...answers,
          name: contact.name.trim(),
          phone: contact.phone.trim(),
          email: contact.email.trim(),
          business: contact.business.trim(),
          instagram: contact.instagram.trim().replace(/^@/, ""),
          message: contact.message.trim(),
          website: contact.website, // honeypot: real people never see this field
          source: `${window.location.pathname}${window.location.search}${document.referrer ? ` ← ${document.referrer}` : ""}`.slice(0, 300),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    const first = contact.name.trim().split(/\s+/)[0];
    return (
      <div className="rounded-2xl border border-accent/60 bg-card p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Received</p>
        <h3 className="display mt-3 text-3xl md:text-4xl" style={{ margin: "0.75rem 0 0" }}>
          Thanks, {first}.
        </h3>
        <p className="text-muted" style={{ marginTop: "1rem" }}>
          Our team gets back to you within 1 working day with a package and a price built for {contact.business.trim() || "your business"}. Want it faster? Message us on WhatsApp now.
        </p>
        <p style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem", marginBottom: 0 }}>
          <a href={whatsappFallback} target="_blank" rel="noopener" className={BTN}>WhatsApp us</a>
          <Link href="/#work" className={BTN_GHOST}>See our work</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-card p-6 md:p-8">
      {/* progress */}
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
        <span>Step {step + 1} of {TOTAL}</span>
        <span>{onContact ? "Last one" : "about 1 minute"}</span>
      </div>
      <div className="mt-3 h-px w-full bg-line">
        <div className="h-px bg-accent transition-[width] duration-300" style={{ width: `${((step + 1) / TOTAL) * 100}%` }} />
      </div>

      {!onContact && current && (
        <fieldset key={current.key} className="mt-8 border-0 p-0" style={{ margin: "2rem 0 0", padding: 0 }}>
          <legend className="display text-2xl leading-tight md:text-3xl">{current.question}</legend>
          {current.help && <p className="text-sm text-muted" style={{ marginTop: "0.6rem", marginBottom: 0 }}>{current.help}</p>}
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2" role={current.multi ? "group" : "radiogroup"}>
            {current.choices.map((c) => {
              const selected = current.multi ? answers.needs.includes(c.value) : answers[current.key] === c.value;
              return (
                <button
                  key={c.value}
                  type="button"
                  role={current.multi ? "checkbox" : "radio"}
                  aria-checked={selected}
                  className={chipClass(selected)}
                  onClick={() => pick(current, c.value)}
                >
                  <span>{c.value}</span>
                  {c.hint && <span className="text-xs text-muted">{c.hint}</span>}
                  {selected && !c.hint && <span className="text-accent" aria-hidden>✓</span>}
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between gap-3">
            <button type="button" className="text-sm text-muted hover:text-fg disabled:invisible" disabled={step === 0} onClick={() => setStep((n) => Math.max(0, n - 1))}>
              ← Back
            </button>
            {(current.multi || canContinue(current)) && (
              <button type="button" className={BTN} disabled={!canContinue(current)} onClick={() => setStep((n) => n + 1)} style={{ opacity: canContinue(current) ? 1 : 0.4 }}>
                Next
              </button>
            )}
          </div>
        </fieldset>
      )}

      {onContact && (
        <form onSubmit={submit} className="mt-8" noValidate>
          <h3 className="display text-2xl leading-tight md:text-3xl" style={{ margin: 0 }}>Where do we send your price?</h3>
          <p className="text-sm text-muted" style={{ marginTop: "0.6rem", marginBottom: 0 }}>
            Our team gets back to you within 1 working day. No newsletters, no spam.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted">Name</span>
              <input className={FIELD} autoComplete="name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} placeholder="Your name" required />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted">WhatsApp number</span>
              <input className={FIELD} type="tel" inputMode="tel" autoComplete="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} placeholder="+971 50 000 0000" required />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted">Email</span>
              <input className={FIELD} type="email" inputMode="email" autoComplete="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="you@company.com" required />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted">Business name <span className="normal-case tracking-normal">(optional)</span></span>
              <input className={FIELD} autoComplete="organization" value={contact.business} onChange={(e) => setContact({ ...contact, business: e.target.value })} placeholder="Company or brand" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted">Instagram <span className="normal-case tracking-normal">(optional)</span></span>
              <input className={FIELD} autoCapitalize="none" value={contact.instagram} onChange={(e) => setContact({ ...contact, instagram: e.target.value })} placeholder="@yourbrand" />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted">Anything we should know? <span className="normal-case tracking-normal">(optional)</span></span>
              <textarea className={FIELD} rows={3} value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} placeholder="Goals, deadlines, links" />
            </label>
            {/* honeypot: hidden from people, filled by bots */}
            <div aria-hidden className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
              <label>
                Website
                <input tabIndex={-1} autoComplete="off" value={contact.website} onChange={(e) => setContact({ ...contact, website: e.target.value })} />
              </label>
            </div>
          </div>

          {problem && <p role="alert" className="text-sm text-accent" style={{ marginTop: "1rem", marginBottom: 0 }}>{problem}</p>}
          {status === "error" && (
            <p role="alert" className="text-sm text-muted" style={{ marginTop: "1rem", marginBottom: 0 }}>
              The form did not go through. Send the same details on <a href={whatsappFallback} target="_blank" rel="noopener">WhatsApp</a> or call {PHONE_E164}.
            </p>
          )}

          <div className="mt-6 flex items-center justify-between gap-3">
            <button type="button" className="text-sm text-muted hover:text-fg" onClick={() => setStep(STEPS.length - 1)}>
              ← Back
            </button>
            <button type="submit" className={BTN} disabled={status === "sending"} style={{ opacity: status === "sending" ? 0.6 : 1 }}>
              {status === "sending" ? "Sending…" : "Get my price"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
