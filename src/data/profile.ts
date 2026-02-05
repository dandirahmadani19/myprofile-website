export const profile = {
  name: "Dandi Rahmadani",
  title: "Full Stack Software Engineer",
  tagline: "I build high-performance web & mobile applications that scale. From backend architecture to polished user interfaces — I deliver complete solutions that drive business results.",
  email: "dandirahmadani19@gmail.com",
  phone: "+6282260567687",
  whatsapp: "6282260567687",
  location: "Jakarta, Indonesia",
  linkedin: "https://linkedin.com/in/dandi-rahmadani",
  github: "https://github.com/dandirahmadani19",
  medium: "https://medium.com/@dandirahmadani19",
  summary: `Experienced Full Stack Software Engineer with 3+ years of proven expertise delivering production-grade systems for industry leaders in banking, fintech, and enterprise software.

I specialize in building scalable backend services with Golang and Node.js, creating responsive web applications with React/Next.js, and developing cross-platform mobile apps with Flutter and React Native.

My track record includes:
• Optimizing API performance by up to 5× for high-traffic banking transactions
• Building secure digital banking platforms processing millions of transactions
• Delivering enterprise solutions for real estate management and e-commerce

I focus on writing clean, maintainable code that solves real business problems — with a strong emphasis on security, performance, and user experience.`,
};

export const experiences = [
  {
    company: "Bank Rakyat Indonesia (BRI)",
    industry: "Banking Company",
    role: "Full Stack Developer",
    location: "Jakarta, Indonesia",
    period: "Aug 2025 - Present",
    techStack: ["Golang", "NestJS", "PostgreSQL", "Redis", "gRPC", "RabbitMQ", "Docker", "OpenTelemetry", "JWT"],
    achievements: [
      "Achieved 5× faster cashback loyalty API performance in QRIS transactions",
      "Reduced validation and bookkeeping latency by up to 80%",
      "Increased CSV processing capacity by 100%, enabling reliable ingestion of large datasets",
      "Built high-performance scheduler for mission-based gamification using goroutine-based streaming pipeline",
    ],
    fullDescription: `Key Responsibilities:

- QRIS Cashback Loyalty API: Owned backend optimization efforts, refactoring SQL queries, implementing Redis-based counters, and optimizing validation flows to achieve 5× faster API performance
- Mission-Based Gamification Scheduler: Designed and developed high-performance bookkeeping service using worker pools and streaming pipelines with goroutines for efficient parallel processing
- CSV Processing Pipeline: Eliminated throughput limitations in multi-million-row processing by implementing streaming, batching, and parallel ingestion pipelines
- Bookkeeping Optimization: Implemented asynchronous validation and batching for log insert operations, reducing overall latency by 80%
- Whitelist/Blacklist System: Developed promo eligibility mechanism fully integrated into transaction flows

Key Achievements:

• Achieved 5× faster cashback loyalty API performance in QRIS transactions
• Reduced validation and bookkeeping latency by up to 80%
• Increased CSV processing capacity by 100% for reliable large dataset ingestion
• Built scalable gamification scheduler handling high transaction volumes`,
  },
  {
    company: "Amani Group",
    industry: "Financial and Real Estate Company",
    role: "Software Engineer",
    location: "Jakarta, Indonesia",
    period: "Sept 2024 - Sept 2025",
    techStack: ["Golang", "Flutter", "PostgreSQL", "Redis", "JWT", "VIDA e-KYC", "WebSocket", "SSE", "Next.js"],
    achievements: [
      "Built secure digital banking ecosystem spanning mobile, backend, and web platforms",
      "Integrated VIDA e-KYC for Indonesian ID OCR and selfie verification",
      "Implemented TLS/SSL pinning, payload signing, and token security mechanisms",
      "Built comprehensive RBAC system with fine-grained permission control",
      "Improved registration and validation flow performance by 30-40%",
    ],
    fullDescription: `Key Responsibilities:

- Digital Banking Ecosystem: Built secure systems spanning mobile, backend, and web platforms for complete banking operations
- Core Banking Features: Developed authentication, authorization, onboarding, user profile management, transfers, and customer data security
- RESTful API Design: Implemented scalable banking workflows and internal operations APIs using Golang
- e-KYC Integration: Integrated VIDA for Indonesian ID OCR and selfie verification ensuring regulatory compliance
- Security Implementation: Built TLS/SSL pinning, payload signing, and token security mechanisms to protect customer data
- RBAC System: Developed comprehensive role-based access control with fine-grained permission management
- Back-Office Systems: Created internal admin systems using Next.js + TypeScript for operational workflows
- Real-Time Features: Integrated WebSockets and SSE for auto-logout, single-device login, and live notifications
- Security Audits: Participated in penetration testing and ISO-aligned hardening

Key Achievements:

• Delivered secure onboarding and e-KYC modules that passed external penetration testing (BinaryWorks)
• Improved registration and validation flow performance by 30–40% through concurrency optimization
• Enhanced security with flexible RBAC and API-level permission enforcement`,
  },
  {
    company: "Realtegic Korporindo Investama",
    industry: "Real Estate Company",
    role: "Software Engineer",
    location: "Jakarta, Indonesia",
    period: "July 2022 - Aug 2024",
    techStack: ["Golang", "Node.js", "Express.js", "PostgreSQL", "JWT", "React", "Next.js", "React Native"],
    achievements: [
      "Developed enterprise-grade platforms for real estate management, construction monitoring, CRM",
      "Built scalable frontend applications using React, Next.js, and React Native",
      "Optimized dashboard and reporting features, significantly improving response times",
      "Developed QC mobile applications to digitize on-site inspections and reporting",
    ],
    fullDescription: `Key Responsibilities:

- Enterprise Platforms: Developed and maintained systems for real estate management, construction monitoring, CRM, and e-commerce
- Frontend Development: Built scalable applications using React, Next.js, and React Native for operational workflows
- Backend Services: Designed and implemented APIs using Node.js, Express.js, and Golang
- Security Implementation: Created secure JWT-based authentication for financial and property-related systems
- Performance Optimization: Refactored SQL queries and introduced caching strategies for dashboards and reports
- Mobile QC App: Developed Quality Control applications to digitize on-site inspections and reporting
- Cross-Functional Collaboration: Worked with QA, UI/UX, DevOps, and business stakeholders

Key Achievements:

• Automated on-site QC workflows through mobile evaluation system, reducing reporting time
• Increased construction progress tracking accuracy with optimized job-list and inspection modules
• Improved sales efficiency with centralized CRM for pricelists, promotions, and payments`,
  },
];

