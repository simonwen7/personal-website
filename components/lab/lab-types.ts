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
  /** Compact card / skeleton maturity action label */
  previewCta?: string;
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

export type SoftwareExperienceProofPoint =
  | {
      type: "metric";
      value: string;
      label: string;
    }
  | {
      type: "relation";
      text: string;
    };

export type SoftwareHubExperienceEntry = {
  number: string;
  role: string;
  organization: string;
  organizationContext: string;
  period: string;
  description: string;
  achievements: readonly [string, string];
  tags: readonly string[];
  proofPoints: readonly SoftwareExperienceProofPoint[];
};

export type HubExperienceAffiliation = {
  name: string;
  role: string;
  description: string;
};

/** Shared hub experience row — Software and Robotics. */
export type HubExperienceEntry = {
  number: string;
  role: string;
  organization: string;
  organizationContext?: string;
  period: string;
  description: string;
  achievements?: readonly string[];
  tags?: readonly string[];
  proofPoints?: readonly SoftwareExperienceProofPoint[];
  affiliations?: readonly HubExperienceAffiliation[];
};

export type RoboticsJourneyAward = {
  title: string;
  event: string;
  context?: string;
};

export type RoboticsJourneyAffiliation = {
  name: string;
  role: string;
  description: string;
};

export type RoboticsJourneyHighlight = {
  label: string;
  detail: string;
};

export type RoboticsJourneyEntry = {
  id: string;
  period: string;
  stage: string;
  organization?: string;
  category?: string;
  description?: string;
  context?: string;
  awards?: readonly RoboticsJourneyAward[];
  bullets?: readonly string[];
  highlight?: RoboticsJourneyHighlight;
  tags?: readonly string[];
  affiliations?: readonly RoboticsJourneyAffiliation[];
};

export type RoboticsArchiveEra = "vex" | "frc";

export type RoboticsBookMedia = {
  id: string;
  src: string;
  alt: string;
  kind: "certificate" | "photo";
  caption: string;
  captionDetail?: string;
  /** Defaults: certificate=contain, photo=cover */
  fit?: "contain" | "cover";
  /** Optional object-position for cover crops */
  objectPosition?: string;
};

export type RoboticsBookSpread = {
  id: string;
  chapter: string;
  year: number;
  left: RoboticsBookMedia;
  /** Absent only on the final single-image closing spread */
  right?: RoboticsBookMedia;
  /** Quiet closing copy on an empty right page */
  closingNote?: {
    line1: string;
    line2: string;
  };
};

/** @deprecated Legacy rail item shape — unused by photo book */
export type RoboticsArchiveSize = "featured" | "medium" | "regular";

export type RoboticsArchiveItem = {
  id: string;
  src: string;
  alt: string;
  meta: string;
  caption: string;
  captionDetail?: string;
  era: RoboticsArchiveEra;
  kind: "certificate" | "photo";
  size: RoboticsArchiveSize;
};

/** @deprecated Prefer RoboticsBookSpread */
export type RoboticsArchiveSlot = RoboticsArchiveItem;
