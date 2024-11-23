import Hero from "@/app/screens/hero";
import About from "@/app/screens/about";
import Domains from "@/app/screens/domains";
// import Sponsors from "@/app/screens/sponsors";
import Testimonial from "@/app/screens/testimonial";
import FAQ from "@/app/screens/faq";
import Contact from "@/app/screens/contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Domains />
      {/* <Sponsors /> */}
      <Testimonial />
      <FAQ />
      <Contact />
    </div>
  );
}
