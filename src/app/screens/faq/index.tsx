"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import Card from "./card.svg";

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
    question: "What Is CC? Why Should I Join?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    question: "How Can I Participate?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    question: "What Are The Benefits?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
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
        />
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
    <div className="min-h-screen max-h-[1440px] w-full flex flex-col gap-10 justify-center items-center p-4 md:p-8 relative">
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute top-1/2  right-10 rotate-12"
      ></Image>
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute top-1/3  left-10 -rotate-12"
      ></Image>
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
      >
        <h1 className="text-center text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]">
          FAQ
        </h1>
      </motion.div>
      <motion.div
        className="hidden md:block relative w-full m-6 p-5 md:p-10 min-h-86  bg-contain  bg-no-repeat mx-auto"
        style={{
          backgroundImage: "url(" + Card.src + ")",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 1.5 }}
      >

        <div className="space-y-4 pt-24 max-w-2xl mx-auto">
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

      <motion.div
        className="md:hidden relative w-full m-6 p-5 md:p-10 h-full mx-auto bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 border border-purple-800/30 "
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 1.5 }}
      >

        <div className="space-y-4 md:pt-24 max-w-2xl mx-auto">
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
