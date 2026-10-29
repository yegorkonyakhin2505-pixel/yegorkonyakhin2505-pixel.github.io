import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import { AI_FAQS } from "@/lib/faqs";
import { buildServicePage } from "@/lib/schema";
import { BRAND, CLICKCOLLAB_URL, SERVICE_PAGES, SITE_HOST } from "@/lib/site";

const page = SERVICE_PAGES[2];
const PATH = page.path;
const TITLE = "AI Platforms, Websites and SEO/AEO for Dubai Businesses";
const DESC = `${BRAND} builds AI agents and automations, fast business websites, company email and SEO/AEO for Dubai businesses. Quoted per project, handed over in full.`;

export const metadata: Metadata = {
  title: "AI Platforms, Websites and SEO/AEO in Dubai",
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

export default function AiPage() {
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Services", path: "/#services" }, { name: page.name, path: PATH }]}
      eyebrow="AI platforms · websites · SEO/AEO"
      title={<>Built, integrated, <span className="text-accent">handed over</span></>}
      lede={<>Alongside content, {BRAND} builds the tools a Dubai business runs on: AI agents and automations, a website that loads fast and ranks, company email on your own domain, and the search and AI-engine optimisation that gets you recommended. Everything is set up in your name and handed over.</>}
      extraJsonLd={[buildServicePage(page.slug)]}
    >
      <h2>AI platforms, agents and automations</h2>
      <p>We build AI into the way your business already works instead of adding another app nobody opens. Typical builds:</p>
      <ul>
        <li><strong>Lead handling:</strong> enquiries from WhatsApp, Instagram and your website answered, qualified and logged, with a human taking over when it matters.</li>
        <li><strong>Booking and follow-up flows:</strong> confirmations, reminders, reviews requests and re-booking nudges.</li>
        <li><strong>Content and reporting tools:</strong> drafts, captions, summaries and dashboards generated from your own data.</li>
        <li><strong>Internal assistants:</strong> a private assistant trained on your documents, prices and processes for your team.</li>
        <li><strong>Client portals:</strong> the portal our own clients use for calendars, approvals and weekly numbers is an example of what we build.</li>
        <li><strong>Our own product:</strong> <a href={CLICKCOLLAB_URL}>ClickCollab</a>, a content-ideas tool for creators founded by our co-founder Yegor, runs on the same stack we use for client builds.</li>
      </ul>

      <h2>Websites that load fast and rank</h2>
      <p>{SITE_HOST} is built the way we build for clients: static pages served from a fast server, animation that does not lag on a phone, real 404s, structured data, Open Graph previews, a sitemap and an <code>llms.txt</code> for AI crawlers. A business site usually means a home page, service pages, pricing, about and contact, with company email on your domain set up alongside.</p>

      <h2>What SEO and AEO mean here</h2>
      <p><strong>SEO</strong> is making your pages the best answer for what people type into Google and Bing: one page per service, clear headings, facts stated plainly, fast loading, and consistent business listings.</p>
      <p><strong>AEO</strong> (answer engine optimisation) is making your business the one ChatGPT, Perplexity, Gemini, Copilot and Google AI answers recommend. In practice: a clear entity statement (who you are, where, licence, what you sell, prices), question-and-answer sections, schema.org structured data, an <code>llms.txt</code> file, and the same name, phone and address on every profile and directory. AI engines quote pages that already rank and that state facts cleanly; we build both.</p>

      <h2>How a project runs</h2>
      <ol>
        <li><strong>Scoping call.</strong> What the tool or site has to do, for whom, and what it connects to.</li>
        <li><strong>Written quote.</strong> Fixed price and scope before any work starts.</li>
        <li><strong>Build.</strong> You see working versions as we go, not a reveal at the end.</li>
        <li><strong>Handover.</strong> Accounts, domains and code in your name, with documentation. No lock-in, no monthly fee to keep what you own.</li>
        <li><strong>Support.</strong> Optional, agreed per project.</li>
      </ol>

      <h2>Pricing</h2>
      <p>Per project, quoted after the scoping call. Content packages are separate and listed on the <Link href="/pricing">pricing page</Link>; many clients combine a Growth package with a website or an AI build.</p>

      <Faq items={AI_FAQS} path={PATH} title="AI and web questions" />
      <Cta text="Tell us what you want automated or built, and what it should connect to. We reply with a scoping call slot." />
    </PageShell>
  );
}
