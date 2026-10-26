import type {
  LabProject,
  LabSubnavItem,
  SoftwareHubExperienceEntry,
  SoftwareTrack,
} from "@/components/lab/lab-types";

const systemsProjects: LabProject[] = [
  {
    id: "actionworld-lite",
    number: "01",
    title: "ActionWorld Lite",
    summary:
      "ActionWorld Lite is a lightweight, action-conditioned visual world model for simulated physical interactions. Given two consecutive RGB observations and a pusher action, it predicts the object's next pose and contact state, applies a contact-gated XY residual, and compares the predictions with MuJoCo physics. The trained models run on CPU through a publicly deployed interactive web application.",
    technologies: ["PyTorch", "MuJoCo", "FastAPI", "Vercel"],
    href: "/software/systems/actionworld-lite/",
    previewCta: "Explore Project",
    githubHref: "https://github.com/simonwen7/actionworld-lite",
    liveDemoHref: "https://actionworld-lite.vercel.app",
  },
  {
    id: "streamforge",
    number: "02",
    title: "StreamForge",
    summary:
      "Java, Spring Boot, Kafka, and PostgreSQL telemetry processing, with transactional outbox delivery, idempotent processing, failure recovery, and a browser-local pipeline simulator.",
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
    href: "/software/systems/streamforge/",
    previewCta: "Explore Project",
    githubHref: "https://github.com/simonwen7/StreamForge",
    liveDemoHref: "https://stream-forge-eight-woad.vercel.app/",
  },
  {
    id: "quantforge",
    number: "03",
    title: "QuantForge",
    summary:
      "A deterministic event-driven backtesting engine with causal signal timing, Decimal portfolio accounting, and a six-workspace research terminal over reproducible synthetic scenarios.",
    technologies: ["Python", "FastAPI", "Next.js", "Event-Driven Simulation"],
    href: "/software/systems/quantforge/",
    previewCta: "Explore Project",
    githubHref: "https://github.com/simonwen7/QuantForge",
    liveDemoHref: "https://quantforge-web-ashy.vercel.app/",
  },
  {
    id: "local-first-workspace",
    number: "04",
    title: "Local-First Collaborative Workspace",
    summary:
      "A collaborative editor built on a custom operation-based CRDT, with IndexedDB durability and a two-replica browser lab that demonstrates deterministic convergence under concurrent edits.",
    technologies: ["React", "TypeScript", "Custom CRDT", "IndexedDB"],
    href: "/software/systems/local-first-workspace/",
    previewCta: "Explore Project",
    githubHref:
      "https://github.com/simonwen7/local-first-collaborative-workspace",
    liveDemoHref: "https://local-first-collaborative-workspace.vercel.app/",
  },
  {
    id: "artifact-store",
    number: "05",
    title: "AI Artifact Store",
    summary:
      "A C++20 distributed artifact store for AI/ML workloads, built around content addressing, resumable transfer, replication, and failure recovery.",
    technologies: ["C++20", "PostgreSQL", "Boost.Asio", "Distributed Storage"],
    href: "/software/systems/ai-artifact-store/",
    previewCta: "Explore Project",
    githubHref: "https://github.com/simonwen7/ai-artifact-store",
  },
  {
    id: "code-intelligence",
    number: "06",
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
    previewCta: "Explore Project",
    githubHref: "https://github.com/simonwen7/graph_code_intelligence",
  },
  {
    id: "inference-runtime",
    number: "07",
    title: "Adaptive AI Inference Runtime",
    summary:
      "A C++20 single-host inference control plane with workload-aware scheduling, residency-aware routing, worker-local dynamic batching, and optional real llama.cpp GGUF execution.",
    technologies: [
      "C++20",
      "Concurrency",
      "AI Infrastructure",
      "Scheduling",
      "Model Serving",
    ],
    href: "/software/systems/inference-runtime/",
    previewCta: "Explore Project",
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
    previewCta: "Explore Project",
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
    previewCta: "Explore Project",
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
    focusLine: "Infrastructure · Events · Storage · Retrieval · Runtime",
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
    role: "Software Engineer",
    organization: "Tangam Systems",
    organizationContext: "Software company for casino analytics",
    period: "May 2026 — Aug 2026",
    description:
      "Contributed full-stack features, API integrations, and product improvements to an existing casino analytics platform using React, Next.js, TypeScript, Python, and FastAPI.",
    achievements: [
      "Implemented frontend and backend portions of an upload-driven Configuration feature, integrating React/Next.js interfaces with Python/FastAPI services.",
      "Improved casino-map workflows through data transformation, API integration, fewer redundant frontend requests, and reduced response payload volume.",
      "Debugged map loading, HTTP 404/500 errors, UI interactions, and Patron Insights / Top 10 Rated display and ranking issues.",
      "Authored Python API and integration tests, supported regression verification, and submitted changes through GitLab merge requests and review.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Python", "FastAPI"],
    proofPoints: [{ type: "relation", text: "Frontend · Backend" }],
  },
  {
    number: "02",
    role: "Software Engineer in Test",
    organization: "Propel Holdings",
    organizationContext: "AI-powered fintech company",
    period: "Sep 2025 — Dec 2025",
    description:
      "Developed JavaScript test automation for financial application workflows, validating user-facing functionality, backend behavior, and data consistency.",
    achievements: [
      "Authored Cypress and Cucumber end-to-end tests for authentication, application flows, forms, charts, and regression scenarios.",
      "Wrote automated assertions validating API responses and application business rules.",
      "Verified consistency across UI displays, API data, and SQL-backed records using the team's existing SQL tools.",
      "Supported ticket-based quality reviews and regression testing within established CI workflows.",
    ],
    tags: ["JavaScript", "Cypress", "Cucumber", "API Testing", "SQL"],
    proofPoints: [{ type: "relation", text: "UI · API · SQL" }],
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
      { type: "relation", text: "Python" },
      { type: "relation", text: "Azure AI" },
      { type: "relation", text: "Azure SQL" },
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
  { id: "lifecycle", label: "Lifecycle" },
  { id: "policies", label: "Policies" },
  { id: "batching", label: "Batching" },
  { id: "residency", label: "Residency" },
  { id: "backend", label: "Backend" },
  { id: "reliability", label: "Reliability" },
  { id: "proof", label: "Proof" },
];

/** ActionWorld Lite project subnav */
export const actionworldLiteSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Challenge" },
  { id: "architecture", label: "How It Works" },
  { id: "model", label: "AI Prediction" },
  { id: "residual", label: "Motion Correction" },
  { id: "evaluation", label: "Research Results" },
  { id: "demo", label: "Live Demo" },
  { id: "proof", label: "Testing & Limitations" },
];

/** StreamForge project subnav */
export const streamforgeSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "architecture", label: "Architecture" },
  { id: "outbox", label: "Outbox" },
  { id: "reliability", label: "Reliability" },
  { id: "worker", label: "Worker" },
  { id: "analytics", label: "Analytics" },
  { id: "demo", label: "Demo" },
  { id: "proof", label: "Proof" },
];

/** QuantForge project subnav */
export const quantforgeSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "architecture", label: "Architecture" },
  { id: "causality", label: "Causality" },
  { id: "determinism", label: "Determinism" },
  { id: "ledger", label: "Ledger" },
  { id: "terminal", label: "Terminal" },
  { id: "proof", label: "Proof" },
];

/** Local-First Collaborative Workspace project subnav */
export const localFirstWorkspaceSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "convergence", label: "Convergence" },
  { id: "identity", label: "Identity" },
  { id: "persistence", label: "Persistence" },
  { id: "inspector", label: "Inspector" },
  { id: "architecture", label: "Architecture" },
  { id: "proof", label: "Proof" },
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
