"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

export default function Domains() {
  const titleRef = useRef(null);
  const healthcareRef = useRef(null);
  const deepLearningRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true });
  const isHealthcareInView = useInView(healthcareRef, { once: true });
  const isDeepLearningInView = useInView(deepLearningRef, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  const CardBackground = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 856 551"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <g filter="url(#filter0_b_447_300)">
        <path
          d="M14.6256 371.433L1 361.934V29.4948L21.0377 1H598.124L640.603 92.1834H855V550H1V508.208L14.6256 496.81V371.433Z"
          fill="#4D4D4D"
          fillOpacity="0.1"
        />
        <path
          d="M14.6256 371.433L1 361.934V29.4948L21.0377 1H598.124L640.603 92.1834H855V550H1V508.208L14.6256 496.81V371.433Z"
          stroke="#5B409B"
          strokeOpacity="0.6"
          strokeWidth="2"
        />
      </g>
      <path
        d="M618.97 1L655.643 77.659H679.727L645.79 1H618.97Z"
        fill="#6D4CBD"
      />
      <path
        d="M667.137 1L696.147 77.659H720.231L689.579 1H667.137Z"
        fill="#6D4CBD"
      />
      <path
        d="M709.284 1L737.747 77.659H759.094L729.536 1H709.284Z"
        fill="#6D4CBD"
        fillOpacity="0.7"
      />
      <path
        d="M745.957 1L776.609 77.659H798.504L765.662 1H745.957Z"
        fill="#6D4CBD"
        fillOpacity="0.5"
      />
      <path
        d="M816.567 77.659H835.724L798.504 1H780.988L816.567 77.659Z"
        fill="#6D4CBD"
        fillOpacity="0.3"
      />
      <path
        d="M618.97 1L655.643 77.659H679.727L645.79 1H618.97Z"
        stroke="#6D4CBD"
        strokeOpacity="0.3"
      />
      <path
        d="M667.137 1L696.147 77.659H720.231L689.579 1H667.137Z"
        stroke="#6D4CBD"
        strokeOpacity="0.3"
      />
      <path
        d="M709.284 1L737.747 77.659H759.094L729.536 1H709.284Z"
        stroke="#6D4CBD"
        strokeOpacity="0.3"
      />
      <path
        d="M745.957 1L776.609 77.659H798.504L765.662 1H745.957Z"
        stroke="#6D4CBD"
        strokeOpacity="0.3"
      />
      <path
        d="M816.567 77.659H835.724L798.504 1H780.988L816.567 77.659Z"
        stroke="#6D4CBD"
        strokeOpacity="0.3"
      />
      <defs>
        <filter
          id="filter0_b_447_300"
          x="-35"
          y="-35"
          width="926"
          height="621"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_447_300"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_447_300"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <section
      className="h-full py-20 w-full flex flex-col justify-center items-center p-8 gap-10 relative"
      id="prior-domains"
    >
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute bottom-1/4 left-10 rotate-0"
      />
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden w-16 md:h-16 md:block absolute bottom-1/5 left-20 rotate-0"
      />
      <Image
        src="/sparkle.svg"
        alt="sparkle"
        width={70}
        height={70}
        className="hidden md:block absolute top-10 right-10 rotate-0"
      />

      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
      >
        <h1 className="text-center text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)] relative z-10">
          Domains
        </h1>
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-7xl mx-auto">
        <motion.div
          ref={healthcareRef}
          initial="hidden"
          animate={isHealthcareInView ? "visible" : "hidden"}
          variants={cardVariants}
          className="w-full max-w-md"
        >
          <div className="relative overflow-hidden  shadow-lg ">
            <div className="absolute inset-0 w-full h-full">
              <CardBackground />
            </div>
            <div className="relative z-10 p-6  h-full flex flex-col justify-center">
              <h2 className=" text-4xl md:text-6xl font-retro font-bold mb-4 [text-shadow:3px_3px_0px_var(--tw-shadow-color)] shadow-teal-700 relative z-10">
                EdTech
              </h2>
              <p className="text-white font-code">
                The importance of UI/UX in EdTech lies in creating accessible,
                intuitive designs that enhance user engagement, simplify
                navigation, and provide an effective and enjoyable learning
                experience for all.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={deepLearningRef}
          initial="hidden"
          animate={isDeepLearningInView ? "visible" : "hidden"}
          variants={cardVariants}
          className="w-full max-w-md"
        >
          <div className="relative overflow-hidden shadow-lg ">
            <CardBackground />
            <div className="relative z-10 p-6 h-full flex flex-col justify-center ">
              <h2 className=" text-4xl md:text-6xl font-retro font-bold mb-4 [text-shadow:3px_3px_0px_var(--tw-shadow-color)] shadow-teal-700 relative z-10">
                Gen AI
              </h2>
              <p className="text-white font-code">
                Utilize cutting-edge generative models to innovate, solve
                complex problems, and drive advancements in Al-powered solutions
                through models such as GPT, Gemini and Stable Diffusion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
