import Link from "next/link";
import {
  BRAND,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LEGAL_NAME,
  LEGAL_PAGES,
  LICENCE_AUTHORITY,
  LICENCE_NO,
  LINKEDIN_URL,
  NAV_PAGES,
  PHONE_DISPLAY,
  PHONE_E164,
  PORTAL_URL,
  SERVICE_PAGES,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "@/lib/site";

const link = "transition-colors hover:text-fg";
const SOCIALS = [
  { href: INSTAGRAM_URL, label: "Instagram" },
  { href: TIKTOK_URL, label: "TikTok" },
  { href: LINKEDIN_URL, label: "LinkedIn" },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-10 pt-14 text-sm text-muted md:px-10">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <Link href="/" className="display text-xl text-fg">
            {BRAND}<span className="text-accent">.</span>
          </Link>
          <p className="mt-4 max-w-xs leading-relaxed">
            Social media and video marketing agency in Dubai. We film, script, edit, post and report.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em]">Services</p>
          <ul className="space-y-2">
            {SERVICE_PAGES.map((s) => (
              <li key={s.slug}>
                <Link href={s.path} className={link}>{s.name}</Link>
              </li>
            ))}
            <li><Link href="/pricing" className={link}>Packages and prices</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em]">Company</p>
          <ul className="space-y-2">
            {NAV_PAGES.map((p) => (
              <li key={p.href}><Link href={p.href} className={link}>{p.label}</Link></li>
            ))}
            <li><a href={PORTAL_URL} target="_blank" rel="noopener" className={link}>Client portal</a></li>
            {LEGAL_PAGES.map((p) => (
              <li key={p.href}><Link href={p.href} className={link}>{p.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em]">Contact</p>
          <ul className="space-y-2">
            <li><a href={`mailto:${CONTACT_EMAIL}`} className={link}>{CONTACT_EMAIL}</a></li>
            <li><a href={`tel:${PHONE_E164}`} className={link}>{PHONE_DISPLAY}</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener" className={link}>WhatsApp</a></li>
            {SOCIALS.map((s) => (
              <li key={s.label}><a href={s.href} target="_blank" rel="noopener" className={link}>{s.label}</a></li>
            ))}
            <li>Dubai, United Arab Emirates</li>
          </ul>
        </div>
      </div>
      <p className="mt-12 border-t border-line pt-6 text-xs leading-relaxed">
        © 2026 {BRAND} · {LEGAL_NAME} · Trade licence {LICENCE_NO}, {LICENCE_AUTHORITY} · Dubai, UAE
      </p>
    </footer>
  );
}
