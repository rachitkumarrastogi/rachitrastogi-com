export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export const profile = {
  name: "Rachit Kumar Rastogi",
  shortName: "Rachit Rastogi",
  title: "AI Engineering Leader & Platform Architect",
  subtitle:
    "Platform Engineering · Production Applied AI · Distributed Systems at Scale",
  location: "Edison, NJ · Greater NYC",
  workLocation: "Charles Schwab · Jersey City, NJ",
  email: "rachitrastogi777@gmail.com",
  github: "https://github.com/rachitkumarrastogi",
  githubUsername: "rachitkumarrastogi",
  linkedin: "https://www.linkedin.com/in/rachitrastogi/",
  stackoverflow: "https://stackoverflow.com/users/13563514/rachit-kumar-rastogi",
  quora: "https://www.quora.com/profile/Rachit-Rastogi-60",
  resumePath: "/Rachit_Rastogi_Resume.pdf",
  tagline: "Engineering leader · Backend architect · AI-native builder",
  summary: [
    "Twenty years building mission-critical distributed systems, launching 0→1 products, and scaling global engineering organizations.",
    "Currently leading applied AI infrastructure and platform engineering at Charles Schwab — multi-pod teams, production LLM orchestration, and zero-downtime migrations at 99.99% availability for 30M+ users.",
  ],
  bio: [
    "I'm an engineering leader who still loves to build — trading engines, AI systems, backend prototypes, and open-source tools. I lead with clarity, ship with rigor, and care deeply about teams that compound velocity over time.",
    "Born in Uttar Pradesh, shaped by Bangalore's tech ecosystem, a project chapter in Cologne, and now rooted in New Jersey — my path mirrors the global platforms I've helped scale.",
    "I build something every week. Numismatics collector on the side. Always learning.",
  ],
  stats: [
    { value: "20+", label: "Years in industry" },
    { value: "30M+", label: "Users served" },
    { value: "~30", label: "Engineers led" },
    { value: "99.99%", label: "Platform availability" },
  ],
  askMeAbout: [
    "Designing systems for 100k+ QPS and sub-ms latency paths",
    "Kafka, microservices, caching, partitioning, consistency models",
    "Reducing latency from seconds → milliseconds",
    "AI-agent workflows, multi-agent chains, retrieval patterns",
    "Trading systems, order-flow, and market microstructure",
  ],
};

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: profile.github },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin },
  { id: "stackoverflow", label: "Stack Overflow", href: profile.stackoverflow },
  { id: "quora", label: "Quora", href: profile.quora },
  { id: "email", label: "Email", href: `mailto:${profile.email}` },
];
