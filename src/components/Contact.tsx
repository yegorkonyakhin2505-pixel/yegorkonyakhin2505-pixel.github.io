import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "@/lib/site";

const link =
  "select-all text-fg underline-offset-4 transition-colors hover:text-accent hover:underline";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line px-6 pb-20 pt-24 md:px-10 md:pt-32">
      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted">
        Got a project in mind?
      </p>
      <h2 className="display outline-text block text-[16vw] leading-none md:text-[13vw]">
        Let&apos;s talk
      </h2>

      <div className="mt-16 flex flex-wrap items-end justify-between gap-8">
        <div className="flex flex-col gap-3 text-sm text-muted">
          <p>
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={link}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${PHONE_E164}`} className={link}>
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className={link}>
              Message us
            </a>
          </p>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Tell us what you sell and who you want to reach. We reply with the package that fits and a date for a first shoot.
        </p>
      </div>
    </section>
  );
}
