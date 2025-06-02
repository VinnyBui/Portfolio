"use client"
import React, { useState } from "react";
import PaginationSelector from "@/components/ui/pageSelector";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "@/lib/projectsData";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsDemoSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const totalPages = projects.length;
  const startIndex = (currentPage - 1);
  const displayedProjects = projects.slice(startIndex, currentPage);

  const handlePageChange = (newPage: number) => {
    setDirection(newPage > currentPage ? -1 : 1); // -1 slides left, 1 slides right
    setCurrentPage(newPage);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="project" className="my-20 mx-auto">
      <div className="flex h-full flex-col md:flex-row gap-0">
        {/* Left Side */}
        <div className="flex flex-col gap-40 md:gap-64 px-8">
          <div className="flex justify-between text-xs md:text-base">
            <h3>Stuff that I&apos;ve been working on</h3>
            <h4>Some are professional work, some are just for fun</h4>
          </div>
          <h1 className="text-5xl md:text-9xl text-center font-clash font-bold">PROJECTS</h1>
          <PaginationSelector currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
        {/* Right Side - Display Project Images */}
        <div className="flex-1 border-l p-8 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.35,
                  ease: "easeInOut"
                }}
                className="flex flex-col gap-4"
              >
                {/* Fixed height container for media */}
                <div className="h-[400px] flex items-center justify-center">
                  {project.type === "video" ? (
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="h-full w-full object-contain"
                    >
                      <source src={project.media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center font-clash text-black">
                      No Media Available
                    </div>    
                  )}
                </div>
                <div className="mt-4">
                  <h2 className="text-xl md:text-2xl font-semibold">{project.name}</h2>
                  <p className="text-sm md:text-base mt-2">{project.demoDescription}</p>
                  <Link href={`/projects/${project.id}`} className="mt-4 block">
                    <Button className="hover:bg-black hover:text-white text-black">
                      Read More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
