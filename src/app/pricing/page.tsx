import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import PriceFinder from "@/components/PriceFinder";
import { PRICING_FAQS } from "@/lib/faqs";
import { AED, BRAND, PACKAGES, PRICE_FROM } from "@/lib/site";

const PATH = "/pricing";
const TITLE = "Social Media & Video Marketing Packages and Prices in Dubai (AED)";
const DESC = `${BRAND} packages start from ${AED(PRICE_FROM)} a month: filmed, scripted, edited and reported. Answer 5 questions and get your price within 1 working day. No VAT, cancel anytime.`;

export const metadata: Metadata = {
  title: `Pricing — packages from ${AED(PRICE_FROM)} a month`,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

const ROWS: [string, string, string, string][] = [
  ["Videos", "6 a month", "3 a week", "6 a week"],
  ["Filmed by our team", "Yes", "Yes", "Yes"],
  ["Script and hook for every video", "Yes", "Yes", "Yes"],
  ["Professional editing, captions, sound", "Yes", "Yes", "Yes"],
  ["End-of-month analytics report", "Yes", "Yes", "Yes"],
  ["Uploading and scheduling handled", "—", "Yes", "Yes"],
  ["Access to AI-generated content", "—", "Yes", "Yes"],
  ["Monthly strategy call", "—", "Yes", "Yes"],
  ["In-depth social media analysis", "—", "—", "Yes"],
  ["Niche and competitor analysis", "—", "—", "Yes"],
  ["Full strategy for your business", "—", "—", "Yes"],
];

export default function PricingPage() {
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Pricing", path: PATH }]}
      eyebrow="Pricing"
      title={<>What would it <span className="text-accent">cost you?</span></>}
      lede={<>Packages start from {AED(PRICE_FROM)} a month. Every one is filmed, scripted, edited and reported by our team; prices are in AED, no VAT added, cancel anytime. The exact price depends on your business, so answer five quick questions and we reply within 1 working day with the package and the price that fit.</>}
    >
      <div id="quiz">
        <PriceFinder />
      </div>

      <h2>The three packages</h2>
      <div className="pkg">
        {PACKAGES.map((p) => (
          <div key={p.slug} id={p.slug} className={"popular" in p && p.popular ? "popular" : ""}>
            <p className="tag">{p.tagline}{"popular" in p && p.popular ? " · most popular" : ""}</p>
            <h3>{p.name}</h3>
            <p className="price">{p.perWeek}</p>
            <ul>
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2>Compare the packages</h2>
      <table>
        <thead>
          <tr><th>What you get</th><th>Starter</th><th>Growth</th><th>Scale</th></tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>
          ))}
        </tbody>
      </table>

      <h2>What drives the price</h2>
      <p>The cost of social media management in Dubai comes down to four things: how many videos are produced, how many shoot days that takes, whether posting and community are handled for you, and how much strategy and analysis sits behind it. {BRAND} prices on exactly those four, which is why we ask before we quote.</p>
      <ul>
        <li><strong>Volume.</strong> Starter is 6 filmed videos a month. Growth is 3 a week (about 13 a month). Scale is 6 a week (about 26 a month).</li>
        <li><strong>Production.</strong> Every video, on every package, is filmed by our team, scripted before the shoot and edited with captions and sound for sound-off viewing.</li>
        <li><strong>Management.</strong> From Growth up we upload and schedule every post, write the captions and hashtags and hold a monthly strategy call with you.</li>
        <li><strong>Analysis.</strong> Scale adds in-depth social media analysis, a niche and competitor study and a full strategy for the business, not just the content.</li>
      </ul>

      <h2>What is not in a package</h2>
      <ul>
        <li>Ad spend. If we boost posts or run paid campaigns for you, the media budget is paid by you to Meta, TikTok or Google directly.</li>
        <li>Long-form productions such as event films, podcast series and brand films. Quoted per project.</li>
        <li>Shoot days outside Dubai. Arranged per project.</li>
        <li>AI platforms, websites and SEO/AEO work. Quoted per project, see <Link href="/services/ai-platforms-dubai">AI platforms and websites</Link>.</li>
      </ul>

      <h2>How billing works</h2>
      <p>Each month is invoiced at the start of the period and paid by bank transfer in AED. Packages are monthly: there is no minimum term and you can cancel before the next month starts. {BRAND} is currently not VAT-registered, so no VAT is added to invoices. Invoices carry our Dubai trade licence number.</p>

      <h2>Which package should you pick?</h2>
      <p><strong>Starter</strong> if you want consistent, well-made video on your accounts and you are happy to post it yourself. <strong>Growth</strong> if you want the accounts run for you, with content going out three times a week and someone to call every month. <strong>Scale</strong> if social media is a main sales channel and you want the volume and the strategy to own your niche. Not sure? The five questions above sort it out.</p>

      <Faq items={PRICING_FAQS} path={PATH} title="Pricing questions" />
      <Cta />
    </PageShell>
  );
}
