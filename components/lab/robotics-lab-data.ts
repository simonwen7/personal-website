import type { LabSubnavItem } from "./lab-types";

export const roboticsOverviewMeta = [
  { label: "Journey", value: "VEX · FRC · University robotics" },
  { label: "Focus", value: "Competition · Leadership · Mentorship" },
  { label: "Contains", value: "Robotics journey · Archive" },
] as const;

export const roboticsProgressionSteps = [
  "VEX Competitor",
  "FRC Team Captain",
  "FRC Assistant Coach",
  "University Robotics",
] as const;

/** Unified chronological robotics journey — each period appears once. */
export const roboticsJourneyEntries = [
  {
    id: "vex-2015-2016",
    period: "2015–2016",
    stage: "Team Member",
    organization: "VEX Team 8865A",
    category: "VEX Robotics",
    awards: [
      {
        title: "Gold Award",
        event: "2015 Asia-Pacific Robotic Championship",
        context: "International",
      },
      {
        title: "First Prize",
        event: "2015 World Adolescent Robot Contest · VEX",
        context: "International",
      },
      {
        title: "Invited Participant",
        event: "2015 Beijing Robotics Conference",
      },
      {
        title: "Third Place",
        event: "2015–2016 VEX China Regional Challenge",
      },
    ],
  },
  {
    id: "vex-2016-2017",
    period: "2016–2017",
    stage: "VEX Team Lead",
    category: "VEX Robotics",
    awards: [
      {
        title: "Third Prize",
        event: "Fujian Provincial VEX Competition",
      },
    ],
  },
  {
    id: "frc-2023-2024",
    period: "2023–2024",
    stage: "Team Captain",
    organization: "FRC Team 6162",
    category: "First Robotics Competition (FRC)",
    description:
      "Led robot design and build, contributed to the robot control system, and operated the robot during competition.",
    context: "Competed in Ontario.",
    tags: ["Robot Design", "Robot Build", "Control System", "Robot Operation"],
  },
  {
    id: "frc-2024-2025",
    period: "2024–2025",
    stage: "Assistant Coach",
    organization: "FRC Teams 9785 & 10027",
    category: "FRC",
    description:
      "Mentored two FRC teams through robot design and software development, guiding students through engineering decisions, programming, and technical troubleshooting.",
    bullets: [
      "Guided students through robot architecture and design decisions throughout the build and competition season.",
      "Supported robot programming and software debugging, with Team 10027 advancing to the FRC Championship in Houston.",
    ],
    highlight: {
      label: "Team 10027",
      detail: "FRC Championship · Houston",
    },
    tags: [
      "Robot Design",
      "Programming",
      "Technical Mentorship",
      "FRC",
      "Engineering Leadership",
    ],
  },
  {
    id: "university-present",
    period: "Present",
    stage: "University Robotics",
    organization: "University of Waterloo",
    affiliations: [
      {
        name: "UW Robotics Team",
        role: "Software Subteam Member",
        description:
          "Recently joined the software subteam, with a focus on robotics software and autonomous systems.",
      },
      {
        name: "Waterloo RoboHub",
        role: "Member",
        description:
          "Recently joined Waterloo's robotics research community, gaining exposure to university-level robotics research and advanced robotic systems.",
      },
    ],
  },
] as const;

/**
 * Robotics Archive — certificates and photos.
 * Connect assetPath when real media is available.
 */
export const roboticsArchiveSlots = [
  {
    id: "cert-asia-pacific",
    kind: "certificate" as const,
    placeholderLabel: "Certificate",
    title: "2015 Asia-Pacific Robotic Championship",
    subtitle: "Gold Award Certificate",
    layout: "certificate" as const,
    // assetPath: "/media/robotics/certificates/asia-pacific-gold.jpg",
  },
  {
    id: "cert-beijing",
    kind: "certificate" as const,
    placeholderLabel: "Certificate",
    title: "2015 Beijing Robotics Conference",
    subtitle: "Participation / Invitation Certificate",
    layout: "certificate" as const,
    // Provisional event name — verify against original certificate when supplied.
    // assetPath: "/media/robotics/certificates/beijing-robotics-conference.jpg",
  },
  {
    id: "photo-01",
    kind: "photo" as const,
    placeholderLabel: "VEX Robotics",
    layout: "photo" as const,
    // assetPath: "/media/robotics/gallery/vex-competition-01.jpg",
  },
  {
    id: "photo-02",
    kind: "photo" as const,
    placeholderLabel: "VEX Robotics",
    layout: "photo" as const,
  },
  {
    id: "photo-03",
    kind: "photo" as const,
    placeholderLabel: "FRC Team 6162",
    layout: "photo" as const,
    // assetPath: "/media/robotics/gallery/frc-6162-01.jpg",
  },
  {
    id: "photo-04",
    kind: "photo" as const,
    placeholderLabel: "FRC Competition",
    layout: "wide" as const,
  },
  {
    id: "photo-05",
    kind: "photo" as const,
    placeholderLabel: "FRC Assistant Coach",
    layout: "photo" as const,
  },
  {
    id: "photo-06",
    kind: "photo" as const,
    placeholderLabel: "Teams 9785 & 10027",
    layout: "wide" as const,
  },
] as const;

export const roboticsSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "journey", label: "Journey" },
  { id: "archive", label: "Archive" },
];
