import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-black py-4 fixed top-5 w-fit z-[99999] left-1/2 -translate-x-1/2">
      <div className=" mx-auto px-4 flex justify-between items-center">
        <div className="space-x-1 font-code font-bold text-xs md:text-lg">
          <a href="#about" className="hover:text-white hover:underline py-2">
            About
          </a>
          <span>/</span>
          <a href="#history" className="hover:text-white hover:underline py-2 inline">
            History
          </a>
          <span>/</span>
          <a href="#sponsor" className="hover:text-white hover:underline py-2">
            Sponsors
          </a>
          <span>/</span>
          <a href="#faq" className="hover:text-white hover:underline py-2">
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
