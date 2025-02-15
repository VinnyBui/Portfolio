import React from "react";

const Navbar = () => {
  return (
    <header className="top-0 left-0 w-full">
      <nav className="max-w-screen-xl mx-auto flex justify-between px-8 py-4 mt-20 border-t">
        <div>
          <p>Software Developer</p>
          <h2 className="  font-semibold text-4xl md:text-6xl">Vinh Bui</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10 ">
          {["Home", "Projects", "Contact"].map((text, index) => (
              <a key={index} href="#" className="relative inline-flex flex-col items-center group">
                {text}
                <span className="w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full mt-1"></span>
              </a>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
