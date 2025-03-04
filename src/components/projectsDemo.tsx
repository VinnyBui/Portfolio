"use client"
import React, { useState } from "react";
import PaginationSelector from "@/components/pageSelector";
import { Button } from "./ui/button";
import Link from "next/link";
import { projects } from "@/lib/projectsData";

const ProjectsDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = projects.length;
  const startIndex = (currentPage - 1);
  const displayedProjects = projects.slice(startIndex, startIndex + 1);

  return (
    <section id="project" className="my-20 mx-auto">
      <div className="flex h-full flex-col md:flex-row gap-0">
        {/* Left Side */}
        <div className="flex flex-col gap-40 md:gap-64 px-8">
          <div className="flex justify-between text-xs md:text-base">
            <h3>Stuff that I&apos;ve been working on</h3>
            <h4>Some are professional work, some are just for fun</h4>
          </div>
          <h1 className="text-4xl md:text-9xl font-clash font-bold">PROJECTS</h1>
          <PaginationSelector currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
        {/* Right Side - Display Project Images */}
        <div className="flex-1 border-l p-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="flex flex-col gap-4">
              {project.media ? (
                <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="h-[400px] object-contain"
              >
                <source src={project.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              ): (
                <div className="h-[400px] flex items-center justify-center bg-gray-800 text-white">
                  No Media Available
                </div>    
              )}
              <h2 className="text-xl md:text-2xl font-semibold ">{project.name}</h2>
              <p className="text-sm md:text-base">{project.demoDescription}</p>
              <Link href={`/projects?id=${project.id}`}>
                <Button className="hover:bg-black hover:text-white text-black">
                  Read More
                </Button>
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDemo;
