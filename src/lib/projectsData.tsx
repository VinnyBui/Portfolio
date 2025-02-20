export const projects = [
  { 
    id: "1", 
    name: "Inventory Management System", 
    media: "/p2.mp4",
    type: "video",
    demoDescription: "This is the company's side where only those who are authenticated can have access to deleting, creating, and editing data.",
    overviewDescription: "The Inventory Management System is a secure and efficient platform designed for internal use by administrators to track, manage, and update inventory in real-time. This system provides authentication-protected access, ensuring that only authorized personnel can add, edit, delete, and organize inventory data.",
    overviewLink: "https://we-buy-cisco.com/",
    productDescription: "A demo of the admin's side of the website.",
    detailsDescription: (
      <div>
        <h2 className="text-base md:text-xl font-bold">Tech Stack</h2>
        <ul className="mt-2 list-disc pl-5">
          <li>React (Vite), Tailwind CSS, Shadcn UI</li>
          <li>Firebase Firestore (NoSQL Database)</li>
          <li>Authentication using Firebase Auth</li>
          <li>Deployment on Firebase</li>
        </ul>

        <h2 className="text-base md:text-xl font-bold mt-4">Key Features</h2>
        <ul className="mt-2 list-disc pl-5">
          <li>Role-based authentication for secure inventory management.</li>
          <li>Real-time inventory updates and tracking.</li>
          <li>Bulk editing functionality for efficient data management.</li>
          <li>Shipping and receiving logs to track orders.</li>
        </ul>
      </div>
    ),
    Challenges: (
      <div>
        <h2 className="text-xl font-bold">Routing and Connecting the Admin & Customer Sides</h2>
        <p className="mt-2 text-xs md:text-base">
          One of the major challenges was structuring the **routing system** to keep the admin panel and customer inventory catalog connected yet separate.
          The admin side needed authentication-protected access to manage inventory, while the customer side had to display only publicly available data. 
          I set up **separate routes** for each, ensuring smooth navigation while maintaining strict access control and shared inventory data.
        </p>
    
        <h2 className="text-xl font-bold mt-4">Bulk Editing with Performance Optimization</h2>
        <p className="mt-2 text-xs md:text-base">
          Editing multiple inventory items at once led to performance concerns, especially with large datasets. The initial approach resulted in excessive 
          **Firestore reads and writes**, increasing costs. To solve this, I batched Firestore updates and used **lazy loading** for large tables.
        </p>
    
        <h2 className="text-xl font-bold mt-4">Ensuring Secure Role-Based Access</h2>
        <p className="mt-2 text-xs md:text-base">
          Implementing a **secure authentication and authorization system** was crucial to prevent unauthorized users from modifying inventory. 
          Firebase Authentication was integrated with **custom Firestore security rules** to restrict access based on user roles.
        </p>
      </div>
    ),
  },
  { 
    id: "2", 
    name: "WeBuyCisco Inventory Catalog", 
    media: "/p1.mp4",
    type: "video",
    demoDescription: "This is the user interface where customers can view available inventory and add them into a shopping cart. Once added, they can email us the order.",
    overviewDescription: "The Inventory Catalog is a user-friendly interface that allows customers to browse available inventory and submit inquiries about products. Unlike the admin system, this platform is public-facing and optimized for an easy shopping experience without direct purchases. Customers can explore available products and submit orders via email.",
    overviewLink: "https://we-buy-cisco.com/",
    productDescription: "A demo of the users's side of the website.",
    detailsDescription: (
      <div>
        <h2 className="text-base md:text-xl font-bold">Tech Stack</h2>
        <ul className="mt-2 list-disc pl-5">
          <li>React (Vite), Tailwind CSS, Shadcn UI</li>
          <li>Firebase Firestore</li>
          <li>Deployment on Firebase</li>
        </ul>

        <h2 className="text-base md:text-xl font-bold mt-4">Key Features</h2>
        <ul className="mt-2 list-disc pl-5">
          <li>Minimalist UI with a customer-friendly interface.</li>
          <li>Real-time product availability updates.</li>
          <li>Search and filtering to help customers find products easily.</li>
          <li>Inquiry system allowing customers to request quotes via email.</li>
        </ul>
      </div>
    ),
    Challenges: (
      <div>
        <h2 className="text-xl font-bold">Creating a Simple Yet Intuitive UI</h2>
        <p className="mt-2 text-xs md:text-base">
          Designing a UI that is both **minimalist and functional** while keeping the product search and inquiry process seamless was challenging. 
          The challenge was to **balance simplicity and usability** without cluttering the interface.
        </p>
    
        <h2 className="text-xl font-bold mt-4">Retrieving Inventory Data Without Exposing Admin Information</h2>
        <p className="mt-2 text-xs md:text-base">
        The admin system contains sensitive details such as **cost pricing, internal notes, and supplier details**, which should not be visible to customers. 
        The challenge was to **fetch only necessary product data** while preventing unauthorized access to private information.  
        </p>
      </div>
    ),
  },
  { 
    id: "3", 
    name: "Scripts for Cisco Networks", 
    media: "/p1.mp4",
    type: "video",
    demoDescription: "Automation scripts where it will go into the machine's terminal and run various test commands to ensure the machine is in working condition.",
    overviewDescription: "The Cisco Network Automation Scripts project consists of a series of custom automation scripts designed to test, configure, and validate Cisco networking devices efficiently. These scripts automate repetitive tasks, reducing manual effort and ensuring consistency in network diagnostics and management.",
    overviewLink: "https://github.com/VinnyBui/CiscoScript",
    productDescription: "A demo on how the script is run.",
    detailsDescription: (
      <div>
        <h2 className="text-base md:text-xl font-bold">Tech Stack</h2>
        <ul className="mt-2 list-disc pl-5">
          <li>Python</li>
          <li>Tools: SecureCRT, PutTV</li>
          <li>Libraries: Paramiko (SSH), Netmiko</li>
          <li>Logging: Writes logs to local files</li>
        </ul>

        <h2 className="text-base md:text-xl font-bold mt-4">Key Features</h2>
        <ul className="mt-2 list-disc pl-5">
          <li>Automated login to Cisco devices over SSH.</li>
          <li>Runs diagnostic commands to verify system status.</li>
          <li>Extracts serial numbers and inventory details.</li>
          <li>Checks hardware performance and logs errors.</li>
        </ul>
      </div>
    ),
    Challenges: (
      <div>
        <h2 className="text-base md:text-xl font-bold">Getting Used to Cisco Networks and Commands</h2>
        <p className="mt-2 text-xs md:text-base">
          One of the initial challenges was understanding the structure and behavior of **Cisco networking devices**. 
          Learning the various **command-line interfaces (CLI)**, device configurations, and troubleshooting methods required significant time and experimentation. Familiarizing myself with Cisco IOS commands and best practices was essential before implementing automation.
        </p>

        <h2 className="text-base md:text-xl font-bold mt-4">Interacting with Cisco Devices Over SSH</h2>
        <p className="mt-2 text-xs md:text-base">
          Automating Cisco network testing required stable SSH connections using **Paramiko and Netmiko**. 
          Some devices had **inconsistent SSH behaviors**, leading to **timeouts and authentication failures**. 
          I implemented **retry mechanisms** and optimized command execution to handle these edge cases.
        </p>
    
        <h2 className="text-base md:text-xl font-bold mt-4">Parsing and Extracting Cisco Command Outputs</h2>
        <p className="mt-2 text-xs md:text-base">
          Parsing Cisco CLI output was difficult since different models output information **in varying formats**. 
          Instead of using fixed string matching, I used **regular expressions (regex)** and structured parsers to extract serial numbers, 
          interface statuses, and configuration data accurately.
        </p>
      </div>
    ),
    
  }
];
