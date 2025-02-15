"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0},
  visible: (delay: number) => ({
    opacity: 1,
    transition: {delay, duration: 0.5, ease: "easeOut"},
  }),
};

const Hero = () => {
  return (
    <section className="relative flex items-center text-center py-20 mx-auto">
      <div className="relative flex items-center self-start pl-10 md:pl-60">
        {/* Image */}
        <div className="relative">
          <Image
            className="relative z-10 w-[180px] h-auto md:w-[300px]"
            src="/coffee.png"
            alt="Coffee cup"
            width={300}
            height={300}
            priority
          />

          {/* Overlapping Text */}
          <h1 className="absolute top-[0px] md:top-[16px] right-0 translate-x-1/2 md:translate-x-96 -translate-y-1/2 text-6xl md:text-9xl z-10 font-bold font-boska">
            PORTFOLIO
          </h1>
          <motion.h1
            className="absolute top-[60px] md:top-[126px] right-0 translate-x-1/2 md:translate-x-96 -translate-y-1/2 text-6xl md:text-9xl z-0 text-white font-bold font-boska drop-shadow-[2px_2px_0px_black]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0.3} // Delay by 0.3s
          >
            PORTFOLIO
          </motion.h1>
          <motion.h1
            className="absolute top-[120px] md:top-[236px] right-0 translate-x-1/2 md:translate-x-96 -translate-y-1/2 text-6xl md:text-9xl z-0 text-white font-bold font-boska drop-shadow-[2px_2px_0px_black]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0.6} // Delay by 0.6s
          >
            PORTFOLIO
          </motion.h1>
          <motion.h1
            className="absolute top-[180px] md:top-[346px] right-0 translate-x-1/2 md:translate-x-96 -translate-y-1/2 text-6xl md:text-9xl z-0 text-white font-bold font-boska drop-shadow-[2px_2px_0px_black]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0.9} // Delay by 0.9s
          >
            PORTFOLIO
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