export const projects = [
  {
    name: "LMS (Loyalty Management System)",
    period: "Sep 2025 - Present",
    description: "High-performance Cashback Loyalty API and Mission-Based Gamification platform for QRIS transactions at BRI.",
    techStack: ["Golang", "NestJS", "PostgreSQL", "MySQL", "gRPC", "RabbitMQ", "Docker", "OpenTelemetry"],
    impact: "Achieved 5× faster API performance and 80% latency reduction in high-volume banking transactions.",
    fullDescription: `Built the core Cashback Loyalty API powering QRIS transactions for one of Indonesia's largest banks, processing millions of transactions daily.

Key Features Developed:

- Whitelist/Blacklist Engine: Smart promo eligibility system integrated into transaction flows for accurate cashback distribution
- Cashback Loyalty API: High-performance API with 5× faster response times through Redis caching and SQL optimization
- Mission-Based Gamification: Real-time progress tracking reward system to boost user engagement
- High-Performance Scheduler: Goroutine-based streaming pipeline with worker pools for parallel bookkeeping
- Referral Service APIs: Secure backend communication for BRIMO's referral program
- CSV Processing Pipeline: Streaming and batching system for multi-million-row files with 100% faster processing

Key Achievements:

• Achieved 5× faster cashback loyalty API performance in QRIS transactions
• Reduced validation and bookkeeping latency by up to 80%
• Built scalable Mission-Based Gamification scheduler for high transaction volumes
• Increased CSV processing capacity by 100% for reliable large dataset ingestion`,
  },
  {
    name: "Mobile Banking",
    period: "Aug 2024 - Mar 2025",
    description: "Developed authentication, registration, and profile features in Flutter to support customer onboarding.",
    techStack: ["Flutter", "Golang", "PostgreSQL", "JWT", "VIDA e-KYC", "SSL/TLS"],
    impact: "Supported the launch of the bank's first digital deposit product.",
    fullDescription: `Key Features Developed:

- Authentication System: Complete login and registration flow with secure session management
- Customer Onboarding: User-friendly registration with step-by-step verification process
- Profile Management: Customer profile features with data validation and updates
- Transfer Feature: Secure money transfer functionality with confirmation flows
- e-KYC Integration: VIDA integration for Indonesian ID OCR and selfie verification
- Security Layer: JWT with RSA/AES encryption and SSL/TLS validation

Key Achievements:

• Improved registration performance through concurrency optimization for DTTO and VIDA e-KYC
• Built secure login flows using JWT with RSA/AES encryption
• Implemented payload signing to protect sensitive customer data
• Supported the launch of the bank's first digital deposit product`,
  },
  {
    name: "Backoffice For Mobile Banking",
    period: "July 2024 - Mar 2025",
    description: "Built customer management, user administration, and role-based authorization features.",
    techStack: ["Next.js", "Golang", "PostgreSQL", "JWT"],
    impact: "Improved internal operational efficiency and access control compliance.",
    fullDescription: `Key Features Developed:

- Customer Management: Complete customer data handling with search, filter, and detail views
- User Administration: Admin user management with role assignment and access control
- RBAC System: Flexible role-based access control with API-level permission enforcement
- Data Masking: Dynamic data masking based on user access levels for sensitive information
- Maker-Checker Workflow: Approval system with real-time notifications for operational accuracy
- Secure Sessions: JWT authentication with comprehensive permission checks

Key Achievements:

• Built flexible RBAC system with fine-grained permission control
• Implemented dynamic data masking for sensitive customer information
• Developed maker-checker workflow ensuring operational accuracy
• Improved internal efficiency and access control compliance`,
  },
  {
    name: "E-Commerce Material Kontraktor",
    period: "Feb 2024 - May 2024",
    description: "Implemented JWT-based authentication, order management, and secure payments with Xendit.",
    techStack: ["Next.js", "Golang", "PostgreSQL", "JWT", "Xendit"],
    impact: "Streamlined material procurement for contractors through a centralized digital platform.",
    fullDescription: `Key Features Developed:

- Authentication System: JWT-based secure user sessions with role management
- Order Management: Complete checkout flow with tracking and order history
- Payment Integration: Secure payments with Xendit gateway integration
- Data Integration: Master Admin and REM data sources for accurate workflows
- UI Optimization: Smooth purchasing flows with responsive design

Key Achievements:

• Implemented secure JWT-based authentication for user sessions
• Developed complete order management with checkout and tracking
• Integrated Xendit for secure payment processing
• Streamlined material procurement through centralized digital platform`,
  },
  {
    name: "REM (Real Estate Management)",
    period: "Aug 2023 - Jan 2024",
    description: "Developed modules for project tracking, job lists, and quality-control workflows.",
    techStack: ["Next.js", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "JWT"],
    impact: "Improved visibility and coordination across real estate development operations.",
    fullDescription: `Key Features Developed:

- Project Tracking: Comprehensive project management with status tracking and updates
- Job List Management: Task assignment and tracking for construction teams
- Quality Control Workflows: QC checklist and inspection result management
- REST APIs: Backend APIs supporting consistent construction progress updates
- Data Validation: Mechanisms ensuring data accuracy across project stages

Key Achievements:

• Developed comprehensive project tracking modules for real estate operations
• Built job list management for construction team coordination
• Implemented quality control workflows for inspection processes
• Improved visibility and coordination across development operations`,
  },
  {
    name: "Mobile QC (Quality Control)",
    period: "Apr 2023 - Aug 2023",
    description: "Built unit evaluation module for on-site construction quality assessments.",
    techStack: ["React Native", "Node.js", "GraphQL", "PostgreSQL", "JWT"],
    impact: "Reduced manual reporting time and improved accuracy of field inspections.",
    fullDescription: `Key Features Developed:

- Unit Evaluation Module: Comprehensive quality assessment forms for construction units
- Mobile Interface: Responsive design suitable for field inspectors on-site
- Real-Time Sync: Backend API integration for instant QC data submission
- Photo Documentation: Image capture and upload for inspection evidence
- Offline Support: Data caching for areas with limited connectivity

Key Achievements:

• Built responsive mobile interface for field inspectors
• Integrated real-time QC data submission with backend APIs
• Reduced manual reporting time significantly
• Improved accuracy of field inspections through digital workflows`,
  },
  {
    name: "CRM (Customer Relationship Management)",
    period: "Nov 2022 - Mar 2023",
    description: "Built modules for price list, promo display, and payment features.",
    techStack: ["React.js", "Node.js", "Express.js", "PocketBase", "PostgreSQL", "JWT"],
    impact: "Centralized customer, pricing, and payment workflows to improve sales efficiency.",
    fullDescription: `Key Features Developed:

- Price List Management: Dynamic pricing display with category filtering
- Promo Display: Promotional campaigns and discount management for sales teams
- Payment Features: Unit purchase and down-payment transaction processing
- Customer Management: Centralized customer data with interaction history
- Sales Dashboard: Overview of sales metrics and performance tracking

Key Achievements:

• Built comprehensive price list and promo management for sales teams
• Developed payment features for unit purchases and down-payments
• Centralized customer data improving sales team efficiency
• Streamlined pricing and payment workflows`,
  },
];

