import Image from "next/image";
export default function Hero() {
  return (
    <section className="min-h-screen max-h-[1440px] max-w-7xl flex flex-col justify-center items-center relative md:gap-5 mx-auto">
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute md:top-1/3 left-10 "
      ></Image>
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute top-1/4 right-10 animate-tilt-infinite "
      ></Image>
      <h1 className="text-center text-7xl md:text-title font-retro font-bold [text-shadow:5px_5px_0px_var(--tw-shadow-color)] shadow-brandRed mr-20 md:mr-40">
        Cyber
      </h1>

      <h1 className="text-center text-7xl md:text-title font-retro font-bold [text-shadow:5px_5px_0px_var(--tw-shadow-color)] shadow-brandOrange leading-10 ml-20 md:ml-40 md:py-5">
        Cypher
      </h1>

      <h2 className="text-center text-lg md:text-xl font-code font-bold mt-20">
        NMIMS&apos;s Official Hackathon!
      </h2>
      <button className="bg-brandRed font-retro p-2 m-6 text-lg rounded-sm hover:bg-brandRed/60">
        Register Now!
      </button>
    </section>
  );
}
