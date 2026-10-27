import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";
import { POSTS } from "@/lib/posts";
import { buildBlog } from "@/lib/schema";
import { BRAND } from "@/lib/site";

const PATH = "/blog";
const TITLE = "Blog: Social Media, Video and AI Search for Dubai Businesses";
const DESC = `Guides from ${BRAND} on what social media management costs in Dubai, how to choose a video content agency, real estate video formats and answer engine optimisation (AEO).`;

export const metadata: Metadata = {
  title: "Blog",
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => (a.published < b.published ? 1 : -1));
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Blog", path: PATH }]}
      eyebrow="Blog · guides"
      title={<>Plain answers for <span className="text-accent">Dubai</span> businesses</>}
      lede={<>Prices, formats, how to choose an agency and how AI assistants decide who to recommend. Written by the people who film and post the content, with our own numbers where we have them.</>}
      extraJsonLd={[buildBlog(POSTS)]}
    >
      {posts.map((p) => (
        <div key={p.slug} className="box" style={{ marginBottom: "1.25rem" }}>
          <p style={{ marginBottom: "0.5rem" }}>
            <Link href={p.path} style={{ fontWeight: 600 }}>{p.title}</Link>
          </p>
          <p style={{ marginBottom: "0.5rem" }}>{p.description}</p>
          <p style={{ marginBottom: 0, fontSize: "0.85em", opacity: 0.7 }}>
            {fmt(p.published)} · {p.readingMinutes} min read · Yegor Konyakhin
          </p>
        </div>
      ))}
      <Cta text="Have a question these guides don't answer? Send it over; if it is a good one we will film it." />
    </PageShell>
  );
}
