"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { experienceData } from "@/lib/experienceData";

export default function ExperienceSection() {
  const data = experienceData.map((yearData) => ({
    title: yearData.year,
    content: (
      <div>
        {yearData.experiences.map((experience, index) => (
          <div key={`${yearData.year}-${index}`}>
            <div className="mb-4">
              <h3 className="text-white text-base md:text-xl font-clash font-bold mb-1">
                {experience.role}
              </h3>
              <p className="text-neutral-400 text-sm md:text-base mb-1">
                {experience.company}
              </p>
              <p className="text-neutral-500 text-xs md:text-sm mb-2 italic">
                {experience.period}
              </p>
              <p className="text-neutral-300 text-xs md:text-sm">
                {experience.description}
              </p>
            </div>
            <ul className="list-disc text-neutral-200 text-xs md:text-sm pl-4">
              {experience.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex}>{responsibility}</li>
              ))}
            </ul>
            {index < yearData.experiences.length - 1 && (
              <div className="my-4" />
            )}
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeInOut" }} 
      id="experience-section" 
      className="w-full"
    >
      <Timeline data={data} />
    </motion.div>
  );
}