import type {
  LabProject,
  LabSubnavItem,
  SoftwareHubExperienceEntry,
  SoftwareTrack,
} from "@/components/lab/lab-types";

const systemsProjects: LabProject[] = [
  {
    id: "artifact-store",
    number: "01",
    title: "AI Artifact Store",
    summary:
      "A C++20 distributed artifact store for AI/ML workloads, built around content addressing, resumable transfer, replication, and failure recovery.",
    technologies: ["C++20", "PostgreSQL", "Boost.Asio", "Distributed Storage"],
    href: "/software/systems/ai-artifact-store/",
    previewCta: "View Demo",
    githubHref: "https://github.com/simonwen7/ai-artifact-store",
  },
  {
    id: "code-intelligence",
    number: "02",
    title: "Graph-Augmented Code Intelligence Engine",
    summary:
      "Structural code intelligence built around program relationships, retrieval, and graph-aware context selection.",
    technologies: [
      "Python",
      "Static Analysis",
      "Retrieval",
      "Graph Algorithms",
    ],
    href: "/software/systems/code-intelligence/",
    previewCta: "View Demo",
    githubHref: "https://github.com/simonwen7/graph_code_intelligence",
  },
  {
    id: "inference-runtime",
    number: "03",
    title: "Adaptive AI Inference Runtime",
    summary:
      "A C++ multi-model inference runtime designed around workload-aware scheduling, dynamic batching, and memory-constrained model residency.",
    technologies: [
      "C++",
      "AI Infrastructure",
      "Scheduling",
      "Model Serving",
      "Concurrency",
    ],
    href: "/software/systems/inference-runtime/",
    previewCta: "Demo coming soon",
    githubHref: "https://github.com/simonwen7/adaptive_ai_inference_runtime",
  },
];

const businessProjects: LabProject[] = [
  {
    id: "apa-formatter",
    number: "01",
    title: "Forma APA",
    summary:
      "APA 7 Word formatting for students and researchers — fixes safe formatting issues while leaving academic content in the author's control.",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Product Engineering",
      "EdTech",
    ],
    href: "/software/business/apa-formatter/",
    previewCta: "Try Forma APA",
    githubHref: "https://github.com/simonwen7/apa-doc-formatter",
    liveDemoHref: "https://apa-doc-formatter.vercel.app/",
  },
  {
    id: "job-matcher",
    number: "02",
    title: "AI Resume Match",
    summary:
      "Compare your resume with a job description to surface strengths, gaps, and actionable improvements.",
    technologies: [
      "Next.js",
      "OpenAI",
      "TypeScript",
      "Product Engineering",
      "Resume Parsing",
    ],
    href: "/software/business/job-matcher/",
    previewCta: "Try AI Resume Match",
    githubHref: "https://github.com/simonwen7/ai-job-matcher",
    liveDemoHref: "https://ai-job-matcher-11.vercel.app/",
  },
];

/**
 * Single source of truth for Software Lab tracks.
 * Systems Engineering is intentionally first.
 */
export const softwareTracks: SoftwareTrack[] = [
  {
    id: "systems",
    label: "Systems Engineering",
    shortLabel: "Systems",
    href: "/software/#systems",
    focusLine: "Infrastructure · Storage · Retrieval · Runtime",
    accent: "cyan",
    projects: systemsProjects,
  },
  {
    id: "business",
    label: "Business & Product Engineering",
    shortLabel: "Business",
    href: "/software/#business",
    focusLine: "User-facing software · AI products · workflows",
    accent: "violet",
    projects: businessProjects,
  },
];

export const systemsTrack = softwareTracks[0];
export const businessTrack = softwareTracks[1];

