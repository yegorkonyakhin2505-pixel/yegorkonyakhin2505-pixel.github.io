import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import { SOCIAL_FAQS } from "@/lib/faqs";
import { buildServicePage } from "@/lib/schema";
import { BRAND, SERVICE_PAGES } from "@/lib/site";

const page = SERVICE_PAGES[0];
const PATH = page.path;
const TITLE = "Social Media Marketing Agency in Dubai — Instagram, TikTok, Shorts, run for you";
const DESC = `${BRAND} runs Instagram, TikTok and YouTube Shorts for Dubai businesses: filmed videos, captions, posting, replies and a monthly report. From AED 5,000 a month.`;

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Dubai",
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

export default function SocialPage() {
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Services", path: "/#services" }, { name: page.name, path: PATH }]}
      eyebrow="Social media marketing · Dubai"
      title={<>Your accounts, <span className="text-accent">run</span> for you</>}
      lede={<>{BRAND} is a social media marketing agency in Dubai. We plan the month, film and script the videos, write the captions, post everything and reply, then show you the numbers. You see your feed grow without touching the post button.</>}
      extraJsonLd={[buildServicePage(page.slug)]}
    >
      <h2>What social media marketing includes</h2>
      <ul>
        <li><strong>Monthly content calendar.</strong> Every post planned a month ahead around your offers, seasons and what performed last month.</li>
        <li><strong>Filmed, scripted video.</strong> Shoot days at your location with our team; a hook and script for every video. See <Link href="/services/video-production-dubai">video production</Link>.</li>
        <li><strong>Captions and hashtags.</strong> Written for each platform, with a clear call to action.</li>
        <li><strong>Uploading and scheduling.</strong> We publish at the right times on Instagram, TikTok and YouTube Shorts (Growth and Scale).</li>
        <li><strong>Community.</strong> Replies to comments and routine DMs, with real enquiries passed straight to you (scope agreed per client).</li>
        <li><strong>Platform optimisation.</strong> Bio, highlights, link, pinned posts and profile details kept current.</li>
        <li><strong>Monthly analytics report</strong> and, on Growth and Scale, a monthly strategy call.</li>
      </ul>

      <h2>How a month works</h2>
      <ol>
        <li><strong>Strategy call.</strong> What you sell, who buys it, what you want social media to do (walk-ins, bookings, enquiries, launches). We agree tone, formats and the calendar.</li>
        <li><strong>Scripts.</strong> Hooks and scripts for the month&apos;s videos go to you for approval before the shoot.</li>
        <li><strong>Shoot day.</strong> Our team films at your location: the main pieces, B-roll and behind-the-scenes, typically several videos in one session.</li>
        <li><strong>Edit and approve.</strong> Captions, sound design, colour, vertical 9:16. You approve each video before it goes out.</li>
        <li><strong>Post and reply.</strong> We upload, schedule, caption and handle comments through the month.</li>
        <li><strong>Report.</strong> At month end: reach, follower growth, conversions, best and worst content, and what we change next month.</li>
      </ol>

      <h2>Who it is for</h2>
      <p>Businesses in Dubai that sell face to face and need to be seen every week: barbershops and salons, aesthetic and dental clinics, car rental and detailing, restaurants, cafés and lounges, real estate agents, gyms and studios, clothing and product brands. Also creators and podcasts who want a content system rather than one-off edits.</p>

      <h2>Which package fits</h2>
      <table>
        <thead><tr><th>Package</th><th>You get</th><th>Best for</th></tr></thead>
        <tbody>
          <tr><td>Starter · AED 5,000</td><td>6 filmed, scripted and edited videos a month, monthly report. You post.</td><td>Consistent video on your feed, posting kept in-house</td></tr>
          <tr><td>Growth · AED 8,000</td><td>3 videos a week, posting and scheduling handled, AI content access, monthly strategy call and report.</td><td>Accounts run for you, three posts a week</td></tr>
          <tr><td>Scale · AED 17,000</td><td>6 videos a week, everything in Growth, social media analysis, niche and competitor study, full strategy.</td><td>Social as a main sales channel</td></tr>
        </tbody>
      </table>
      <p>Full comparison and billing terms on the <Link href="/pricing">pricing page</Link>.</p>

      <h2>What you see every week</h2>
      <p>Every client gets a login to the {BRAND} client portal: the month&apos;s calendar, what is scheduled, what went live and the weekly numbers. No waiting for a monthly deck to know what is happening.</p>

      <h2>Platforms</h2>
      <p>Instagram (Reels, posts, Stories), TikTok and YouTube Shorts are where short-form video gets watched in the UAE, so that is where we focus. Facebook and LinkedIn are added when the business needs them, using the same content.</p>

      <Faq items={SOCIAL_FAQS} path={PATH} title="Social media questions" />
      <Cta />
    </PageShell>
  );
}
