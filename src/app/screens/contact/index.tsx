"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";

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

  // Contact information
  const contacts = [
    {
      number: "+91 99679 72473",
      link: "tel:+919967972473",
      name: "Rushabh Chhajed",
      designation: "Chairperson",
      colour: "drop-shadow-[1px_1px_0_rgba(255,150,128,1)]",
      walink:
        "https://api.whatsapp.com/send?phone=919967972473&text=Hi%20there%2C%20I%20had%20some%20queries%20about%20Cyber%20Cypher!",
      hover: "hover:bg-red-800",
    },
    {
      number: "+91 73036 11722",
      link: "tel:+917303611722",
      name: "Anushka Saxena",
      designation: "Publicity Head",
      colour: "drop-shadow-[1px_1px_0_rgba(222,82,70,1)]",
      walink:
        "https://api.whatsapp.com/send?phone=917303611722&text=Hi%20there%2C%20I%20had%20some%20queries%20about%20Cyber%20Cypher!",
      hover: "hover:bg-pink-800",
    },
    {
      number: "+91 88509 69672",
      link: "tel:+918850969672",
      name: "Siddhi Gandhi",
      designation: "Publicity Head",
      colour: "drop-shadow-[1px_1px_0_rgba(255,198,93,1)]",
      walink:
        "https://api.whatsapp.com/send?phone=918850969672&text=Hi%20there%2C%20I%20had%20some%20queries%20about%20Cyber%20Cypher!",
      hover: "hover:bg-cyan-800",
    },
  ];

  return (
    <section
      className="h-full py-20 w-full flex flex-col justify-center items-center p-8 gap-10 max-w-7xl mx-auto relative"
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
        className="flex flex-col items-center gap-4"
      >
        <h2 className="text-center text-2xl md:text-4xl font-retro text-white opacity-80">
          Got More Questions?
        </h2>
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
      <motion.a
        className="relative w-full h-full sm:w-2/3 lg:w-1/2 md:py-10 bg-[#4d4d4d] backdrop-filter backdrop-blur-sm bg-opacity-20 border border-purple-400/60 flex flex-col md:flex-row md:items-center justify-center gap-6 text-white text-center p-6 shadow-lg hover:bg-purple-800 transition-colors duration-300 ease-in-out rounded-sm shadow-purple-500/40 "
        variants={cardVariants}
        href="mailto:contact@taqneeqfest.com"
      >
        <Mail className="text-purple-200 w-10 h-10" />
        <div>
          <p className="text-3xl font-retro drop-shadow-[1px_1px_0_rgba(168,85,247,1)] mb-2 text-left">
            Email Us
          </p>
          <p className="text-lg hover:underline font-code text-left">
            contact@taqneeqfest.com
          </p>
        </div>
      </motion.a>
      <motion.div
        ref={cardsRef}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isCardsInView ? "visible" : "hidden"}
      >
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            className={`relative w-full h-72 bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 border border-cyan-800/60 flex flex-col items-center justify-center gap-4 text-white text-center p-6 shadow-lg ${contact.hover} transition-colors duration-300 ease-in-out`}
            variants={cardVariants}
            href={contact.walink}
          >
            <p className={`text-4xl font-retro ${contact.colour}`}>
              {contact.name}
            </p>
            <p className="text-lg opacity-80 font-code">
              {contact.designation}
            </p>
            <a
              href={contact.link}
              className="text-lg font-bold hover:underline font-code"
            >
              {contact.number}
            </a>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