export const softwareHubExperienceEntries: SoftwareHubExperienceEntry[] = [
  {
    number: "01",
    role: "QA Automation Intern",
    organization: "Tangam Systems",
    organizationContext: "Software company for casino analytics",
    period: "May 2026 — Aug 2026",
    description:
      "Built and maintained end-to-end test automation for a casino analytics platform, validating user-facing workflows and regression behavior with Cypress and Cucumber.",
    achievements: [
      "Created and maintained 200+ automated E2E test cases across 70+ product tickets.",
      "Designed and validated 10+ automation scenarios across four major product areas during a focused testing cycle.",
    ],
    tags: [
      "Cypress",
      "JavaScript",
      "Cucumber",
      "E2E Testing",
      "Regression Testing",
    ],
    proofPoints: [
      { type: "metric", value: "200+", label: "Automated E2E test cases" },
      { type: "metric", value: "70+", label: "Product tickets" },
    ],
  },
  {
    number: "02",
    role: "QA Analyst Intern",
    organization: "Propel Holdings",
    organizationContext: "AI-powered fintech company",
    period: "Sep 2025 — Dec 2025",
    description:
      "Used SQL-driven backend testing to validate customer and loan-application data across database, API, UI, and business-rule layers.",
    achievements: [
      "Worked across 100+ QA tickets covering customer data, loan applications, and production financial workflows.",
      "Built reusable SQL validation queries to reconcile backend records with API responses, UI output, and business rules.",
    ],
    tags: [
      "SQL",
      "Backend Validation",
      "API Testing",
      "Data Integrity",
      "Financial Systems",
    ],
    proofPoints: [
      { type: "metric", value: "100+", label: "QA tickets" },
      {
        type: "relation",
        text: "Database ↔ API ↔ UI ↔ Business Rules",
      },
    ],
  },
  {
    number: "03",
    role: "Project Lead",
    organization: "Microsoft × University of Waterloo",
    organizationContext: "Industry–academic AI collaboration",
    period: "May 2024 — Aug 2024",
    description:
      "Led a four-person team building an AI-powered investment insights platform for individual investors, using financial profiles, investment goals, and market interests to generate personalized guidance.",
    achievements: [
      "Co-developed the AI, backend, and database layers in Python and Azure, supporting investment insights, suggested allocations, and financial-report analysis.",
      "Led project planning, team coordination, and final delivery, earning an Outstanding overall performance rating for the work term.",
    ],
    tags: [
      "Python",
      "Azure AI",
      "Azure SQL",
      "Backend Engineering",
      "Project Leadership",
    ],
    proofPoints: [
      { type: "metric", value: "4", label: "Team members" },
      { type: "metric", value: "Outstanding", label: "Overall performance" },
    ],
  },
];

/** Hub local nav — all in-page anchors on `/software/`. */
export const softwareHubSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "systems", label: "Systems" },
  { id: "business", label: "Business" },
  { id: "experience", label: "Experience" },
];

/** Forma APA project subnav */
export const formaApaSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "workflow", label: "Workflow" },
  { id: "highlights", label: "Highlights" },
];

/** AI Resume Match project subnav */
export const aiResumeMatchSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "workflow", label: "Workflow" },
  { id: "highlights", label: "Highlights" },
];

/** Graph Code Intelligence project subnav */
export const codeIntelligenceSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "structure", label: "Structure" },
  { id: "retrieval", label: "Retrieval" },
  { id: "benchmark", label: "Benchmark" },
  { id: "incremental", label: "Incremental" },
  { id: "context", label: "Context" },
  { id: "proof", label: "Proof" },
];

/** Adaptive AI Inference Runtime project subnav */
export const inferenceRuntimeSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "design", label: "Design" },
  { id: "adaptive", label: "Adaptive" },
  { id: "trade-offs", label: "Trade-offs" },
];

/** AI Artifact Store project subnav */
export const artifactStoreSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "failure", label: "Failure" },
  { id: "identity", label: "Identity" },
  { id: "performance", label: "Performance" },
  { id: "architecture", label: "Architecture" },
];

/** @deprecated Category listing pages redirect to `/software/#systems`. */
export const systemsSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "artifact-store", label: "Artifact Store" },
  { id: "code-intelligence", label: "Code Intelligence" },
  { id: "inference-runtime", label: "Inference Runtime" },
];

/** @deprecated Category listing pages redirect to `/software/#business`. */
export const businessSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "apa-formatter", label: "APA Formatter" },
  { id: "job-matcher", label: "Job Matcher" },
];

/** @deprecated Prefer softwareTracks — kept for any transitional imports. */
export const softwareProjectGroups = softwareTracks.map((track) => ({
  id: track.id,
  label: track.label,
  projects: track.projects,
}));

/** @deprecated Prefer softwareHubSubnavItems */
export const softwareSubnavItems = softwareHubSubnavItems;
