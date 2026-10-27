import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";
import { POSTS, type Block } from "@/lib/posts";
import { buildBlogPosting } from "@/lib/schema";
import { FOUNDERS } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: post.path },
    openGraph: { title: post.title, description: post.description, url: post.path, type: "article", publishedTime: post.published, modifiedTime: post.updated, authors: [FOUNDERS[0].name] },
  };
}

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

function Render({ b, i }: { b: Block; i: number }) {
  switch (b.type) {
    case "h2": return <h2>{b.text}</h2>;
    case "h3": return <h3>{b.text}</h3>;
    case "p": return <p>{b.text}</p>;
    case "ul": return <ul>{b.items.map((t) => <li key={t}>{t}</li>)}</ul>;
    case "ol": return <ol>{b.items.map((t) => <li key={t}>{t}</li>)}</ol>;
    case "quote": return (
      <div className="box" id={i === 0 ? "answer" : undefined}>
        <p className="lead" style={{ marginBottom: 0 }}>{b.text}</p>
      </div>
    );
    case "stats": return (
      <table>
        <tbody>
          {b.items.map((s) => (
            <tr key={s.label}><td>{s.label}</td><td>{s.value}</td></tr>
          ))}
        </tbody>
      </table>
    );
    case "table": return (
      <table>
        <thead><tr>{b.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{b.rows.map((r) => <tr key={r.join("|")}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
      </table>
    );
    case "link": return <p>{b.text} <Link href={b.href}>{b.label}</Link></p>;
  }
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const author = FOUNDERS[0];

  return (
    <PageShell
      path={post.path}
      name={post.title}
      description={post.description}
      trail={[{ name: "Blog", path: "/blog" }, { name: post.title, path: post.path }]}
      eyebrow={`Blog · ${fmt(post.published)} · ${post.readingMinutes} min read`}
      title={post.title}
      lede={<>{post.description} <span style={{ display: "block", marginTop: "1rem", fontSize: "0.9em" }}>By <Link href="/about">{author.name}</Link>, {author.role.replace("Co-founder — ", "co-founder, ")}.{post.updated !== post.published ? ` Updated ${fmt(post.updated)}.` : ""}</span></>}
      extraJsonLd={[buildBlogPosting(post)]}
    >
      {post.blocks.map((b, i) => (
        <Render key={i} b={b} i={i} />
      ))}

      <h2>More guides</h2>
      <ul>
        {more.map((p) => (
          <li key={p.slug}><Link href={p.path}>{p.title}</Link></li>
        ))}
      </ul>

      <Cta />
    </PageShell>
  );
}
