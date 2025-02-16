"use client"

import React, { useState } from "react";
import PaginationSelector from "@/components/pageSelector";

const projects = [
  { 
    id: 1, 
    name: "we-buy-cisco.com", 
    media: "/p2.mp4",
    type: "video",
    description: "This is the company's side where only those who are authenticated can have access to deleting, creating, and editing data." 
  },
  { 
    id: 2, 
    name: "we-buy-cisco.com", 
    media: "/p1.mp4",
    type: "video",
    description: "Hello" 
  },
];

const ProjectsDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = projects.length;
  const startIndex = (currentPage - 1);
  const displayedProjects = projects.slice(startIndex, startIndex + 1);

  return (
    <section id="project" className="my-20 mx-auto">
      <div className="flex h-full flex-col md:flex-row gap-20 md:gap-0">
        {/* Left Side */}
        <div className="flex flex-col gap-60 px-8">
          <div className="flex justify-between text-xs md:text-base">
            <h3>Stuff that I've been working on</h3>
            <h4>Some are professional work, some are just for fun.</h4>
          </div>
          <h1 className="text-4xl md:text-9xl font-clash font-bold">PROJECTS</h1>
          <PaginationSelector currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
        {/* Right Side - Display Project Images */}
        <div className="flex-1 border-l p-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="mb-5">
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
              <h2 className="text-xl md:text-2xl font-semibold ">{project.name}</h2>
              <p className="text-sm md:text-base">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDemo;
