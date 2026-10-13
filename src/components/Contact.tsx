// Single place to change the public contact details.
const CONTACT_EMAIL = "amplifymarketingdubai@gmail.com";
const CONTACT_PHONE_DISPLAY = "+971 52 452 2978";
const CONTACT_PHONE_E164 = "+971524522978";
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_E164.replace("+", "")}`;

const link =
  "select-all text-fg underline-offset-4 transition-colors hover:text-accent hover:underline";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line px-6 pb-20 pt-24 md:px-10 md:pt-32">
      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted">
        Got a project in mind?
      </p>
      <span className="display outline-text block text-[16vw] leading-none md:text-[13vw]">
        Let&apos;s talk
      </span>

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
            <a href={`tel:${CONTACT_PHONE_E164}`} className={link}>
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className={link}>
              Message us
            </a>
          </p>
        </div>
        <p className="text-sm text-muted">
          © 2026 Amplify Marketing Management · Trade licence 1553366, Department of Economy and Tourism · Dubai, UAE
        </p>
      </div>
    </section>
  );
}
