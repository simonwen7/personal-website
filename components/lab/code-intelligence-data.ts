/** Graph-Augmented Code Intelligence — verified URLs and portfolio copy. */

export const codeIntelligenceGithub =
  "https://github.com/simonwen7/graph_code_intelligence";

export const codeIntelligenceHero = {
  eyebrow: "02 / Graph-Augmented Code Intelligence",
  techLine: "Python · Static Analysis · Retrieval",
  title: "Graph-Augmented Code Intelligence Engine",
  positioning:
    "A structural code intelligence engine that treats repositories as connected program structure — not flat text chunks.",
  supporting:
    "The system combines semantic code units, program relationships, hybrid retrieval, graph-aware ranking, and context selection for repository-scale code understanding.",
} as const;

export const codeIntelligenceThesis = {
  eyebrow: "Code is more than text",
  headline: "Program structure itself is a retrieval signal.",
  body: "Lexical search finds matching terms. Semantic retrieval finds conceptually similar code. Graph-aware retrieval also uses structural relationships — calls, references, imports, inherits, and contains — as evidence beyond text similarity alone.",
} as const;

export const codeIntelligenceFlatFlow = [
  "Query",
  "Text chunks",
  "Similar code",
] as const;

export const codeIntelligenceGraphEdges = [
  { from: "AuthController", relation: "CALLS", to: "AuthService" },
  { from: "AuthService", relation: "REFERENCES", to: "TokenStore" },
] as const;

export const codeIntelligenceDesignIntro =
  "A layered pipeline separates program analysis, retrieval, ranking, and context compilation from downstream language generation.";

export const codeIntelligencePipeline = [
  "Repository",
  "Language Adapter",
  "Static Analysis",
  "Semantic Code Units",
  "Code Graph",
  "Lexical + Dense Retrieval",
  "Controlled Graph Expansion",
  "Structured Reranking",
  "Context Compiler",
  "Structured Context",
] as const;

export const codeIntelligenceDesignNote =
  "LLM ≠ Code Intelligence Engine — parsing, graph construction, retrieval, ranking, and evaluation remain independent of an optional downstream LLM consumer.";

export const codeIntelligenceRetrievalFlow = [
  "Lexical Retrieval",
  "Dense Retrieval",
  "Candidate Fusion",
  "Graph Expansion",
  "Reranking",
  "Context Selection",
] as const;

export const codeIntelligenceHighlights = [
  {
    number: "01",
    title: "Semantic code units",
    body: "Functions, classes, methods, and meaningful symbols preserve program boundaries better than arbitrary fixed text chunks.",
  },
  {
    number: "02",
    title: "Graph-augmented retrieval",
    body: "Program relationships — calls, references, imports, and inherits — can provide retrieval evidence that textual similarity alone may miss.",
  },
  {
    number: "03",
    title: "LLM outside the engine",
    body: "The intelligence pipeline is designed around deterministic program analysis, retrieval, ranking, and context construction, with an LLM acting only as an optional downstream consumer.",
  },
] as const;

export const codeIntelligenceTechLabels = [
  "Python",
  "Static Analysis",
  "Information Retrieval",
  "Graph Algorithms",
] as const;

export const codeIntelligenceArchitectureSupport = [
  "Tree-sitter",
  "SQLite",
  "BM25 / FTS5",
  "FAISS",
] as const;

export const codeIntelligenceLanguageStrategy =
  "Language-adapter architecture, beginning with Python.";

export const codeIntelligenceEvaluationNote =
  "Designed so graph-aware retrieval can be evaluated against text-only baselines rather than assumed to improve results.";
