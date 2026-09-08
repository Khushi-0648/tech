import { 
  fintechImg, 
  healthtechImg, 
  dashboardImg, 
  campusImg,
  techprosDarkLogo,
  cloudDevopsImg,
  aiAutomationImg,
  cyberSecurityImg,
  modernWebImg,
  realNocEngineersImg,
  realDeveloperWorkspaceImg,
  realCloudDatacenterImg,
  realTechConsultingImg,
  industryBankingImg,
  industryHealthcareImg,
  industryRetailImg,
  industryTravelImg,
  industryTelecomImg,
  industryManufacturingImg,
  industryGovernmentImg,
  industryEducationImg,
  glowsoftSiteImg,
  glowpathSiteImg,
  kidzgemSiteImg,
  lovoaSiteImg,
  indianKitchenSiteImg,
  maschallsKitchenSiteImg,
  chefLamaSiteImg,
  socialSipsSiteImg
} from '../assets/images';

export const enterprisePartners = [
  { name: "FinScale Global", category: "FinTech & Payments", location: "London / Singapore", metric: "$14.8M Daily Volume" },
  { name: "HealthBridge Telehealth", category: "Clinical Diagnostics", location: "Boston / Mumbai", metric: "450k+ Consults" },
  { name: "CloudMatrix Systems", category: "Multi-Cloud SaaS", location: "San Francisco", metric: "99.999% SLA" },
  { name: "Apex Supply Chain", category: "Global Logistics", location: "Rotterdam / Delhi", metric: "2.4M Shipments" },
  { name: "OmniRetail Commerce", category: "Omnichannel Retail", location: "Dubai / Bengaluru", metric: "100/100 CWV Grade" },
  { name: "CyberShield Core", category: "Zero-Trust SecOps", location: "Frankfurt / Noida", metric: "OWASP Hardened" }
];

export const certificationsList = [
  { name: "ISO/IEC 27001:2022", org: "Information Security Management", badge: "Certified", status: "Audit Passed" },
  { name: "SOC 2 Type II", org: "AICPA Trust Services Criteria", badge: "Verified", status: "Clean Opinion" },
  { name: "AWS Advanced Partner", org: "Amazon Web Services", badge: "Partner", status: "Cloud Architecture" },
  { name: "Microsoft Solutions Partner", org: "Azure Cloud & AI Platform", badge: "Gold Tier", status: "Enterprise Verified" },
  { name: "Clutch Global 4.9/5", org: "Top B2B Engineering Firms", badge: "Verified", status: "48 Client Reviews" }
];

export const companyInfo = {
  name: "TechPros Network",
  tagline: "Enterprise Web Engineering & IT for Global Scale",
  headquarters: "Logix Cyber Park, Tower B, Sector 62, Noida, Uttar Pradesh 201309, India",
  phone: "+91 88514 22486",
  email: "help@techprosnetwork.com",
  established: 2004,
  stats: [
    { value: "500+", label: "Platforms Delivered", sub: "Global Delivery Hub" },
    { value: "99.99%", label: "Cloud Uptime SLA", sub: "Zero unplanned downtime" },
    { value: "< 0.8s", label: "First Contentful Paint", sub: "100/100 Core Web Vitals" },
    { value: "A+", label: "Security & Pentest", sub: "ISO 27001 / OWASP" },
    { value: "32", label: "Delivery Centers", sub: "Across 18 Countries" },
    { value: "40%", label: "Average Cost Reduction", sub: "Driven by Automation" }
  ],
  socials: {
    linkedin: "https://www.linkedin.com/company/techpros-it-solutions-pvt-ltd/",
    phone: "tel:+918851422486",
    email: "mailto:help@techprosnetwork.com"
  }
};


