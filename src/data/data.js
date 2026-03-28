export const skills = {
  frontend: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Vite",
    "Next.js",
    "ECharts",
    "AG Grid",
    "MUI",
    "Tailwind"
  ],
  backend: [
    "Python",
    "Flask",
    "REST APIs",
    "Firebase"
  ],
  databases: [
    "PostgreSQL",
    "InfluxDB",
    "MySQL"
  ],
  tools: [
    "Git",
    "VS Code",
    "IIS",
    "Apache",
    "Linux",
    "Ollama"
  ],
  other: ["Authentication (Windows Auth, Firebase Auth)", "Real-time Data Streaming"]
};

export const experience = [
  {
    role: "Software Developer",
    company: "SPIN AU PTY LTD",
    period: "Jul 2023 – Present",
    points: [
      "Develop and maintain full-stack applications using React, Python (Flask), PostgreSQL, and Firebase.",
      "Built real-time and historical data visualization tools using ECharts, integrating streaming data from InfluxDB.",
      "Designed and developed scalable business systems including TMS, CRM, SRM, and DMS to support internal operations.",
      "Implemented enterprise-level authentication using Windows Authentication (IIS) for secure internal applications.",
      "Developed interactive analytics dashboards to enable data-driven decision-making and reporting.",
      "Optimized application performance, usability, and data handling for large-scale and real-time use cases.",
    ],
  },
  {
  role: "Freelance Full-Stack Developer",
  company: "Digital Fingers",
  points: [
    "Designed and developed a full-stack business platform consisting of a public-facing website and a separate admin dashboard application.",
    "Built the customer-facing website with React, including service pages, AI chatbot, contact forms, and blog pages for business engagement.",
    "Developed a dedicated admin dashboard for managing blogs, customer inquiries, chatbot records, and website content.",
    "Implemented backend APIs with Python Flask and PostgreSQL to support blog publishing workflows, customer message storage, and secure admin operations.",
    "Created a customer inquiry workflow where contact form submissions from the public website are stored and made available in the admin dashboard for review and reply.",
    "Enabled administrators to create, edit, publish, and delete blogs through the dashboard with full content management support.",
    "Integrated an AI-powered chatbot using Ollama to improve customer support and lead capture workflows.",
    "Delivered the complete system independently, including architecture design, deployment, and stakeholder collaboration."
  ],
},
  {
    role: "React Developer Intern",
    company: "Design Consulting",
    period: "Dec 2022 - Fab 2023",
    points: [
      "Developed reusable UI components and improved front-end architecture using React.",
      "Enhanced user experience by building responsive and user-friendly interfaces.",
      "Collaborated with team members to implement features and improve application performance.",
    ],
  },
];
export const projects = [
  {
    title: "Task Management System (TMS)",
    description:
      "An ongoing full-stack platform for managing tasks, workflows, and team operations, with continuous feature improvements including ticketing workflows.",
    stack: ["React", "Firebase", "Python", "PostgreSQL"],
  },
  {
    title: "Customer Relationship Management (CRM)",
    description:
      "Built and enhanced a CRM platform with improved usability and business workflows, including a version 2 production release.",
    stack: ["React", "Firebase", "Python", "PostgreSQL"],
  },
  {
    title: "Supplier Relationship Management (SRM)",
    description:
      "Developed a system for managing supplier data and workflows, supporting internal business operations with a production-ready release.",
    stack: ["React", "Firebase", "Python", "PostgreSQL"],
  },
  {
    title: "Data Management System (DMS)",
    description:
      "Created a document and data management platform using modern front-end tools and Firebase backend services.",
    stack: ["React", "Firebase", "Python", "PostgreSQL"],
  },
  {
    title: "Analytics Dashboard",
    description:
      "Built interactive dashboards for data visualization and reporting, enabling users to explore and analyze business data effectively.",
    stack: ["SQL", "XHQ"],
  },
  {
    title: "Spin Trend Tool (STrend)",
    description:
      "Developed a real-time and historical data visualization tool using ECharts, with dynamic charting and secure access via Windows Authentication.",
    stack: ["React", "ECharts", "IIS", "Python", "PostgreSQL", "InfluxDB"],
  },
  {
  title: "Digital Fingers Platform",
  description:
    "Built a full-stack multi-application business platform consisting of a public website and a separate admin dashboard. The public platform supports blogs, AI chatbot, and customer inquiry forms, while the admin dashboard enables blog management, customer message review, and response workflows through secure backend APIs.",
  stack: ["React", "Python", "Flask", "PostgreSQL", "Ollama", "IIS"],
}
];