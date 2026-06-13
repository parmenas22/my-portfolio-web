// ---------------------------------------------------------------------------
// Card data — the short summary shown in the Projects grid on the home page.
// ---------------------------------------------------------------------------
export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  result: string;
  url: string;
};

export const projects: Project[] = [
  {
    slug: "employee-transport-booking-system",
    name: "Employee Transport Booking System",
    description:
      "Transport management platform for employee bookings, route planning, vehicle assignment, and real-time tracking.",
    tech: [".NET", "Next.js", "SQL Server"],
    result: "Streamlined transport operations",
    url: "",
  },
  {
    slug: "ai-knowledge-assistant",
    name: "AI Knowledge Assistant",
    description:
      "AI-powered assistant that enables users to search documents, retrieve knowledge, and receive contextual answers.",
    tech: ["Node.js", "React", "OpenAI", "Azure"],
    result: "Faster knowledge discovery",
    url: "",
  },
  {
    slug: "time-entry-management-system",
    name: "Time Entry Management System",
    description:
      "Employee time tracking platform with approval workflows, reporting, notifications, and audit capabilities.",
    tech: ["Angular", ".NET", "SQL Server"],
    result: "Reduced manual processing",
    url: "",
  },
  {
    slug: "data-synchronization-platform",
    name: "Data Synchronization Platform",
    description:
      "Automated integration platform that synchronizes data between external systems and internal applications.",
    tech: [".NET", "SQL Server", "Azure Functions"],
    result: "Reliable cross-system synchronization",
    url: "",
  },
  {
    slug: "leafpower-solar-solutions",
    name: "Leafpower Solar Solutions",
    description:
      "E-commerce platform for browsing, managing, and purchasing solar products with product catalog, checkout, and order management.",
    tech: ["React", "Node.js", "PostgreSQL"],
    result: "Improved online sales and product visibility",
    url: "https://leafpowersolutions.com/",
  },
];

