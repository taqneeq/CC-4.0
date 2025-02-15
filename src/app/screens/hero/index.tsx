"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
export default function Hero() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  return (
    <section
      className="min-h-[90vh] pt-32 max-h-[1440px] max-w-7xl flex flex-col justify-center items-center relative md:gap-5 mx-auto"
      ref={titleRef}
    >
      {/* <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="w-10 h-10 md:block md:w-20 md:h-20 absolute top-[25%] md:top-1/4 left-5 md:left-32 "
        style={{
          rotate: isInView ? "0deg" : "0deg",
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          transitionDelay: "0.9s",
        }}
      ></Image> */}
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="w-16 h-16 md:block md:w-28 md:h-28 absolute md:top-1/2 left-12 md:left-24 "
        style={{
          rotate: isInView ? "0deg" : "0deg",
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          transitionDelay: "0.9s",
        }}
      ></Image>
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="w-16 h-16 md:block md:w-28 md:h-28 absolute top-1/4 right-10 md:right-16"
        style={{
          rotate: isInView ? "0deg" : "0deg",
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          transitionDelay: "1.1s",
        }}
      ></Image>
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="w-11 h-11 md:block md:w-20 md:h-20 absolute top-1/3 right-6 md:right-4 "
        style={{
          rotate: isInView ? "0deg" : "0deg",
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          transitionDelay: "1.1s",
        }}
      ></Image>
      <h1
        className="text-center text-8xl md:text-title font-retro font-bold [text-shadow:5px_5px_0px_var(--tw-shadow-color)] shadow-brandRed md:mt-4 mr-20 md:mr-40"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        Cyber
      </h1>

      <h1
        className="text-center text-8xl md:text-title font-retro font-bold [text-shadow:5px_5px_0px_var(--tw-shadow-color)] shadow-teal-600 leading-10 mt-6 md:mt-0 ml-16 md:ml-40 md:py-5"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          transitionDelay: "0.2s",
        }}
      >
        Cypher
      </h1>
      <h1
        className="text-center text-7xl md:text-[8.5rem] font-retro font-bold [text-shadow:5px_5px_0px_var(--tw-shadow-color)] shadow-orange-700 leading-10 mt-12 md:mt-20"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          transitionDelay: "0.2s",
        }}
      >
        4.0
      </h1>

      <h2
        className="text-center text-lg md:text-xl font-code font-bold mt-14"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          transitionDelay: "0.5s",
        }}
      >
        NMIMS&apos;s Official Hackathon!
      </h2>
    <button
      className="bg-brandRed flex items-center gap-2 font-retro p-2 m-6 mt-4 text-lg rounded-sm hover:bg-brandRed/60"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        transitionDelay: "0.7s",
      }}
      onClick={() => window.open('https://unstop.com/o/2H9dk4V?lb=lGQbtRWy', '_blank')}
    >
      Register Now!
      <Image src={"unstop-logo.svg"} height={50} width={50} alt="unstop logo"></Image>
    </button>
    </section>
  );
}
