import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PriceFinder from "@/components/PriceFinder";
import { AED, BRAND, PACKAGES } from "@/lib/site";

const PATH = "/find-your-price";
const TITLE = "Find your price — social media and video marketing in Dubai";
const DESC = `Answer 5 quick questions and ${BRAND} replies within 1 working day with a package and a price built for your business. Packages from ${AED(PACKAGES[0].price)} a month.`;

export const metadata: Metadata = {
  title: "Find your price",
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
  // Preview stage: reachable by link, hidden from search until the page replaces the price cards.
  robots: { index: false, follow: false },
};

export default function FindYourPricePage() {
  return (
    <PageShell
      path={PATH}
      name={TITLE}
      description={DESC}
      trail={[{ name: "Find your price", path: PATH }]}
      eyebrow="Find your price"
      title={<>What would it <span className="text-accent">cost you?</span></>}
      lede={<>Five quick questions, about 1 minute. We reply within 1 working day with the package and the price that fit your business. Packages start from {AED(PACKAGES[0].price)} a month; every one is filmed, scripted, edited and reported by our team.</>}
    >
      <PriceFinder />
      <p className="text-sm" style={{ marginTop: "1.5rem" }}>
        Prefer to talk first? <Link href="/contact">Contact us</Link> or see <Link href="/about">how we work</Link>.
      </p>
    </PageShell>
  );
}