export const servicesData = [
  {
    id: "web-development",
    title: "Web Development & Scalable Engineering",
    shortDesc: "Full-stack web apps, headless CMS, technical SEO & bank-grade security.",
    fullDesc: "We engineer bespoke full-stack web applications, headless CMS platforms, and cloud systems from our tech center in Sector 62, Noida. Built with sub-second Core Web Vitals, semantic schema, and OWASP WSTG v4.2 bank-grade security standards.",
    icon: "Code2",
    image: realDeveloperWorkspaceImg,
    featured: true,
    tags: ["React 19", "Next.js 15", "Node.js", "PHP 8.3", "Tailwind CSS", "PostgreSQL"],
    metrics: ["< 0.8s LCP", "100/100 CWV", "Zero Vulnerabilities"],
    deliverables: [
      "Custom Full-Stack Web Applications",
      "Headless CMS & High-Speed Edge Delivery",
      "Built-in Technical SEO & Schema.org JSON-LD",
      "Proactive OWASP Top 10 Mitigation & Penetration Testing",
      "Elastic Microservices & Kubernetes Orchestration",
      "E-Commerce & High-Concurrency Transaction Engines"
    ]
  },
  {
    id: "ai-automation",
    title: "Artificial Intelligence & Automation",
    shortDesc: "Intelligent workflows, autonomous agents & ML pipelines driving operational velocity.",
    fullDesc: "Harness the power of AI, machine learning, and robotic process automation (RPA) to eliminate manual data entry, streamline operations, and accelerate throughput by up to 40%.",
    icon: "Cpu",
    image: aiAutomationImg,
    featured: false,
    tags: ["Autonomous Agents", "LLMs", "Python FastAPI", "TensorFlow", "RPA Pipelines"],
    metrics: ["40% Faster Cycle", "70% Manual Task Reduction", "3.2x ROI"],
    deliverables: [
      "Custom Autonomous Agent Architectures",
      "Predictive Machine Learning Pipelines",
      "Intelligent Document Processing & OCR",
      "Automated Workflow & RPA Bot Deployment",
      "Natural Language Customer Assistants"
    ]
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    shortDesc: "KPI dashboards, real-time data pipelines & strategic commercial insights.",
    fullDesc: "Reimagine operations with AI-infused intelligent processes that deliver efficiency, resilience, and continuous improvement at scale through executive dashboards and automated KPI tracking.",
    icon: "BarChart3",
    image: dashboardImg,
    featured: false,
    tags: ["Power BI", "Tableau", "Snowflake", "BigQuery", "Predictive Analytics"],
    metrics: ["Real-time Sync", "Executive Visibility", "Actionable Signals"],
    deliverables: [
      "C-Suite Strategic KPI Dashboards",
      "Revenue Forecasting & Anomaly Detection",
      "Operational Bottleneck Diagnostics",
      "Automated Daily & Weekly Business Insights"
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure & DevOps",
    shortDesc: "Scalable, resilient multi-cloud architecture with 99.99% uptime guarantees.",
    fullDesc: "Accelerate your cloud journey with end-to-end migration, modernization, containerization, and managed cloud operations across AWS, Google Cloud, and Microsoft Azure.",
    icon: "Cloud",
    image: realCloudDatacenterImg,
    featured: false,
    tags: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    metrics: ["99.99% Availability", "Zero Downtime Deployments", "SOC 2 Type II"],
    deliverables: [
      "Multi-Cloud Architecture & Migration",
      "Automated CI/CD Pipelines & GitOps",
      "Auto-Scaling Kubernetes Clusters",
      "Multi-Region Disaster Recovery & Backup",
      "Cloud Cost Optimization & FinOps"
    ]
  },
  {
    id: "consulting-operations",
    title: "Consulting & Operations",
    shortDesc: "Strategic advisory, digital transformation & organizational change management.",
    fullDesc: "Strategic advisory and transformation consulting that helps organizations navigate technological complexity, sunset legacy debt, and realize sustainable, compounded growth.",
    icon: "Compass",
    image: realTechConsultingImg,
    featured: false,
    tags: ["Digital Transformation", "Architecture Audit", "Process Engineering", "Change Mgmt"],
    metrics: ["Measurable ROI", "Outcome-Based Fees", "Vendor-Neutral"],
    deliverables: [
      "Enterprise Tech Stack Audits",
      "Modernization Roadmapping & ROI Modeling",
      "Operating Model Design & Vendor Selection",
      "Agile Governance & Change Enablement"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Pentesting",
    shortDesc: "24/7 threat detection, vulnerability audits, zero-trust & compliance.",
    fullDesc: "Protect your digital estate with bank-grade cybersecurity services—from continuous threat monitoring and OWASP penetration testing to ISO 27001 and SOC 2 compliance frameworks.",
    icon: "ShieldCheck",
    image: cyberSecurityImg,
    featured: true,
    tags: ["OWASP Top 10", "Zero-Trust", "WAF", "ISO 27001", "SOC 2", "Penetration Testing"],
    metrics: ["24/7 Monitoring", "Zero Data Leaks", "Continuous Pentest"],
    deliverables: [
      "Comprehensive Web Application Penetration Testing",
      "Cloud Security Posture Management (CSPM)",
      "Zero-Trust Network Access & IAM Enforcement",
      "Automated WAF & DDoS Shielding",
      "Regulatory Compliance Audits (HIPAA, PCI-DSS, GDPR)"
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Big Data",
    shortDesc: "Big data warehousing, ETL pipelines & interactive data visualization.",
    fullDesc: "Turn raw data into actionable insights with end-to-end data analytics services—from ingestion, cleaning, and ETL modeling to predictive forecasting and real-time visualization.",
    icon: "Database",
    image: cloudDevopsImg,
    featured: false,
    tags: ["ETL Pipelines", "Apache Kafka", "PostgreSQL", "dbt", "Vector Databases"],
    metrics: ["Sub-second Querying", "Terabyte Scalability", "Clean Lineage"],
    deliverables: [
      "Modern Cloud Data Warehouse Architecture",
      "Real-Time Stream Processing with Kafka",
      "Automated Data Cleaning & Transformation (dbt)",
      "Interactive Multi-Tenant Data Visualization"
    ]
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise Solutions (ERP & CRM)",
    shortDesc: "ERP, CRM & unified integration platforms built for seamless enterprise scale.",
    fullDesc: "Deploy and optimize leading ERP, CRM, and bespoke integration platforms to streamline mission-critical business processes, eliminate data silos, and unlock organizational value.",
    icon: "Layers",
    image: dashboardImg,
    featured: false,
    tags: ["Custom ERP", "CRM Integration", "Salesforce", "SAP", "REST/GraphQL Gateways"],
    metrics: ["Unified Data", "Zero Disconnect", "Enterprise Scale"],
    deliverables: [
      "Custom ERP System Engineering",
      "CRM Customization & Bi-Directional Sync",
      "Enterprise Service Bus (ESB) & API Gateways",
      "Legacy Database Connector Integration"
    ]
  },
  {
    id: "industrial-autonomy",
    title: "Industrial Autonomy & Engineering",
    shortDesc: "Robotics, IoT sensor telemetry & smart manufacturing engineering.",
    fullDesc: "Drive smart manufacturing and engineering excellence through industrial IoT sensors, digital twins, and autonomous telemetry integration connecting shop floor to executive cloud.",
    icon: "Bot",
    image: aiAutomationImg,
    featured: false,
    tags: ["Industrial IoT", "MQTT", "Digital Twins", "Shop-Floor Telemetry", "Robotics"],
    metrics: ["Predictive Maintenance", "Zero Blindspots", "Sub-second Telemetry"],
    deliverables: [
      "IoT Sensor Ingestion & Edge Gateways",
      "Real-Time Equipment Telemetry Monitoring",
      "Predictive Maintenance Alert Engines",
      "Digital Twin Factory Simulation"
    ]
  },
  {
    id: "network-solutions",
    title: "Network Solutions & Managed Services",
    shortDesc: "SD-WAN, VPN, LAN/WAN architecture & 24/7 managed enterprise connectivity.",
    fullDesc: "Design, deploy, and manage next-generation corporate networks that deliver the uncompromising connectivity, fault tolerance, and security required for distributed global teams.",
    icon: "Network",
    image: realNocEngineersImg,
    featured: false,
    tags: ["SD-WAN", "Global VPN", "Zero-Trust LAN", "Managed Connectivity", "NOC Ops"],
    metrics: ["99.999% Link Uptime", "Encrypted Tunnels", "Global Transit"],
    deliverables: [
      "Enterprise SD-WAN & Multi-Site Interconnect",
      "High-Security Remote Worker VPN Gateways",
      "24/7 Noida NOC Managed Bandwidth & Failover",
      "Automated BGP Routing & Traffic Shaping"
    ]
  }
];

export const portfolioProjects = [
  {
    id: "finscale-global",
    title: "FinScale Global Clearing Engine",
    domain: "portal.finscalepayments.com",
    liveUrl: "https://techprosnetwork.com/case-studies/finscale",
    category: "enterprise",
    categoryName: "FinTech & Banking",
    subtitle: "High-Frequency Multi-Currency Clearing & Settlement Platform",
    description: "Enterprise payment orchestration portal engineered for sub-12ms transaction processing across 24 global currency rails. Features real-time fraud scoring, PCI-DSS Level 1 audit logging, and automated banking ledger reconciliation.",
    metrics: ["$14.8M Daily Volume", "12ms P99 Latency", "PCI-DSS Level 1"],
    stack: ["React 19", "Go Microservices", "Apache Kafka", "PostgreSQL", "AWS ap-south-1"],
    image: fintechImg,
    isFlagship: true,
    status: "Production Live"
  },
  {
    id: "healthbridge-telehealth",
    title: "HealthBridge Clinical Telehealth",
    domain: "telehealth.healthbridge-ai.org",
    liveUrl: "https://techprosnetwork.com/case-studies/healthbridge",
    category: "enterprise",
    categoryName: "Healthcare & Life Sciences",
    subtitle: "HIPAA-Compliant Remote Diagnostic & Telemedicine Portal",
    description: "Real-time clinical consultation suite connecting 450,000+ patients with certified healthcare networks. Incorporates end-to-end encrypted WebRTC audio/video consultations, automated EHR transcription, and sub-800ms Core Web Vitals.",
    metrics: ["450k+ Consults", "99.999% SLA Uptime", "Sub-800ms CWV"],
    stack: ["Next.js 15", "WebRTC", "Python FastAPI", "Redis", "HIPAA Cloud"],
    image: healthtechImg,
    isFlagship: true,
    status: "Production Live"
  },
  {
    id: "cloudmatrix-noc",
    title: "TechPros Cloud NOC & K8s Mesh",
    domain: "telemetry.techpros.net",
    liveUrl: "https://telemetry.techpros.net",
    category: "enterprise",
    categoryName: "Cloud & DevSecOps",
    subtitle: "Autonomous Kubernetes Cluster Telemetry & Observability Hub",
    description: "Enterprise operations center providing live telemetry, distributed tracing, and autonomous incident remediation across 1,420 multi-cloud pods. Direct fiber interconnect from Noida Sector 62 NOC to AWS and Azure datacenters.",
    metrics: ["1,420 Active Pods", "Zero Unplanned Outages", "SOC 2 Type II"],
    stack: ["React", "Kubernetes", "Prometheus", "Envoy Mesh", "Cloudflare Edge"],
    image: dashboardImg,
    isFlagship: true,
    status: "Production Live"
  },
  {
    id: "glowsoft",
    title: "GlowSoft Suppliers",
    domain: "glowsoftsuppliers.com",
    liveUrl: "https://glowsoftsuppliers.com",
    category: "enterprise",
    categoryName: "Enterprise & B2B",
    subtitle: "B2B Software Licensing & Distribution Marketplace",
    description: "Comprehensive B2B software solutions platform featuring categorized software licensing catalogs, vendor discovery, automated enquiry workflows, and high-availability architecture.",
    metrics: ["B2B Catalog", "Sub-second LCP", "SEO Structured Data"],
    stack: ["Custom PHP", "Modular SCSS", "REST API", "Hostinger Cloud"],
    image: glowsoftSiteImg,
    status: "Production Live"
  },
  {
    id: "indian-kitchen",
    title: "Indian Kitchen",
    domain: "indian-kitchen-seven.vercel.app",
    liveUrl: "https://indian-kitchen-seven.vercel.app",
    category: "web-app",
    categoryName: "Web App & Motion",
    subtitle: "Modern Culinary Experience & Online Ordering Platform",
    description: "High-performance interactive web application built with React and Tailwind CSS. Features dynamic menu browsing, culinary category filtering, table reservations, and fluid entrance animations.",
    metrics: ["100 PageSpeed", "Sub-second TTFB", "Fluid Motion"],
    stack: ["React 18", "Vite", "Tailwind CSS", "Lucide Icons", "Vercel Edge"],
    image: indianKitchenSiteImg,
    status: "Production Live"
  },
  {
    id: "maschalls-kitchen",
    title: "Maschall's Kitchen",
    domain: "maschalls-kitchen.vercel.app",
    liveUrl: "https://maschalls-kitchen.vercel.app",
    category: "web-app",
    categoryName: "Web App & Motion",
    subtitle: "Authentic Afghan Culinary Showcase & Order System",
    description: "Fast-loading, mobile-first culinary web app with curated Halal Afghan specialties, categorized dietary exploration, chef notes, and responsive booking workflow.",
    metrics: ["Mobile-First", "Zero Layout Shift", "100% SEO Ready"],
    stack: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "Vercel"],
    image: maschallsKitchenSiteImg,
    status: "Production Live"
  },
  {
    id: "chef-lama",
    title: "Chef Lama Gourmet Dining",
    domain: "chef-lama-motion.vercel.app",
    liveUrl: "https://chef-lama-motion.vercel.app",
    category: "web-app",
    categoryName: "Web App & Motion",
    subtitle: "Luxury Interactive Gastronomy & Chef Showcase",
    description: "Luxury culinary portfolio with dark aesthetic elegance, kinetic entrance animations, menu storytelling, and smooth micro-interactions engineered for fine-dining clientele.",
    metrics: ["60fps Animation", "Dark Mode UI", "OLED Contrast"],
    stack: ["Modern JS", "CSS Keyframes", "Kinetic UI", "Vercel Edge"],
    image: chefLamaSiteImg,
    status: "Production Live"
  },
  {
    id: "social-sips",
    title: "Social Sips Lounge",
    domain: "social-sips-motion.vercel.app",
    liveUrl: "https://social-sips-motion.vercel.app",
    category: "web-app",
    categoryName: "Web App & Motion",
    subtitle: "Interactive Craft Beverage & Modern Bar Experience",
    description: "Motion-forward digital experience for an upscale craft beverage lounge. Features kinetic drink menus, atmosphere gallery, event RSVP, and responsive tactile animations.",
    metrics: ["Kinetic UI", "Instant Load", "Custom Typography"],
    stack: ["Modern Frontend", "Micro-Interactions", "Responsive UI", "Vercel"],
    image: socialSipsSiteImg,
    status: "Production Live"
  },
  {
    id: "glowpath",
    title: "GlowPath Ventures",
    domain: "glowpathventures.com",
    liveUrl: "https://glowpathventures.com",
    category: "enterprise",
    categoryName: "Enterprise & Corporate",
    subtitle: "Strategic Advisory, Capital & Venture Portal",
    description: "Enterprise investment and advisory platform designed for global venture capital and strategic management. Implements secure lead routing, analytics tracking, and corporate identity.",
    metrics: ["Enterprise Security", "Lead Automation", "Global CDN"],
    stack: ["PHP 8.3", "MySQL PDO", "Tailwind CSS", "hCaptcha", "Hostinger Cloud"],
    image: glowpathSiteImg,
    status: "Production Live"
  },
  {
    id: "kidzgem",
    title: "KidzGem",
    domain: "kidzgem.com",
    liveUrl: "https://kidzgem.com",
    category: "ecommerce",
    categoryName: "E-Commerce & Retail",
    subtitle: "Children’s Fashion & Boutique E-Commerce Store",
    description: "High-conversion e-commerce storefront for children’s lifestyle apparel. Features curated product showcases, secure checkout flows, promotional banners, and vibrant mobile navigation.",
    metrics: ["Conversion Optimized", "Mobile Checkout", "Fast Media Delivery"],
    stack: ["E-Commerce Platform", "Payment Gateway", "Responsive Design", "Hostinger"],
    image: kidzgemSiteImg,
    status: "Production Live"
  },
  {
    id: "lovoa",
    title: "Lovoa Community",
    domain: "lovoa.org",
    liveUrl: "https://lovoa.org",
    category: "enterprise",
    categoryName: "Corporate & Community",
    subtitle: "Lifestyle, Wellness & Non-Profit Organization Portal",
    description: "Modern non-profit and community engagement portal. Built with accessible typography, initiative tracking, interactive storytelling, and community registration modules.",
    metrics: ["Accessibility First", "Community Hub", "High Engagement"],
    stack: ["Modern Architecture", "WCAG 2.2 Compliant", "SEO Optimized", "Hostinger"],
    image: lovoaSiteImg,
    status: "Production Live"
  }
];

export const industriesData = [
  {
    id: "banking-finance",
    title: "Banking & Finance",
    icon: "Landmark",
    summary: "Modernise core banking, automated risk underwriting, and compliance operations with real-time analytics.",
    detail: "From fraud detection and automated KYC to digital lending and wealth management platforms, we help financial institutions move faster while staying strictly compliant with banking mandates.",
    compliance: ["PCI-DSS Level 1", "ISO 27001", "OWASP ASVS", "Sub-millisecond Trading SLA"],
    image: industryBankingImg
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    icon: "Activity",
    summary: "Streamline patient portals, HIPAA-compliant EHR systems, medical billing, and clinical analytics.",
    detail: "Our secure platforms reduce administrative burden, eliminate claims errors, and enhance diagnostic workflows with zero compromise on patient data privacy and strict encrypted transit.",
    compliance: ["HIPAA Compliant", "HL7 FHIR", "GDPR-Health", "SOC 2 Type II Encrypted"],
    image: industryHealthcareImg
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce",
    icon: "ShoppingBag",
    summary: "Elevate customer experience, optimize fulfillment pipelines, and build high-concurrency headless digital storefronts.",
    detail: "We engineer lightning-fast Next.js eCommerce platforms, AI product recommendation engines, and synchronized multi-warehouse inventory systems handling thousands of concurrent carts.",
    compliance: ["10,000+ Concurrent Checkouts", "< 0.6s Global Edge LCP", "Stripe/PayPal Tier 1 Security"],
    image: industryRetailImg
  },
  {
    id: "travel-logistics",
    title: "Travel & Logistics",
    icon: "Plane",
    summary: "Deliver real-time fleet telematics, high-availability booking engines, and dynamic customer loyalty systems.",
    detail: "From route optimization and automated dispatch to multilingual 24/7 passenger support, we keep enterprise transport networks operating without friction across global borders.",
    compliance: ["Real-Time Telemetry", "Sub-second Booking Sync", "Global Multi-Currency Engine"],
    image: industryTravelImg
  },
  {
    id: "telecom-media",
    title: "Telecom & Media",
    icon: "Radio",
    summary: "Reduce churn, safeguard streaming throughput, and automate subscriber lifecycle workflows for digital carriers.",
    detail: "We support high-throughput API integrations, automated network incident response, and scalable subscription billing platforms managing millions of active subscriber records.",
    compliance: ["High-Throughput Streaming", "Automated Zero-Downtime Failover", "Subscriber Data Vault"],
    image: industryTelecomImg
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Smart Robotics",
    icon: "Cpu",
    summary: "Optimize supply chains, industrial IoT sensor monitoring, and factory automation pipelines.",
    detail: "We connect physical shop-floor telemetry to centralized cloud dashboards, enabling predictive maintenance, digital twins, and end-to-end supply chain transparency.",
    compliance: ["Industrial IoT Protocols (MQTT/OPC UA)", "Predictive Sensor Telemetry", "Shop-Floor Redundancy"],
    image: industryManufacturingImg
  },
  {
    id: "government",
    title: "Government & Public Sector",
    icon: "Building2",
    summary: "Modernise citizen-facing portals, municipal administrative workflows, and digital identity verification.",
    detail: "We engineer resilient civic software architectures with military-grade encryption, immutable audit trails, and 99.99% uptime guarantees for public agencies.",
    compliance: ["Military-Grade AES-256", "Accessible WCAG 2.2 AAA", "Tamper-Evident Audit Trails"],
    image: industryGovernmentImg
  },
  {
    id: "education",
    title: "Education & EdTech",
    icon: "GraduationCap",
    summary: "Transform admissions, virtual learning environments (LMS), and interactive student evaluation systems.",
    detail: "From high-scale online examination portals with anti-cheat detection to automated grading pipelines and alumni engagement platforms, we power modern digital learning.",
    compliance: ["FERPA Compliant", "High-Volume Concurrent Testing", "Accessible Interactive Video"],
    image: industryEducationImg
  }
];

export const softwaresData = [
  {
    id: "invio",
    title: "Invio",
    category: "Billing & Invoicing",
    price: "Free Download",
    description: "Create professional invoices, track payments, generate automated receipts, and get paid faster with clean client ledger tracking.",
    features: [
      "PDF Invoice & Quote Generation",
      "Multi-Currency & Automated Tax Calculations",
      "Client Ledger & Overdue Reminders",
      "Stripe & Wire Transfer Integrations",
      "100% Free - No Hidden Fees or Contracts"
    ],
    image: "https://techprosnetwork.com/wp-content/uploads/2026/08/product-invio.png",
    thumb: "https://techprosnetwork.com/wp-content/uploads/2026/08/product-invio-300x169.png",
    downloadUrl: "#download-invio",
    version: "v2.4.0",
    rating: "4.9/5"
  },
  {
    id: "warden",
    title: "Warden",
    category: "Security & Vulnerability Scanner",
    price: "Free Download / Live Tool",
    description: "Scan any website in seconds and get a clear, actionable security report covering SSL/TLS integrity, OWASP vulnerabilities, CSP headers, and response latency.",
    features: [
      "Sub-Second Domain Vulnerability Audit",
      "OWASP Top 10 Header Compliance Verification",
      "SSL Certificate Validity & Cipher Strength Check",
      "Actionable Remediation Code Snippets",
      "Built-in Free Interactive Online Scanner"
    ],
    image: "https://techprosnetwork.com/wp-content/uploads/2026/08/product-warden.png",
    thumb: "https://techprosnetwork.com/wp-content/uploads/2026/08/product-warden-300x169.png",
    downloadUrl: "#download-warden",
    version: "v3.1.2",
    rating: "5.0/5"
  }
];

export const timelineMilestones = [
  {
    year: "2004",
    title: "Founded in Delhi",
    desc: "TechPros was established with a team of 12 specialists and a singular mission: delivering high-standard back-office support and web technology to ambitious startups."
  },
  {
    year: "2009",
    title: "Global Expansion",
    desc: "Opened our first international delivery center in Singapore, accelerating enterprise IT delivery across Asia-Pacific and North American markets."
  },
  {
    year: "2014",
    title: "AI Integration & Automation",
    desc: "Launched our proprietary automation platform, reducing operational processing time by 40% across all client engineering service lines."
  },
  {
    year: "2018",
    title: "Global Industry Recognition",
    desc: "Ranked among the top 10 specialized BPO and digital technology providers globally, crossing 200 enterprise clients across 30 countries."
  },
  {
    year: "2021",
    title: "Cloud-Native Pivot & Noida NOC",
    desc: "Established our modern flagship engineering headquarters and 24/7 Network Operations Center (NOC) in Sector 62, Noida, migrating to a 100% cloud-native architecture."
  },
  {
    year: "2024+",
    title: "AI-First & Autonomous Era",
    desc: "Pioneered the TechPros Intelligence Suite, integrating autonomous AI agents, bank-grade zero-trust cybersecurity, and sub-second edge web engineering."
  }
];

export const corePillars = [
  {
    title: "Global Delivery Network",
    desc: "32 delivery centers across 18 countries, ensuring 24/7 support, follow-the-sun engineering, and seamless business continuity.",
    icon: "Globe"
  },
  {
    title: "Technology-First Approach",
    desc: "Proprietary AI and automation tooling that drives 40% faster operational throughput and up to 60% infrastructural cost reduction.",
    icon: "Cpu"
  },
  {
    title: "ISO 27001 & SOC 2 Certified",
    desc: "Rigorous security standards, zero-trust controls, and compliance frameworks enforced across all codebases and deployment pipelines.",
    icon: "Shield"
  },
  {
    title: "Outcome-Based Pricing",
    desc: "Pay for tangible engineering outcomes, not bloated headcount. SLA-backed contractual commitments with full transparency.",
    icon: "CheckCircle2"
  }
];

export const careerOpenings = [
  {
    title: "Engineering & Web Architecture",
    type: "Full-Time • Noida HQ / Hybrid",
    desc: "Architect modern full-stack web platforms, custom microservices, AI automation tooling, and high-motion Next.js applications.",
    skills: ["React 19", "Next.js", "TypeScript", "Node.js", "PHP 8.3", "PostgreSQL"],
    icon: "Code"
  },
  {
    title: "Cloud Ops & 24/7 NOC Specialist",
    type: "Full-Time • Sector 62, Noida NOC",
    desc: "Maintain 99.99% uptime SLAs, manage multi-region Kubernetes clusters, monitor threat telemetry, and run incident response.",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "Terraform", "Prometheus"],
    icon: "Terminal"
  },
  {
    title: "Client Success & Solution Delivery",
    type: "Full-Time • Global Accounts",
    desc: "Partner with enterprise client stakeholders end-to-end to translate business goals into technical blueprints with measurable ROI.",
    skills: ["Technical Scoping", "Agile Leadership", "Enterprise SaaS", "SOW Execution"],
    icon: "Users"
  },
  {
    title: "Sales & Strategic Growth",
    type: "Full-Time • Remote / Noida Hub",
    desc: "Drive expansion for our full-stack engineering, cloud, and cybersecurity offerings across international high-growth verticals.",
    skills: ["B2B Technology Sales", "Enterprise Advisory", "Client Relationship Mgmt"],
    icon: "TrendingUp"
  }
];

export const clientTestimonials = [
  {
    quote: "TechPros transformed our customer service and application operations completely. Response latency dropped by 60% and CSAT jumped from 74% to 94% within 6 months. Remarkable engineering execution.",
    author: "Sarah Mitchell",
    role: "Chief Operations Officer",
    company: "FinCorp Global",
    avatar: "SM",
    stars: 5
  },
  {
    quote: "Their AI automation solution eliminated 70% of our manual data processing tasks. The ROI was evident in the first quarter itself — delivering a 3.2x return on our capital investment. Highly recommend.",
    author: "David Chen",
    role: "VP of Technology",
    company: "RetailMax Inc",
    avatar: "DC",
    stars: 5
  },
  {
    quote: "Working with TechPros felt like having an elite extension of our own team. They understood our healthcare compliance needs deeply, built a zero-vulnerability EHR portal, and delivered flawlessly.",
    author: "Dr. Priya Sharma",
    role: "Director of Clinical Operations",
    company: "MedCare Systems",
    avatar: "PS",
    stars: 5
  }
];

export const faqList = [
  {
    question: "What industries does TechPros work with?",
    answer: "We work across banking & finance, healthcare, retail & e-commerce, travel & logistics, telecom & media, manufacturing & smart robotics, government, and education. Each domain is supported by specialized architects knowledgeable in industry-specific compliance (HIPAA, PCI-DSS, ISO 27001, SOC 2)."
  },
  {
    question: "How is pricing structured?",
    answer: "Our enterprise technology and engineering engagements are priced around measurable business outcomes and deliverables rather than billable hours. We provide transparent, itemized scopes during your free discovery consultation. Our software tools, Invio and Warden, are 100% free to download."
  },
  {
    question: "How long does a typical engagement take?",
    answer: "It depends on scope. A targeted automation pilot or high-speed interactive web app typically deploys within 2 to 4 weeks, while an enterprise-wide cloud modernization or custom ERP can span 2 to 6 months. Every project begins with a discovery sprint so you receive clear timeline commitments upfront."
  },
  {
    question: "Is client data safe and secure?",
    answer: "Yes, security is foundational to our engineering DNA. TechPros holds ISO 27001 and SOC 2 Type II certifications across all service lines. We enforce OWASP WSTG v4.2 standards, end-to-end TLS 1.3 encryption, static analysis in CI/CD, and mutual Non-Disclosure Agreements (NDAs) prior to project scoping."
  },
  {
    question: "Do I need a paid contract to download Invio or Warden?",
    answer: "No. Invio and Warden are developed by TechPros as free community tools. You can test them or request instant digital delivery with zero credit card required and no lock-in."
  },
  {
    question: "Can TechPros integrate with our existing software and cloud stacks?",
    answer: "Always. We are strictly vendor-neutral across all major clouds (AWS, GCP, Azure), ERP/CRM solutions (Salesforce, SAP, custom internal backends), and databases. Our solutions are architected to seamlessly connect via secure REST/GraphQL API gateways without requiring wholesale replacement."
  }
];

export const globalNocCenters = [
  { city: "Noida HQ", country: "India", status: "Primary NOC Active", ping: "8ms", load: "42%" },
  { city: "Singapore", country: "Singapore", status: "Active Edge", ping: "24ms", load: "58%" },
  { city: "London", country: "United Kingdom", status: "Active Edge", ping: "62ms", load: "51%" },
  { city: "New York", country: "United States", status: "Active Edge", ping: "78ms", load: "64%" },
  { city: "Frankfurt", country: "Germany", status: "Active Edge", ping: "65ms", load: "48%" },
  { city: "Tokyo", country: "Japan", status: "Active Edge", ping: "45ms", load: "39%" },
  { city: "Dubai", country: "UAE", status: "Active Edge", ping: "38ms", load: "44%" },
  { city: "Sydney", country: "Australia", status: "Active Edge", ping: "89ms", load: "53%" }
];
