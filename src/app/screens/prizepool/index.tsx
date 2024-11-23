import Image from "next/image";
export default function Prizepool() {
  return (
    <section
      className="pb-20 md:py-40 w-full flex flex-col justify-center p-8 gap-10 max-w-7xl mx-auto relative"
      id="contact"
    >
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="w-16 h-16 md:w-28 md:h-28 md:block absolute bottom-[10%] md:bottom-1/3 left-5 md:left-10 rotate-0"
      />
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="w-10 h-10 md:w-16 md:h-16 md:block absolute bottom-1/4 md:bottom-1/5 left-5 md:left-20 rotate-0"
      />
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="w-10 h-10 md:w-16 md:h-16 md:block absolute top-1/3 md:top-1/4 right-16 md:right-20 rotate-0"
      />
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="w-16 h-16 md:w-28 md:h-28 md:block absolute top-[40%] md:top-10 right-5 md:right-10 rotate-0"
      />
      <h1 className=" text-5xl md:text-6xl text-center font-retro font-bold">
        Win from a Prize Pool of{" "}
      </h1>
      <h1 className=" text-center text-7xl md:text-title font-retro font-bold [text-shadow:5px_5px_0px_var(--tw-shadow-color)] shadow-yellow-400 ">
        Rs 200,000
      </h1>
    </section>
  );
}
