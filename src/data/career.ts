export type CareerRole = {
  company: string;
  website: string;
  title: string;
  location: string;
  period: string;
  level: number;
  highlights: string[];
};

export const careerRoles: CareerRole[] = [
  {
    company: "Charles Schwab",
    website: "https://www.schwab.com",
    title: "Senior Technical Lead Manager / Platform & AI Architect",
    location: "Jersey City, NJ",
    period: "Oct 2021 – Present",
    level: 5,
    highlights: [
      "Built multi-pod global org (~30 engineers, 12 direct reports) with follow-the-sun execution across US & India GCC.",
      "Zero-downtime migration: legacy monolith → 36+ cloud-native microservices; latency 5s → <2s at 99.99% availability.",
      "Architected LLM-powered semantic search assistant (v2) for 30M+ users; ~35% support ticket deflection.",
      "Deployed Copilot MCP agentic integrations; FinOps cut inference costs 22% across AWS/GCP.",
    ],
  },
  {
    company: "TD Ameritrade",
    website: "https://www.schwab.com",
    title: "Staff Software Engineer / Tech Lead",
    location: "Jersey City, NJ",
    period: "2018 – 2021",
    level: 4,
    highlights: [
      "0→1 TDAx platform: zero to 1M+ daily active users in 9 months.",
      "Owned real-time market data, derivative execution, and high-QPS account aggregation systems.",
      "Raised test coverage 45% → 90%; deployments from bi-weekly freezes to multi-daily drops.",
    ],
  },
  {
    company: "Madison Square Garden",
    website: "https://www.msg.com",
    title: "Senior Software Engineer — Core Data Services",
    location: "New York, NY",
    period: "2016 – 2018",
    level: 3,
    highlights: [
      "Re-engineered legacy data workflows into cloud-native architectures for high-volume transactional data.",
      "Reduced reporting latency 60% with high-throughput REST APIs and real-time ingestion pipelines.",
    ],
  },
  {
    company: "AXA",
    website: "https://www.axa.com",
    title: "Technical Lead Manager — Enterprise Cloud Platforms",
    location: "Bangalore, India",
    period: "2010 – 2016",
    level: 4,
    highlights: [
      "Promoted from Senior Engineer to lead a 10-person global pod for BI & regulatory reporting across 8+ EU markets.",
      "Migrated 10+ TB sales data to SAP HANA; cut cross-border reporting cycles 45%.",
      "Secured CMMI Level 3 certification; received CEO Award for engineering excellence.",
    ],
  },
  {
    company: "SAP Labs",
    website: "https://www.sap.com",
    title: "Senior Software Engineer — Release Automation",
    location: "Bangalore, India",
    period: "2005 – 2010",
    level: 2,
    highlights: [
      "Built automated release orchestration engine for complex multi-version enterprise deployments.",
      "Core architecture on Sydney Enterprise Services Project; SAP Kernel Assembly Team Award.",
    ],
  },
];

export const leadershipPillars = [
  {
    title: "Org Design & Talent",
    description:
      "Scaled pods globally, standardized promotion calibrations, and reduced attrition during major platform integrations.",
  },
  {
    title: "Reliability at Scale",
    description:
      "Incident Commander for critical outages; runbooks and monitoring that cut MTTR 35% on billion-dollar transaction paths.",
  },
  {
    title: "Applied AI in Production",
    description:
      "LLM orchestration, RAG pipelines, guardrails, and eval loops — not demos, but customer-facing systems at 30M+ scale.",
  },
  {
    title: "Engineering Culture",
    description:
      "CI/CD rigor, SLO frameworks, and developer platforms that turn velocity into a compounding advantage.",
  },
];
