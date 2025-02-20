"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import PaginationSelector from "@/components/pageSelector";
import { Tabs } from "@/components/ui/tabs";
interface Project {
  id: string;
  name: string;
  media: string;
  overviewDescription: string;
  overviewLink: string;
  productDescription: string;
  detailsDescription: React.ReactNode;
  Challenges: React.ReactNode;
}
const ProjectDetails = ({ projects, initProjectIndex }: { projects: Project[]; initProjectIndex: number}) => {
  const [currentPage, setCurrentPage] = useState(initProjectIndex + 1);
  const totalPages = projects.length;

  useEffect(() => {
    setCurrentPage(initProjectIndex + 1);
  },[initProjectIndex]);

  const currentProject = projects[currentPage - 1];
  const tabs = [
    {
      title: "Overview",
      value: "overview",
      content: (
        <div className="w-full overflow-hidden relative h-full p-14 md:p-40 text-white bg-zinc-900 rounded-lg text-center">
          <h2 className=" text-xl md:text-4xl font-bold mb-4">Overview/</h2>
          <p className="mb-8">{currentProject.overviewDescription}</p>
          <a href={currentProject.overviewLink} target="_blank" rel="noopener noreferrer">
            <Button className="hover:bg-black hover:text-white text-black bg-white">
              View Project
            </Button>
          </a>
        </div>
      ),
    },
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full p-10 text-white bg-zinc-900 rounded-lg flex flex-col md:flex-row gap-0 md:gap-10 items-center justify-around">
          <div className="text-center">
            <h2 className="text-xl md:text-4xl font-bold mb-4">Product/</h2>
            <p>{currentProject.productDescription}</p>
          </div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className=" h-[300px] md:h-[400px] w-[300px] md:w-[800px] object-contain"
          >
            <source src={currentProject.media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    },
    {
      title: "Details",
      value: "details",
      content: (
        <div className="w-full overflow-hidden relative h-full p-10 text-white bg-zinc-900 rounded-lg flex flex-col md:flex-row gap-0 md:gap-10 items-center justify-around">
          <h2 className=" text-xl md:text-4xl font-bold mb-4">Details/</h2>
          {currentProject.detailsDescription}
        </div>
      ),
    },
    {
      title: "Challenges",
      value: "challenges",
      content: (
        <div className="w-full overflow-y-auto  relative h-full p-6 md:p-10 px-8 md:px-28 text-white bg-zinc-900 rounded-lg flex flex-col md:flex-row items-center gap-8">
          <h2 className=" text-xl md:text-4xl font-bold mb-4">Challenges/</h2>
          {currentProject.Challenges}
        </div>
      ),
    },
  ]
  return (
    <div className="h-[45rem] [perspective:1000px] relative b flex flex-col max-w-screen-xl mx-auto w-full items-start justify-start my-14 gap-10 px-5 md:px-0 ">
      <h1 className=" text-xl md:text-6xl font-clash font-bold">{currentProject.name}</h1>
      <Tabs key={currentProject.id} tabs={tabs} />
      <PaginationSelector currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

export default ProjectDetails