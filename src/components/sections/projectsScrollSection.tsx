"use client"
import { projects } from "@/lib/projectsData";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectScroll(){
  const TargetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: TargetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  return (
    <>
      {/* Desktop Layout */}
      <section ref={TargetRef} className="relative h-[150vh] hidden md:block">
        <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">
          <h1 className="text-6xl lg:text-9xl font-bold my-14">PROJECTS</h1>
          <motion.div 
            style={{ x }}
            className="flex gap-5"
          >
            {projects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <div className="w-[700px] h-[400px] flex flex-row overflow-hidden border border-black shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group bg-white">
                  <div className="w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-5xl font-bold font-boska mb-4">{project.name}</h2>
                    <p className="text-sm lg:text-base text-gray-700">
                      {project.demoDescription}
                    </p>
                  </div>
                  <div className="w-1/2 relative">
                    <Image 
                      src={project.image} 
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
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                  <p className="text-sm text-gray-700">
                    {project.demoDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}