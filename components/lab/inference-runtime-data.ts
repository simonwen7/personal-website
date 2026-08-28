/** Adaptive AI Inference Runtime — verified URLs and portfolio copy. */

export const inferenceRuntimeGithub =
  "https://github.com/simonwen7/adaptive_ai_inference_runtime";

export const inferenceRuntimeHero = {
  eyebrow: "03 / Adaptive AI Inference Runtime",
  techLine: "C++20 · AI Infrastructure · Scheduling",
  title: "Adaptive AI Inference Runtime",
  positioning:
    "A C++ multi-model inference runtime designed around workload-aware scheduling, dynamic batching, worker routing, and memory-constrained model residency.",
} as const;

export const inferenceRuntimeProblem = {
  eyebrow: "Runtime problem",
  headline: "When inference becomes a systems problem",
  setup: [
    "Multiple models",
    "Concurrent requests",
    "Limited compute / memory",
  ],
  questions: [
    "What should run next?",
    "Where should it run?",
    "Should compatible requests wait briefly to form a batch?",
    "Which models should remain resident in constrained memory?",
    "What happens when demand changes?",
  ],
} as const;

/** Illustrative memory example — conceptual only, not measured runtime properties. */
export const inferenceRuntimeMemoryExample = {
  label: "Conceptual resource example",
  capacity: "Worker memory budget",
  models: [
    { name: "Model A", share: 33 },
    { name: "Model B", share: 40 },
    { name: "Model C", share: 27 },
  ],
  note: "Total demand can exceed what can remain resident at once — residency becomes a runtime decision.",
} as const;

export const inferenceRuntimePipeline = [
  "Clients / Requests",
  "Admission",
  "Request Management",
  "Scheduler",
  "Router",
  "Workers",
  "Model Management",
  "Execution Backend",
] as const;

export const inferenceRuntimeDesignNote =
  "Runtime policy ≠ model execution — admission, queueing, scheduling, batching, routing, residency, and overload handling belong to the runtime architecture; the execution backend performs neural computation.";

export const inferenceRuntimeBackendNote =
  "Execution is isolated behind a backend boundary, with llama.cpp as the intended real-model backend.";

export const inferenceRuntimeAdaptiveDecisions = [
  {
    number: "01",
    title: "Scheduling",
    body: "Workload-aware scheduling can consider queue state, waiting time, model locality, estimated request cost, batch opportunities, and deadlines.",
  },
  {
    number: "02",
    title: "Dynamic batching",
    body: "Compatible requests can wait inside a bounded window to form a larger batch — trading throughput against latency and time-to-first-token.",
  },
  {
    number: "03",
    title: "Routing",
    body: "Worker selection can balance current load against whether the requested model is already resident — the central model locality vs worker load trade-off.",
  },
  {
    number: "04",
    title: "Model residency",
    body: "When multiple models compete for finite memory, the runtime decides which models remain loaded and which are evicted or reloaded as demand changes.",
  },
] as const;

export const inferenceRuntimeAdaptiveMeaning = [
  "Workload-aware scheduling",
  "Residency-aware routing",
  "Cost-aware model residency / eviction",
  "Dynamic batch formation",
] as const;

export const inferenceRuntimeTradeoffs = [
  {
    title: "Throughput ↔ Latency",
    body: "Longer batching windows may improve efficiency but increase waiting and time-to-first-token.",
  },
  {
    title: "Model locality ↔ Worker load",
    body: "A worker with the model already resident may have a longer queue, while an idle worker may require an expensive model load.",
  },
  {
    title: "Efficiency ↔ Starvation",
    body: "Reordering and grouping requests may improve batching and locality, but unpopular models must not wait indefinitely.",
  },
] as const;

export const inferenceRuntimeHighlights = [
  {
    number: "01",
    title: "Policy ≠ mechanism",
    body: "Scheduler, router, model management, and execution have explicit responsibilities — runtime policy stays separate from model computation.",
  },
  {
    number: "02",
    title: "Synthetic + real execution",
    body: "The architecture separates deterministic infrastructure evaluation from eventual real-model execution behind a backend boundary.",
  },
  {
    number: "03",
    title: "Bounded systems",
    body: "Queues and backpressure are part of the runtime design so overload is handled explicitly rather than by allowing unbounded backlog.",
  },
] as const;

export const inferenceRuntimeBaselineNote =
  "Adaptive decisions are designed to be evaluated against simple baselines — FIFO vs workload-aware scheduling, batch size 1 vs dynamic batching, round-robin vs residency-aware routing, LRU vs cost-aware residency.";

export const inferenceRuntimeTechLabels = [
  "C++",
  "AI Infrastructure",
  "Scheduling",
  "Model Serving",
  "Concurrency",
] as const;
