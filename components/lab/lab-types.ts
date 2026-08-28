export type LabAccent = "cyan" | "emerald" | "violet";

export type LabSubnavItem = {
  id: string;
  label: string;
  /** If set, navigate to this route instead of scrolling to `#id`. */
  href?: string;
};

export type LabProjectStatus =
  | "Available"
  | "Completed"
  | "Planned"
  | "In progress";

export type LabProjectMetric = {
  label: string;
  value: string;
};

export type LabProject = {
  id: string;
  number: string;
  title: string;
  summary?: string;
  status?: LabProjectStatus | string;
  technologies?: string[];
  /** Project subpage route */
  href?: string;
  caseStudyHref?: string;
  githubHref?: string;
  liveDemoHref?: string;
  highlights?: string[];
  metrics?: LabProjectMetric[];
  /** Optional media/demo region; omit to collapse cleanly. */
  mediaLabel?: string;
};

export type SoftwareTrack = {
  id: string;
  label: string;
  shortLabel: string;
  href: string;
  focusLine: string;
  accent: LabAccent;
  projects: LabProject[];
};

export type LabProjectGroup = {
  id: string;
  label: string;
  projects: LabProject[];
};

export type LabExperienceEntry = {
  role: string;
  organization: string;
  period: string;
  highlights?: string[];
  /** When true, treat as layout scaffold — not final public content. */
  isPlaceholder?: boolean;
};
