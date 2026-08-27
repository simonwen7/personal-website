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
    status: "Completed",
    summary:
      "A C++20 content-addressed store for large AI artifacts, with resumable push/pull and multi-node replication.",
    technologies: ["C++20", "CMake", "PostgreSQL", "Boost.Asio"],
    githubHref: "https://github.com/simonwen7/ai-artifact-store",
  },
  {
    id: "code-intelligence",
    number: "02",
    title: "Graph-Augmented Code Intelligence Engine",
    status: "Planned",
  },
  {
    id: "inference-runtime",
    number: "03",
    title: "Adaptive AI Inference Runtime",
    status: "Planned",
  },
];

const businessProjects: LabProject[] = [
  {
    id: "apa-formatter",
    number: "01",
    title: "APA Document Formatter",
    status: "Available",
    summary:
      "An AI-powered document tool that detects APA formatting issues and produces a polished, formatted result.",
    technologies: ["Python", "FastAPI", "React", "Vite", "python-docx"],
    // caseStudyHref temporarily omitted — legacy /projects/apa-formatter/ is light-theme
    githubHref: "https://github.com/simonwen7/apa-doc-formatter",
    liveDemoHref: "https://apa-doc-formatter.vercel.app/",
  },
  {
    id: "job-matcher",
    number: "02",
    title: "Job Matcher Agent",
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
    href: "/software/systems/",
    focusLine: "Infrastructure · Storage · Retrieval · Runtime",
    accent: "cyan",
    projects: systemsProjects,
  },
  {
    id: "business",
    label: "Business & Product Engineering",
    shortLabel: "Business",
    href: "/software/business/",
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

/** Hub local nav: Overview/Experience/Contact scroll; Systems/Business route. */
export const softwareHubSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "systems", label: "Systems", href: "/software/systems/" },
  { id: "business", label: "Business", href: "/software/business/" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const systemsSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "artifact-store", label: "Artifact Store" },
  { id: "code-intelligence", label: "Code Intelligence" },
  { id: "inference-runtime", label: "Inference Runtime" },
  { id: "contact", label: "Contact" },
];

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
