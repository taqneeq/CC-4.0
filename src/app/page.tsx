import Pdomains from "@/app/screens/pdomains";
import Sponsors from "@/app/screens/sponsors";
import FAQ from "@/app/screens/faq";

export default function Home() {
  return (
    <div className="w-full">
      <section className="min-h-screen flex flex-col justify-center items-center">
      <img src="/sparkle.svg" alt="sparkle" className="w-20 h-20 ml-96 -mb-44" />
      <img src="/sparkle.svg" alt="sparkle" className="w-16 h-16 mr-96 -mb-16" />
        <h1 className="text-center text-title font-retro font-bold [text-shadow:5px_5px_0px_var(--tw-shadow-color)] shadow-brandRed mr-40">
          Cyber
        </h1>
        
        <h1 className="text-center text-title font-retro font-bold [text-shadow:5px_5px_0px_var(--tw-shadow-color)] shadow-brandOrange leading-10 ml-40">
           Cypher
        </h1>
        
        <h2 className="text-center text-3xl font-code font-bold mt-20">
          NMIMS's Official Hackathon!
        </h2>
        <button className="bg-brandRed font-retro p-2 m-6 text-2xl rounded-sm">Register Now!</button>
        
      </section>
      <Pdomains />
      <Sponsors />
      <FAQ />
    </div>
  );
}
