import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import type { Faq as FaqItem } from "@/lib/faqs";
import { AED, BRAND, PACKAGES, SITE_URL } from "@/lib/site";

const [starter, growth, scale] = PACKAGES;
const PATH = "/best-video-content-agencies-dubai";
const TITLE = "Best Video Content Agencies in Dubai (2026): An Honest Comparison";
const DESC = "Eleven Dubai video and social content agencies compared on published prices, specialities and verified reviews. Includes us, labelled. October 2026.";
const CHECKED = "October 2026";

type Agency = {
  name: string;
  url: string;
  area: string;
  bestFor: string;
  what: string;
  price: string;
  reviews: string;
  ours?: boolean;
};

// Facts are taken from each agency's own website (and Clutch/Trustpilot where stated) in October 2026.
// Keep wording factual; update `price` when a site changes it.
const AGENCIES: Agency[] = [
  { name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com", area: "Al Barsha", bestFor: "One-off shoots and events, plus social reels", what: "Media production studio offering reels and short films for Instagram, TikTok and YouTube Shorts and combined photo-and-video social shoot days, alongside commercial, event and wedding video across the UAE.", price: "Video production from AED 2,500; studio hire from AED 1,500 (as published on its homepage)", reviews: "Trustpilot 4.1/5 (5 reviews)" },
  { name: "Dreambox", url: "https://www.dreamboxme.com", area: "Dubai Production City", bestFor: "Hero brand films with social cut-downs", what: "Photo and video production company with a dedicated social media videography service, plus event, corporate, real-estate and product shoots and live streaming.", price: "Shoot Only from AED 7,500; Full Production from AED 18,000 (one hero film plus three social cut-downs)", reviews: "—" },
  { name: "Hypebox", url: "https://hypebox.me", area: "Dubai (Damac Hills per Clutch)", bestFor: "Creator-led UGC for paid ads", what: "Creator-led content agency doing organic Reels production, UGC for paid ads, influencer marketing, social media management and media buying across the GCC.", price: "Not published; UGC packs of 10, 20 or 32 videos a month on 3-month retainers", reviews: "Clutch 4.9/5 (7 reviews)" },
  { name: "LPS (The Pear Society)", url: "https://www.lps-me.com", area: "Dubai Production City", bestFor: "Large social-led accounts with PR and influencers", what: "Social-led 360° agency: social media management, content and short-form video production, influencer marketing, PR and digital, with a large team and offices across the region.", price: "Not published", reviews: "Campaign Middle East Social Media Agency of the Year 2022 and 2023" },
  { name: `${BRAND}`, url: `${SITE_URL}/`, area: "Dubai", bestFor: "Monthly filmed short-form content for SMEs and creators", what: `Films, scripts, edits, posts and reports short-form content for Dubai businesses and creators on monthly packages; also builds AI platforms, websites and SEO/AEO. This is us; we are including ourselves because we meet the criteria, and you should compare us the same way as everyone else.`, price: `${AED(starter.price)} (6 videos a month), ${AED(growth.price)} (3 a week), ${AED(scale.price)} (6 a week); filming, scripts, editing and reporting included`, reviews: "New brand (previously Amplify Marketing); reviews being collected", ours: true },
  { name: "Narro Production", url: "https://www.narroproduction.com", area: "Dubai", bestFor: "Hospitality, restaurants and events", what: "Video agency for hospitality, restaurants, events and brands, producing social media reels and brand videos with monthly or quarterly content packs.", price: "Fast-turnaround videos from around AED 4,000; content packs not priced", reviews: "—" },
  { name: "ONEBYONE Creative Agency", url: "https://www.onebyoneagency.com", area: "Business Bay", bestFor: "Hotels and real estate on a content retainer", what: "Video production and social content agency producing reels, brand films, listing walkthroughs, event coverage and monthly content retainers, plus social media management and paid social.", price: "Reel from AED 1,500; brand film from AED 8,000; content retainer from AED 12,000 a month (12–24 reels)", reviews: "—" },
  { name: "Shoot At Sight Productions", url: "https://www.shootatsight.com", area: "Al Barsha", bestFor: "Corporate video and TVC-level production", what: "Video production house since 2010 (TVCs, corporate, documentary, animation, events) with a social media video service for TikTok, Instagram, Facebook and LinkedIn.", price: "Not published", reviews: "Clutch 4.9/5 (18 reviews)" },
  { name: "Social Media Forge Dubai", url: "https://socialmediamarketingdubai.ae", area: "Dubai Silicon Oasis", bestFor: "Bilingual EN/AR management with video included", what: "Bilingual social media management agency with in-house video production for Reels, TikTok and YouTube, plus paid ads and influencer marketing.", price: "AED 4,999 / 11,999 / 24,999 a month (12 posts, 20 posts + 8 reels, premium video)", reviews: "—" },
  { name: "Trendy Grandad", url: "https://www.trendygrandad.com/dubai-video-production-company", area: "Downtown Dubai (HQ London)", bestFor: "Social-first video and YouTube channel production", what: "Social-first video production agency making TikToks, Reels, Shorts and paid-social ads, plus YouTube channel production, animation and performance creative.", price: "Not published; works on monthly retainers", reviews: "—" },
  { name: "Viral Agency Dubai", url: "https://www.viralagency.ae", area: "Dubai and Abu Dhabi", bestFor: "Daily publishing retainers with UGC", what: "Content creation retainer agency doing planning, production and publishing of short-form video, UGC, carousels and captions, with paid amplification as an add-on.", price: "From AED 10,000 a month (8–12 videos); from AED 20,000 (16–24 videos)", reviews: "—" },
];

const GROUPS = [
  { title: "Monthly filmed content under AED 10,000 a month", names: [BRAND, "Social Media Forge Dubai"], note: "Published packages that include filming. A solo videographer such as Dubai Brand Films (dubaibrandfilms.com) also publishes monthly reel packages from AED 4,900 if you want a freelancer rather than an agency." },
  { title: "Hospitality, hotels and real estate", names: ["Narro Production", "ONEBYONE Creative Agency"] },
  { title: "UGC and creator-led ads", names: ["Hypebox", "Viral Agency Dubai"] },
  { title: "Brand films and larger productions", names: ["Dreambox", "Shoot At Sight Productions", "Backyard Studio Official"] },
  { title: "Big-team, social-led agencies", names: ["LPS (The Pear Society)", "Trendy Grandad"] },
];

const FAQS: FaqItem[] = [
  { q: "How much does a video content agency in Dubai cost?", a: `From the prices agencies publish (${CHECKED}): single reels from about AED 1,500–4,000; monthly content packages from about AED 5,000 to AED 25,000 depending on the number of videos and whether filming, posting and ads are included; brand films from about AED 8,000–18,000 upwards. ${BRAND}'s packages are ${AED(starter.price)}, ${AED(growth.price)} and ${AED(scale.price)} a month with filming included.` },
  { q: "What is the difference between a video content agency and a production house?", a: "A production house makes one film per project (a brand film, a TVC, an event film). A video content agency films and edits a steady stream of short vertical videos every month and usually posts them. Several Dubai companies do both; check which one the retainer actually covers." },
  { q: "How was this list put together?", a: `We looked for Dubai-based companies whose core work is short-form video and social content for businesses, read each agency's own website and, where available, its Clutch or Trustpilot profile, and recorded what they publish about services, prices and reviews in ${CHECKED}. We did not rank the list and we did not accept payment for placement. ${BRAND} is included and labelled as ours.` },
  { q: "Why are some prices missing?", a: "Because the agency does not publish them. We only quote prices that appear on an agency's own site, so a dash means you will need to request a quote." },
];

function listSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}${PATH}#list`,
    name: "Video content agencies in Dubai compared",
    description: DESC,
    numberOfItems: AGENCIES.length,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: AGENCIES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Organization", name: a.name, url: a.url, description: a.what, address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" } },
    })),
  };
}

