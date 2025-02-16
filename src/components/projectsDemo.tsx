"use client"

import React, { useState } from "react";
import PaginationSelector from "@/components/pageSelector";

const projects = [
  { 
    id: 1, 
    name: "Project 1", 
    image: "image1.jpg" 
  },
  { 
    id: 2, 
    name: "Project 2", 
    image: "image2.jpg" 
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
        <div className="flex-1 border-l px-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="mb-5">
              <img src={project.image} alt={project.name} className="w-full h-auto" />
              <h2 className="text-2xl font-semibold">{project.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDemo;
