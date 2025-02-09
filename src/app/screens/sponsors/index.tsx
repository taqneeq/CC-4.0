"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import IB from "./InterviewBuddy.svg";
import Domain from "./domain.png";
import HackerRank from "./hackerRank.svg";
import Duple from "./duple.svg";
import FOF from "./fof.svg";
import AWS from "./aws.svg";

export default function Sponsors() {
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isCardsInView = useInView(cardsRef, { once: true });

  const sponsor = [IB, Domain, HackerRank, Duple, FOF, AWS];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.55, 0.55, 1],
      },
    },
  };

  return (
    <section
      className="min-h-screen  w-full flex flex-col justify-center items-center p-8 gap-10 max-w-7xl mx-auto relative"
      id="sponsor"
    >
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute top-0 left-10"
      ></Image>
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
      >
        <h1 className="text-center text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]">
          Sponsors
        </h1>
      </motion.div>
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute bottom-1/3 -right-10 "
      ></Image>
      <motion.div
        ref={cardsRef}
        className="w-full grid grid-cols-1 sm:grid-cols-3  gap-4 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isCardsInView ? "visible" : "hidden"}
      >
        {sponsor.map((sponsor, index) => (
          <motion.div
            key={index}
            className="relative w-full h-80"
            variants={cardVariants}
          >
            <Image
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
