import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import { INDUSTRIES } from "@/lib/industries";
import { BUSINESSES } from "@/lib/work";
import { buildIndustryService } from "@/lib/schema";
import { BRAND } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  if (!ind) return {};
  return {
    title: ind.metaTitle,
    description: ind.description,
    alternates: { canonical: ind.path },
    openGraph: { title: ind.title, description: ind.description, url: ind.path },
  };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  if (!ind) notFound();
  const work = BUSINESSES.filter((b) => ind.workSlugs.includes(b.slug));
  const others = INDUSTRIES.filter((i) => i.slug !== ind.slug);

  return (
    <PageShell
      path={ind.path}
      name={ind.title}
      description={ind.description}
      trail={[{ name: "Industries", path: "/industries/real-estate-marketing-dubai" }, { name: ind.name, path: ind.path }]}
      eyebrow={ind.eyebrow}
      title={ind.title}
      lede={ind.lede}
      extraJsonLd={[buildIndustryService(ind)]}
    >
      <h2>Who this is for</h2>
      <ul>
        {ind.whoFor.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>

      <h2>What we film</h2>
      {ind.formats.map((f) => (
        <p key={f.name}>
          <strong>{f.name}.</strong> {f.what}
        </p>
      ))}

      <h2>How a shoot day runs</h2>
      <ul>
        {ind.shootDay.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      {work.length > 0 && (
        <>
          <h2>Examples from our work</h2>
          <p>
            {work.map((w, i) => (
              <span key={w.slug}>
                <strong>{w.title}</strong> ({w.tag}): {w.description}{i < work.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
          <p>
            Watch these in the <Link href="/#work">work section</Link>. Client names and numbers are only published with written approval.
          </p>
        </>
      )}

      <h2>{ind.compliance.heading}</h2>
      <ul>
        {ind.compliance.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div className="box">
        <p>{ind.compliance.note}</p>
      </div>

      <h2>Which package</h2>
      <p>{ind.packageAdvice}</p>
      <p>
        Every package includes filming at your location, a script for every video, editing and a monthly report. <Link href="/pricing">Compare the packages</Link>, or read how we run <Link href="/services/social-media-marketing-dubai">social media</Link> and <Link href="/services/video-production-dubai">video production</Link>.
      </p>

      <Faq items={ind.faqs} path={ind.path} title={`${ind.name} questions`} />

      <h2>Other industries</h2>
      <ul>
        {others.map((o) => (
          <li key={o.slug}>
            <Link href={o.path}>{o.title}</Link>
          </li>
        ))}
        <li>
          <Link href="/creators">Content production and editing for creators</Link>
        </li>
      </ul>

      <Cta text={`Send ${BRAND} your Instagram and what you sell. We reply with the package that fits and a first shoot date.`} />
    </PageShell>
  );
}
