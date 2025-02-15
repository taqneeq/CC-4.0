"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Judge {
  image: string;
  name: string;
  position: string;
  company: string;
}

const uiUxJudges: Judge[] = [
  {
    image: "/judges/abhishek_varma_uiux.jpg",
    name: "Abhishek Verma",
    position: "UI/UX designer",
    company: "Sileo Technologies",
  },
  {
    image: "https://thispersondoesnotexist.com/",
    name: "Shubham Gone",
    position: "Senior Designer UX/UI",
    company: "Assembly Global",
  },
  {
    image: "/judges/saloni_pal_uiux.png",

    name: "Saloni Pal",
    position: "UX Designer",
    company: "Tata Consultancy Services",
  },
  {
    image: "/judges/soham_sinha_uiux.jpeg",
    name: "Soham Sinha",
    position: "LEAD UX",
    company: "UST (TATA MOTORS)",
  },
  {
    image: "/judges/vanshita_uiux.jpg",
    name: "Vanshita Singh",
    position: "UX Designer",
    company: "Cervello",
  },
  {
    image: "/judges/ali_solanki_uiux.jpg",

    name: "Ali Solanki",
    position: "Serial Internet Entreprenuer",
    company: "IMBUZI",
  },
  {
    image: "https://thispersondoesnotexist.com/",
    name: "Saumitra Vaidya",
    position: "Founder",
    company: "Seven11designs",
  },
  {
    image: "/judges/Prashanth_Mariappan_uiux.jpg",

    name: "Prashanth Mariappan",
    position: "Lead UI/UX Designer",
    company: "Tata Consultancy Services",
  },
  {
    image: "https://thispersondoesnotexist.com/",
    name: "Sonu Jangid",
    position: "UX/UI Designer",
    company: "INUPGRO",
  },
  {
    image: "/judges/shivani_uiux.png",
    name: "Shivani Verma",
    position: "Product Designer",
    company: "YouMeWho",
  },
  {
    image: "/judges/dhruv_shah_uiux.png",

    name: "Dhruv Shah",
    position: "Software Development Engineer",
    company: "Silicon Labs",
  },
  {
    image: "/judges/rakesh_gosalia_uiux.png",

    name: "Rakesh Gosalia",
    position: "UI Design & Front End Coding",
    company: "Red & White Multimedia Education Official",
  },
  {
    image: "/judges/nikhil_uiux.png",
    name: "Nikhil Digi",
    position: "Lead UI/UX Designer",
    company: "Neokred",
  },
  {
    image: "/judges/rishi_pramanik_uiux.jpg",
    name: "Rishi Pramanik",
    position: "UI Developer",
    company: "Flipkart",
  },
  {
    image: "https://thispersondoesnotexist.com/",

    name: "Prashant Patil",
    position: "Lead UI/UX Designer",
    company: "Accenture",
  },
  {
    image: "/judges/taha_uiux.png",

    name: "Taha Bhalejwala",
    position: "Design Lead",
    company: "Craft My Brand",
  },
  {
    image: "/judges/sooraj_nair_uiux.jpg",

    name: "Sooraj Nair",
    position: "Lead Product Designer",
    company: "FoodReady",
  },
  {
    image: "/judges/sailesh_uiux.jpg",

    name: "Sailesh Chatterjee",
    position: "UX Team Lead",
    company: "UX Team Lead",
  },
];

const genAiJudges: Judge[] = [
  {
    image: "/judges/ravi_m_ai.png",

    name: "Ravi Manjunatha",
    position: "Gen AI & Data Analytics Specialist",
    company: "Google",
  },
  {
    image: "/judges/harshada_patil_ai.png",

    name: "Harshada PatiL",
    position: "Senior Software Engineer",
    company: "Capgemini",
  },
  {
    image: "/judges/amar_kumar_ai.png",
    name: "Amar Kumar",
    position: "AI Scientist",
    company: "Arthrex India",
  },
  {
    image: "/judges/avinash_nayar_ai.png",

    name: "Avinash Nahar",
    position: "Senior Consultant Gen Ai Data scientist",
    company: "Stealth",
  },
  {
    image: "/judges/shubham_agarwal_ai.png",

    name: "Shubham Agarwal",
    position: "Building Generative AI in Google Cloud.",
    company: "Google",
  },
  {
    image: "/judges/umaima_suri_ai.jpg",

    name: "Umaima Tinwala",
    position: "Senior Specialist - Generative AI",
    company: "L&T Technology Services",
  },
  {
    image: "/judges/saloni_vijay_ai.png",

    name: "Saloni Vijay",
    position: "Vice President",
    company: "Vodafone Intelligent Solutions",
  },
];

const colors = {
  uiux: "rgba(113,208,202,1)", // Teal
  genai: "rgba(140,122,230,1)", // Purple
};

const dropShadows = {
  uiux: "drop-shadow-[1px_1px_0_rgba(245,59,64,1)]",
  genai: "drop-shadow-[1px_1px_0_rgba(113,208,202,1)]",
};

function JudgeCard({ judge, type }: { judge: Judge; type: "uiux" | "genai" }) {
  return (
    <div
      className={` ${dropShadows[type]} bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 size-80 border-2 p-6 flex flex-col items-center justify-between transition-all duration-500 ease-in-out`}
      style={{
        borderColor: colors[type],
        boxShadow: `4px 4px 0 ${colors[type]}`,
      }}
    >
      <div className="w-32 h-32 overflow-hidden mb-4">
        <img
          src={judge.image}
          alt={judge.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
        <h3 className="font-code text-2xl font-bold mb-2 line-clamp-2">
          {judge.name}
        </h3>
        <p className="font-code text-lg mb-2 line-clamp-2">{judge.position}</p>
        <p
          className="font-code text-lg line-clamp-1"
          style={{ color: colors[type] }}
        >
          {judge.company}
        </p>
      </div>
    </div>
  );
}

function CarouselSection({
  judges,
  type,
  title,
}: {
  judges: Judge[];
  type: "uiux" | "genai";
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextJudge = () => {
    setCurrentIndex((prev) => (prev + 1) % judges.length);
  };

  const prevJudge = () => {
    setCurrentIndex((prev) => (prev - 1 + judges.length) % judges.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextJudge();
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      <h2
        className="text-3xl font-retro font-bold text-center"
        style={{
          textShadow: `3px 3px 0 ${colors[type]}`,
        }}
      >
        {title}
      </h2>
      <div className="relative">
        <button
          onClick={prevJudge}
          className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 p-2 hover:scale-110 transition-transform"
          style={{ color: colors[type] }}
        >
          <ChevronLeft size={32} />
        </button>
        <div className="transition-all duration-500 ease-in-out">
          <JudgeCard judge={judges[currentIndex]} type={type} />
        </div>
        <button
          onClick={nextJudge}
          className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 p-2 hover:scale-110 transition-transform"
          style={{ color: colors[type] }}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}

export default function JudgesSection() {
  return (
    <section className="py-20 w-full flex flex-col items-center gap-16">
      <h1 className="text-center text-5xl md:text-8xl font-retro font-bold drop-shadow-[5px_5px_0_rgba(245,59,64,1)]">
        Our Esteemed Judges
      </h1>

      <div className="flex flex-wrap justify-center gap-24 px-8">
        <CarouselSection judges={uiUxJudges} type="uiux" title="UI/UX Judges" />
        <CarouselSection
          judges={genAiJudges}
          type="genai"
          title="Gen AI Judges"
        />
      </div>
    </section>
  );
}
