import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import { ADS_FAQS } from "@/lib/faqs";
import { buildServicePage } from "@/lib/schema";
import { BRAND, SERVICE_PAGES } from "@/lib/site";

const page = SERVICE_PAGES[2];
const PATH = page.path;
const TITLE = "Meta and Google Ads Management in Dubai — run with creative we film";
const DESC = `${BRAND} plans, builds and runs Instagram, Facebook and Google Ads for Dubai businesses, using ad creative filmed by our own team. Your ad account, your leads, a clear monthly report.`;

export const metadata: Metadata = {
  title: "Meta and Google Ads Management in Dubai",
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

export default function AdsPage() {
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Services", path: "/#services" }, { name: page.name, path: PATH }]}
      eyebrow="Meta & Google Ads · Dubai"
      title={<>Ads that look like <span className="text-accent">you</span></>}
      lede={<>{BRAND} runs Meta and Google ads for Dubai businesses. We use the videos we already film at your business as the ads, set everything up in your own ad account, send the leads straight into your client portal and show you what every dirham did.</>}
      extraJsonLd={[buildServicePage(page.slug)]}
    >
      <h2>What ads management includes</h2>
      <ul>
        <li><strong>Strategy.</strong> What you want the ads to do (bookings, walk-ins, enquiries, a launch), who should see them and on which platform.</li>
        <li><strong>Creative from your shoot days.</strong> Ad cuts of the videos we film at your location, with hooks and captions written for ads. See <Link href="/services/video-production-dubai">video production</Link>.</li>
        <li><strong>Meta Ads.</strong> Instagram and Facebook campaigns: Reels and Stories placements, audiences around your area, lead forms and message campaigns.</li>
        <li><strong>Google Ads.</strong> Search campaigns for people already looking for your service in Dubai, and YouTube where video fits.</li>
        <li><strong>Tracking.</strong> Pixel, conversion events and lead forms set up so results are measured, not guessed.</li>
        <li><strong>Leads into your CRM.</strong> Enquiries land in your <Link href="/services/ai-platforms-dubai">client portal</Link> leads board, ready to follow up, and can be picked up by AI for instant replies.</li>
        <li><strong>Weekly optimisation and a monthly report.</strong> What ran, what it cost, what it brought in, and what changes next.</li>
      </ul>

      <h2>How it works</h2>
      <ol>
        <li><strong>Goal and budget.</strong> We agree the goal and a monthly ad budget with you before anything runs.</li>
        <li><strong>Your ad account.</strong> Campaigns run in an ad account in your business name. You pay Meta and Google directly; our fee covers the work.</li>
        <li><strong>Creative.</strong> We cut the ads from your shoot day and you approve them before launch.</li>
        <li><strong>Launch and optimise.</strong> We watch the numbers every week, pause what does not work and push what does.</li>
        <li><strong>Report.</strong> Every month: spend, reach, leads and bookings, and the plan for next month.</li>
      </ol>

      <h2>Why ads work better with your own video</h2>
      <p>People scroll past anything that looks like an advert. An ad that shows your actual shop, your team and your customers looks like a post from a business they could walk into, and it gives the ad something true to say. Because we film for you every month, your ads get fresh creative every month too.</p>

      <h2>Price</h2>
      <p>Ads management is quoted per business and can be added to any content package. The ad budget itself is separate and paid by you to Meta or Google. Answer five questions on the <Link href="/pricing">pricing page</Link> and we reply within 1 working day.</p>

      <Faq items={ADS_FAQS} path={PATH} title="Ads questions" />
      <Cta />
    </PageShell>
  );
}
