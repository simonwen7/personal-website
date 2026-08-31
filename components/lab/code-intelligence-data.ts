/** Graph-Augmented Code Intelligence — verified URLs and portfolio copy. */

export const codeIntelligenceGithub =
  "https://github.com/simonwen7/graph_code_intelligence";

export const codeIntelligenceDemoUrl =
  "https://graph-code-intelligence.vercel.app/";

export const codeIntelligenceHero = {
  eyebrow: "02 / Graph-Augmented Code Intelligence",
  techLine: "Python · Static Analysis · Information Retrieval",
  title: "Graph-Augmented Code Intelligence Engine",
  headline: "Search code as a program, not just as text.",
  supporting:
    "A Python/C++ code-intelligence engine that turns source repositories into semantic code units and static program graphs, then combines lexical, dense, and structural retrieval into explainable context.",
} as const;

export const codeIntelligenceIdea = {
  eyebrow: "01 — The Idea",
  title: "The Idea",
  core: "Text similarity does not directly encode program structure.",
  body: "Many code retrieval systems represent repositories primarily as text. This engine instead preserves semantic program entities and explicit relationships between them.",
  question: "Can retrieval use both textual relevance and program structure?",
} as const;

export const codeIntelligenceFlatChunks = [
  "chunk 01",
  "chunk 02",
  "chunk 03",
] as const;

export const codeIntelligenceGraphExample = [
  { node: "checkout.finalize", relation: null },
  { node: "store.save_order", relation: "CALLS" },
  { node: "OrderStore", relation: "CONTAINS" },
] as const;

export const codeIntelligenceStructure = {
  eyebrow: "02 — From Code to Structure",
  title: "From Code to Structure",
  description:
    "Tree-sitter parsing turns source into semantic program entities and an explicit CodeGraph — not arbitrary text slices.",
  pipeline: [
    "Python / C++",
    "Tree-sitter",
    "Symbols + Semantic CodeUnits",
    "Static Relationships",
    "CodeGraph",
  ],
  cards: [
    {
      label: "Semantic Code Units",
      value: "Classes · Functions · Methods",
    },
    {
      label: "Language Adapters",
      value: "Python · C++",
    },
    {
      label: "Relation Model",
      value: "CONTAINS · IMPORTS · CALLS · REFERENCES · INHERITS",
    },
  ],
  qualifiers: [
    "Python supports all five relation kinds. C++ intentionally does not implement REFERENCES.",
    "IMPORTS exists in the graph model but is not used as a graph-retrieval expansion channel.",
  ],
  details: [
    "Tree-sitter parsing with deterministic qualified-name identity",
    "Relationship status: RESOLVED · PROBABLE · UNRESOLVED",
    "Semantic CodeUnits instead of arbitrary fixed chunks",
  ],
} as const;

export const codeIntelligenceRetrieval = {
  eyebrow: "03 — Retrieval Engine",
  title: "Retrieval Engine",
  description:
    "A staged ladder fuses textual ranking with bounded structural evidence, then compiles whole semantic units into a token budget.",
  ladder: [
    { stage: "Lexical", detail: "SQLite FTS5 · BM25" },
    { stage: "Dense", detail: "MiniLM · FAISS FlatIP" },
    { stage: "Hybrid", detail: "RRF" },
    { stage: "Graph", detail: "1-hop structural augmentation" },
    { stage: "Reranked", detail: "Relation evidence" },
    { stage: "Context", detail: "Token-budget compiler" },
  ],
  decisions: [
    {
      title: "RRF Fusion",
      body: "Use ranking positions instead of comparing incompatible lexical and dense raw scores directly.",
    },
    {
      title: "Bounded Graph Expansion",
      body: "Top Hybrid seeds expand through resolved structural relationships only, with graph retrieval constrained to depth 1.",
    },
    {
      title: "Structured Reranking",
      body: "Relation evidence contributes deterministically rather than using an LLM reranker.",
    },
    {
      title: "Whole-Unit Context",
      body: "Context compilation preserves complete semantic CodeUnits rather than arbitrarily truncating source.",
    },
  ],
} as const;

