"use client"
import { projects } from "@/lib/projectsData";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectScroll(){
  const TargetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: TargetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={TargetRef} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">
        <h1 className="text-9xl font-bold my-14">PROJECTS</h1>
        <motion.div 
          style={{ x }}
          className="flex gap-4"
        >
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="w-[500px] h-[500px] relative overflow-hidden border-2 border-black shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <div className="relative w-full h-full">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  fill 
                  className="object-cover transition-transform duration-500"
                />
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
    </section>
  )
}