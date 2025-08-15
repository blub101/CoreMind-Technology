import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechIcons from "@/components/TechIcons";
import Features from "@/components/Features";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";
import CaseStudies from "@/components/CaseStudies";
import ConsultingOffer from "@/components/ConsultingOffer";
import WhyBest from "@/components/WhyBest";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--black-deep)] text-white">
      <Header />
      <Hero />
      <TechIcons />
      <Features />
      <About />
      <Stats />
      <Services />
      <Marquee />
      <CaseStudies />
      <ConsultingOffer />
      <WhyBest />
      <Contact />
      <Footer />
    </div>
  );
}