export const codeIntelligenceExperiment = {
  eyebrow: "04 — The Experiment",
  title: "The Experiment",
  headline: "I didn't stop at “it works.” I benchmarked the hypothesis.",
  body: "A frozen synthetic Python benchmark compares Lexical, Dense, Hybrid, Graph, and Reranked retrieval. It is designed for controlled comparison — not as a production-scale evaluation.",
  metrics: [
    { value: "24", label: "Retrieval Queries" },
    { value: "53", label: "Code Units" },
    { value: "5", label: "Retrieval Modes" },
    { value: "11", label: "Python Files" },
  ],
} as const;

export const codeIntelligenceBenchmark = {
  eyebrow: "05 — What the Benchmark Taught Me",
  title: "Dense won. The graph didn't.",
  metricLabel: "MRR@10 — 24-query Python benchmark",
  results: [
    { mode: "Dense", score: "0.8532", percent: 100 },
    { mode: "Hybrid", score: "0.7604", percent: 89 },
    { mode: "Lexical", score: "0.7431", percent: 87 },
    { mode: "Graph", score: "0.4971", percent: 58 },
    { mode: "Reranked", score: "0.4241", percent: 50 },
  ],
  explanation:
    "On the frozen benchmark, dense retrieval produced the strongest aggregate ranking. The current structural fusion displaced already strong text-ranked candidates often enough to reduce aggregate MRR@10.",
  lesson:
    "I kept the result instead of tuning the benchmark until the graph won.",
  headToHead: "Graph vs Hybrid: 3 wins · 7 ties · 14 losses",
} as const;

export const codeIntelligenceIncremental = {
  eyebrow: "06 — Incremental Indexing",
  title: "Incremental Indexing",
  description:
    "Repository changes are detected through SHA-256-based ChangeSets, allowing the engine to selectively reanalyze changed files and reuse unchanged dense vectors.",
  caveat:
    "These are work counts — not wall-clock latency or throughput claims.",
  filesAnalyzed: [
    { scenario: "No-op", full: "11", incremental: "0" },
    { scenario: "Body edit", full: "11", incremental: "1" },
    { scenario: "Symbol rename", full: "11", incremental: "2" },
    { scenario: "Add + delete", full: "11", incremental: "1" },
  ],
  vectorWork: [
    { scenario: "No-op", reused: "53", embedded: "0" },
    { scenario: "Body edit", reused: "52", embedded: "1" },
    { scenario: "Symbol rename", reused: "51", embedded: "2" },
    { scenario: "Add + delete", reused: "50", embedded: "1" },
  ],
} as const;

export const codeIntelligenceContext = {
  eyebrow: "07 — Context Without the Chatbot",
  title: "The LLM is downstream, not the engine.",
  description:
    "The engine compiles ranked CodeUnits into a deterministic, token-budgeted CompiledContext. There is no LLM answer-generation layer in the engine itself.",
  preserves: [
    "Whole CodeUnits",
    "Duplicate suppression",
    "Overlapping-source suppression",
    "Greedy skip-to-fit",
    "No source truncation",
    "Omission diagnostics",
  ],
  flow: [
    { label: "#1 selected", tone: "keep" as const },
    { label: "#2 overlap → omitted", tone: "omit" as const },
    { label: "#3 selected", tone: "keep" as const },
    { label: "#4 oversized → omitted", tone: "omit" as const },
  ],
} as const;

export const codeIntelligenceProof = {
  eyebrow: "08 — Engineering Proof",
  title: "Engineering Proof",
  metrics: [
    { value: "286", label: "Automated Tests" },
    { value: "2", label: "Language Adapters" },
    { value: "5", label: "Relation Types" },
    { value: "~8.2K", label: "Engine LOC", hint: "project src/ Python only" },
  ],
  checks: ["Pytest ✓", "Ruff ✓", "Format ✓", "Mypy ✓", "CI ✓"],
  breakdown: "253 unit · 33 integration · 286 total",
} as const;
