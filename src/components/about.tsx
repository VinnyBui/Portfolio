import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import {
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
const items = [
  {
    title: "About Me",
    description: (
      <div>
        <p>
          Hello, I'm Vinh, a software engineer based in Orange County. I specialize in building web applications and have experience in automation and scripting. I enjoy problem solving and having real world impact.<br/><br/>
        </p>
        <p>
          My expertise includes React, Firebase, and Python, and I'm currently expanding my skills in Next.js. I also have hands-on experience automating network configurations for Cisco devices. I'm always eager to learn new technologies and improve my problem-solving skills, whether it's through software development, automation, or data-driven solutions.
        </p>
      </div>
    ),
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Skills/Software",
    description: (
      <>
        <strong>Languages & Frameworks:</strong> <br />
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <SiJavascript size={24} title="JavaScript" />
          <SiTypescript size={24} title="TypeScript" />
          <SiPython size={24} title="Python" />
          <SiCplusplus size={24} title="C++" />
        </div>

        <strong className="block mt-3">Frontend:</strong>
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <SiReact size={24} title="React" />
          <SiVite  size={24} title="Vite" />
          <SiNextdotjs size={24} title="Next.js" />
          <SiTailwindcss size={24} title="Tailwind CSS" />
        </div>

        <strong className="block mt-3">Backend & Databases:</strong>
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <SiFirebase size={24} title="Firebase Firestore" />
          <SiPostgresql size={24} title="PostgreSQL" />
        </div>

        <strong className="block mt-3">Tools:</strong>
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <SiGit size={24} title="Git" />
          <SiGithub size={24} title="GitHub" />
          <VscVscode size={24} title="VS Code" />
        </div>

        <strong className="block mt-3">Soft Skills:</strong> Agile / Scrum, Leadership, Problem Solving, Time Management, Bilingual (Vietnamese)
      </>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Hobbies",
    description: (
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <p>
          A few of my hobbies are going to the gym, playing games, and cafe hopping. I enjoy exploring new cafes around my area and trying out different drinks. This hobby led me to start making matcha at home and it has become one of my go-to pastimes.
        </p>
        <Image
          className=" w-[200px] h-auto"
          src="/hobby.png"
          alt="hobby"
          width={200}
          height={200}
          priority
        />
      </div>
    ),
    className: "md:col-span-2",
  }
  
];

const About = () => {
  return (
    <section id="about">
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] p-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default About;