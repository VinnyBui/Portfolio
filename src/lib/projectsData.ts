interface Project {
  id: string;
  name: string;
  media: string;
  image: string;
  demoDescription: string;
  overviewDescription: string;
  overviewLink: string;
  technologies?: string[]; // Optional array of technology names
}

export const projects: Project[] = [
  { 
    id: "1", 
    name: "Inventory Management System", 
    media: "/p2.mp4",
    image: "/website.png",
    demoDescription: "An admin-facing dashboard where authenticated users can securely create, edit, and delete inventory data.",
    overviewDescription: "The Inventory Management System is a secure, real-time platform built for internal administrative use. It allows authorized personnel to manage inventory through authentication-protected access, enabling streamlined operations such as adding, updating, and deleting product data. The system prioritizes security, usability, and efficient data handling.",
    overviewLink: "https://we-buy-cisco.com/",
    technologies: ["Firebase", "Vite", "React"]
  },
  { 
    id: "2", 
    name: "Portfolio", 
    media: "",
    image: "/website.png",
    demoDescription: "A personal developer portfolio showcasing projects, skills, and experience through an interactive and responsive UI.",
    overviewDescription: "This personal portfolio website is built to highlight my work as a developer. It features an elegant, responsive design and includes sections for featured projects, technologies, and contact information. The site is optimized for performance and accessibility, and it integrates modern web technologies to create a smooth user experience.",
    overviewLink: "https://www.vinhbui.dev/",
    technologies: ["Next.js", "React", "AWS"]
  },
  { 
    id: "3", 
    name: "SilkLash Nbrow", 
    media: "",
    image: "/website.png",
    demoDescription: "A modern, mobile-responsive website designed to help a local lash technician showcase services, attract new clients, and grow her beauty business.",
    overviewDescription: "SilkLash Nbrow is a clean and elegant business website built for a local lash technician to establish an online presence and attract clientele. The site highlights services, pricing, and contact information, with a strong focus on mobile usability and SEO optimization to drive local discovery. Designed with simplicity and professionalism in mind, it enables potential clients to quickly learn about offerings and book appointments.",
    overviewLink: "https://www.silklashnbrow.com/",
    technologies: ["Next.js", "TypeScript", "Vercel"]
  },
  { 
    id: "4", 
    name: "WeBuyCisco Inventory Catalog", 
    media: "/p1.mp4",
    image: "/website.png",
    demoDescription: "A customer-facing interface that allows users to browse available inventory, add items to a cart, and send inquiries via email.",
    overviewDescription: "The WeBuyCisco Inventory Catalog is a public-facing platform designed to showcase available inventory to potential customers. It offers a seamless browsing experience, allowing users to explore products, add items to a cart, and submit order inquiries via email. The system streamlines communication between customers and sales teams without enabling direct online purchases.",
    overviewLink: "https://we-buy-cisco.com/",
    technologies: ["Firebase", "JavaScript", "React"]
  },
  { 
    id: "5", 
    name: "Scripts for Cisco Networks", 
    media: "",
    image: "/website.png",
    demoDescription: "Automation scripts that access device terminals and run diagnostic commands to validate the operational status of Cisco machines.",
    overviewDescription: "This project features a collection of automation scripts developed to test, configure, and validate Cisco network devices. The scripts interact directly with device terminals to run predefined diagnostic commands, helping streamline the QA process and ensure hardware is functioning correctly. These tools significantly reduce manual effort and improve consistency in network maintenance workflows.",
    overviewLink: "https://github.com/VinnyBui/CiscoScript",
    technologies: ["Python"]
  }
];
