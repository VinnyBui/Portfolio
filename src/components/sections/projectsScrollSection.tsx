"use client"
import { projects } from "@/lib/projectsData";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const getTechColor = (tech: string): string => {
  switch (tech.toLowerCase()) {
    case 'react':
      return 'bg-blue-400 text-white';
    case 'vite':
      return 'bg-purple-500 text-white';
    case 'firebase':
      return 'bg-orange-400 text-white';
    case 'python':
      return 'bg-green-500 text-white';
    case 'next.js':
      return 'bg-black text-white';
    case 'javascript':
      return 'bg-yellow-400 text-black';
    case 'vercel':
      return 'bg-black text-white';
    case 'typescript':
      return 'bg-blue-500 text-white';
    case 'aws':
      return 'bg-orange-600 text-white';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function ProjectScroll(){
  const TargetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: TargetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  return (
    <>
      {/* Desktop Layout */}
      <section ref={TargetRef} className="relative h-[200vh] hidden md:block">
        <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">
          <h1 className="text-6xl lg:text-9xl font-bold my-14">PROJECTS</h1>
          <motion.div 
            style={{ x }}
            className="flex gap-5"
          >
            {projects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <div className="w-[700px] h-[400px] flex flex-row overflow-hidden border border-black shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group bg-white">
                  <div className="w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-5xl font-bold font-boska mb-4">{project.name}</h2>
                      <p className="text-sm lg:text-base text-gray-700">
                        {project.demoDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">TECHNOLOGIES</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech: string, index: number) => (
                          <div 
                            key={index} 
                            className={`px-3 py-1 rounded-lg border border-black ${getTechColor(tech)}`}
                          >
                            <span className="text-xs font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <Image 
                      src={project.images[0]} 
                      alt={project.name} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Mobile Layout */}
      <section className="py-8 px-4 md:hidden">
        <h1 className="text-4xl font-bold mb-8 text-center">PROJECTS</h1>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <div className="w-full border border-black shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white">
                <div className="relative w-full h-[200px]">
                  <Image 
                    src={project.images[0]} 
                    alt={project.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                  <p className="text-sm text-gray-700 mb-3">
                    {project.demoDescription}
                  </p>
                  
                  {/* Technologies section - Mobile */}
                  <div className="mb-2">
                    <h3 className="text-xs font-medium text-gray-500 mb-1">TECHNOLOGIES</h3>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies?.map((tech: string, index: number) => (
                        <div 
                          key={index} 
                          className={`px-2 py-1 rounded-full ${getTechColor(tech)}`}
                        >
                          <span className="text-xs font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}