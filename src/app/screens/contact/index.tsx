"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

export default function Contact() {
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isCardsInView = useInView(cardsRef, { once: true });

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

  // Contact numbers
  const contacts = [
    { number: "+91 99679 72473", link: "tel:+919967972473" },
    { number: "+91 73036 11722", link: "tel:+917303611722" },
    { number: "+91 88509 69672", link: "tel:+918850969672" },
  ];

  return (
    <section
      className="min-h-screen max-h-[1440px] w-full flex flex-col justify-center items-center p-8 gap-10 max-w-7xl mx-auto relative"
      id="contact"
    >
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute top-0 left-10"
      />
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
      >
        <h1 className="text-center text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]">
          Contact Us
        </h1>
      </motion.div>
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute bottom-1/3 -right-10"
      />
      <motion.div
        ref={cardsRef}
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isCardsInView ? "visible" : "hidden"}
      >
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            className="relative w-full h-80 bg-black bg-opacity-70 rounded-lg flex flex-col items-center justify-center gap-4 text-white text-center p-6 shadow-lg"
            variants={cardVariants}
          >
            <PhoneCall className="w-14 h-14 text-orange-500" />
            <a
              href={contact.link}
              className="text-lg font-bold hover:underline"
            >
              {contact.number}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
