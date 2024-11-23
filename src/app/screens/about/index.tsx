"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
export default function About() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  const titleRef2 = useRef(null);
  const isInView2 = useInView(titleRef2, { once: true });
  return (
    <section
      className="h-full py-20  w-full flex-col items-center text-center justify-center md:justify-around md:ml-auto p-8 space-y-20 relative max-w-7xl mx-auto"
      id="about"
    >
      
      <div
        className="flex flex-col items-center md:items-start  justify-start gap-4 md:gap-2 lg:gap-4 w-full text-left"
        ref={titleRef}
      >
        <h1
          className="text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)] text-center md:text-left"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          What is Cyber Cypher?
        </h1>
        <p
          className="md:text-xl font-code max-w-prose md:text-justify"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            transitionDelay: "0.3s",
          }}
        >
          The goal of the 18-hour hackathon Cyber Cypher is to provide aspiring
          and seasoned programmers a platform. Our aim is to reach engineering
          students across all skill levels, from those with little coding
          experience to those with extensive knowledge. Cyber Cypher aims to
          awaken in the participants the boundless potential that this dynamic
          field of computer sciences holds for them—potential that currently
          lies dormant.
        </p>
      </div>
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:w-16 md:h-16 md:block absolute top-1/3 md:top-1/4 right-16 md:right-10 rotate-0"
      />
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="w-16 h-16 md:w-28 md:h-28 md:block absolute top-[45%] md:top-14 right-5 md:right-16 rotate-0"
      />
      <div
        className="flex flex-col justify-center  items-center md:items-end md:justify-end gap-4 md:gap-2 lg:gap-4 w-full text-left"
        ref={titleRef2}
      >
        <h1
          className="text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)] text-center "
          style={{
            opacity: isInView2 ? 1 : 0,
            transform: isInView2 ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            transitionDelay: "0.3s",
          }}
        >
          Organizers
        </h1>
        <p
          className="md:text-xl font-code max-w-prose md:text-justify md:[text-align-last:right]"
          style={{
            opacity: isInView2 ? 1 : 0,
            transform: isInView2 ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            transitionDelay: "0.5s",
          }}
        >
          With three exciting and action-packed days in a row, Taqneeq has grown
          into an extraordinary tech festival over the years. It has
          successfully organized numerous noteworthy events, including The Talk,
          Unstop, the Internship Fair, the Game Development Workshop, and Light
          Reaction, to mention a few. Taqneeq has illuminated every aspect of
          technology.
        </p>
      </div>
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="w-16 h-16 md:w-28 md:h-28 md:block absolute bottom-0 md:bottom-1/3 left-5 md:left-16 rotate-0"
      />
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:w-16 md:h-16 md:block absolute bottom-1/4 md:bottom-1/4 left-5 md:left-16 rotate-0"
      />
    </section>
  );
}
