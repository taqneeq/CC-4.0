import Hero from "@/app/screens/hero";
import About from "@/app/screens/about";
import Domains from "@/app/screens/domains";
import Sponsors from "@/app/screens/sponsors";
import Prizepool from "@/app/screens/prizepool";
import Testimonial from "@/app/screens/testimonial";
import FAQ from "@/app/screens/faq";
import Contact from "@/app/screens/contact";
import Countdown from "./components/countdown";
import Image from "next/image";
import { RetroGrid } from "./components/grid";
import Space from "./space.jpg";
import { Footer } from "./components/footer";
import JudgesSection from "./screens/judges";

export default function Home() {
  return (
    <>
      <Countdown />
      <div className="fixed inset-0 z-0">
        <Image src={Space} alt="space" fill className="opacity-10" />{" "}
        <RetroGrid />{" "}
      </div>
      <div className="w-full">
        <Hero />
        <Prizepool />
        <About />
        <Domains />
        <JudgesSection />
        <Sponsors />
        <Testimonial />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
