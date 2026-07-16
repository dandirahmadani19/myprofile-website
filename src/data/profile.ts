// IT career start: Realtegic Korporindo Investama, July 2022 (see data/companies.json in cv-update).
const CAREER_START_DATE = new Date("2022-07-01");

function getYearsOfExperience(): number {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START_DATE.getFullYear();
  const hadAnniversaryThisYear =
    now.getMonth() > CAREER_START_DATE.getMonth() ||
    (now.getMonth() === CAREER_START_DATE.getMonth() &&
      now.getDate() >= CAREER_START_DATE.getDate());
  if (!hadAnniversaryThisYear) years -= 1;
  return years;
}

export const yearsOfExperience = getYearsOfExperience();

export const profile = {
  name: "Dandi Rahmadani",
  title: "Full Stack Software Engineer",
  tagline: "I build backend services and web/mobile apps that hold up under real production load, from data model to deployment.",
  email: "dandirahmadani19@gmail.com",
  phone: "+6282260567687",
  whatsapp: "6282260567687",
  location: "Jakarta, Indonesia",
  linkedin: "https://linkedin.com/in/dandi-rahmadani",
  github: "https://github.com/dandirahmadani19",
  medium: "https://medium.com/@dandirahmadani19",
  summary: `Full Stack Software Engineer with ${yearsOfExperience}+ years of experience delivering production systems in banking, fintech, and real estate software.

I build backend services in Go and Node.js, ship responsive web apps with React and Next.js, and develop cross-platform mobile apps with Flutter and React Native.

Recent work includes:
• Hardening a high-volume QRIS transaction pipeline against race conditions, SQL injection, and XSS at Bank Rakyat Indonesia
• Building the authentication and security backend for a digital banking app, including VIDA e-KYC onboarding and payload signing
• Delivering real estate management, QC, and CRM platforms end to end

I care about writing clean, maintainable code that solves real business problems, with a strong focus on security, reliability, and correctness under real transaction load.`,
};

export const experiences = [
  {
    company: "Bank Rakyat Indonesia (BRI)",
    industry: "Banking Company",
    role: "Full Stack Developer",
    location: "Jakarta, Indonesia",
    period: "Aug 2025 - Present",
    note: "IT consulting placement: Dikshatek (Aug 2025 - Apr 2026), Entrust Digital (Apr 2026 - Present). Employed by a consulting vendor, assigned to BRI as the client.",
    techStack: ["Golang", "NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Redis", "gRPC", "RabbitMQ", "Docker", "JWT"],
    achievements: [
      "Manage the QRIS cashback promo lifecycle for BRI's loyalty platform, from creation through approval and transaction validation",
      "Hardened a high-volume transaction pipeline against race conditions, duplicate transactions, and a SQL injection/XSS finding",
      "Built gRPC microservices for deposit accounts, TADA loyalty integration, and merchant/CIF grouping",
      "Migrated transaction counters from database queries to Redis and rebuilt the promo deactivation scheduler",
    ],
    fullDescription: `Key Responsibilities:

- QRIS Promo Cashback: Own the promo lifecycle for a NestJS microservice, including interval-based scheduling, a staged approval workflow, and a full edit audit trail
- Transaction Pipeline Reliability: Fixed race conditions and duplicate-transaction bugs using database-level locking, bulk inserts, and asynchronous non-blocking validation and bookkeeping
- Security: Remediated a SQL injection and XSS finding via parameterized queries and input allowlisting, and resolved SonarQube code quality issues
- Loyalty Microservices (LMS): Built the QRIS promo management service, eligible-promo finder, deposit account management, TADA loyalty integration, and membership bookkeeping scheduler in Go/gRPC
- Merchant Filtering: Built whitelist/blacklist filtering for QRIS promo eligibility, integrated via RabbitMQ

See the LMS and Procash project cards below for full detail.`,
  },
  {
    company: "Amani Group",
    industry: "Financial and Real Estate Company",
    role: "Software Engineer",
    location: "Jakarta, Indonesia",
    period: "July 2022 - Sept 2025",
    techStack: ["Golang", "Node.js", "Express.js", "Flutter", "TypeScript", "PostgreSQL", "Redis", "JWT", "VIDA e-KYC", "OAuth 2.0", "WebSocket", "SSE", "React", "Next.js", "React Native", "Prometheus"],
    achievements: [
      "Built the authentication and security backend for a digital banking app: multi-factor login, VIDA e-KYC onboarding, and ECDSA payload signing",
      "Built an admin backoffice with maker-checker workflows, RBAC, and dynamic field-level data masking",
      "Delivered real estate management, QC, and CRM platforms end to end, from backend APIs to React, Next.js, and React Native frontends",
      "Automated on-site QC workflows through a mobile evaluation system with photo/video evidence and GPS watermarking",
    ],
    fullDescription: `Amani Group includes Realtegic Korporindo Investama, a related real estate company where I started in July 2022 before moving to Amani Group's digital banking products in September 2024.

Key Responsibilities:

- Digital Banking (Amani): Built authentication (password, PIN, biometric), multi-step registration, VIDA e-KYC integration, and a security layer (ECDSA payload signing, RSA-encrypted JWT, single-device session enforcement)
- Backoffice (Amani): Built admin authentication, role management, RBAC middleware, dynamic data masking, and a maker-checker approval engine shared across customer management, KYC, and admin operations
- Real Estate & Construction (Realtegic): Built job list management, QC criteria workflows, progress tracking, and RAB (budget) management for REM; unit evaluation and criteria-checking with photo/video watermarking for Mobile QC
- CRM (Realtegic): Built pricelist management, promo management, and a sales/KPR analytics dashboard
- E-Commerce (Realtegic): Built authentication, end-to-end order flow, Xendit payment integration, and PO PDF generation for a contractor material marketplace

See the project cards below for full detail per product.`,
  },
];

