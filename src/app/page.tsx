import Hero from "@/app/screens/hero";
import About from "@/app/screens/about";
import Pdomains from "@/app/screens/pdomains";
import Sponsors from "@/app/screens/sponsors";
import FAQ from "@/app/screens/faq";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Pdomains />
      <Sponsors />
      <FAQ />
    </div>
  );
}
