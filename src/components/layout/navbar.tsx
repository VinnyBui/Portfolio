"use client";
import React from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="top-0 left-0 w-full px-8 md:px-0">
      <div className="max-w-screen-xl w-full mx-auto flex justify-between py-4 mt-20 border-t items-center md:items-start relative">
        {/* Left Section */}
        <div>
          <p>Software Engineer</p>
          <h2 className="font-semibold text-4xl md:text-6xl">Vinh Bui</h2>
        </div>
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-10">
          <button
            className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </button>
          <button
            className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
            onClick={() => {
              document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </button>
          <a
            href="/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
          >
            Resume
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
                  <button
                    className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
                    onClick={() => {
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    About
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button
                      className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
                      onClick={() => {
                        document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Projects
                    </button>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="/RESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
                  >
                    Resume
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