export const skills = {
  backend: ["Golang (Gin, Mux)", "Node.js (Express, NestJS)", "gRPC", "RESTful APIs", "GraphQL", "Microservices", "Unit Testing (Go test, Jest)"],
  frontend: ["React.js", "Next.js", "TypeScript", "HTML/CSS"],
  mobile: ["Flutter (Dart)", "React Native"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  devops: ["Docker", "Git", "CI/CD"],
  messaging: ["RabbitMQ", "Webhooks", "API Integration"],
  observability: ["OpenTelemetry", "Logging", "Tracing"],
  security: ["JWT Auth", "OAuth", "Payload Signing", "RBAC Authorization", "TLS/SSL", "e-KYC Integration"],
};

export const education = [
  {
    institution: "Universitas Harapan Medan",
    degree: "S1 Teknik Informatika",
    period: "2013 - 2019",
    gpa: "IPK 3.56",
  },
];

export const certifications = [
  {
    name: "Hacktiv8 - Full Stack Javascript Immersive",
    period: "Feb 2022 - June 2022",
    score: "With Predicate Honors - 93.9/100",
  },
];

export const freelanceServices = {
  headline: "Let's Build Something Great Together",
  subheadline: "Available for Freelance Projects",
  description: "I partner with startups, agencies, and businesses to build software that scales. Whether you need a complete web application, mobile app, or high-performance backend system — I deliver production-ready solutions on time and on budget.",
  services: [
    {
      title: "Backend Development",
      description: "Scalable APIs, microservices, and database architecture with Golang or Node.js",
      icon: "⚙️",
    },
    {
      title: "Web Applications",
      description: "Modern, responsive web apps with React & Next.js that users love",
      icon: "🌐",
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform iOS & Android apps with Flutter or React Native",
      icon: "📱",
    },
    {
      title: "System Integration",
      description: "Payment gateways, e-KYC verification, third-party APIs & webhooks",
      icon: "🔗",
    },
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Delivered" },
    { value: "3", label: "Companies Served" },
    { value: "100%", label: "Client Satisfaction" },
  ],
};