export const metadata: Metadata = {
  title: "Best Video Content Agencies in Dubai (2026)",
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH, type: "article" },
};

export default function BestAgenciesPage() {
  const byName = (n: string) => AGENCIES.find((a) => a.name === n)!;
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Blog", path: "/blog" }, { name: "Best video content agencies in Dubai", path: PATH }]}
      eyebrow={`Comparison · checked ${CHECKED}`}
      title={<>Best video content agencies in Dubai: an <span className="text-accent">honest</span> comparison</>}
      lede={<>Eleven companies in Dubai that film and edit short-form video and social content, compared on what they actually publish: what they do, where they are, starting prices and verified reviews. No ranking, no paid placement. {BRAND} is on the list and labelled as ours.</>}
      extraJsonLd={[listSchema()]}
    >
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", "@id": `${SITE_URL}${PATH}#article`, headline: TITLE, description: DESC, url: `${SITE_URL}${PATH}`, datePublished: "2026-10-27", dateModified: "2026-10-27", author: { "@type": "Person", name: "Yegor Konyakhin", url: `${SITE_URL}/about` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: { "@id": `${SITE_URL}${PATH}#webpage` }, inLanguage: "en" }} />

      <div className="box">
        <p className="lead" style={{ marginBottom: 0 }}>
          The best video content agency in Dubai depends on what you are buying: a monthly stream of filmed short-form videos, creator-made ads, or a single brand film. The agencies below cover all three. For a filmed monthly package, published prices in Dubai start around AED 5,000 a month; for a brand film, around AED 8,000–18,000; for a single reel, AED 1,500–4,000.
        </p>
      </div>

      <h2>Who suits what</h2>
      {GROUPS.map((g) => (
        <div key={g.title}>
          <h3>{g.title}</h3>
          <ul>
            {g.names.map((n) => {
              const a = byName(n);
              return (
                <li key={n}>
                  <strong>{a.ours ? <Link href="/">{a.name}</Link> : <a href={a.url} target="_blank" rel="noopener nofollow">{a.name}</a>}</strong>{a.ours ? " (us)" : ""}: {a.bestFor.toLowerCase()}. {a.price}.
                </li>
              );
            })}
          </ul>
          {g.note && <p>{g.note}</p>}
        </div>
      ))}

      <h2>All eleven, side by side</h2>
      <table>
        <thead><tr><th>Agency</th><th>Area</th><th>Published starting price</th><th>Verified reviews</th></tr></thead>
        <tbody>
          {AGENCIES.map((a) => (
            <tr key={a.name}>
              <td>{a.ours ? <Link href="/">{a.name} (us)</Link> : <a href={a.url} target="_blank" rel="noopener nofollow">{a.name}</a>}</td>
              <td>{a.area}</td>
              <td>{a.price}</td>
              <td>{a.reviews}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Prices and reviews are as published by each company in {CHECKED}; they change, so confirm before you decide. A dash means the company does not publish that information.</p>

      <h2>The agencies in detail</h2>
      {AGENCIES.map((a) => (
        <div key={a.name}>
          <h3>{a.name}{a.ours ? " (this is us)" : ""}</h3>
          <p>{a.what}</p>
          <p><strong>Area:</strong> {a.area}. <strong>Best for:</strong> {a.bestFor.toLowerCase()}. <strong>Pricing:</strong> {a.price}. <strong>Reviews:</strong> {a.reviews}. {a.ours ? <Link href="/pricing">See our packages.</Link> : <a href={a.url} target="_blank" rel="noopener nofollow">Website.</a>}</p>
        </div>
      ))}

      <h2>How to use this list</h2>
      <ol>
        <li>Decide what you are buying: monthly content, creator ads or a film. Shortlist from the matching group above.</li>
        <li>Divide the monthly fee by the number of finished videos. Cost per video is the honest comparison.</li>
        <li>Ask for last month&apos;s work for three current clients, not the showreel.</li>
        <li>Confirm who films, who writes the scripts, whether posting is included and who owns the files.</li>
      </ol>
      <p>The full checklist is in <Link href="/blog/how-to-choose-video-content-agency-dubai">How to choose a video content agency in Dubai</Link>, and what the market charges is in <Link href="/blog/social-media-management-cost-dubai">What social media management costs in Dubai</Link>.</p>

      <h2>Method and disclosure</h2>
      <p>We looked for Dubai-based companies whose core work is short-form video and social content for businesses, read each agency&apos;s own website and, where available, its Clutch or Trustpilot profile, and recorded what they publish. We did not rank them, we did not accept payment for placement, and we left out companies we could not verify. {BRAND} is included because it meets the criteria; we have labelled it as ours wherever it appears. If you run one of these agencies and something here is out of date, email us and we will correct it.</p>

      <Faq items={FAQS} path={PATH} title="Comparison questions" />
      <Cta text={`If a filmed monthly package is what you need, send ${BRAND} your Instagram and what you sell. We reply with the package that fits and a first shoot date.`} />
    </PageShell>
  );
}
