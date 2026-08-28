/** Verified Forma APA product URLs and reference values. */

export const formaApaLiveUrl = "https://apa-doc-formatter.vercel.app/";

export const formaApaGithub = "https://github.com/simonwen7/apa-doc-formatter";

export const formaApaHero = {
  productName: "Forma APA",
  secondaryLabel: "APA Document Formatter",
  tagline: "APA formatting without rewriting your work.",
  audience:
    "Built for graduate students, PhD researchers, and university students preparing APA-style Word papers.",
  scope: "APA 7 Student Paper · .docx",
  technologies: ["React", "FastAPI", "Python", "python-docx"],
} as const;

export const formaApaPromise = {
  headline: "Your formatting changes. Your words don't.",
} as const;

export const formaApaWorkflowSteps = [
  {
    number: "01",
    title: "Upload",
    copy: "Existing .docx",
  },
  {
    number: "02",
    title: "Analyze",
    copy: "Detect formatting and review-required APA issues",
  },
  {
    number: "03",
    title: "Fix Safely",
    copy: "Apply only deterministic formatting corrections",
  },
  {
    number: "04",
    title: "Verify",
    copy: "Confirm text integrity and re-check supported formatting",
  },
  {
    number: "05",
    title: "Download",
    copy: "Verified corrected Word document",
  },
] as const;

export const formaApaSafeExamples = [
  "Margins",
  "Double spacing",
  "Fonts",
  "Indentation",
  "Heading formatting",
  "Reference-list formatting",
] as const;

export const formaApaAuthorExamples = [
  "Citation wording",
  "Reference content",
  "Missing source information",
  "Semantic APA decisions",
] as const;

export const formaApaVerifyLoop = [
  "Apply supported formatting",
  "Verify user-authored text unchanged",
  "Verify document preservation",
  "Re-analyze output",
  "Require supported production-safe issues = 0",
  "Allow verified download",
] as const;

export const formaApaInlineProof = [
  { value: "147", label: "APA-related rules audited" },
  { value: "55", label: "Production-safe formatting rules" },
  { value: "255", label: "Backend tests" },
  {
    value: "0",
    label: "LLM tokens used",
    hint: "Deterministic rule-based engine · No LLM calls",
  },
] as const;

export const formaApaDeterministicNote =
  "Deterministic by design — Forma APA analyzes and fixes formatting through a rule-based engine rather than generative rewriting.";
