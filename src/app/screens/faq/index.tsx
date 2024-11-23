"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import SpaceBorder from "./SpaceBorder";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  item: FAQItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const faqData: FAQItem[] = [
  {
    question: "When is Cyber Cypher?",
    answer:
      "The first round of Cyber Cypher 4.0 will be held on 14 & 15th February 2024 and the second round will be held on 4 & 5th March 2024.",
  },
  {
    question: "How many rounds are there?",
    answer: "There are 2 rounds in the hackathon.",
  },
  {
    question: "What are the domains?",
    answer:
      "A team can participate in Elementary or Advanced Level. The domains are:- Elementary Level: Edtech, Advanced Level: Generative AI.",
  },
  {
    question: "How much is the registration fees?",
    answer:
      "The registration fees is INR 150 per participant so INR 450 for a team of 3 people.",
  },
  {
    question: "How many people in a team?",
    answer: "The team can consist of maximum 3 members.",
  },
  {
    question: "Can I join even if I don't have a team?",
    answer: "Yes, solo participation is allowed.",
  },
  {
    question: "What are the prizes I can get if I win?",
    answer:
      "The prize pool for Cyber Cypher 4.0 is worth INR 2,50,000, including cash prizes, goodies, and certificates.",
  },
  {
    question: "Will the second round be hybrid?",
    answer:
      "Yes, the second round will be hybrid. The offline participants will be hosted at MPSTME College, Mumbai.",
  },
];

const Accordion: React.FC<AccordionProps> = ({
  item,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="mb-4">
      <motion.button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={onToggle}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <h3 className="text-xl md:text-2xl font-retro text-white underline">
          {item.question}
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 text-white/80 font-code">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <div
      className="h-full py-20 w-full flex flex-col gap-10 justify-center items-center p-4 md:p-8 relative"
      id="faq"
    >
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute top-1/2 right-10 rotate-0"
      />
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute top-1/3 left-10 -rotate-0"
      />
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: [0.17, 0.55, 0.55, 1] }}
      >
        <h1 className="text-center text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]">
          FAQ
        </h1>
      </motion.div>
      <motion.div
        className="relative md:w-4/5 w-full m-6 p-5 md:p-10 h-full mx-auto max-w-7xl bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-20 border border-purple-400/30 flex items-center justify-center gap-6 text-white  rounded-sm md:border-none md:bg-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 }}
      >
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <SpaceBorder />
        </div>
        <div className="relative z-10 space-y-4 md:pt-28  max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              item={item}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
