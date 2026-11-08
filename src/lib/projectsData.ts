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
      description: "Sole developer responsible for architecting and delivering the company's entire inventory management system from the ground up:",
      responsibilities: [
        "Designed and built the complete system architecture, including database schema, authentication, and all business logic",
        "Developed the full admin dashboard UI with React and TailwindCSS, enabling staff to manage inventory through a clean, role-protected interface",
        "Integrated Firebase Realtime Database to support live inventory sync across sessions without page refreshes",
        "Implemented secure user authentication with Firebase Auth and route-level access control to restrict the system to authorized personnel",
        "Deployed and maintained the application on Firebase Hosting, ensuring reliability for day-to-day business operations"
      ]
    },
    challenges: [
      "Designing the data model from scratch required defining the full structure of each entity. Translating these relational concepts into Firestore's document-based model deepened my understanding of NoSQL schema design and its performance trade-offs",
      "Managing application state across multiple components introduced complexity early on; resolving this led to a more disciplined approach to React state management and a stronger emphasis on modular, reusable component design",
      "Implementing authentication and route-level access control was a new challenge that required understanding both Firebase Auth's lifecycle and React Router's guard patterns to ensure only authorized users could access sensitive areas of the system",
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
      description: "Sole designer and developer responsible for conceiving, building, and deploying this portfolio from scratch:",
      responsibilities: [
        "Architected the full site structure using Next.js App Router, establishing routing, layout, and page organization from the ground up",
        "Designed and implemented the complete UI/UX, including responsive layouts, typography, and a consistent visual identity across all sections",
        "Integrated Framer Motion to build fluid page transitions and scroll-driven animations that enhance the overall user experience",
        "Optimized for performance",
        "Deployed and maintained the site on Vercel"
      ]
    },
    challenges: [
      "Adopting Next.js App Router, understanding server components, layout nesting, and the new data-fetching patterns took deliberate effort to apply correctly",
      "Implementing cohesive, performant animations across the site",
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
      description: "Sole developer responsible for designing and delivering a complete client-facing business website from concept to launch:",
      responsibilities: [
        "Translated the client's brand and business needs into a clean, professional visual design with no prior design assets provided",
        "Built the full site with Next.js and TailwindCSS, implementing responsive layouts optimized for mobile-first browsing",
        "Integrated contact and appointment inquiry functionality to enable potential clients to reach out directly through the site",
        "Deployed and handed off the site on Vercel, ensuring a stable production environment the client could rely on"
      ]
    },
    challenges: [
      "Working directly with a client for the first time and translating informal, non-technical feedback into concrete design and functionality decisions",
      "Designing a visually appealing site without a provided design system or brand guidelines, balancing the client's preferences with sound UI principles",
      "Incorporating animations and transitions in a way that felt polished"
    ],
    futureImprovements: [
      "Add online booking system integration",
      "Implement customer reviews section",
    ]
  },
];
