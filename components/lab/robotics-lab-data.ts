import type {
  LabSubnavItem,
  RoboticsBookSpread,
} from "./lab-types";

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
        title: "VEX Gold Award",
        event: "Asia-Pacific Robotics Championship 2015",
        context: "Melbourne, Australia · International",
      },
      {
        title: "First Prize",
        event: "World Adolescent Robot Contest 2015",
        context: "VEX Robotics Engineering Challenge",
      },
      {
        // Original Chinese event title on certificate:
        // 第六届青少年机器人活动暨亚洲机器人锦标赛中国区选拔赛
        title: "Third Place",
        event:
          "China Qualifier for the 6th Asia-Pacific Robotics Championship",
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
      "Supported robot programming and software debugging; Team 9785 advanced to the FRC Championship in Houston.",
    ],
    highlight: {
      label: "Team 9785",
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
 * Robotics Archive — digital photo book spreads.
 * 8 spreads × 2 equal frames + 1 final spread × 1 frame = 17 images.
 * Paths resolve under public/media/robotics/archive/.
 */
export const roboticsArchiveBookSpreads: readonly RoboticsBookSpread[] = [
  {
    id: "beginning",
    chapter: "VEX · Beginning",
    year: 2015,
    left: {
      id: "vex-asia-pacific-gold",
      src: "/media/robotics/archive/vex/vex-asia-pacific-gold-award.jpg",
      alt: "Asia-Pacific Robotics Championship 2015 VEX Gold Award certificate",
      kind: "certificate",
      caption: "VEX Gold Award",
      captionDetail: "Asia-Pacific Robotics Championship 2015",
    },
    right: {
      id: "vex-competition-field",
      src: "/media/robotics/archive/vex/vex-competition-field.jpg",
      alt: "VEX competition field during a match",
      kind: "photo",
      caption: "VEX Competition",
      captionDetail: "2015",
    },
  },
  {
    id: "team-8865a",
    chapter: "VEX · Team 8865A",
    year: 2015,
    left: {
      id: "vex-world-adolescent",
      src: "/media/robotics/archive/vex/vex-world-adolescent-first-prize.jpg",
      alt: "World Adolescent Robot Contest 2015 First Prize certificate",
      kind: "certificate",
      caption: "First Prize",
      captionDetail: "World Adolescent Robot Contest 2015",
    },
    right: {
      id: "vex-team-8865a-robot",
      src: "/media/robotics/archive/vex/vex-team-8865a-robot.jpg",
      alt: "VEX Team 8865A competition robot",
      kind: "photo",
      caption: "VEX Team 8865A",
      captionDetail: "Competition Robot",
      objectPosition: "center 55%",
    },
  },
  {
    id: "building-learning",
    chapter: "VEX · Building & Learning",
    year: 2015,
    left: {
      id: "vex-workshop",
      src: "/media/robotics/archive/vex/vex-workshop.jpg",
      alt: "VEX workshop with robot parts and equipment",
      kind: "photo",
      caption: "Building & Preparation",
      captionDetail: "VEX Robotics",
    },
    right: {
      id: "vex-technical-review",
      src: "/media/robotics/archive/vex/vex-technical-review.jpg",
      alt: "VEX robot review during competition",
      kind: "photo",
      caption: "Technical Review",
      captionDetail: "VEX Competition",
      objectPosition: "center 40%",
    },
  },
  {
    id: "vex-to-frc",
    chapter: "VEX → FRC",
    year: 2017,
    left: {
      id: "vex-china-qualifier",
      src: "/media/robotics/archive/vex/vex-china-qualifier-third-place.jpg",
      alt: "China Qualifier Third Place certificate for the 6th Asia-Pacific Robotics Championship",
      kind: "certificate",
      caption: "Third Place",
      captionDetail:
        "China Qualifier for the 6th Asia-Pacific Robotics Championship",
    },
    right: {
      id: "frc-6162-drive-team-badge",
      src: "/media/robotics/archive/frc/frc-6162-drive-team-badge.jpg",
      alt: "FRC Team 6162 CHARGED UP Drive Team badge",
      kind: "photo",
      caption: "FRC Team 6162",
      captionDetail: "Drive Team",
      fit: "contain",
    },
  },
  {
    id: "frc-6162",
    chapter: "FRC · Team 6162",
    year: 2023,
    left: {
      id: "frc-6162-robot",
      src: "/media/robotics/archive/frc/frc-6162-robot.jpg",
      alt: "FRC Team 6162 robot",
      kind: "photo",
      caption: "FRC Team 6162",
      captionDetail: "Competition Robot",
      objectPosition: "center 35%",
    },
    right: {
      id: "frc-6162-drive-operation",
      src: "/media/robotics/archive/frc/frc-6162-drive-operation.jpg",
      alt: "FRC Team 6162 drive-team operation",
      kind: "photo",
      caption: "Drive Team",
      captionDetail: "FRC Team 6162",
      objectPosition: "center 30%",
    },
  },
  {
    id: "frc-competition",
    chapter: "FRC · Competition",
    year: 2025,
    left: {
      id: "frc-reefscape-arena",
      src: "/media/robotics/archive/frc/frc-reefscape-arena.jpg",
      alt: "FRC competition arena during REEFSCAPE",
      kind: "photo",
      caption: "FRC Competition",
      captionDetail: "REEFSCAPE",
      objectPosition: "center 45%",
    },
    right: {
      id: "frc-control-station",
      src: "/media/robotics/archive/frc/frc-control-station.jpg",
      alt: "FRC control-station view of the competition field",
      kind: "photo",
      caption: "Competition Control",
      captionDetail: "FRC",
    },
  },
  {
    id: "frc-assistant-coach",
    chapter: "FRC · Assistant Coach",
    year: 2025,
    left: {
      id: "frc-10027-coach-badge",
      src: "/media/robotics/archive/frc/frc-10027-coach-badge.jpg",
      alt: "FRC Team 10027 REEFSCAPE Coach badge",
      kind: "photo",
      caption: "Assistant Coach",
      captionDetail: "FRC Team 10027",
      fit: "contain",
    },
    right: {
      id: "frc-reefscape-field",
      src: "/media/robotics/archive/frc/frc-reefscape-field.jpg",
      alt: "FRC REEFSCAPE field with Team 10027 visible",
      kind: "photo",
      caption: "FRC Competition",
      captionDetail: "REEFSCAPE",
    },
  },
  {
    id: "coaching-competition",
    chapter: "FRC · Coaching & Competition",
    year: 2025,
    left: {
      id: "frc-robot-01",
      src: "/media/robotics/archive/frc/frc-robot-01.jpg",
      alt: "FRC competition robot on a cart",
      kind: "photo",
      caption: "Competition Robot",
      captionDetail: "FRC",
      objectPosition: "center 40%",
    },
    right: {
      id: "frc-competition-team",
      src: "/media/robotics/archive/frc/frc-competition-team.jpg",
      alt: "Competition moment at an FRC event",
      kind: "photo",
      caption: "Competition Moment",
      captionDetail: "FRC",
      objectPosition: "center 25%",
    },
  },
  {
    id: "continuing-journey",
    chapter: "FRC · Mentorship",
    year: 2025,
    left: {
      id: "frc-technical-discussion",
      src: "/media/robotics/archive/frc/frc-technical-discussion.jpg",
      alt: "Technical discussion during an FRC competition",
      kind: "photo",
      caption: "Technical Discussion",
      captionDetail: "FRC · Assistant Coach",
      objectPosition: "center 30%",
    },
    closingNote: {
      line1: "2015 — 2025",
      line2: "A Decade in Robotics",
    },
  },
] as const;

export const roboticsArchiveSliderMilestones = [
  { year: 2015, progress: 1 },
  { year: 2017, progress: 4 },
  { year: 2023, progress: 5 },
  { year: 2025, progress: 9 },
] as const;

export const roboticsSubnavItems: LabSubnavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "journey", label: "Journey" },
  { id: "archive", label: "Archive" },
];
