import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { BRAND, CONTACT_EMAIL, LEGAL_NAME, LICENCE_NO, PHONE_DISPLAY, PHONE_E164, PORTAL_URL, WHATSAPP_URL } from "@/lib/site";

const PATH = "/contact";
const TITLE = `Contact ${BRAND} in Dubai`;
const DESC = `Email ${CONTACT_EMAIL}, call or WhatsApp ${PHONE_DISPLAY}. ${BRAND} is a Dubai social media and video marketing agency serving Dubai and the UAE.`;

export const metadata: Metadata = {
  title: "Contact Multify in Dubai: WhatsApp, Phone, Email",
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

export default function ContactPage() {
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Contact", path: PATH }]}
      eyebrow="Contact"
      title={<>Let&apos;s <span className="text-accent">talk</span></>}
      lede={<>WhatsApp is the fastest way to reach us. Tell us what you sell, where you are and what you want social media to do for you, and we reply with the package that fits and a date for a first shoot.</>}
    >
      <div className="box">
        <p style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="cta">WhatsApp us</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="cta ghost">Email us</a>
        </p>
        <ul>
          <li><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          <li><strong>Phone and WhatsApp:</strong> <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a></li>
          <li><strong>Client portal:</strong> <a href={PORTAL_URL} target="_blank" rel="noopener">existing clients log in here</a></li>
          <li><strong>Based in:</strong> Dubai, United Arab Emirates. We come to you for shoot days.</li>
          <li><strong>Languages:</strong> English, Russian.</li>
        </ul>
      </div>

      <h2>What to send us</h2>
      <ul>
        <li>Your business name and a link to your Instagram or TikTok.</li>
        <li>What you want more of: bookings, walk-ins, enquiries, followers, or a launch.</li>
        <li>Roughly how many videos a month you have in mind, if you know. If not, we will suggest.</li>
      </ul>

      <h2>Where we film</h2>
      <p>Across Dubai: Marina, JBR, Downtown, Business Bay, DIFC, Jumeirah, Al Quoz, Palm Jumeirah, Deira, Al Barsha, JLT, Dubai Hills and the rest of the city. Shoots elsewhere in the UAE are arranged per project.</p>

      <h2>Legal</h2>
      <p>{BRAND} trades under {LEGAL_NAME}, trade licence {LICENCE_NO}, Department of Economy and Tourism, Dubai. Invoices are issued in AED.</p>
    </PageShell>
  );
}
