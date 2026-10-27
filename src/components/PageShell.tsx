// Layout for inner pages: fixed Nav, breadcrumb trail, article column, footer.
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbs, buildWebPage } from "@/lib/schema";

type Crumb = { name: string; path: string };

export default function PageShell({
  path,
  name,
  description,
  trail,
  eyebrow,
  title,
  lede,
  children,
  extraJsonLd = [],
}: {
  path: string;
  name: string;
  description: string;
  trail: Crumb[];
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children: React.ReactNode;
  extraJsonLd?: Record<string, unknown>[];
}) {
  return (
    <>
      <Nav />
      <JsonLd data={buildWebPage({ path, name, description })} />
      <JsonLd data={buildBreadcrumbs(trail)} />
      {extraJsonLd.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}
      <main className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-[0.2em] text-muted">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-fg">Home</Link></li>
            {trail.map((c, i) => (
              <li key={c.path} className="flex gap-2">
                <span aria-hidden>/</span>
                {i === trail.length - 1 ? <span className="text-fg">{c.name}</span> : <Link href={c.path} className="hover:text-fg">{c.name}</Link>}
              </li>
            ))}
          </ol>
        </nav>
        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-muted md:text-sm">{eyebrow}</p>
        <h1 className="display max-w-5xl text-[11vw] leading-[0.95] md:text-[5.6vw]">{title}</h1>
        {lede && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{lede}</div>}
        <div className="article mt-16 max-w-3xl md:mt-20">{children}</div>
      </main>
      <Footer />
    </>
  );
}
