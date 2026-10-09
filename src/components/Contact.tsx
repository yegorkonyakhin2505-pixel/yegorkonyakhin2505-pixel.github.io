// Single place to change the public contact address.
const CONTACT_EMAIL = "hello@amplifymarketing.ae";

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
        <p className="text-sm text-muted">
          Email:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="select-all text-fg underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="text-sm text-muted">© 2026 Amplify Marketing — Dubai, UAE</p>
      </div>
    </section>
  );
}