// ---------------------------------------------------------------------------
// Detail data — the long-form content shown on /projects/{slug}.
// Keyed by slug. Add an entry here as each project's write-up is ready.
// ---------------------------------------------------------------------------
export type ProjectDetail = {
  overview: string;
  /** The problem being solved: an intro line followed by bullet points. */
  problem: { intro: string; points: string[] };
  /** The role held: a title followed by responsibility bullet points. */
  role: { title: string; points: string[] };
  features: string[];
  challenges: string[];
  solution: string;
  results: string[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "employee-transport-booking-system": {
    overview:
      "A transport management platform that allows employees to book company transport while administrators manage routes, vehicles, scheduling, and tracking from a centralized system.",
    problem: {
      intro: "Transport operations were handled manually, leading to:",
      points: [
        "Scheduling conflicts",
        "Poor visibility of vehicle usage",
        "Inefficient route planning",
        "Lack of real-time tracking",
      ],
    },
    role: {
      title: "Full-Stack Software Developer",
      points: [
        "Backend API development (.NET)",
        "Frontend development (Next.js)",
        "Database design (SQL Server)",
        "System integration and deployment",
      ],
    },
    features: [
      "Employee transport booking",
      "Route and schedule management",
      "Vehicle assignment system",
      "Real-time tracking integration",
      "Admin dashboard with reporting",
    ],
    challenges: [
      "Designing flexible route/vehicle assignment logic",
      "Supporting real-time updates for vehicle tracking",
      "Handling concurrent bookings reliably",
    ],
    solution:
      "Built a modular system with REST APIs, structured database design, and a responsive frontend dashboard. Integrated real-time tracking for visibility into active transport operations.",
    results: [
      "Centralized transport operations",
      "Improved route and vehicle utilization",
      "Reduced manual coordination effort",
    ],
  },

  "ai-knowledge-assistant": {
    overview:
      "An AI-powered assistant that enables users to search internal documents and receive contextual answers using natural language queries.",
    problem: {
      intro: "Information was scattered across multiple systems, leading to:",
      points: [
        "Slow knowledge retrieval",
        "Repeated manual searching",
        "Difficulty accessing relevant documents",
        "Low productivity in support workflows",
      ],
    },
    role: {
      title: "Full-Stack Software Developer",
      points: [
        "AI integration and prompt engineering",
        "Backend API development",
        "Frontend chat interface development",
        "Document ingestion and indexing pipeline",
      ],
    },
    features: [
      "Conversational chat interface",
      "Document upload and indexing",
      "Semantic search over knowledge base",
      "Context-aware AI responses",
      "Conversation history tracking",
    ],
    challenges: [
      "Improving accuracy of AI responses",
      "Handling large document datasets efficiently",
      "Maintaining conversation context across queries",
    ],
    solution:
      "Implemented a RAG-based architecture combining vector search with LLM responses. Built ingestion pipelines for document embedding and retrieval optimization.",
    results: [
      "Faster access to organizational knowledge",
      "Reduced time spent searching for information",
      "Improved user productivity",
    ],
  },

  "time-entry-management-system": {
    overview:
      "A web-based system for tracking employee work hours, approvals, reporting, and audit trails.",
    problem: {
      intro: "Manual time tracking processes caused:",
      points: [
        "Delayed approvals",
        "Inaccurate reporting",
        "High administrative overhead",
        "Limited visibility into work hours",
      ],
    },
    role: {
      title: "Software Developer",
      points: [
        "Frontend development (Angular)",
        "Backend API development (.NET)",
        "Workflow and approval logic implementation",
        "Database design and optimization",
      ],
    },
    features: [
      "Weekly time entry submission",
      "Manager approval workflows",
      "Role-based access control",
      "Reporting dashboard",
      "Notification system",
    ],
    challenges: [
      "Designing multi-step approval workflows",
      "Ensuring data accuracy and auditability",
      "Implementing secure role-based access control",
    ],
    solution:
      "Built a structured workflow engine with state transitions for approvals and rejection handling. Implemented RBAC for secure access control.",
    results: [
      "Improved accuracy of time reporting",
      "Reduced manual administrative effort",
      "Faster approval cycles",
    ],
  },

  "data-synchronization-platform": {
    overview:
      "A backend integration system that synchronizes data between external systems and internal applications.",
    problem: {
      intro: "System integrations suffered from:",
      points: [
        "Data inconsistencies",
        "Manual synchronization processes",
        "Delayed updates between systems",
        "High operational overhead",
      ],
    },
    role: {
      title: "Software Developer",
      points: [
        "Backend development (.NET)",
        "Data pipeline design",
        "Azure Functions implementation",
        "Monitoring and logging setup",
      ],
    },
    features: [
      "Scheduled data synchronization",
      "Event-driven updates",
      "Retry and failure handling",
      "Data validation rules",
      "Logging and monitoring",
    ],
    challenges: [
      "Handling large data volumes reliably",
      "Preventing duplicate or inconsistent records",
      "Managing failure recovery and retries",
    ],
    solution:
      "Designed an automated synchronization pipeline using background jobs and event-driven architecture with robust retry and logging mechanisms.",
    results: [
      "Improved data consistency across systems",
      "Reduced manual reconciliation effort",
      "Increased system reliability",
    ],
  },

  "solar-products-commerce-platform": {
    overview:
      "An e-commerce platform for browsing, managing, and purchasing solar products online.",
    problem: {
      intro: "Solar product vendors lacked:",
      points: [
        "A centralized online storefront",
        "Digital product catalog management",
        "Streamlined order processing",
        "Online payment integration",
      ],
    },
    role: {
      title: "Full-Stack Developer",
      points: [
        "Frontend development (Next.js)",
        "Backend API development",
        "Database design",
        "Payment integration support",
      ],
    },
    features: [
      "Product catalog with categories",
      "Shopping cart and checkout system",
      "Order management system",
      "Admin dashboard for products",
      "User authentication",
    ],
    challenges: [
      "Designing smooth checkout flow",
      "Managing product and order relationships",
      "Ensuring scalable catalog structure",
    ],
    solution:
      "Built a full-stack e-commerce system with structured product management, secure checkout flow, and admin tools for inventory and order handling.",
    results: [
      "Improved product visibility",
      "Enabled online sales operations",
      "Streamlined order management",
    ],
  },
};

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}
