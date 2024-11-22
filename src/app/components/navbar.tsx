import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#4D4D4D] backdrop-filter backdrop-blur-lg bg-opacity-10 text-white py-1 fixed top-5 w-full max-w-7xl z-[99999] left-1/2 -translate-x-1/2 drop-shadow-[1px_1px_0_rgba(245,59,64,1)] border flex flex-row justify-between items-center ">
      <img src="/logo.png" className="size-14 rounded-full"></img>
      <div className=" px-4 flex justify-between items-center w-fit">
        <div className="font-retro font-bold text-xs md:text-lg space-x-4">
          <a href="#about" className="hover:text-white hover:underline py-2">
            About
          </a>
          <span>/</span>
          <a
            href="#history"
            className="hover:text-white hover:underline py-2 inline"
          >
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
