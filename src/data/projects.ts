export type ProjectCategory =
  | "ai-platform"
  | "open-source"
  | "devtools"
  | "family";

export type ProjectStatus = "live" | "active" | "open-source";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  github: string;
  live?: string;
  /** Card visual under public/ — Gemini art or live product screenshot. */
  image?: string;
  /** How the image fills the card frame. Screenshots usually want "top". */
  imageFit?: "cover" | "top" | "contain";
  /** Extra outbound links (npm, registries, docs). */
  links?: ProjectLink[];
  /** Compact capability / distribution stats — prefer curated over live download APIs. */
  stats?: ProjectStat[];
  highlights: string[];
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: "ace-bench",
    title: "ACE-Bench",
    tagline: "Agent Code Efficiency Benchmark",
    description:
      "Scores AI coding agents on structural efficiency against human baselines — not just pass/fail. Harvests pre-AI-era GitHub PRs (merged before 2021) across a ~1000-repo corpus, builds AST/file-scope priors, then compares agent patches to how senior engineers actually shipped the same fix.",
    stack: ["Python", "AST metrics", "GitHub harvest", "Eval harness"],
    category: "ai-platform",
    github: "https://github.com/rachitkumarrastogi/ace-bench",
    image: "/projectsThumbnails/aceBench.png",
    stats: [
      { label: "Corpus", value: "~1000 repos" },
      { label: "Cutoff", value: "pre-2021 PRs" },
      { label: "Django freeze", value: "6,125 PRs" },
      { label: "Langs", value: "Py · JS · Go · Rust+" },
    ],
    highlights: [
      "Human harvest → pattern prior → sandbox agent → ACE Index",
      "Frozen Django baseline (6,125 pre-2021 merges) + Flask, Express, Cobra, Clap kickoff",
      "Measures AST/file bloat vs human patch — efficiency, not just green tests",
    ],
    status: "open-source",
  },
  {
    id: "unity-mcp",
    title: "Unity MCP Server",
    tagline: "Model Context Protocol for Unity",
    description:
      "MCP server for Unity — 130+ tools, Unity 6 skills, AI/ML discovery. Reads the project filesystem so agents work without opening the Editor. Listed on the official MCP Registry and published on npm.",
    stack: ["TypeScript", "MCP", "Unity", "npm"],
    category: "devtools",
    github: "https://github.com/rachitkumarrastogi/unity-mcp-server",
    image: "/projectsThumbnails/unity-mcp-server.png",
    links: [
      {
        label: "npm",
        href: "https://www.npmjs.com/package/unity-mcp-server",
      },
      {
        label: "MCP Registry",
        href: "https://registry.modelcontextprotocol.io/?q=unity-mcp-server",
      },
    ],
    stats: [
      { label: "Version", value: "v1.7.0" },
      { label: "Tools", value: "130+" },
      { label: "Registry", value: "Active" },
      { label: "Transport", value: "stdio" },
    ],
    highlights: [
      "Official MCP Registry listing (io.github.rachitkumarrastogi/unity-mcp-server)",
      "npm package — npx unity-mcp-server",
      "Editor-free: UNITY_PROJECT_PATH → project tools for any MCP client",
    ],
    status: "open-source",
  },
  {
    id: "apregistry-prompt",
    title: "APRegistry Prompt Catalog",
    tagline: "Production-ready agent system prompts",
    description:
      "Large-scale monorepo of role-based system prompts across industries — advertising, finance, healthcare, legal, IT, and more. Built for teams shipping agentic workflows in production.",
    stack: ["TypeScript", "MCP", "npm workspaces", "Agents"],
    category: "ai-platform",
    github: "https://github.com/agentpromptregistry/apregistry-prompt",
    image: "/projectsThumbnails/APRegistry-Catalog.png",
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
    image: "/projectsThumbnails/APRegistry.png",
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
    image: "/projectsThumbnails/VectorSentry.png",
    highlights: [
      "512-d face embedding enrollment in-browser",
      "Automated crawl & match engine",
      "Legal takedown workflow automation",
    ],
    status: "active",
  },
  {
    id: "nesrom",
    title: "Pixel Vault 36",
    tagline: "Original retro games for Mac",
    description:
      "Native macOS SpriteKit vault of 36 original arcade-style games — platformers, shooters, and puzzles with original characters (Pip, Nyx, Star Moth). Fun side project, not a commercial ROM dump.",
    stack: ["Swift", "SpriteKit", "macOS"],
    category: "open-source",
    github: "https://github.com/rachitkumarrastogi/NESROM",
    image: "/projectsThumbnails/PixelVault.png",
    highlights: [
      "36 original catalog titles",
      "Native .app (not a web pack)",
      "Handcrafted signature games",
    ],
    status: "open-source",
  },
  {
    id: "careerflow360",
    title: "CareerFlow360",
    tagline: "AI college & career guide",
    description:
      "Live product for students and families — discover 6,000+ colleges, compare outcomes, match careers to majors, and build a shortlist with AI-enhanced search on real Scorecard data.",
    stack: ["LangGraph", "ChromaDB", "Next.js", "RAG"],
    category: "family",
    github: "https://github.com/GamerNCoder/pathfindr-web",
    live: "https://careerflow360.com",
    image: "/projectsThumbnails/careerflow360.png",
    imageFit: "top",
    highlights: [
      "College Explorer — 6,000+ accredited schools",
      "Career match, ROI tools, shortlist & compare",
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
    image: "/projectsThumbnails/ProjectEuler.png",
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
