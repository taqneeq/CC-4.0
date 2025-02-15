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
      <div className="max-w-7xl w-full mx-auto border border-purple-500/20 p-4 md:p-6 rounded-lg shadow-lg bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 relative z-10 ">
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
              className="absolute left-0 w-full mt-2 bg-[#4D4D4D]  border border-purple-500/60 rounded shadow-lg z-10 backdrop-filter backdrop-blur-sm bg-opacity-10"
            >
              <div
                onClick={() => handleRoundSelect("elementary")}
                className="p-2 hover:bg-purple-600 cursor-pointer "
              >
                Elementary Round
              </div>
              <div className="border-t border-purple-500/20"></div>
              <div
                onClick={() => handleRoundSelect("advanced")}
                className="p-2 hover:bg-purple-600 cursor-pointer"
              >
                Advanced Round
              </div>
            </motion.div>
          )}
        </div>

        <div className=" md:p-4 md:border border-purple-500/20 rounded md:bg-gray-700 md:backdrop-filter md:backdrop-blur-sm md:bg-opacity-10 md:text-2xl">
          {selectedRound === "elementary" && (
            <div className="mx-auto p-8  text-gray-200 rounded-lg shadow-lg">
              <p className="mt-4">
                Meet Chris, a 19-year-old student with ADHD, who has a love for
                learning but struggles to thrive in traditional education
                systems. On some days, the lessons move too quickly, leaving him
                lost, while on others, the lack of engagement makes it hard to
                stay focused. He has tried online learning platforms, but their
                rigid interfaces, one-size-fits-all pacing, and overwhelming
                content only add to his frustration. Like Chris, millions of
                neurodivergent students face similar challenges, feeling
                unsupported and disconnected in environments that aren’t
                designed with their unique needs in mind.
              </p>

              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Challenge
              </h2>
              <p className="mt-2">
                Design an innovative solution that redefines how neurodivergent
                students like Chris experience learning. The focus is on
                crafting an intuitive and empowering user interface and
                experience (UI/UX) that embraces personalization and
                inclusivity.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6">
                Consider Challenges Like:
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-2">
                <li>
                  Adaptive pacing, content delivery, or engagement strategies
                </li>
                <li>
                  Gamification, visual cues, or calming features to enhance
                  focus
                </li>
                <li>
                  Accessibility features that make learning easier and more
                  comfortable
                </li>
                <li>
                  Tools for teachers or parents to better support neurodivergent
                  learners
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                No Limits to Innovation
              </h2>
              <p className="mt-2">
                Your solution can focus on any part of the learning journey,
                from ideation to implementation, or even the human connections
                within the learning process.
              </p>

              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Key Question
              </h2>
              <p className="mt-2">
                How will your design make learning more inclusive, adaptive, and
                empowering for neurodivergent students?
              </p>
              <p className="mt-2">
                What unique ideas will help Chris and others like him unlock
                their true potential?
              </p>
            </div>
          )}

          {selectedRound === "advanced" && (
            //
            <div className=" text-gray-200  bg-blur p-8 rounded-lg shadow-lg">
              <p className="mt-4">
                Meet Alex, a brilliant software engineer, just quit their job to
                pursue their entrepreneurial dreams. While Alex has innovative
                ideas and strong technical skills, they find themselves
                overwhelmed by the complexities of building a startup alone.
              </p>

              <p className="mt-4">
                From wondering how to validate their idea to finding the right
                co-founder to figuring out fundraising—every day brings new
                challenges and decisions. While there's no shortage of startup
                advice online, Alex wishes for a smarter way to navigate this
                complex journey.
              </p>

              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Challenge
              </h2>
              <p className="mt-2">
                Create an AI-powered solution that helps solo founders like Alex
                transform their entrepreneurial dreams into reality. Your
                solution should leverage artificial intelligence to support
                founders in ways you think would be most impactful for their
                journey.
              </p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6">
                Consider Challenges Like:
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-2">
                <li>Validation of their business ideas</li>
                <li>
                  Provision of strategic advice on company building and growth
                </li>
                <li>Biggest challenges solo founders face</li>
                <li>Fundraising preparation and investor connections</li>
                <li>And more</li>
              </ul>

              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Key Question
              </h2>
              <p className="mt-2">
                How can AI make the entrepreneurial journey less daunting?
              </p>
              <p className="mt-2">
                What unique perspectives or approaches could make your solution
                stand out? Feel free to focus on any aspect of the startup
                journey that resonates with your team—from ideation to scaling,
                from technical challenges to human aspects.
              </p>

              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Our Goal
              </h2>
              <p className="mt-2">
                We're looking for the most efficient and helpful solution to
                empower the next generation of founders and entrepreneurs using
                AI.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatementPage;
