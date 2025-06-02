import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function ExperienceSection() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg font-clash mb-4 font-semibold">
            I began taking on more responsibilities at ProNetworks.
          </p>
          <ul className="list-disc text-neutral-200 text-xs md:text-sm pl-4">
            <li>Developed and executed automated Python scripts to test and validate Cisco machines, improving efficiency
            and reducing testing time by 50%.</li>
            <li>Designed and maintained a web-based inventory management system, implementing data validation and
            automated checks to ensure accuracy in tracking hardware.</li>
            <li>Conducted software testing on the inventory system, identifying and debugging issues to improve system reliability and user experience.</li>
          </ul>
          <p className="text-white text-sm md:text-lg font-clash my-4 font-semibold">
            I also became a Dance Coordinator for the Vietnamese Student Association at CSUF. 
          </p>
          <ul className="list-disc text-neutral-200 text-xs md:text-sm pl-4">
            <li>Managed logistics and facilitated weekly communication with staff, ensuring smooth coordination in a fast-paced environment for event planning.</li>
            <li>Produced and choreographed three large-scale dance performances for Vietnamese Student Association events.</li>
            <li>Led and motivated a team of over 15 members, ensuring successful performances across multiple events..</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg font-clash mb-4 font-semibold">
            I began working part time at ProNetworks as an Inventory Associate
          </p>
          <ul className="list-disc text-neutral-200 text-xs md:text-sm pl-4">
            <li>Managed product listings on eBay, optimizing descriptions, pricing, and customer communication, increasing sales by 50%.</li>
            <li>Retrieved, packaged, and shipped inventory items, ensuring accurate order fulfillment.</li>
            <li>Assisted in inventory organization and tracking, maintaining accurate stock records.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg font-clash mb-4 font-semibold">
            I started working at The Code School in Yorba Linda as a tutor. My responsibilities were...
          </p>
          <ul className="list-disc text-neutral-200 text-xs md:text-sm pl-4">
            <li>Designed and delivered weekly coding lessons, enhancing students&apos; ability to problem-solve like programmers through hands-on exercises.</li>
            <li>Provided one-on-one coaching, leading to an improvement in Python proficiency among students</li>
            <li>Taught and guided students in programming languages including Scratch, Python, HTML/CSS, and
            JavaScript, managing a class of up to 6 students</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div id="experience-section" className="w-full">
      <Timeline data={data} />
    </div>
  );
}