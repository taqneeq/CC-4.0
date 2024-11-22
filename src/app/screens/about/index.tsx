"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  const titleRef2 = useRef(null);
  const isInView2 = useInView(titleRef2, { once: true });
  return (
    <section
      className="min-h-screen  w-full flex-col items-center text-center justify-around md:ml-auto p-8 space-y-20 relative max-w-7xl mx-auto"
      id="about"
    >
      <div
        className="flex flex-col items-start justify-start gap-4 md:gap-2 lg:gap-4 w-full text-left"
        ref={titleRef}
      >
        <h1
          className="text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          What is Cyber Cypher?
        </h1>
        <p
          className="text-xl font-code max-w-prose md:text-justify"
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
      <div
        className="flex flex-col justify-center items-start md:items-end md:justify-end gap-4 md:gap-2 lg:gap-4 w-full text-left"
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
          className="text-xl font-code max-w-prose md:text-justify md:[text-align-last:right]"
          style={{
            opacity: isInView2 ? 1 : 0,
            transform: isInView2 ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            transitionDelay: "0.5s",
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
    </section>
  );
}
