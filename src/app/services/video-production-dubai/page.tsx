import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import { VIDEO_FAQS } from "@/lib/faqs";
import { buildServicePage } from "@/lib/schema";
import { BRAND, SERVICE_PAGES } from "@/lib/site";

const page = SERVICE_PAGES[1];
const PATH = page.path;
const TITLE = "Short-Form Video Production in Dubai — Reels, TikTok and Shorts";
const DESC = `${BRAND} films short-form video in Dubai: scripts, shoot days at your location, edits with captions for Reels, TikTok and Shorts. 6 to 26 videos a month from AED 5,000.`;

export const metadata: Metadata = {
  title: "Short-Form Video Production in Dubai",
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

export default function VideoPage() {
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Services", path: "/#services" }, { name: page.name, path: PATH }]}
      eyebrow="Video production · Dubai"
      title={<>Reels, TikToks and Shorts, <span className="text-accent">filmed</span> at your place</>}
      lede={<>{BRAND} is a short-form video production team in Dubai. We write the hook, film at your location with our own crew and cut the video for how people actually watch: fast, captioned, on mute. Every package on the <Link href="/pricing">pricing page</Link> is built on this.</>}
      extraJsonLd={[buildServicePage(page.slug)]}
    >
      <h2>What we film</h2>
      <ul>
        <li><strong>Talking-head and founder videos:</strong> you or your team answering the questions customers ask, scripted so it lands in 30 seconds.</li>
        <li><strong>Venue and atmosphere:</strong> the shop, the chair, the kitchen, the showroom, the room at night.</li>
        <li><strong>Product and service demos:</strong> before and after, the process, the detail shots.</li>
        <li><strong>Event recaps:</strong> car meets, launches, nights out, cut into a recap and clips.</li>
        <li><strong>Podcast clips:</strong> multi-camera recording cut into vertical highlights with captions.</li>
        <li><strong>Creator content:</strong> fitness, lifestyle, cinematic and montage edits for influencers.</li>
      </ul>
      <p>Examples of all of these are on the <Link href="/#work">work section</Link> of the homepage: barbershops, a BMW car club, podcasts, car rental, a clothing brand, nightlife, esports, a karaoke lounge, real estate and product films.</p>

      <h2>Scripts and hooks</h2>
      <p>Every video starts as a written script, approved by you before the shoot. The hook is the first line on screen and in the caption, and it is written to answer one question the viewer already has: how much, how long, what happens, is it for me. One idea per video, a clear next step at the end. This is the part most agencies skip; it is the part that decides whether anyone watches past two seconds.</p>

      <h2>Shoot days</h2>
      <p>We come to your location with the scripts approved and a shot list. A session typically covers several videos: the main pieces, B-roll of the space and the work, and behind-the-scenes. You only need to be on camera for the videos that feature you; the rest we film around the business while it runs. What to prepare: the space tidy, the people who appear briefed, and any products or examples ready.</p>

      <h2>Editing built for sound-off viewing</h2>
      <ul>
        <li>Vertical 9:16 for Reels, TikTok and Shorts; 1:1 and 16:9 cuts when a platform needs them.</li>
        <li>Captions and subtitles burned in, timed to the voice.</li>
        <li>Sound design and music that works with the sound on, and a video that still works with it off.</li>
        <li>Colour grading so every video from the same shoot looks like one brand.</li>
        <li>Fast pacing: cuts every few seconds, no dead air.</li>
      </ul>

      <h2>Where AI fits</h2>
      <p>Filming is real and stays real. On Growth and Scale we add AI-generated content where it earns its place: concept visuals, product scenes, voice-over variants and quick formats between shoot days. It is always labelled to you, and it is never presented as footage of your business. We also build <Link href="/services/ai-platforms-dubai">AI platforms</Link> for clients.</p>

      <h2>Volume and price</h2>
      <table>
        <thead><tr><th>Package</th><th>Videos</th><th>Price</th></tr></thead>
        <tbody>
          <tr><td>Starter</td><td>6 a month</td><td>AED 5,000 / month</td></tr>
          <tr><td>Growth</td><td>3 a week (about 13 a month)</td><td>AED 8,000 / month</td></tr>
          <tr><td>Scale</td><td>6 a week (about 26 a month)</td><td>AED 17,000 / month</td></tr>
        </tbody>
      </table>
      <p>Every package includes filming, scripts, editing and a monthly report. Event films, podcast series and longer brand films are quoted per project. See the <Link href="/pricing">full comparison</Link>.</p>

      <Faq items={VIDEO_FAQS} path={PATH} title="Video production questions" />
      <Cta text="Send us your Instagram and what you sell. We reply with a first shoot date and the package that fits." />
    </PageShell>
  );
}
