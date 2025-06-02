"use client";
import React from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const handleScroll = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="top-0 left-0 mx-8 md:mx-10">
      <div className="flex justify-between py-4 mt-20 border-t items-center md:items-start relative">
        {/* Left Section */}
        <Link href="/" className="no-underline">
          <p>Software Developer</p>
          <h2 className="font-semibold text-4xl md:text-5xl">Vinh Bui</h2>
        </Link>
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-10">
          <Link
            href="/#about"
            onClick={(e) => {
              if (window.location.pathname !== '/') {
                return;
              }
              e.preventDefault();
              handleScroll("about");
            }}
            className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            href="/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
          >
            Resume
          </Link>
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
                  <Link
                    href="/#about"
                    onClick={(e) => {
                      if (window.location.pathname !== '/') {
                        return;
                      }
                      e.preventDefault();
                      handleScroll("about");
                    }}
                    className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/projects"
                    className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
                  >
                    Projects
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/RESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex flex-col items-center border-b-2 border-transparent hover:border-black transition-all duration-300"
                  >
                    Resume
                  </Link>
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
