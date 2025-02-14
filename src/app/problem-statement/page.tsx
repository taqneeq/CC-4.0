"use client";

import React, { useState } from "react";
import Image from "next/image";
import Space from "../space.jpg";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ProblemStatementPage: React.FC = () => {
  const [selectedRound, setSelectedRound] = useState("elementary");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRoundSelect = (round: string) => {
    setSelectedRound(round);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-purple-400 p-6 font-mono flex flex-col justify-center items-center relative">
      <div className="fixed inset-0 z-0">
        <Image src={Space} alt="space" fill className="opacity-20" />
      </div>
      <div className="max-w-7xl w-full mx-auto border border-purple-500/20 p-6 rounded-lg shadow-lg bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 relative z-10 ">
        <h1 className="text-white text-center text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(192,132,252,1)]">
          Problem Statements
        </h1>
        <div className="relative max-w-sm mx-auto mb-32 mt-16 text-purple-100">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full p-2 bg-[#4D4D4D] text-purple-100 border border-purple-500/20 rounded flex items-center justify-between focus:outline-none backdrop-filter backdrop-blur-sm bg-opacity-10"
          >
            {selectedRound === "elementary"
              ? "Elementary Round"
              : "Advanced Round"}
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 w-full mt-2 bg-[#4D4D4D]  border border-purple-500 rounded shadow-lg z-10 backdrop-filter backdrop-blur-sm bg-opacity-10"
            >
              <div
                onClick={() => handleRoundSelect("elementary")}
                className="p-2 hover:bg-purple-600 cursor-pointer "
              >
                Elementary Round
              </div>
              <div
                onClick={() => handleRoundSelect("advanced")}
                className="p-2 hover:bg-purple-600 cursor-pointer"
              >
                Advanced Round
              </div>
            </motion.div>
          )}
        </div>

        <div className=" p-4 border border-purple-500/20 rounded bg-gray-700 backdrop-filter backdrop-blur-sm bg-opacity-10 text-lg md:text-2xl">
          {selectedRound === "elementary" && (
            <div>
              <p className="my-5 text-purple-100 md:text-justify">
                Mysha, an EdTech Product Manager at Learnify, is struggling to
                track her professional development courses and access her
                learning progress across multiple platforms. She realizes that
                the current EdTech portals lack a user-friendly interface and
                seamless integration, making it difficult for educators and
                students to manage their learning journey effectively. Develop a
                solution that enhances the user experience by creating a
                centralized learning management portal where students and
                educators can securely track progress, access course materials,
                and manage certifications with ease.
              </p>
            </div>
          )}

          {selectedRound === "advanced" && (
            <div>
              <p className="my-5 text-purple-100 md:text-justify">
                Naitik is the founder of a small EdTech startup in Mumbai called Neurotechh.
                Coming from an underprivileged background, he vividly remembers
                the challenges students in his community faced due to a lack of
                personalized learning resources and guidance. These gaps in
                education led to students struggling with concepts and falling
                behind. He approached NovaAI to help him integrate Generative AI
                into his platform. Develop a solution that leverages a
                GenAI-powered tutor to provide personalized learning assistance,
                generate adaptive study materials, and enhance the overall
                educational experience for students.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatementPage;
