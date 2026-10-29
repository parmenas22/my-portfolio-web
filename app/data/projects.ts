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
    tech: ["Node.js", "React", "OpenAI", "AWS"],
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
  metadata: {
    category: string;
    role: string;
    technologies: string[];
    links: { live: string | null; repository: string | null };
  };
  architectureDiagram?: { src: string; alt: string };
  problem: { intro: string; points: string[] };
  role: { title: string; summary: string; points: string[] };
  features: string[];
  architecture: {
    pattern: string;
    flow: { step: number; title: string; description: string }[];
  };
  engineeringChallenges: string[];
  solution: string;
  results: { delivered: string[]; impact: string };
  limitations: string[];
  futureImprovements: string[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "employee-transport-booking-system": {
    overview:
      "A transport management platform that allows employees to book company transport while administrators manage routes, vehicles, scheduling, and tracking from a centralized system.",
    metadata: {
      category: "Full-Stack Web Development",
      role: "Full-Stack Software Developer",
      technologies: [".NET", "Next.js", "SQL Server"],
      links: { live: null, repository: null },
    },
    problem: {
      intro: "Transport operations were handled manually, leading to:",
      points: [
        "Scheduling conflicts between employee bookings.",
        "Poor visibility into vehicle usage.",
        "Inefficient route planning.",
        "Limited visibility into active vehicle tracking.",
      ],
    },
    role: {
      title: "Full-Stack Software Developer",
      summary:
        "Worked across the application stack to support employee bookings and centralized transport administration.",
      points: [
        "Developed backend APIs with .NET.",
        "Built the frontend with Next.js.",
        "Designed the SQL Server database.",
        "Integrated system components and supported deployment.",
      ],
    },
    features: [
      "Employees can request and manage company transport bookings.",
      "Administrators can manage transport routes and schedules.",
      "Vehicles can be assigned to transport operations and bookings.",
      "Real-time tracking provides visibility into active transport operations.",
      "Transport administration and operational reporting are centralized.",
    ],
    architecture: {
      pattern: "Full-stack web application with a REST API and relational database",
      flow: [
        {
          step: 1,
          title: "Employee Booking",
          description:
            "Employees create transport bookings through the Next.js application.",
        },
        {
          step: 2,
          title: "API Processing",
          description:
            "The .NET backend processes booking and transport-management requests.",
        },
        {
          step: 3,
          title: "Data Persistence",
          description:
            "SQL Server stores booking, route, schedule, and vehicle information.",
        },
        {
          step: 4,
          title: "Administration and Tracking",
          description:
            "Administrators manage transport operations and review tracking and reporting information.",
        },
      ],
    },
    engineeringChallenges: [
      "Coordinating bookings with available routes, schedules, and vehicles required assignment rules that account for resource availability and changing operational needs. Route and vehicle assignment functionality was implemented within the transport-management workflow.",
      "Administrators need timely visibility into active vehicle movement, while tracking data freshness depends on the external integration. Real-time tracking was integrated into the system, with status and data freshness remaining important considerations.",
      "Multiple booking requests can compete for the same transport resources. Bookings are handled through backend APIs and a centralized database, and availability must be checked consistently to avoid conflicting assignments.",
    ],
    solution:
      "Built a modular system with REST APIs, structured database design, and a responsive frontend dashboard. Integrated real-time tracking for visibility into active transport operations.",
    results: {
      delivered: [
        "A centralized platform for employee transport bookings.",
        "Route, schedule, and vehicle-management capabilities.",
        "Real-time tracking integration and administration reporting.",
      ],
      impact:
        "The platform centralizes transport operations and is intended to improve route and vehicle utilization while reducing manual coordination.",
    },
    limitations: [
      "Tracking visibility depends on the availability and accuracy of the tracking integration.",
      "Booking and assignment behavior depends on the configured transport rules and operational data.",
    ],
    futureImprovements: [
      "Add measurable reporting for booking completion, vehicle utilization, and route efficiency.",
      "Evaluate conflict-handling and recovery for simultaneous booking requests.",
      "Expand tracking and notification capabilities based on operational needs.",
    ],
  },

  "ai-knowledge-assistant": {
    overview:
      "A full-stack AI knowledge assistant that enables users to query organizational documents through natural language. It uses Retrieval-Augmented Generation (RAG) to retrieve relevant information from a knowledge base and provide context-grounded responses.",

    metadata: {
      category: "AI & Full-Stack Development",
      role: "Full-Stack Software Developer",
      technologies: [
        "React",
        "Node.js",
        "REST APIs",
        "LLM Integration",
        "Vector Search",
        "RAG",
      ],
      links: {
        live: "https://luminate.dev.freeman.com/embed/team?teamId=69c2f32e6c9cf12c847ff0e1&mode=page",
        repository: null,
      },
    },

    architectureDiagram: {
      src: "/projects/ai-knowledge-assistant-architecture.jpeg",
      alt: "System architecture showing document ingestion, indexing, retrieval, and AI-powered response generation",
    },

    problem: {
      intro:
        "Organizational knowledge was distributed across documents and information sources, making it difficult for users to find relevant information quickly.",
      points: [
        "Finding relevant information required manual searching across documents or searching across websites.",
        "Users needed a more natural way to query internal knowledge.",
        "Generic AI responses could lack grounding in organizational information.",
      ],
    },

    role: {
      title: "Full-Stack Software Developer",
      summary:
        "Worked together with development team across the application stack, implementing the conversational experience, backend functionality, and AI-powered document retrieval workflow.",
      points: [
        "Integrated large language model capabilities into the application.",
        "Developed backend APIs for chat and knowledge retrieval.",
        "Built the frontend conversational interface.",
        "Implemented document ingestion and indexing workflows.",
      ],
    },

    features: [
      "Users can ask natural-language questions through a conversational interface.",
      "Source documents are processed and indexed so their content can be retrieved by the assistant.",
      "Vector-based semantic search identifies document content relevant to a user's question.",
      "Retrieved information is supplied to the language model to ground responses in the available knowledge base.",
      "Conversation history supports continuity across related interactions.",
    ],

    architecture: {
      pattern: "Retrieval-Augmented Generation (RAG)",
      flow: [
        {
          step: 1,
          title: "Document Ingestion",
          description:
            "Source documents are ingested and their content is extracted for processing.",
        },
        {
          step: 2,
          title: "Indexing",
          description:
            "Document content is prepared for semantic retrieval and indexed in a vector search system.",
        },
        {
          step: 3,
          title: "Query Processing",
          description:
            "A user's question is received by the backend and used to initiate knowledge retrieval.",
        },
        {
          step: 4,
          title: "Context Retrieval",
          description:
            "Relevant document content is retrieved and assembled as context for the language model.",
        },
        {
          step: 5,
          title: "Response Generation",
          description:
            "The language model generates a response using the supplied context, which is returned to the chat interface.",
        },
      ],
    },

    engineeringChallenges: [
      "Answers depend on retrieving relevant information, and generated responses can still be incorrect or unsupported. The RAG workflow provides document context to the language model, but retrieval relevance and prompt instructions alone cannot guarantee factual accuracy; evaluation should include both answerable and unanswerable questions.",
      "A growing knowledge base needs efficient retrieval without processing every document for each query. Document indexing and vector-based search address this, while chunking strategy and retrieval performance should be evaluated as the knowledge base grows.",
      "Follow-up questions can depend on earlier conversation details. Conversation history supports continuity but must stay within model context limits and must not override source documents or access controls.",
    ],

    solution:
      "Implemented a Retrieval-Augmented Generation (RAG) workflow that connects document ingestion and indexing with semantic retrieval and large language model response generation. The backend coordinates retrieval and AI interactions, while the frontend provides a conversational interface for accessing organizational knowledge.",

    results: {
      delivered: [
        "A conversational interface for querying organizational documents.",
        "A document ingestion and indexing workflow for knowledge retrieval.",
        "An AI response pipeline that uses retrieved document context.",
        "Conversation history support for follow-up questions.",
      ],
      impact:
        "The implementation provides a more direct way to query organizational knowledge than relying exclusively on manual document searches.",
    },

    limitations: [
      "Response quality depends on document quality and retrieval relevance.",
      "Language model responses may still contain unsupported claims.",
      "Retrieval accuracy and response latency require evaluation against representative workloads.",
    ],

    futureImprovements: [
      "Introduce an evaluation dataset to measure retrieval relevance and answer correctness.",
      "Add source citations to help users verify generated responses against original documents.",
      "Improve retrieval using metadata filtering and query refinement where appropriate.",
      "Add structured logging and monitoring for retrieval failures and response latency.",
      "Evaluate access controls to ensure users retrieve only documents they are authorized to view.",
    ],
  },

  "time-entry-management-system": {
    overview:
      "A web-based system for tracking employee work hours, approvals, reporting, and audit trails.",
    metadata: {
      category: "Business Workflow Application",
      role: "Software Developer",
      technologies: ["Angular", ".NET", "SQL Server"],
      links: { live: null, repository: null },
    },
    problem: {
      intro: "Manual time tracking processes caused:",
      points: [
        "Approval delays.",
        "Inaccurate reporting.",
        "High administrative overhead.",
        "Limited visibility into recorded work hours.",
      ],
    },
    role: {
      title: "Software Developer",
      summary:
        "Developed frontend, backend, and data components for employee time tracking and approval workflows.",
      points: [
        "Built the frontend with Angular.",
        "Developed backend APIs with .NET.",
        "Implemented workflow and approval logic.",
        "Designed and optimized the SQL Server database.",
      ],
    },
    features: [
      "Employees can submit work hours through a weekly time-entry workflow.",
      "Submitted time entries are routed to managers for review and approval.",
      "Application capabilities are restricted according to user roles.",
      "Reporting views are available for submitted and approved work hours.",
      "Users receive notifications about relevant time-entry workflow updates.",
    ],
    architecture: {
      pattern: "Web application with a .NET API and relational database",
      flow: [
        {
          step: 1,
          title: "Time Entry",
          description:
            "Employees enter and submit their weekly work hours in the Angular application.",
        },
        {
          step: 2,
          title: "Workflow Processing",
          description:
            "The .NET backend applies approval and role-based access rules.",
        },
        {
          step: 3,
          title: "Data Persistence",
          description:
            "SQL Server stores time entries and associated workflow data.",
        },
        {
          step: 4,
          title: "Review and Reporting",
          description:
            "Managers review submissions while users access workflow notifications and reports.",
        },
      ],
    },
    engineeringChallenges: [
      "Time entries need to progress through review and approval states. Workflow logic supports manager approvals, and transitions should remain validated and auditable with clear rejection and resubmission paths.",
      "Time records must remain accurate and traceable through submission and approval. A structured database and audit capabilities support this; changes should retain an audit trail and reports should reflect the current approval state.",
      "Employees and managers need different permissions in the workflow. Role-based access control was implemented, with authorization enforced by the backend and role assignments aligned to organizational responsibilities.",
    ],
    solution:
      "Built a structured workflow engine with state transitions for approvals and rejection handling. Implemented RBAC for secure access control.",
    results: {
      delivered: [
        "Weekly employee time-entry submission.",
        "Manager approval workflows and role-based access control.",
        "Reporting, notifications, and audit capabilities.",
      ],
      impact:
        "The system is designed to improve time-reporting accuracy, reduce manual administration, and speed up approvals",
    },
    limitations: [
      "Workflow behavior depends on the configured approval rules and user roles.",
      "Reporting accuracy depends on complete and correctly maintained time-entry data.",
    ],
    futureImprovements: [
      "Add workflow metrics for submission-to-approval time and correction rates.",
      "Expand audit reporting for changes throughout the approval lifecycle.",
      "Review approval and notification rules as organizational processes evolve.",
    ],
  },

  "data-synchronization-platform": {
    overview:
      "A backend integration system that synchronizes data between external systems and internal applications.",
    metadata: {
      category: "Cloud Integration and Data Processing",
      role: "Software Developer",
      technologies: [".NET", "SQL Server", "Azure Functions"],
      links: { live: null, repository: null },
    },
    problem: {
      intro: "System integrations suffered from:",
      points: [
        "Data inconsistencies between systems.",
        "Manual synchronization processes.",
        "Delayed updates.",
        "High operational overhead.",
      ],
    },
    role: {
      title: "Software Developer",
      summary:
        "Designed and implemented backend synchronization workflows, including Azure Functions and operational monitoring.",
      points: [
        "Developed backend components with .NET.",
        "Designed data synchronization pipelines.",
        "Implemented Azure Functions.",
        "Set up monitoring and logging.",
      ],
    },
    features: [
      "Data synchronization can run on a schedule for systems that do not require immediate updates.",
      "Event-driven triggers support synchronization when updates need to respond to system events.",
      "Retry and failure-handling behavior supports recovery from interrupted synchronization operations.",
      "Validation rules are applied to data as it moves between systems.",
      "Operational logging and monitoring support troubleshooting.",
    ],
    architecture: {
      pattern: "Serverless integration pipeline using Azure Functions",
      flow: [
        {
          step: 1,
          title: "Synchronization Trigger",
          description:
            "A schedule or supported event initiates a synchronization operation.",
        },
        {
          step: 2,
          title: "Data Retrieval and Validation",
          description:
            "The backend retrieves source data and applies validation rules.",
        },
        {
          step: 3,
          title: "Transformation and Synchronization",
          description:
            "The integration workflow processes data and synchronizes it with internal systems.",
        },
        {
          step: 4,
          title: "Persistence and Operations",
          description:
            "SQL Server stores relevant data while logging and monitoring support operations and recovery.",
        },
      ],
    },
    engineeringChallenges: [
      "Synchronization workflows need to handle varying data volumes and retain clear processing outcomes. Azure Functions and background workflows were used, with batching shaped by execution limits and monitoring used to surface incomplete or delayed runs.",
      "Repeated or overlapping runs can create inconsistent or duplicate records. Data validation is part of the pipeline, and safe retries require consistent record identity and update rules across connected systems.",
      "Transient errors and external-system failures can interrupt synchronization. Retry and failure-handling behavior is supported by logging and monitoring; retries should be bounded, and failures need enough context for investigation and recovery.",
    ],
    solution:
      "Designed an automated synchronization pipeline using background jobs and event-driven architecture with robust retry and logging mechanisms.",
    results: {
      delivered: [
        "Scheduled and event-driven data synchronization.",
        "Data validation, retry, and failure-handling workflows.",
        "Logging and monitoring for synchronization operations.",
      ],
      impact:
        "The platform is intended to improve consistency across connected systems, reduce manual reconciliation, and increase reliability",
    },
    limitations: [
      "Synchronization reliability depends on source and destination system availability.",
      "Data validation and retry behavior need to reflect the rules of each integration.",
    ],
    futureImprovements: [
      "Add per-integration metrics for throughput, latency, failures, and retry rates.",
      "Introduce reconciliation reporting to identify records that remain out of sync.",
      "Review idempotency and recovery strategies for each connected system.",
    ],
  },

  "leafpower-solar-solutions": {
    overview:
      "An e-commerce platform for browsing, managing, and purchasing solar products online.",
    metadata: {
      category: "E-Commerce Web Application",
      role: "Full-Stack Developer",
      technologies: ["React", "Node.js", "PostgreSQL"],
      links: {
        live: "https://leafpowersolutions.com/",
        repository: null,
      },
    },
    problem: {
      intro: "Solar product vendors lacked:",
      points: [
        "A centralized online storefront.",
        "Digital product catalog management.",
        "Streamlined order processing.",
        "Online payment integration.",
      ],
    },
    role: {
      title: "Full-Stack Developer",
      summary:
        "Worked across the storefront, backend, database, and payment integration components of the e-commerce platform.",
      points: [
        "Developed the frontend with React.",
        "Built backend APIs with Node.js.",
        "Designed the PostgreSQL database.",
        "Supported payment integration.",
      ],
    },
    features: [
      "Customers can browse solar products in a categorized catalog.",
      "A shopping cart supports product selection and an online checkout flow.",
      "Order-management capabilities support customer order processing.",
      "Administrators can manage products through an admin dashboard.",
      "Authenticated access supports relevant customer and administration workflows.",
    ],
    architecture: {
      pattern: "Full-stack e-commerce application with a Node.js API and relational database",
      flow: [
        {
          step: 1,
          title: "Product Browsing",
          description:
            "Customers browse the product catalog through the React storefront.",
        },
        {
          step: 2,
          title: "Cart and Checkout",
          description:
            "The storefront submits cart and checkout actions to the Node.js backend.",
        },
        {
          step: 3,
          title: "Data Persistence",
          description:
            "PostgreSQL stores product, customer, and order information.",
        },
        {
          step: 4,
          title: "Payment and Order Management",
          description:
            "Payment integration supports checkout while the application provides order and product administration.",
        },
      ],
    },
    engineeringChallenges: [
      "Customers need a clear path from product selection through checkout. The storefront includes a cart and checkout flow, and it should clearly communicate order and payment status without leaving orders ambiguous after payment failures.",
      "Catalog and order data need to remain consistent as products are managed and purchased. The PostgreSQL schema supports the application, while orders should preserve relevant product details and availability should be checked during order processing.",
      "The catalog needs to support browsing and ongoing product management. Categories and administration capabilities provide structure, which should remain usable as the catalog grows and accommodates different solar product types.",
    ],
    solution:
      "Built a full-stack e-commerce system with structured product management, secure checkout flow, and admin tools for inventory and order handling.",
    results: {
      delivered: [
        "An online storefront and categorized product catalog.",
        "Cart, checkout, and order-management workflows.",
        "Product administration and payment integration support.",
      ],
      impact:
        "The platform provides online sales capabilities and improves product visibility",
    },
    limitations: [
      "Checkout behavior depends on the configured payment integration.",
      "Catalog and order accuracy depend on maintained product and inventory information."
    ],
    futureImprovements: [
      "Add analytics for product discovery, cart completion, and checkout conversion.",
      "Improve catalog filtering and product comparison based on customer needs.",
      "Expand order-status communication and inventory reporting.",
    ],
  },
};

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}
