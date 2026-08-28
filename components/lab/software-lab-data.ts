import type {
  LabExperienceEntry,
  LabProject,
  LabSubnavItem,
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
    previewCta: "Demo coming soon",
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

export const softwareExperienceEntries: LabExperienceEntry[] = [
  {
    role: "Computer Science Student",
    organization: "University of Waterloo",
    period: "Present",
    highlights: [
      "Focused on software engineering, backend systems, AI-powered tools, and full-stack products.",
    ],
  },
  {
    role: "Software experience entry",
    organization: "To be added",
    period: "—",
    highlights: [
      "Reserved for future internship / work experience details.",
    ],
    isPlaceholder: true,
  },
];

/** Hub local nav — all in-page anchors on `/software/`. */
export const softwareHubSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "systems", label: "Systems" },
  { id: "business", label: "Business" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
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
  { id: "why-graph", label: "Why Graph" },
  { id: "design", label: "Design" },
  { id: "highlights", label: "Highlights" },
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
  { id: "artifact-store-demo", label: "Demo" },
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
  { id: "contact", label: "Contact" },
];

/** @deprecated Category listing pages redirect to `/software/#business`. */
export const businessSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "apa-formatter", label: "APA Formatter" },
  { id: "job-matcher", label: "Job Matcher" },
  { id: "contact", label: "Contact" },
];

/** @deprecated Prefer softwareTracks — kept for any transitional imports. */
export const softwareProjectGroups = softwareTracks.map((track) => ({
  id: track.id,
  label: track.label,
  projects: track.projects,
}));

/** @deprecated Prefer softwareHubSubnavItems */
export const softwareSubnavItems = softwareHubSubnavItems;
