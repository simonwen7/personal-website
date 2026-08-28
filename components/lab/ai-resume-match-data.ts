/** Verified AI Resume Match product URLs and reference content. */

export const aiResumeMatchLiveUrl =
  "https://ai-job-matcher-11.vercel.app/";

export const aiResumeMatchGithub =
  "https://github.com/simonwen7/ai-job-matcher";

export const aiResumeMatchHero = {
  productName: "AI Resume Match",
  trackLabel: "Business & Product Engineering",
  tagline: "See how your resume aligns with the job you're targeting.",
  description:
    "Upload or paste your resume, add a job description, and get structured feedback on strengths, gaps, and possible improvements.",
  technologies: ["Next.js", "TypeScript", "OpenAI"],
  inputFormats: "PDF · DOCX · TXT",
} as const;

export const aiResumeMatchWorkflowSteps = [
  {
    number: "01",
    title: "Upload or Paste",
    copy: "Resume input via text, PDF, DOCX, or TXT.",
  },
  {
    number: "02",
    title: "Add the Job",
    copy: "Paste the job description you want to compare against.",
  },
  {
    number: "03",
    title: "Analyze",
    copy: "One structured AI analysis compares resume and job description.",
  },
  {
    number: "04",
    title: "Understand",
    copy: "Match score, strengths, missing skills, and suggestions.",
  },
] as const;

export const aiResumeMatchHighlights = [
  {
    number: "01",
    title: "Understand what already aligns",
    body: "The result surfaces resume strengths that appear relevant to the pasted job description — relevant experience and existing alignment, not recruiter validation.",
  },
  {
    number: "02",
    title: "See the gaps",
    body: "Potential missing skills and weaker areas appear in a scannable format. Missing-skill tags highlight what may be missing — the analysis is probabilistic, not definitive.",
  },
  {
    number: "03",
    title: "Know what to improve next",
    body: "Actionable suggestions go beyond a score. When a requirement is genuinely missing, the product suggests learning it, gaining experience, building a real project, or emphasizing adjacent verified experience — not fabricating qualifications.",
  },
] as const;

/** Illustrative demo content — not a real user's analysis. */
export const aiResumeMatchDemoResult = {
  scoreLabel: "Match Score",
  scoreSubLabel: "Resume–job alignment",
  scoreValue: "72",
  scoreCaveat: "AI-generated guidance, not an ATS or hiring prediction.",
  summary:
    "Illustrative example — your resume shows relevant backend experience, but the role emphasizes cloud deployment skills more heavily.",
  strengths: [
    "API development experience",
    "Python and TypeScript stack",
    "Team project delivery",
  ],
  missingSkills: ["AWS", "CI/CD pipelines", "Container orchestration"],
  suggestions: [
    "Highlight any deployment or DevOps-adjacent coursework",
    "Consider a small cloud deployment project to demonstrate AWS familiarity",
    "Emphasize adjacent infrastructure experience from prior roles",
  ],
} as const;

export const aiResumeMatchAnalysisNote =
  "Structured AI analysis — one model call per comparison, focused on actionable feedback.";

export const aiResumeMatchEngineeringNote = "24 automated tests";
