import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import type { Faq as FaqItem } from "@/lib/faqs";
import { INFLUENCERS } from "@/lib/work";
import { buildCreatorsService } from "@/lib/schema";
import { AED, BRAND, PACKAGES } from "@/lib/site";

const [starter, growth] = PACKAGES;
const PATH = "/creators";
const TITLE = "Content Production and Editing for Creators in Dubai";
const DESC = `${BRAND} films and edits for influencers, podcasters and creators in Dubai: a month of posts from one shoot day. From ${AED(starter.price)} a month.`;

export const metadata: Metadata = {
  title: "Video Editing & Production for Creators in Dubai",
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

const FAQS: FaqItem[] = [
  { q: "How much does a video editor for influencers cost in Dubai?", a: `With ${BRAND}, a creator content system starts at ${AED(starter.price)} a month for 6 filmed and edited videos, or ${AED(growth.price)} for 3 a week. Editing-only (you send footage, we cut and caption) is quoted per video or per month depending on volume.` },
  { q: "Can you edit footage I film myself?", a: "Yes. Send raw phone or camera footage through a shared folder; we cut, caption, colour and deliver vertical posts with a hook in the first two seconds. Turnaround is agreed per package." },
  { q: "Do you film creators on location?", a: "Yes. A shoot day in Dubai covers a gym session, a day in the life or a set of talking-heads and usually produces a month of posts. We plan the shot list with you beforehand." },
  { q: "Do I need a permit to post paid brand content in the UAE?", a: "Paid promotion by creators follows UAE Media Council rules, including the advertiser permit requirement and clear labelling of paid content. Confirm the current rules before publishing sponsored posts; this is a summary, not legal advice." },
  { q: "Who owns the edits?", a: "You do, once paid for. Project files and exports are delivered to you; we keep nothing you have not approved for our portfolio." },
];

export default function CreatorsPage() {
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Creators", path: PATH }]}
      eyebrow="Creators · influencers · podcasts"
      title={<>A month of posts from <span className="text-accent">one</span> shoot day</>}
      lede={<>{BRAND} is the production team behind creators who post daily but film once a week. We plan the shot list, film in Dubai, cut fast or cinematic, caption for sound-off viewing and hand you a calendar of finished posts.</>}
      extraJsonLd={[buildCreatorsService(PATH, TITLE, DESC)]}
    >
      <h2>Content systems, not one-off edits</h2>
      <p>The creators who grow are the ones who post consistently without burning out. The system is simple: one shoot day, a batch of 8–15 pieces, then a week-by-week schedule. We run the whole thing or just the editing.</p>
      <ul>
        <li><strong>Fitness and gym creators:</strong> a training session filmed from three angles becomes exercise demos, a day-in-the-life and talking-heads.</li>
        <li><strong>Lifestyle and cinematic creators:</strong> colour-graded sequences with sound design, slow motion and transitions that look like film.</li>
        <li><strong>Podcasters:</strong> multi-camera recording cut into 30–60 second vertical highlights with captions, titles and hooks.</li>
        <li><strong>Founders and experts:</strong> a personal brand on camera: one topic per video, scripted, batch-filmed.</li>
      </ul>

      <h2>Editing styles</h2>
      <p><strong>Fast-cut montages.</strong> Beat-matched cuts, captions and on-screen text built for retention. <strong>Cinematic edits.</strong> Graded, sound-designed, slower, for the pieces that define your feed. <strong>Behind the scenes.</strong> Shoot-day content that shows the work and fills the calendar between hero posts. <strong>Clips.</strong> Podcast and long-form cut-downs with the hook in the first two seconds.</p>

      <h2>How it works</h2>
      <ol>
        <li><strong>Plan.</strong> A call on your niche, formats and posting rhythm; a shot list for the first shoot or a folder structure for your footage.</li>
        <li><strong>Film or send.</strong> We film in Dubai, or you drop raw footage into a shared folder.</li>
        <li><strong>Edit.</strong> Vertical 9:16 exports with captions, cover frames and titles; your approval before anything is final.</li>
        <li><strong>Post.</strong> You post, or on Growth we upload and schedule for you with captions and hashtags.</li>
      </ol>

      <h2>Examples from our work</h2>
      <p>
        {INFLUENCERS.map((w, i) => (
          <span key={w.slug}>
            <strong>{w.title}</strong> ({w.tag}): {w.description}{i < INFLUENCERS.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
      <p>Watch these in the <Link href="/#work">work section</Link>.</p>

      <h2>Rules for paid content in the UAE</h2>
      <ul>
        <li>Paid promotion by creators follows UAE Media Council rules, including the advertiser permit requirement and clear labelling of sponsored content.</li>
        <li>Brand content follows the same advertising standards as the brand itself; no claims the brand cannot back.</li>
      </ul>
      <div className="box"><p>This is a summary of the rules as we understand them, not legal advice. Confirm current UAE Media Council requirements before publishing sponsored posts.</p></div>

      <h2>Pricing</h2>
      <p>Filming plus editing runs on the same packages as our business clients: {AED(starter.price)} a month for 6 videos (Starter) or {AED(growth.price)} for 3 a week (Growth), with scripts, shoot days, editing and a monthly report included. Editing-only is quoted per video or per month depending on volume. <Link href="/pricing">See the packages</Link>.</p>

      <Faq items={FAQS} path={PATH} title="Creator questions" />
      <Cta text="Send us your handle and what you post. We reply with a content system, a price and a first shoot or edit date." />
    </PageShell>
  );
}
