import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ServicesList from "@/components/ServicesList";
import Marquee from "@/components/Marquee";
import WorkGrid from "@/components/WorkGrid";
import Packages from "@/components/Packages";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { HOME_FAQS } from "@/lib/faqs";
import { buildVideoObjects, buildWebPage } from "@/lib/schema";
import { BRAND, DESCRIPTION } from "@/lib/site";
import { BUSINESSES, INFLUENCERS } from "@/lib/work";

export default function Home() {
  return (
    <main>
      <JsonLd data={buildWebPage({ path: "/", name: `${BRAND} — Social Media & Video Marketing Agency in Dubai`, description: DESCRIPTION })} />
      <JsonLd data={buildVideoObjects([...BUSINESSES, ...INFLUENCERS])} />
      <Nav />
      <Hero />
      <ServicesList />
      <Marquee />
      <WorkGrid />
      <Packages />
      <Faq items={HOME_FAQS} path="/" title="Common questions" compact />
      <Contact />
      <Footer />
    </main>
  );
}
