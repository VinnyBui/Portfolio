export interface Project {
  id: string;
  name: string;
  media: string;
  images: string[];
  demoDescription: string;
  overviewDescription: string;
  overviewLink?: string;
  technologies?: string[];
  keyFeatures: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    deployment: string[];
  };
  role: {
    description: string;
    responsibilities: string[];
  };
  challenges: string[];
  futureImprovements: string[];
  githubLink?: string;
}

export const projects: Project[] = [
  { 
    id: "1", 
    name: "Inventory Management System", 
    media: "",
    images: [],
    demoDescription: "An admin-facing dashboard where authenticated users can securely create, edit, and delete inventory data.",
    overviewDescription: "The Inventory Management System is a secure, real-time platform built for internal administrative use. It allows authorized personnel to manage inventory through authentication-protected access, enabling streamlined operations such as adding, updating, and deleting product data. The system prioritizes security, usability, and efficient data handling.",
    technologies: ["Firebase", "Vite", "React"],
    keyFeatures: [
      "Add / Edit / Delete Products: Manage inventory with full CRUD functionality",
      "Real-Time Stock Updates: Syncs immediately using Firebase Realtime Database",
      "Search & Filter: Quickly locate products by name or category",
      "Responsive UI: Clean and responsive design for desktop and mobile use",
      "Authentication: Secure login system with Firebase Authentication"
    ],
    techStack: {
      frontend: ["React", "TailwindCSS", "Vite", "Framer Motion"],
      backend: ["Firebase (Firestore & Authentication)"],
      deployment: ["Firebase Hosting"]
    },
    role: {
      description: "I built this entire project independently:",
      responsibilities: [
        "Designed the UI using TailwindCSS and implemented all pages with React",
        "Set up Firebase for real-time database functionality and authentication",
        "Handled deployment and optimized for performance using Vite and Vercel"
      ]
    },
    challenges: [
      "Working with Firebase taught me how to structure NoSQL data efficiently and handle real-time sync between the UI and backend",
      "I improved my React state management and modular component design by breaking the app into clean, reusable parts",
      "Learned how to implement user auth and protect routes",
      "Managing data and syncing it between the UI and backend was difficult at first, but I was able to overcome it by watching tutorials and practicing."
    ],
    futureImprovements: [
      "Export inventory reports to CSV",
      "Add barcode scanning support via device camera"
    ]
  },
  { 
    id: "2", 
    name: "Portfolio", 
    media: "",
    images: [],
    demoDescription: "A personal developer portfolio showcasing projects, skills, and experience through an interactive and responsive UI.",
    overviewDescription: "This personal portfolio website is built to highlight my work as a developer. It features an elegant, responsive design and includes sections for featured projects, technologies, and contact information. The site is optimized for performance and accessibility, and it integrates modern web technologies to create a smooth user experience.",
    overviewLink: "https://www.vinhbui.dev/",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    keyFeatures: [
      "Responsive Design: Optimized for all device sizes",
      "Interactive UI: Smooth animations and transitions",
      "Project Showcase: Detailed project pages with demos",
      "Performance Optimized: Fast loading and smooth interactions",
      "SEO Friendly: Built with best practices for search engines"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      backend: ["N/A"],
      deployment: ["Vercel"]
    },
    role: {
      description: "I developed this portfolio website from concept to deployment:",
      responsibilities: [
        "Designed and implemented the entire UI/UX",
        "Optimized performance and SEO",
      ]
    },
    challenges: [
      "Learning Next.js was a challenge, but I was able to pick it up quickly. My biggest challenge was learning how to use the App Router and the new features it introduced.",
      "Incorporating animations and transition was a difficult task, but I was able to overcome it by watching tutorials and practicing. I also learned how to use the Framer Motion library to create animations.",
    ],
    futureImprovements: [
      "Add dark mode support",
      "Implement more animations and transitions",
      "Add an interactive chatbot"
    ]
  },
  { 
    id: "3", 
    name: "SilkLash Nbrow", 
    media: "",
    images: [],
    demoDescription: "A modern, mobile-responsive website designed to help a local lash technician showcase services, attract new clients, and grow her beauty business.",
    overviewDescription: "SilkLash Nbrow is a clean and elegant business website built for a local lash technician to establish an online presence and attract clientele. The site highlights services, pricing, and contact information, with a strong focus on mobile usability and SEO optimization to drive local discovery. Designed with simplicity and professionalism in mind, it enables potential clients to quickly learn about offerings and book appointments.",
    overviewLink: "https://www.silklashnbrow.com/",
    technologies: ["Next.js", "TypeScript", "Vercel"],
    keyFeatures: [
      "Mobile-First Design: Optimized for all devices",
      "Service Showcase: Clear presentation of beauty services",
      "Contact Integration: Easy appointment booking system",
      "Fast Performance: Quick loading and smooth navigation"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      backend: ["N/A"],
      deployment: ["Vercel"]
    },
    role: {
      description: "I developed this business website end-to-end:",
      responsibilities: [
        "Created responsive design and implemented UI components",
        "Set up SEO optimization and analytics",
        "Configured deployment and hosting"
      ]
    },
    challenges: [
      "Balanced aesthetic design with business requirements",
      "Optimized for mobile-first user experience",
      "I had difficulty with designing the UI and incorporating animations and transitions but I was able to execute the website by looking for inspiration and examples online."
    ],
    futureImprovements: [
      "Add online booking system integration",
      "Implement customer reviews section",
    ]
  },
];
