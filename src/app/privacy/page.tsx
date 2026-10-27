import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { BRAND, CONTACT_EMAIL, LEGAL_NAME, LICENCE_NO, PORTAL_URL } from "@/lib/site";

const PATH = "/privacy";
const TITLE = `Privacy policy — ${BRAND}`;
const DESC = `How ${BRAND} (${LEGAL_NAME}, Dubai) handles the personal data of visitors, enquiries and clients.`;

export const metadata: Metadata = {
  title: "Privacy policy",
  description: DESC,
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Privacy", path: PATH }]}
      eyebrow="Legal"
      title={<>Privacy <span className="text-accent">policy</span></>}
      lede={<>Last updated 27 October 2026. This policy explains what personal data {BRAND} collects, why, and what you can ask us to do with it. It is written to follow the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021).</>}
    >
      <h2>Who we are</h2>
      <p>{BRAND} is the trading name of {LEGAL_NAME}, a Dubai business licensed by the Department of Economy and Tourism under trade licence {LICENCE_NO}. For anything in this policy, write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>

      <h2>What this website collects</h2>
      <p>This website sets no tracking cookies and runs no advertising or analytics scripts. Our hosting provider keeps standard server logs (IP address, browser, pages requested, time) for security and to keep the site running. Logs are not used to identify visitors.</p>

      <h2>What we collect when you contact us</h2>
      <p>If you email, call or message us on WhatsApp, we keep what you send: your name, business name, contact details and the content of the conversation. We use it to reply, to prepare a proposal and, if you become a client, to deliver the service. We do not sell or rent this data and we do not add you to a mailing list without asking.</p>

      <h2>Client data</h2>
      <p>Clients get a login to our client portal at <a href={PORTAL_URL} target="_blank" rel="noopener">{PORTAL_URL.replace("https://", "")}</a>. The portal stores your account email, a hashed password, your content calendar, approvals and the performance numbers we report. Login uses a session cookie that is strictly necessary for the portal to work. To run your social media accounts we may hold access to those accounts; the access is used only for the agreed work and is removed when the work ends.</p>
      <p>Footage we film for you may include your staff and customers. You are responsible for telling the people being filmed and for any permissions needed at your premises. We do not reuse client footage in our own marketing without your written approval.</p>

      <h2>Who else sees it</h2>
      <p>Only the service providers we need to operate: our hosting provider (servers in the EU), our email provider, and the social media platforms you ask us to publish on. Each receives only what is needed for its job. We do not transfer data to anyone else unless the law requires it.</p>

      <h2>How long we keep it</h2>
      <p>Enquiry data: until the conversation ends and for up to 12 months after, in case you come back. Client data: for the duration of the engagement and for the period UAE commercial and tax rules require invoices and contracts to be kept. Server logs: short rotation set by the hosting provider.</p>

      <h2>Your rights</h2>
      <p>You can ask us what personal data we hold about you, ask for it to be corrected or deleted, object to how we use it, or ask for a copy. Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will answer within 30 days. If you are a client, deleting data may mean we cannot finish the service.</p>

      <h2>Changes</h2>
      <p>If this policy changes, the new version is published here with a new date.</p>
    </PageShell>
  );
}
