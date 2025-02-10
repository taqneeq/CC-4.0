"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface Judge {
  name: string;
  position: string;
  company: string;
}

const uiUxJudges: Judge[] = [
  {
    name: "Abhishek Verma",
    position: "Vice President",
    company: "Info Edge India Ltd",
  },
  {
    name: "Shubham Gone",
    position: "Senior Designer UX/UI",
    company: "Assembly Global",
  },
  {
    name: "Saloni Pal",
    position: "UX Designer",
    company: "Tata Consultancy Services",
  },
  { name: "Soham Sinha", position: "LEAD UX", company: "UST (TATA MOTORS)" },
  { name: "Vanshita Singh", position: "UX Designer", company: "Cervello" },
  {
    name: "Ali Solanki",
    position: "Serial Internet Entreprenuer",
    company: "IMBUZI",
  },
  { name: "Saumitra Vaidya", position: "Founder", company: "Seven11designs" },
  {
    name: "Prashanth Mariappan",
    position: "Lead UI/UX Designer",
    company: "Tata Consultancy Services",
  },
  { name: "Sonu Jangid", position: "UX/UI Designer", company: "INUPGRO" },
  { name: "Shivani Verma", position: "Product Designer", company: "YouMeWho" },
  {
    name: "Dhruv Shah",
    position: "Software Development Engineer",
    company: "Silicon Labs",
  },
  {
    name: "Rakesh Gosalia",
    position: "UI Design & Front End Coding",
    company: "Red & White Multimedia Education Official",
  },
  { name: "Nikhil Digi", position: "Lead UI/UX Designer", company: "Neokred" },
  { name: "Rishi Pramanik", position: "UI Developer", company: "Flipkart" },
  {
    name: "Prashant Patil",
    position: "Lead UI/UX Designer",
    company: "Accenture",
  },
  {
    name: "Taha Bhalejwala",
    position: "Design Lead",
    company: "Craft My Brand",
  },
  {
    name: "Sooraj Nair",
    position: "Lead Product Designer",
    company: "FoodReady",
  },
  {
    name: "Sailesh Chatterjee",
    position: "UX Team Lead",
    company: "UX Team Lead",
  },
];

const genAiJudges: Judge[] = [
  {
    name: "Ravi Manjunatha",
    position: "Gen AI & Data Analytics Specialist",
    company: "Google",
  },
  {
    name: "Harshada PatiL",
    position: "Senior Software Engineer",
    company: "Capgemini",
  },
  { name: "Amar Kumar", position: "AI Scientist", company: "Arthrex India" },
  {
    name: "Avinash Nahar",
    position: "Senior Consultant Gen Ai Data scientist",
    company: "Stealth",
  },
  {
    name: "Shubham Agarwal",
    position: "Building Generative AI in Google Cloud.",
    company: "Google",
  },
  {
    name: "Umaima Tinwala",
    position: "Senior Specialist - Generative AI",
    company: "L&T Technology Services",
  },
  {
    name: "Saloni Vijay",
    position: "Vice President",
    company: "Vodafone Intelligent Solutions",
  },
];

const colors = [
  "rgba(245,59,64,1)", // Red
  "rgba(113,208,202,1)", // Teal
  "rgba(140,122,230,1)", // Purple
  "rgba(255,183,77,1)", // Orange
];
const dropShadows = [
  "drop-shadow-[1px_1px_0_rgba(245,59,64,1)]",
  "drop-shadow-[1px_1px_0_rgba(113,208,202,1)]",
  "drop-shadow-[1px_1px_0_rgba(140,122,230,1)]",
];

function JudgeCard({
  judge,
  colorIndex,
}: {
  judge: Judge;
  colorIndex: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`border border-pink-600  ${dropShadows[colorIndex]} border-double transition-all duration-300 ease-in-out items-center p-4 rounded-sm body-lg col text-medium bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 w-64 h-48 flex flex-col justify-between`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        boxShadow: `1px 1px 0 ${colors[colorIndex]}`,
      }}
    >
      <h3 className="font-code text-lg font-bold leading-tight break-words">
        {judge.name}
      </h3>
      <p className="font-code text-sm leading-snug break-words text-center">
        {judge.position}
      </p>
      <p
        className="font-code text-sm leading-snug break-words text-center"
        style={{ color: colors[colorIndex] }}
      >
        {judge.company}
      </p>
    </div>
  );
}

export default function JudgesSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="py-20 w-full flex flex-col justify-center items-center p-8 gap-10 max-w-7xl mx-auto relative">
      <h1
        ref={titleRef}
        className="text-center text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        Our Esteemed Judges
      </h1>

      <div className="w-full">
        <h2 className="text-3xl md:text-5xl font-retro font-bold mb-6 text-center drop-shadow-[3px_3px_0_rgba(113,208,202,1)]">
          UI/UX Judges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {uiUxJudges.map((judge, index) => (
            <JudgeCard
              key={index}
              judge={judge}
              colorIndex={Math.floor(Math.random() * colors.length)}
            />
          ))}
        </div>
      </div>

      <div className="w-full mt-16">
        <h2 className="text-3xl md:text-5xl font-retro font-bold mb-6 text-center drop-shadow-[3px_3px_0_rgba(140,122,230,1)]">
          Gen AI Judges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {genAiJudges.map((judge, index) => (
            <JudgeCard
              key={index}
              judge={judge}
              colorIndex={Math.floor(Math.random() * colors.length)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
