"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Healthcare from "./healthcare.svg";
import DeepLearning from "./dl.svg";

export default function Pdomains() {
  const titleRef = useRef(null);
  const healthcareRef = useRef(null);
  const deepLearningRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true });
  const isHealthcareInView = useInView(healthcareRef, { once: true });
  const isDeepLearningInView = useInView(deepLearningRef, { once: true });

  const imageVariants = {
    hidden: (direction: any) => ({ /* eslint-disable  @typescript-eslint/no-explicit-any */
      rotate: direction === "left" ? -90 : 90,
      x: direction === "left" ? -100 : 100,
      y: -100,
      opacity: 0,
    }),
    visible: {
      rotate: 0,
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
        delay: 0.5, // Reduced delay since we're now triggering based on individual visibility
      },
    },
  };

  return (
    <section className="min-h-screen max-h-[1440px]  w-full flex flex-col justify-center items-center p-8 gap-10 relative">
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute bottom-1/2 left-10 rotate-12"
      ></Image>
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block  absolute top-10  right-10 rotate-12"
      ></Image>
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
      >
        <h1 className="text-center text-5xl md:text-8xl  font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]">
          Prior Domains
        </h1>
      </motion.div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <motion.div
          className="md:w-[70%]"
          ref={healthcareRef}
          initial="hidden"
          animate={isHealthcareInView ? "visible" : "hidden"}
          variants={imageVariants}
          custom="left"
        >
          <Image src={Healthcare} alt="Healthcare" className="w-full h-auto" />
        </motion.div>

        <motion.div
          className="md:w-[70%]"
          ref={deepLearningRef}
          initial="hidden"
          animate={isDeepLearningInView ? "visible" : "hidden"}
          variants={imageVariants}
          custom="right"
        >
          <Image
            src={DeepLearning}
            alt="Deep Learning"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
