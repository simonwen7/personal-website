import type { LabExperienceEntry, LabProject } from "@/components/lab/lab-types";

/**
 * Robotics Lab framework placeholders.
 * Do not invent projects, awards, or experience claims here.
 */
export const roboticsProjects: LabProject[] = [
  {
    id: "robotics-slot-1",
    number: "01",
    title: "Robotics project slot",
    summary: "Reserved for a future robotics build or experiment.",
  },
  {
    id: "robotics-slot-2",
    number: "02",
    title: "Robotics project slot",
    summary: "Reserved for a future robotics build or experiment.",
  },
];

export const roboticsExperienceEntries: LabExperienceEntry[] = [
  {
    role: "Robotics experience / experiment",
    organization: "To be added",
    period: "—",
    highlights: [
      "Reserved for future robotics lab work, builds, or experiments.",
    ],
    isPlaceholder: true,
  },
];

export const roboticsSubnavItems = [
  { id: "overview", label: "Overview" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
