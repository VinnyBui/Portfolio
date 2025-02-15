"use client";
import React from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";

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
          <Link href="/#about" className="relative inline-flex flex-col items-center group">
            About
            <span className="w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full mt-1"></span>
          </Link>
          <Link href="/#projects" className="relative inline-flex flex-col items-center group">
            Projects
            <span className="w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full mt-1"></span>
          </Link>
          <a 
            href="/RESUME.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative inline-flex flex-col items-center group"
          >
            Resume
            <span className="w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full mt-1"></span>
          </a>
        </nav>
        {/* Mobile Menu (Sheet) */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <MenuIcon size={40} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="fixed top-0 left-0 w-[200px] h-full bg-white shadow-lg border-r">
            <div className="flex flex-col items-start mt-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-6">
                <SheetClose asChild>
                  <Link href="/#about" className="relative inline-flex flex-col items-center group font-medium">
                    About
                    <span className="w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full mt-1"></span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#projects" className="relative inline-flex flex-col items-center group font-medium">
                    Projects
                    <span className="w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full mt-1"></span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="/RESUME.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative inline-flex flex-col items-center group font-medium"
                  >
                    Resume
                    <span className="w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full mt-1"></span>
                  </a>
                </SheetClose>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
