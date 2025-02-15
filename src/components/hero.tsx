import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center text-center py-20 gap-20 mx-auto">
      <div className="relative flex items-center self-start pl-60">
        <Image
          className="inlin relative z-10"
          src="/coffee.png"
          alt="Coffee cup"
          width={300}
          height={300}
        />
        <h1 className="absolute top-[16px] right-0 translate-x-96 -translate-y-1/2 text-9xl z-10 font-bold font-boska">
          PORTFOLIO
        </h1>
        <h1 className="absolute top-[126px] right-0 translate-x-96 -translate-y-1/2 text-9xl z-0 text-white font-bold font-boska drop-shadow-[2px_2px_0px_black]">
          PORTFOLIO
        </h1>
        <h1 className="absolute top-[236px] right-0 translate-x-96 -translate-y-1/2 text-9xl z-0 text-white font-bold font-boska drop-shadow-[2px_2px_0px_black]">
          PORTFOLIO
        </h1>
        <h1 className="absolute top-[346px] right-0 translate-x-96 -translate-y-1/2 text-9xl z-0 text-white font-bold font-boska drop-shadow-[2px_2px_0px_black]">
          PORTFOLIO
        </h1>
      </div>
    </section>
  );
};

export default Hero;
