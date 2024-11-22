"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Testimonial() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });
  return (
    <section
      className="min-h-screen max-h-[1440px] w-full flex flex-col justify-center items-center p-8 gap-10 max-w-7xl mx-auto relative"
      ref={titleRef}
    >
      <h1
        className="text-center text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        Loved by Students!
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center h-full">
        <div
          className="border border-pink-600 border-double drop-shadow-[1px_1px_0_rgba(245,59,64,1)] transition-all duration-300 ease-in-out items-center space-y-5 p-12 rounded-sm body-lg col text-medium bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 h-full"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            transitionDelay: "0.3s",
          }}
        >
          <img src="/subhead1.jpg" className="size-20 rounded-full"></img>
          <blockquote className="font-code">
            For me Cyber Cypher was introduction to the ML domain. Everyone can
            find their own niche and learn a lot.
          </blockquote>
          <cite className="not-italic font-bold block font-code">
            - Aanchal
          </cite>
        </div>

        <div
          className="border border-pink-600 border-double drop-shadow-[1px_1px_0_rgba(113,208,202,1)] transition-all duration-300 ease-in-out items-center space-y-5 p-12 rounded-sm body-lg col text-medium bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 h-full"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            transitionDelay: "0.5s",
          }}
        >
          <img src="/head2.avif" className="size-20 rounded-full"></img>
          <blockquote className="font-code">
            Cyber Cypher was my first ever hackathon and I had a great
            experience. I would definitely recommend it to anyone who wants to
            get started with hackathons.
          </blockquote>
          <cite className="not-italic font-bold block font-code">- Naitik</cite>
        </div>

        <div
          className="border border-pink-600 border-double drop-shadow-[1px_1px_0_rgba(140,122,230,1)] transition-all duration-300 ease-in-out items-center space-y-5 p-12 rounded-sm body-lg col text-medium bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 h-full"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            transitionDelay: "0.7s",
          }}
        >
          <img
            src="/head1.jpg"
            className="size-20 rounded-full object-cover"
          ></img>
          <blockquote className="font-code">
            Cyber Cypher was the place where i learnt the most about web
            development. It was a great experience
          </blockquote>
          <cite className="not-italic font-bold block font-code">- Mysha</cite>
        </div>
      </div>
    </section>
  );
}
