export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface ExperienceYear {
  year: string;
  experiences: Experience[];
}

export const experienceData: ExperienceYear[] = [
    {
    year: "2025",
    experiences: [
      {
        company: "Coding Minds",
        role: "Coding Instructor",
        period: "April 2025 - Current",
        description: "",
        responsibilities: [
          "Deliver one-on-one coding instruction to K through 12 students, tailoring lessons to individual learning styles and skill levels.",
          "Teach programming fundamentals and problem-solving using Python and Scratch to build a strong foundation incomputer science",
          "Introduce students to mobile app development with Flutter, incorporating OpenAI APIs to build AI-enhanced applications",
        ],
      },
    ],
  },
  {
    year: "2024",
    experiences: [
      {
        company: "ProNetworks",
        role: "Web Developer",
        period: "January 2024 - March 2025",
        description: "Started to take more responsibilities at ProNetworks.",
        responsibilities: [
          "Designed and maintained a web-based inventory management system, implementing data validation and automated checks to ensure accuracy in tracking hardware",
          "Implemented real-time synchronization between the client and Firebase backend by integrating Firestore and Authentication APIs, ensuring accurate inventory tracking and secure user access.",
          "Collaborated with staff to gather feedback on system usability and iteratively improved features, resulting in a more intuitive and efficient inventory workflow",
          "Conducted software testing on the inventory system, identifying and debugging issues to improve system reliability and user experience.",
        ],
      },
    ],
  },
  {
    year: "2023",
    experiences: [
      {
        company: "Vietnamese Student Association at CSUF",
        role: "Dance Coordinator",
        period: "May 2023 - May 2024",
        description: "I became active with clubs at my school. Joining the Vietnamese Student Association and became a staff member.",
        responsibilities: [
          "Managed logistics and facilitated weekly communication with staff, ensuring smooth coordination in a fast-paced environment for event planning.",
          "Produced and choreographed three large-scale dance performances for Vietnamese Student Association events.",
          "Led and motivated a team of over 20 members, ensuring successful performances across multiple events.",
        ],
      },
      {
        company: "ProNetworks",
        role: "Inventory Associate",
        period: "December 2022 - January 2024",
        description: "I began working part time at ProNetworks as an Inventory Associate",
        responsibilities: [
          "Managed product listings on eBay, optimizing descriptions, pricing, and customer communication, increasing sales by 50%.",
          "Retrieved, packaged, and shipped inventory items, ensuring accurate order fulfillment.",
          "Assisted in inventory organization and tracking, maintaining accurate stock records.",
        ],
      },
    ],
  },
  {
    year: "2022",
    experiences: [
      {
        company: "The Code School",
        role: "Tutor",
        period: "February 2022 - January 2023",
        description: "I started working at The Code School in Yorba Linda as a tutor. My responsibilities were...",
        responsibilities: [
          "Designed and delivered weekly coding lessons, enhancing students' ability to problem-solve like programmers through hands-on exercises.",
          "Provided one-on-one coaching, leading to an improvement in Python proficiency among students",
          "Taught and guided students in programming languages including Scratch, Python, HTML/CSS, and JavaScript, managing a class of up to 6 students",
        ],
      },
    ],
  },
];
