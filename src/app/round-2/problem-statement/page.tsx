"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Space from "./space.jpg";
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
            <div className="mx-auto p-2 md:p-8  text-gray-200 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Mentor-Mentee Hub: Rethinking the Mentorship Experience
              </h2>
              <p className="mt-4">
                Mentorship can be life-changing, but often, it lacks structure,
                consistency, and long-term engagement. Finding and connecting
                with the right mentor, tracking progress and staying motivated
                over time can be difficult. How can we design a seamless and
                engaging mentorship experience that makes it easier to connect,
                set goals, track progress, and stay engaged?
              </p>
              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                What to Explore
              </h2>
              <p className="mt-4">
                This challenge is about designing an intuitive and effective
                platform that helps mentors and mentees build meaningful
                relationships and engage in learning. Consider how design can:
                <ul>
                  <li>
                    Make finding the right mentor or mentee effortless and
                    personalized.
                  </li>
                  <li>
                    Encourage goal-setting and progress tracking in a simple,
                    visual way.
                  </li>
                  <li>
                    Use AI to offer helpful insights, prompts, or reminders that
                    keep users engaged.
                  </li>
                  <li>
                    Foster a sense of community and collaboration to enhance the
                    mentorship experience.
                  </li>
                </ul>
              </p>
              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Things to Think About
              </h2>
              <p className="mt-4">
                <ul>
                  <li>
                    How can the platform feel welcoming and easy to use for
                    different types of users?{" "}
                  </li>{" "}
                  <li>
                    What kind of experience would keep mentors and mentees
                    engaged over time?
                  </li>
                  <li>
                    How can AI enhance but not overpower the human connection in
                    mentorship?
                  </li>{" "}
                  <li>
                    Could gamification, community features, or smart nudges make
                    mentorship more interactive?
                  </li>
                </ul>
              </p>
              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Your Oppurtinity to Innovate
              </h2>
              <p>
                {`There’s no single way to design the perfect mentorship
                  experience. Whether it’s a fresh take on user onboarding, a
                  smart tracking system, or a unique way to build engagement,
                  the goal is to make mentorship more structured, accessible,
                  and rewarding. How will you design a mentorship experience
                  that truly makes a difference?`}
              </p>
            </div>
          )}

          {selectedRound === "advanced" && (
            <div className=" text-gray-200 p-2 bg-blur md:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Real Estate Communication Assistant: Making Multilingual
                Conversations Smarter
              </h2>
              <p className="mt-4">
                {`In India’s real estate market, agents talk to clients in many
                languages—Hindi, Marathi, Telugu, English, and sometimes a mix
                of them all. These conversations are full of important details
                about what buyers want, but much of this information gets lost
                because it’s not recorded, analyzed, or acted on properly.`}
              </p>
              <p className="mt-4">
                How can we help real estate professionals better understand,
                manage and follow up on these multilingual client conversations?
              </p>
              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Explore the ways to help agents:
              </h2>
              <p className="mt-4">
                <ul>
                  <li>
                    Communicate more easily with clients, no matter the
                    language.
                  </li>
                  <li>
                    Capture and understand key points from their conversations.
                  </li>
                  <li>Keep track of follow-ups so no opportunity is missed.</li>
                  <li>
                    Get real-time support to handle discussions more
                    effectively.
                  </li>
                </ul>
              </p>
              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Explore the ways to help agents:
              </h2>
              <p className="mt-4">
                <ul>
                  <li>
                    How can the platform feel welcoming and easy to use for
                    different types of users?{" "}
                  </li>{" "}
                  <li>
                    What kind of experience would keep mentors and mentees
                    engaged over time?
                  </li>
                  <li>
                    How can AI enhance but not overpower the human connection in
                    mentorship?
                  </li>{" "}
                  <li>
                    Could gamification, community features, or smart nudges make
                    mentorship more interactive?
                  </li>
                </ul>
              </p>
              <h2 className="text-2xl font-semibold text-purple-400 mt-6">
                Your Oppurtinity to Innovate{" "}
              </h2>
              <p className="mt-4">
                {`There’s no one right answer to this challenge—your solution
                could be anything from a simple tool to a high-tech system. The
                goal is to help real estate professionals manage multilingual
                client conversations, get more value from them and close deals
                more efficiently.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatementPage;
