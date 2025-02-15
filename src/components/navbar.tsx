"use client";
import React from "react";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="top-0 left-0 w-full px-8 md:px-0">
      <div className="max-w-screen-xl w-full mx-auto flex justify-between py-4 mt-20 border-t items-center md:items-start relative">
        {/* Left Section */}
        <div>
          <p>Software Developer</p>
          <h2 className="font-semibold text-4xl md:text-6xl">Vinh Bui</h2>
        </div>
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-10">
          {["About", "Projects", "Contact"].map((text, index) => (
            <a key={index} href="#" className="relative inline-flex flex-col items-center group">
              {text}
              <span className="w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full mt-1"></span>
            </a>
          ))}
        </nav>
        <nav className="md:hidden">
          <button>
          <MenuIcon size={40}/>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
