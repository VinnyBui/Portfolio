interface Project {
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
    media: "/p2.mp4",
    images: ["/project-images/project1.png", "/project-images/project1-2.png", "/project-images/project1-3.png", "/project-images/project1-4.png"],
    demoDescription: "An admin-facing dashboard where authenticated users can securely create, edit, and delete inventory data.",
    overviewDescription: "The Inventory Management System is a secure, real-time platform built for internal administrative use. It allows authorized personnel to manage inventory through authentication-protected access, enabling streamlined operations such as adding, updating, and deleting product data. The system prioritizes security, usability, and efficient data handling.",
    overviewLink: "https://we-buy-cisco.com/",
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
      "Learned how to implement user auth and protect routes in a single-page app"
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
    images: ["/project-images/project2.png", "/project-images/project2-2.png"],
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
    images: ["/project-images/project3.png", "/project-images/project3-2.png"],
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
    ],
    futureImprovements: [
      "Add online booking system integration",
      "Implement customer reviews section",
    ]
  },
  { 
    id: "4", 
    name: "WeBuyCisco Inventory Catalog", 
    media: "/p1.mp4",
    images: ["/project-images/project4.png", "/project-images/project4-2.png", "/project-images/project4-3.png"],
    demoDescription: "A customer-facing interface that allows users to browse available inventory, add items to a cart, and send inquiries via email.",
    overviewDescription: "The WeBuyCisco Inventory Catalog is a public-facing platform designed to showcase available inventory to potential customers. It offers a seamless browsing experience, allowing users to explore products, add items to a cart, and submit order inquiries via email. The system streamlines communication between customers and sales teams without enabling direct online purchases.",
    overviewLink: "https://we-buy-cisco.com/",
    technologies: ["Firebase", "JavaScript", "React"],
    keyFeatures: [
      "Product Catalog: Browse and search inventory",
      "Shopping Cart: Add items and manage selections",
      "Email Integration: Submit inquiries directly",
      "Responsive Design: Works on all devices",
      "Real-time Updates: Live inventory status"
    ],
    techStack: {
      frontend: ["React", "JavaScript", "TailwindCSS", "Framer Motion"],
      backend: ["Firebase"],
      deployment: ["Firebase Hosting"]
    },
    role: {
      description: "I developed the customer-facing catalog system:",
      responsibilities: [
        "Built the product browsing interface",
        "Implemented cart functionality",
        "Set up email integration for inquiries"
      ]
    },
    challenges: [
      "Integrated email system with Firebase backend",
      "Optimized product search and filtering",
    ],
    futureImprovements: [
      "Add product comparison feature",
      "Implement saved favorites list",
      "Improve secure cart management"
    ]
  },
  { 
    id: "5", 
    name: "Scripts for Cisco Networks", 
    media: "",
    images: ["/project-images/project-placeholder.png"],
    demoDescription: "Automation scripts that access device terminals and run diagnostic commands to validate the operational status of Cisco machines.",
    overviewDescription: "This project features a collection of automation scripts developed to test, configure, and validate Cisco network devices. The scripts interact directly with device terminals to run predefined diagnostic commands, helping streamline the QA process and ensure hardware is functioning correctly. These tools significantly reduce manual effort and improve consistency in network maintenance workflows.",
    overviewLink: "",
    technologies: ["Python"],
    keyFeatures: [
      "Automated Testing: Run diagnostic commands automatically",
      "Device Validation: Check operational status",
      "Batch Processing: Handle multiple devices",
      "Error Handling: Robust error detection",
      "Logging System: Track execution results"
    ],
    techStack: {
      frontend: ["Python CLI"],
      backend: ["Python"],
      deployment: ["Local"]
    },
    role: {
      description: "I developed these automation scripts:",
      responsibilities: [
        "Created Python scripts for device interaction",
        "Implemented error handling and logging",
        "Documented usage and setup procedures"
      ]
    },
    challenges: [
      "Mastered Cisco device communication protocols",
      "Implemented robust error handling",
      "Optimized script performance for large networks"
    ],
    futureImprovements: [
      "Add GUI interface",
      "Implement parallel processing",
      "Add more device type support"
    ],
    githubLink: "https://github.com/VinnyBui/CiscoScript"
  }
];
