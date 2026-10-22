export const categories = [
  "All",
  "Web Platform",
  "Mobile App",
  "Custom Software",
  "E-Commerce",
  "AI & Cloud"
];

export const projectsData = [
  {
    id: "kramasha",
    title: "Kramasha",
    category: "Web Platform",
    shortDesc: "Built for creative businesses to manage clients, events, teams, services, quotations, invoices, payments, and finances — all in one place.",
    fullDesc: "An all-in-one business management and client portal platform designed specifically for photographers, event managers, creative studios, freelancers, and agencies. Features smart quotations, automated invoice generation, payment tracking, live event team dispatch, and installable PWA app capability.",
    client: "Kramasha Inc.",
    year: "2024",
    tags: ["React", "Node.js", "PWA", "Tailwind CSS", "Financial Workflows"],
    outcome: "Unified client & event workflows with 40%+ operational efficiency",
    image: "/images/projects/kramasha.png",
    featured: true,
    liveUrl: "https://www.kramasha.com",
    metrics: [
      { label: "Platform", value: "Web & PWA App" },
      { label: "Target Sectors", value: "Creative & Events" },
      { label: "Setup", value: "Quick & Zero Card" }
    ]
  },
  {
    id: "northwind-commerce",
    title: "Northwind Commerce",
    category: "E-Commerce",
    shortDesc: "A headless e-commerce platform handling 50k+ monthly orders with real-time inventory and automated fulfilment.",
    fullDesc: "Modern multi-channel e-commerce infrastructure built for enterprise scale, featuring sub-second page loads, real-time sync with warehouse inventories, and automated payment/tax gateways.",
    client: "Northwind Retailers",
    year: "2024",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    outcome: "3x faster checkout & 45% uplift in conversions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    featured: true,
    liveUrl: "https://example.com/northwind",
    metrics: [
      { label: "Monthly Orders", value: "50,000+" },
      { label: "Checkout Speed", value: "3x Faster" },
      { label: "Uptime", value: "99.98%" }
    ]
  },
  {
    id: "vertex-operations-cloud",
    title: "Vertex Operations Cloud",
    category: "Custom Software",
    shortDesc: "Unified ERP connecting sales, inventory and finance across 12 business locations into one real-time dashboard.",
    fullDesc: "Enterprise resource planning system tailored for supply chain orchestration. Features custom role-based access, automated accounting ledger sync, and dynamic predictive demand forecasting.",
    client: "Vertex Global Group",
    year: "2024",
    tags: ["React", "Laravel", "PostgreSQL", "AWS"],
    outcome: "50% less operational overhead across all branches",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    featured: true,
    liveUrl: "https://example.com/vertex",
    metrics: [
      { label: "Cost Reduction", value: "50%" },
      { label: "Locations", value: "12 Hubs" },
      { label: "Processing Speed", value: "Real-time" }
    ]
  },
  {
    id: "helix-field-service",
    title: "Helix Field Service",
    category: "Mobile App",
    shortDesc: "Cross-platform mobile app for field technicians with offline-first sync, live dispatch, and photo verification.",
    fullDesc: "Robust field engineering suite designed to keep service technicians productive even in low or zero internet connectivity areas. Includes push notifications, digital signatures, and geo-fenced job check-ins.",
    client: "Helix Infrastructures",
    year: "2023",
    tags: ["Flutter", "Supabase", "Firebase", "Node.js"],
    outcome: "40% faster job completion rates",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
    featured: true,
    liveUrl: "https://example.com/helix",
    metrics: [
      { label: "Job Completion", value: "+40%" },
      { label: "Active Techs", value: "1,200+" },
      { label: "Offline Sync", value: "100% Reliable" }
    ]
  },
  {
    id: "fintech-pulse-analytics",
    title: "FinPulse Banking Suite",
    category: "Web Platform",
    shortDesc: "Secure banking dashboard with automated reconciliation, fraud analytics, and visual liquidity trends.",
    fullDesc: "Fintech web application providing SMBs with instant ledger consolidation, AI-driven fraud anomaly detection, and compliant export-ready audit reports.",
    client: "FinPulse Tech",
    year: "2024",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    outcome: "99.4% automated transaction matching",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
    featured: false,
    liveUrl: "https://example.com/finpulse",
    metrics: [
      { label: "Match Rate", value: "99.4%" },
      { label: "Audit Prep", value: "-75% Hours" },
      { label: "Security", value: "SOC-2 Ready" }
    ]
  },
  {
    id: "mediconnect-telehealth",
    title: "MediConnect Telehealth",
    category: "Mobile App",
    shortDesc: "HIPAA-compliant telemedicine app connecting patients with specialist doctors via encrypted video consultations.",
    fullDesc: "Healthcare app built with WebRTC real-time encrypted video sessions, electronic health record (EHR) integration, and digital prescriptions delivered straight to partnered pharmacies.",
    client: "CarePlus Health Network",
    year: "2023",
    tags: ["React Native", "WebRTC", "Express", "MongoDB"],
    outcome: "Over 25,000 successful remote consultations",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    featured: false,
    liveUrl: "https://example.com/mediconnect",
    metrics: [
      { label: "Consultations", value: "25k+" },
      { label: "Patient Rating", value: "4.9 / 5" },
      { label: "Call Quality", value: "HD Low Latency" }
    ]
  },
  {
    id: "apex-ai-intelligence",
    title: "Apex AI Document Agent",
    category: "AI & Cloud",
    shortDesc: "AI-powered document intelligence extracting key contract parameters and risk clauses in seconds.",
    fullDesc: "Generative AI and OCR pipeline converting thousands of complex legal, insurance, and compliance documents into structured JSON data with citations and risk flagging.",
    client: "Apex Legal & Partners",
    year: "2024",
    tags: ["Python", "FastAPI", "OpenAI", "AWS Bedrock", "Next.js"],
    outcome: "85% reduction in manual review hours",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    featured: false,
    liveUrl: "https://example.com/apex-ai",
    metrics: [
      { label: "Time Saved", value: "85%" },
      { label: "Accuracy", value: "98.7%" },
      { label: "Docs / Minute", value: "120+" }
    ]
  }
];
