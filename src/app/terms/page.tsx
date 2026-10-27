import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { BRAND, CONTACT_EMAIL, LEGAL_NAME, LICENCE_NO } from "@/lib/site";

const PATH = "/terms";
const TITLE = `Terms of service — ${BRAND}`;
const DESC = `The terms on which ${BRAND} (${LEGAL_NAME}, Dubai) provides social media, video and AI/web services.`;

export const metadata: Metadata = {
  title: "Terms of service",
  description: DESC,
  alternates: { canonical: PATH },
};

export default function TermsPage() {
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Terms", path: PATH }]}
      eyebrow="Legal"
      title={<>Terms of <span className="text-accent">service</span></>}
      lede={<>Last updated 27 October 2026. These are the standard terms for work done by {BRAND}. A signed proposal or quote for your project adds the specifics; where the two differ, the proposal wins.</>}
    >
      <h2>Who you are dealing with</h2>
      <p>{BRAND} is the trading name of {LEGAL_NAME}, Dubai, United Arab Emirates, trade licence {LICENCE_NO} issued by the Department of Economy and Tourism.</p>

      <h2>Packages</h2>
      <p>Monthly packages are described on the <Link href="/pricing">pricing page</Link>. The videos, posting, calls and reports listed for a package are what is delivered in a calendar month. Unused videos do not roll over unless agreed in writing. Changes of scope are agreed in writing before they happen.</p>

      <h2>Billing and cancellation</h2>
      <p>Each month is invoiced at the start of the period in AED and paid by bank transfer by the due date on the invoice. Work for a month starts once the invoice is paid. Packages have no minimum term: you can cancel before the next month starts by telling us in writing. Months already paid are not refunded. Projects (AI platforms, websites, SEO/AEO, long-form productions) are quoted separately with their own payment schedule.</p>

      <h2>Your part</h2>
      <ul>
        <li>Give us access to the accounts, premises and people needed for the agreed work, and the permissions required to film at your location.</li>
        <li>Approve scripts and videos within a reasonable time. Delayed approvals push delivery dates.</li>
        <li>Make sure what you ask us to publish is accurate and lawful, including any regulated claims (for example medical, financial or real estate advertising rules in the UAE).</li>
      </ul>

      <h2>Ownership</h2>
      <p>Once a month or project is paid for, the finished videos, posts, websites and platforms made for you are yours to use without restriction. We keep the right to show our work in our own portfolio unless you tell us not to. Music, fonts and stock assets are used under the licences of the platforms or libraries they come from.</p>

      <h2>Results</h2>
      <p>We do our work with care and report honestly. We do not promise a specific number of views, followers, leads or sales: platforms change, and results depend on the business and the market.</p>

      <h2>Liability</h2>
      <p>Our liability for any claim relating to the service is limited to the fees you paid for the month or project the claim relates to. We are not liable for indirect loss or for platform actions outside our control.</p>

      <h2>Law</h2>
      <p>These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai. Questions: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </PageShell>
  );
}
