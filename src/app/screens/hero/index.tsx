"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
export default function Hero() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  return (
    <section
      className="min-h-screen pt-32 max-h-[1440px] max-w-7xl flex flex-col justify-center items-center relative md:gap-5 mx-auto"
      ref={titleRef}
    >
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute md:top-1/3 left-10 "
        style={{
          rotate: isInView ? "-12deg" : "0deg",
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
        className="hidden md:block absolute top-1/4 right-10 "
        style={{
          rotate: isInView ? "12deg" : "0deg",
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          transitionDelay: "1.1s",
        }}
      ></Image>
      <h1
        className="text-center text-7xl md:text-title font-retro font-bold [text-shadow:5px_5px_0px_var(--tw-shadow-color)] shadow-brandRed mr-20 md:mr-40"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        Cyber
      </h1>

      <h1
        className="text-center text-7xl md:text-title font-retro font-bold [text-shadow:5px_5px_0px_var(--tw-shadow-color)] shadow-brandOrange leading-10 ml-20 md:ml-40 md:py-5"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          transitionDelay: "0.2s",
        }}
      >
        Cypher
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
        className="bg-brandRed font-retro p-2 m-6 text-lg rounded-sm hover:bg-brandRed/60"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          transitionDelay: "0.7s",
        }}
      >
        Register Now!
      </button>
    </section>
  );
}
