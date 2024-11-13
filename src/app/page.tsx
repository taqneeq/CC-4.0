import Pdomains from "@/app/screens/pdomains";
import Sponsors from "@/app/screens/sponsors";
import FAQ from "@/app/screens/faq";

export default function Home() {
  return (
    <div className="w-full">
      <section className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-retro font-bold">
          Welcome to TQ-CC
        </h1>
        <h2 className="text-center text-2xl font-code font-bold">
          IBM MONO FONT
        </h2>
        <h3 className="text-center text-2xl font-lcd font-bold">LCD Font</h3>
        <img src="/sparkle.svg" alt="sparkle" className="w-1/2 h-1/2" />
      </section>
      <Pdomains />
      <Sponsors />
      <FAQ />
    </div>
  );
}