export const projects = [
  {
    name: "LMS (Loyalty Management System)",
    period: "Aug 2025 - Present",
    description: "QRIS cashback loyalty and mission-based gamification platform at BRI, built as Go/gRPC microservices.",
    techStack: ["Golang", "gRPC", "grpc-gateway", "protobuf", "PostgreSQL", "Redis", "MinIO", "RabbitMQ"],
    impact: "Powers promo management, eligibility matching, and bookkeeping scheduling for BRI's QRIS cashback loyalty platform.",
    images: ["/images/projects/default.webp"] as string[],
    purpose: `LMS is a new project that revamps Procash. Instead of patching the existing system module by module, LMS rebuilds the same loyalty and cashback functionality as a set of Go/gRPC microservices, giving BRI a cleaner and more maintainable architecture going forward. It covers the same core ideas as Procash - promo management, eligibility checking against merchant and transaction data, and cashback bookkeeping - but structured so each piece (promo management, deposit accounts, merchant/CIF grouping, TADA loyalty integration) is its own service instead of one large application. This project is still in progress, alongside keeping Procash running for current production traffic.`,
    fullDescription: `Built and maintain several Go/gRPC microservices behind BRI's QRIS cashback loyalty platform.

Key Features Developed:

- QRIS Promo Management: CRUD with draft/publish flow, banner image upload via MinIO, Maker-Checker-Signer approval with self-approval prevention, and full edit history tracking
- Eligible Promo Finder: gRPC service that matches incoming QRIS transactions to active promos by cross-referencing CIF group and merchant group data across microservices
- Transaction Ingestion Pipeline: Concurrent worker pool to process Tito and regular transaction flows, with a cron scheduler for core-banking bookkeeping
- Deposit Account Management: Core-banking inquiry-based account validation with a Maker-Checker-Signer approval workflow
- TADA Loyalty Integration: Event processing, member management, mission tracking, and notification routing
- Merchant & CIF Grouping: Branch-level authorization, MID CRUD with change requests, and CSV bulk upload with dry-run validation

Impact:

• Powers the core promo management and transaction bookkeeping for BRI's QRIS cashback loyalty platform`,
  },
  {
    name: "Procash (QRIS Promo Cashback)",
    period: "Aug 2025 - Present",
    description: "The NestJS microservice and gateway behind QRIS promo cashback transactions, hardened for reliability and security under real transaction volume.",
    techStack: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Redis", "RabbitMQ"],
    impact: "Hardened the QRIS promo cashback transaction pipeline against race conditions, duplicate transactions, and a SQL injection/XSS finding.",
    images: ["/images/projects/default.webp"] as string[],
    purpose: `Procash is BRI's existing, live QRIS promo platform. It already runs in production and hosts several modules, including QRIS promo cashback and voucher management, processing real transaction traffic and real money. My work here was mostly reliability and security work on this running system: fixing race conditions that could cause duplicate rewards, adding database-level locks so concurrent transactions don't corrupt each other, and closing a SQL injection and XSS vulnerability that was found during a security review. Because Procash is already in production, changes here have to be careful, since any bug affects real customers and real transactions immediately.`,
    fullDescription: `Own the QRIS promo cashback lifecycle and transaction pipeline, spanning the qris-microservice and its gateway.

Key Features Developed:

- Promo Lifecycle: Interval-based scheduling (fixed day, date range, or manual), a staged approval workflow that merges pending edits on approval, and a full edit audit trail
- Transaction Validation: Channel allow-listing, interval-date enforcement, and Redis-backed per-user daily limit counters with dedicated error codes
- QRIS TITO: Developed Tap In Tap Out as a new transaction type end to end across the microservice and gateway
- Merchant Filtering: Whitelist/blacklist filtering for promo eligibility, integrated via RabbitMQ with the selected-user service
- Reliability: Fixed race conditions and duplicate-transaction bugs using database-level locking, bulk inserts, and asynchronous non-blocking validation and bookkeeping with retry handling
- Security: Fixed a SQL injection and XSS finding via parameterized queries and input allowlisting, and resolved SonarQube code quality issues
- CSV Uploads: Made large merchant-list uploads non-blocking by moving processing to a background process

Impact:

• Hardened a high-volume QRIS promo transaction pipeline for reliability and security`,
  },
  {
    name: "Mobile Banking",
    period: "Aug 2024 - Mar 2025",
    description: "Authentication, registration, and profile features in Flutter for a digital banking app's customer onboarding.",
    techStack: ["Flutter", "Golang", "PostgreSQL", "Redis", "JWT", "VIDA e-KYC", "OAuth 2.0"],
    impact: "Built the full authentication and security layer for a digital banking app's customer onboarding.",
    images: ["/images/projects/mobile-banking-1.webp", "/images/projects/mobile-banking-2.webp"] as string[],
    purpose: `This is the customer-facing mobile app for Amani's digital bank, built for customers who want a fully online banking experience without visiting a branch. My focus was the onboarding journey: a new customer downloads the app, registers with their personal and job information, and goes through an e-KYC process where they upload their ID card and take a liveness selfie. The app sends this data to VIDA, a third-party identity verification provider, which checks the document and confirms the person is real and matches their ID. After onboarding, the app also handles day-to-day account access: password, PIN, and biometric login, and a security layer that protects the customer's session on their device. This part of the app is critical because it is the first impression for every new customer and it decides whether they can actually open an account.`,
    fullDescription: `Key Features Developed:

- Authentication System: Password, PIN, and biometric login; device management with IMEI tracking for single-device enforcement; OTP-based account recovery
- Customer Onboarding: Multi-step registration (personal, job, finance info) with duplicate prevention and OTP verification via Redis TTL
- e-KYC Integration: VIDA API integration for ID document OCR and liveness selfie verification, with DTTO and VIDA calls run in parallel to reduce registration latency
- Security Layer: ECDSA payload signature validation, RSA-encrypted JWT with HTTP-only cookies, single-device session enforcement, OTP/PIN middleware, and API activity logging
- Core Banking Integration: Contributed to inter-bank/intra-bank transfer flows and IBA core banking HTTP client integration (RSA-PSS signing, HMAC-SHA512)

Impact:

• Built the complete authentication and security backend for a digital banking app's customer onboarding`,
  },
  {
    name: "Backoffice For Mobile Banking",
    period: "July 2024 - Mar 2025",
    description: "Admin authentication, customer management, and role-based authorization for a digital banking backoffice.",
    techStack: ["Next.js", "Golang", "PostgreSQL", "WebSocket", "JWT"],
    impact: "Built RBAC authorization and a maker-checker workflow engine shared across customer management, KYC, and admin operations.",
    images: ["/images/projects/backoffice.webp"] as string[],
    purpose: `While customers use the mobile app, Amani's internal teams (operations, compliance, and admin staff) use this backoffice system to run the bank behind the scenes. It is a web admin panel where staff review and approve customer KYC submissions, manage customer accounts, and control who inside the company can access what, through a role-based permission system. One important part is the maker-checker workflow: for sensitive actions like approving a KYC or changing a customer's data, one staff member proposes the change (the "maker") and a different staff member has to review and approve it (the "checker") before it takes effect. This exists to prevent mistakes and fraud, since no single person can make a sensitive change alone. I also added dynamic data masking, so staff only see the parts of customer data that their role is allowed to see.`,
    fullDescription: `Key Features Developed:

- Admin Authentication: Login, logout, forgot/reset password with OTP, refresh tokens, and JWT middleware
- Role Management: CRUD with a draft/submit flow and a Maker-Checker approval workflow for creating and editing roles
- RBAC System: API-level permission enforcement at the resource-action level, plus dynamic field-level data masking based on user role
- Maker-Checker Engine: Shared approval workflow engine supporting multiple entity types (KYC, data edits, resets, block/unblock) with full audit timestamps
- Real-Time Features: WebSocket notification broadcasting and a role-based dynamic sidebar

Impact:

• Built the RBAC and maker-checker approval system used across the admin backoffice`,
  },
  {
    name: "E-Commerce Material Kontraktor",
    period: "Feb 2024 - May 2024",
    description: "Authentication, order management, and Xendit-based payments for a contractor material marketplace.",
    techStack: ["Next.js", "Golang", "PostgreSQL", "JWT", "Xendit"],
    impact: "Built the end-to-end order flow and payment integration for a contractor material marketplace.",
    images: ["/images/projects/ecommerce-kontraktor.webp"] as string[],
    purpose: `This is a B2B online marketplace where contractors working on Realtegic's property developments can order construction materials, instead of placing orders manually by phone or in person. A contractor logs in, browses a catalog of materials, adds items to a cart, and checks out. Payment goes through Xendit, an Indonesian payment gateway, so contractors can pay online instead of using cash or bank transfer with manual confirmation. Once an order is placed, the system automatically generates a purchase order (PO) document as a PDF, which used to be prepared by hand. The goal of this project was to make material procurement faster and easier to track for both the contractors and the internal procurement team.`,
    fullDescription: `Key Features Developed:

- Authentication System: Registration with email verification, login, and password reset using JWT and bcrypt
- Order Flow: Shopping cart, checkout with stock validation, order history, and manual/scheduled auto-completion via cron
- Payment Integration: Xendit invoice-based payment creation and order cancellation with expiry handling
- PO Generation: Purchase order PDF generation via wkhtmltopdf/Chromium with upload to Google Cloud Storage
- Notifications: Real-time SSE delivery and an in-app notification center

Impact:

• Delivered the end-to-end order and payment flow for a centralized material procurement platform`,
  },
  {
    name: "REM (Real Estate Management)",
    period: "Aug 2023 - Jan 2024",
    description: "Project tracking, job lists, and quality-control workflows for real estate development operations.",
    techStack: ["Next.js", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "Google Docs API"],
    impact: "Built project tracking, QC workflows, and budget management used across real estate development operations.",
    images: ["/images/projects/default.webp"] as string[],
    purpose: `REM is an internal operations system used by Realtegic's project management and site teams to run real estate development projects. Before this system, teams tracked construction jobs, quality checks, and budgets across spreadsheets and manual reports, which made it hard to see the real status of a project. REM centralizes this: it lets teams create and manage construction jobs linked to specific building types, run a quality-control workflow with clear criteria for each stage, and track progress automatically based on completed work. It also manages the RAB (project budget), storing detailed cost items, and supports the procurement process by generating tender and RFP documents through the Google Docs API. With several projects running at the same time, this system gives management one place to see how each one is progressing.`,
    fullDescription: `Key Features Developed:

- Job List Management: CRUD for construction jobs linked to construction types and RAB output objects, integrated with progress tracking
- QC Criteria Workflow: Create and manage quality control criteria per construction object type, with draft-to-publish transitions
- Progress Tracking: Computed completion rates per output object and construction type using SQL CTEs
- RAB (Budget) Management: Structured JSON storage for detailed budget items
- Procurement: Tender and appointment flows with Google Docs API integration for automated RFP document generation

Impact:

• Improved visibility and coordination across real estate development operations`,
  },
  {
    name: "Mobile QC (Quality Control)",
    period: "Apr 2023 - Aug 2023",
    description: "Unit evaluation module for on-site construction quality assessments, built for field inspectors.",
    techStack: ["React Native", "Node.js", "Express.js", "PostgreSQL", "FFmpeg"],
    impact: "Built the unit evaluation and evidence-capture workflow used by field inspectors on-site.",
    images: ["/images/projects/qc-app-1.webp", "/images/projects/qc-app-2.webp"] as string[],
    purpose: `Before a housing unit can be handed over to a buyer, someone has to check that it was actually built correctly. This mobile app is the tool that field inspectors use to do that check on-site. Instead of using a paper checklist, the inspector opens the app, selects the unit, and goes through a list of criteria for that unit type (walls, plumbing, electrical, and so on). For each criterion, the inspector marks it as passed or failed and can attach a photo or video as evidence. Every photo and video is automatically watermarked with the GPS location, timestamp, and the inspector's username, so there's no doubt about when and where the evidence was captured. The app also tracks the evaluation's progress and version history, so managers can see how a unit's inspection status has changed over time, and can export the results to Excel for reporting.`,
    fullDescription: `Key Features Developed:

- Unit Evaluation: Auto-generated evaluation versions with criteria, list views with pagination/filtering, and cascading soft delete
- Evidence Capture: Photo and video uploads watermarked with GPS coordinates, timestamp, and username (Jimp for images, FFmpeg for video)
- Progress Calculation: Auto-progress engine computing passed/failed/unstarted rates per criteria using a weight normalization formula
- Version Management: Draft/Published transitions per evaluation using PostgreSQL window functions
- Reporting: Excel progress report export with the full job and criteria hierarchy

Note: mobile-backend communication originally used GraphQL, later revamped to Express REST.

Impact:

• Digitized on-site QC evaluation and evidence capture for field inspectors`,
  },
  {
    name: "CRM (Customer Relationship Management)",
    period: "Nov 2022 - Mar 2023",
    description: "Pricelist, promo, and payment management for real estate sales teams.",
    techStack: ["React.js", "Node.js", "Express.js", "PocketBase", "PostgreSQL", "Xendit"],
    impact: "Centralized pricelist, promo, and payment workflows for real estate sales teams.",
    images: ["/images/projects/crm.webp"] as string[],
    purpose: `This CRM is used by Realtegic's sales team to manage the sales process for real estate projects. Each project can have its own pricelist per unit type, and the sales team can create and manage promotional offers linked to specific projects. When a customer decides to buy a unit, the CRM tracks the payment process, including down payments, installment plans, and KPR (mortgage) submissions, and it integrates with Xendit for payment processing. On top of the day-to-day sales work, the system also gives management an analytics dashboard, showing unit sales performance and a sales leaderboard across the team. Before this CRM existed, this kind of tracking was spread across spreadsheets and individual sales reps, making it hard to get a clear, real-time picture of how each project was selling.`,
    fullDescription: `Key Features Developed:

- Pricelist Management: Form-based configuration of price lists per property unit type
- Promo Management: Create and edit promotional offers linked to real estate projects
- Analytics: Unit and sales performance dashboard, sales leaderboard, and KPR mortgage submission reports
- Payments: DP payments, installment tracking, and Xendit payment gateway integration

Impact:

• Centralized pricelist, promo, and payment workflows for the sales team`,
  },
];

export const skills = {
  backend: ["Golang (Gin)", "Node.js (Express, NestJS)", "gRPC", "grpc-gateway", "RESTful APIs", "Microservices"],
  frontend: ["React.js", "Next.js", "TypeScript", "HTML/CSS"],
  mobile: ["Flutter (Dart)", "React Native"],
  database: ["PostgreSQL", "Redis", "MinIO", "MySQL", "TypeORM"],
  devops: ["Docker", "Git", "Google Cloud Storage"],
  messaging: ["RabbitMQ"],
  observability: ["Prometheus", "Logging"],
  security: ["JWT Auth", "OAuth 2.0", "ECDSA", "RSA-PSS", "HMAC-SHA512", "bcrypt", "RBAC Authorization", "Payload Signing", "e-KYC Integration"],
  aiTooling: ["Claude Code (agentic CLI for AI-assisted development workflows)"],
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
  description: "I partner with startups, agencies, and businesses to build software that scales. Whether you need a complete web application, mobile app, or high-performance backend system, I deliver production-ready solutions on time and on budget.",
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
    { value: `${yearsOfExperience}+`, label: "Years Experience" },
    { value: "3", label: "Companies Served" },
  ],
};
