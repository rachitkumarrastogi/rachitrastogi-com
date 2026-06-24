export type ProjectCategory =
  | "ai-platform"
  | "open-source"
  | "devtools"
  | "family";

export type ProjectStatus = "live" | "active" | "open-source";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  github: string;
  live?: string;
  highlights: string[];
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: "agentprompt-catalog",
    title: "Agent Prompt Catalog",
    tagline: "Production-ready agent system prompts",
    description:
      "Large-scale monorepo of role-based system prompts across industries — advertising, finance, healthcare, legal, IT, and more. Built for teams shipping agentic workflows in production.",
    stack: ["TypeScript", "MCP", "npm workspaces", "Agents"],
    category: "ai-platform",
    github: "https://github.com/agentpromptregistry/agentprompt-catalog",
    highlights: [
      "4,900+ packaged agent role prompts",
      "Industry-organized taxonomy",
      "Publishing & indexing pipeline",
    ],
    status: "active",
  },
  {
    id: "apregistry",
    title: "AP Registry",
    tagline: "Agent prompt registry platform",
    description:
      "Registry and discovery platform for agent prompts — search, moderation, and distribution for production agent systems.",
    stack: ["TypeScript", "Node.js", "Registry API"],
    category: "ai-platform",
    github: "https://github.com/agentpromptregistry/apregistry",
    highlights: [
      "Centralized prompt discovery",
      "Moderation & ops workflows",
      "Production deployment ready",
    ],
    status: "active",
  },
  {
    id: "vectorsentry",
    title: "VectorSentry",
    tagline: "Biometric identity protection",
    description:
      "Platform that detects unauthorized use of face embeddings across the web — client-side vector extraction, swarm crawling, cosine matching, and takedown workflows.",
    stack: ["Next.js 15", "FastAPI", "Supabase", "Playwright"],
    category: "ai-platform",
    github: "https://github.com/rachitkumarrastogi/VectorSentry",
    highlights: [
      "512-d face embedding enrollment in-browser",
      "Automated crawl & match engine",
      "Legal takedown workflow automation",
    ],
    status: "active",
  },
  {
    id: "unity-mcp",
    title: "Unity MCP Server",
    tagline: "Model Context Protocol for Unity",
    description:
      "MCP server bridging AI agents with the Unity editor — enabling agent-driven game development, scene manipulation, and tooling automation.",
    stack: ["TypeScript", "MCP", "Unity"],
    category: "devtools",
    github: "https://github.com/rachitkumarrastogi/unity-mcp-server",
    highlights: [
      "Agent-to-Unity bridge",
      "Open-source MCP integration",
      "Pinned on GitHub profile",
    ],
    status: "open-source",
  },
  {
    id: "careerflow360",
    title: "CareerFlow360",
    tagline: "Agentic college & career guide",
    description:
      "AI-powered college recommendation engine with RAG and multi-step LLM orchestration — matching, scholarships, and application tracking for students.",
    stack: ["LangGraph", "ChromaDB", "Next.js", "RAG"],
    category: "family",
    github: "https://github.com/GamerNCoder/pathfindr-web",
    live: "https://careerflow360.com",
    highlights: [
      "Multi-step LLM orchestration",
      "RAG over college & career corpus",
      "Live at careerflow360.com",
    ],
    status: "live",
  },
  {
    id: "projecteuler",
    title: "Project Euler",
    tagline: "Mathematics with code",
    description:
      "Solutions to Project Euler mathematical programming challenges — a long-running exercise in algorithmic thinking and problem decomposition.",
    stack: ["Java", "Algorithms", "Mathematics"],
    category: "open-source",
    github: "https://github.com/rachitkumarrastogi/projecteuler.net",
    highlights: [
      "Mathematical problem solving",
      "Algorithm design practice",
      "Pinned on GitHub profile",
    ],
    status: "open-source",
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  "ai-platform": "AI Platform",
  "open-source": "Open Source",
  devtools: "Developer Tools",
  family: "Family Build",
};
