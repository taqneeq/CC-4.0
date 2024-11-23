import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="p-5 px-5 lg:px-10 z-50 relative">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-y-4 md:gap-y-0 justify-between">
        <div className="flex items-center gap-x-2">
          <Image
            className="h-8 w-8 rounded-full"
            src="/cc.png"
            width={64}
            height={64}
            alt="Taqneeq Fest Logo"
          />
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            Cyber Cypher 4.0
          </h2>
        </div>

        <div className="flex items-center gap-x-6 md:gap-x-10">
          <ul className="flex items-center gap-x-6 md:gap-x-10">
            <li className="text-[15px]/normal font-medium text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-400 hover:dark:text-neutral-100">
              <a
                href="https://www.instagram.com/taqneeqfest/"
                className="hover:opacity-75 transition-opacity"
              >
                <Instagram
                  size={25}
                  className="hover:text-brandYellow hover:scale-110"
                />
              </a>
            </li>
            <li className="text-[15px]/normal font-medium text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-400 hover:dark:text-neutral-100">
              <a
                href="https://www.linkedin.com/company/taqneeqfest"
                className="hover:opacity-75 transition-opacity"
              >
                <Linkedin
                  size={25}
                  className="hover:text-brandYellow hover:scale-110"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Centered copyright text */}
      <div className="text-center mt-4 md:mt-6">
        <span className="text-sm text-neutral-400 dark:text-neutral-400">
          © {new Date().getFullYear()} All rights reserved @taqneeqfest
        </span>
      </div>
    </footer>
  );
};
