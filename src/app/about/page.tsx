import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";
import { BRAND, CLICKCOLLAB_URL, FOUNDERS, FOUNDING_YEAR, LEGAL_NAME, LICENCE_AUTHORITY, LICENCE_ISSUED, LICENCE_NO } from "@/lib/site";

const PATH = "/about";
const TITLE = `About ${BRAND} — video and social media marketing agency in Dubai`;
const DESC = `${BRAND}: Dubai video and social media marketing agency founded in ${FOUNDING_YEAR} by Yegor Konyakhin and Asset Zhumabayev. ${LEGAL_NAME}, DET licence ${LICENCE_NO}.`;

export const metadata: Metadata = {
  title: `About ${BRAND}`,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

export default function AboutPage() {
  const [yegor, asset] = FOUNDERS;
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "About", path: PATH }]}
      eyebrow="About"
      title={<>Two people, <span className="text-accent">one camera,</span> your whole feed</>}
      lede={<>{BRAND} is a Dubai video and social media marketing agency. We film, script, edit, post and report on short-form content for UAE businesses and creators, and we build AI platforms and websites that we hand over in full.</>}
    >
      <h2>The short version</h2>
      <ul>
        <li><strong>Founded</strong> in {FOUNDING_YEAR} as Amplify Marketing by {yegor.name} and {asset.name}; licensed in Dubai in {LICENCE_ISSUED}.</li>
        <li><strong>Legal entity:</strong> {LEGAL_NAME}, trade licence {LICENCE_NO}, {LICENCE_AUTHORITY}. {BRAND} is the agency&apos;s trading name; the licence is being updated to match.</li>
        <li><strong>What we sell:</strong> monthly content packages (filming, scripts, editing, posting, analytics) from AED 5,000, and AI platforms, websites and SEO/AEO per project.</li>
        <li><strong>Who we work with:</strong> businesses in Dubai that sell face to face: barbershops and salons, clinics, car rental and detailing, restaurants and lounges, real estate agents, gyms, product brands, plus creators and podcasts.</li>
        <li><strong>Languages:</strong> English and Russian.</li>
      </ul>

      <h2>Founders</h2>
      <p>{BRAND} is owned and run by its two co-founders. Both hold the CEO title: Yegor on the marketing and technology side, Asset on production.</p>
      <div className="box">
        <h3 style={{ marginTop: 0 }}>{yegor.name} <span className="text-muted">— {yegor.role}</span></h3>
        <p>Yegor runs strategy, client accounts and the social media side: content calendars, captions, posting, reporting and the client portal. He also builds the AI and web work, and is the founder of <a href={CLICKCOLLAB_URL}>ClickCollab</a>, a content-ideas tool for creators.</p>
        <h3>{asset.name} <span className="text-muted">— {asset.role}</span></h3>
        <p style={{ marginBottom: 0 }}>Asset films and edits everything we publish: shoot days, B-roll, captions, sound design and colour. The footage on this site is his work with our team.</p>
      </div>

      <h2>How we work</h2>
      <ol>
        <li><strong>Scripts first.</strong> Every video has a written hook and script approved before anyone picks up a camera.</li>
        <li><strong>Real footage.</strong> We film at your location with our own team. AI-generated content is used where it helps and is always labelled to you.</li>
        <li><strong>Cut for sound-off.</strong> Captions, pacing and sound design assume the viewer is scrolling on mute.</li>
        <li><strong>You approve, we post.</strong> Nothing goes live without your sign-off. On Growth and Scale we handle uploading, scheduling and captions.</li>
        <li><strong>Numbers you can trust.</strong> Monthly reports show reach, growth and conversions, best and worst content, and what we change next. We never publish client results without written approval, which is why this site shows footage, not vanity numbers.</li>
        <li><strong>No lock-in.</strong> Packages are monthly. Files, accounts and anything we build are yours.</li>
      </ol>

      <h2>Where we work</h2>
      <p>Dubai, on location: Marina, JBR, Downtown, Business Bay, DIFC, Jumeirah, Al Quoz, Palm Jumeirah, Deira and wherever your business is. Shoots elsewhere in the UAE are arranged per project.</p>

      <h2>Previously Amplify Marketing</h2>
      <p>The agency started in {FOUNDING_YEAR} as Amplify Marketing, was licensed in Dubai in {LICENCE_ISSUED} and became {BRAND} in October 2026. Same team, same packages, new name. Old links on amplifymarketing.ae redirect here.</p>

      <p>See <Link href="/pricing">pricing</Link>, the <Link href="/services/social-media-marketing-dubai">social media</Link>, <Link href="/services/video-production-dubai">video production</Link> and <Link href="/services/ai-platforms-dubai">AI platforms</Link> pages, or <Link href="/contact">contact us</Link>.</p>
      <Cta />
    </PageShell>
  );
}
