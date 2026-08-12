import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ServicesList from "@/components/ServicesList";
import Marquee from "@/components/Marquee";
import WorkGrid from "@/components/WorkGrid";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ServicesList />
      <Marquee />
      <WorkGrid />
      <Packages />
      <Contact />
    </main>
  );
}
