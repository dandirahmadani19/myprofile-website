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
  summary: `Full Stack Software Engineer with 4 years of experience delivering production systems in banking, fintech, and real estate software.

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
    image: undefined as string | undefined,
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
    image: undefined as string | undefined,
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
    image: undefined as string | undefined,
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
    image: undefined as string | undefined,
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
    image: undefined as string | undefined,
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
    image: undefined as string | undefined,
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
    image: undefined as string | undefined,
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
    image: undefined as string | undefined,
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
    { value: "4+", label: "Years Experience" },
    { value: "3", label: "Companies Served" },
  ],
};
