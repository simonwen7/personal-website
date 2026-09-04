/** Adaptive AI Inference Runtime — verified portfolio facts from project audit. */

export const inferenceRuntimeGithub =
  "https://github.com/simonwen7/adaptive_ai_inference_runtime";

/**
 * Public interactive demo URL.
 * Leave undefined until a verified public deployment URL is supplied.
 * Do not invent a Vercel domain.
 */
export const inferenceRuntimeDemoUrl: string | undefined =
  "https://adaptiveaiinferenceruntime.vercel.app/";

export const inferenceRuntimeHero = {
  eyebrow: "03 / Adaptive AI Inference Runtime",
  techLine: "C++20 · Concurrency · AI Infrastructure",
  title: "Adaptive AI Inference Runtime",
  headline: "Schedule, batch, route, and serve inference under bounded resources.",
  supporting:
    "A C++20 single-host inference control plane with bounded admission, workload-aware scheduling, residency-aware routing, worker-local dynamic batching, model residency and eviction, plus optional real llama.cpp GGUF execution on Apple Metal.",
} as const;

export const inferenceRuntimeProblem = {
  eyebrow: "01 — The Runtime Problem",
  title: "The Runtime Problem",
  core: "Once inference requests compete for bounded queue capacity, workers, batch opportunities, and resident model resources, “run the model” becomes a scheduling and resource-management problem.",
  tensions: [
    { left: "Throughput", right: "Waiting" },
    { left: "Load balance", right: "Model residency" },
    { left: "Memory pressure", right: "Reload cost" },
    { left: "Useful work", right: "Overload / cancellation" },
  ],
  flow: ["Requests", "Runtime Policies", "Workers / Models / Backend"],
} as const;

export const inferenceRuntimeLifecycle = {
  eyebrow: "02 — Request Lifecycle",
  title: "Request Lifecycle",
  description:
    "One asynchronous HTTP/programmatic path feeds a deterministic control plane: admit, schedule, route, batch, resolve residency, execute, and return a single terminal result.",
  pipeline: [
    "Admission",
    "Scheduler",
    "Router",
    "Worker",
    "Batch",
    "Residency",
    "Backend",
    "Result",
  ],
  states: {
    primary: ["Received", "Queued", "Running"],
    queuedBranches: ["Rejected", "Cancelled", "TimedOut"],
    runningBranches: ["Completed", "Failed", "Cancelled", "TimedOut"],
  },
  invariant: "First terminal transition wins.",
  notes: [
    "Shared request lifetime with mutex/CV state coordination",
    "One routing thread · one execution thread per Worker",
    "Asynchronous HTTP layer over the control plane",
  ],
} as const;

export const inferenceRuntimePolicies = {
  eyebrow: "03 — Scheduling & Routing",
  title: "Scheduling & Routing",
  description:
    "Scheduling chooses which request is eligible next. Routing chooses which Worker receives it. They are separate policy layers.",
  adaptiveNote:
    "Adaptive here means policy-driven runtime decisions, not a learned scheduler.",
  schedulers: [
    {
      name: "FIFO",
      purpose: "Deterministic oldest-request baseline.",
    },
    {
      name: "Workload Aware",
      purpose:
        "Prefer the largest currently queued same-model group, then oldest group → lexical model ID → oldest request in group.",
      starvation:
        "A bypass_count threshold promotes requests skipped too many times.",
      note: "The scheduler returns one request. It does not build the batch.",
    },
  ],
  routers: [
    {
      name: "Round Robin",
      purpose: "Baseline cyclic feasible-worker routing.",
    },
    {
      name: "Least Loaded",
      purpose: "Minimize queue_depth + active_count.",
    },
    {
      name: "Residency Aware",
      purpose:
        "Tier 0 — model already resident · Tier 1 — fits free estimated memory · Tier 2 — eviction required. Within the best tier: lowest load → lowest WorkerId.",
    },
  ],
  matrix: [
    {
      worker: "Worker 0",
      resident: "YES",
      fits: "—",
      evict: "NO",
      load: "3",
      tier: "0",
    },
    {
      worker: "Worker 1",
      resident: "NO",
      fits: "YES",
      evict: "NO",
      load: "0",
      tier: "1",
    },
    {
      worker: "Worker 2",
      resident: "NO",
      fits: "NO",
      evict: "YES",
      load: "0",
      tier: "2",
    },
  ],
  select: "SELECT → Worker 0",
  matrixNote: "Residency is preferred before raw load tier. This is not GPU routing.",
} as const;

export const inferenceRuntimeBatching = {
  eyebrow: "04 — Dynamic Batching",
  title: "Dynamic Batching",
  definition: "Worker-local dynamic static batching",
  description:
    "Requests arrive individually. A Worker may wait briefly for compatible same-model requests, then finalize the batch before inference begins.",
  factors: [
    "same model_id",
    "max_batch_size",
    "max_batch_wait",
    "queue state",
    "deadlines",
    "shutdown",
  ],
  notContinuous: "This is not continuous batching.",
  contiguousExample: {
    title: "Contiguous same-model wait",
    sequence: "A1 → A2 → A3 → B1",
    result: "Execute [A1 A2 A3]; B1 waits for the next batch",
  },
  reorderExample: {
    title: "No non-contiguous reordering",
    sequence: "A1  B1  A2  A3",
    result: "[A1] · [B1] · [A2 A3]",
    not: "Not [A1 A2 A3]",
  },
  lesson:
    "Batch formation alone does not guarantee a performance win.",
  framing:
    "At concurrency 4, batching doubled median HTTP serving throughput. At concurrency 2, the same strategy made both throughput and p95 worse.",
  keepBoth: "The result is workload-dependent, so the benchmark keeps both.",
  context: [
    "Apple M4 Pro",
    "Qwen3.5-0.8B-Q4_0",
    "llama.cpp / Metal",
    "1 Worker",
    "3 runs / config · median",
    "HTTP end-to-end",
  ],
  c2: {
    label: "Concurrency 2",
    baseline: {
      rps: "4.20 req/s",
      p95: "736.4 ms",
      meanBatch: "1.00",
    },
    adaptive: {
      rps: "3.15 req/s",
      p95: "1181.9 ms",
      meanBatch: "2.00",
    },
    deltas: [
      { label: "RPS", value: "−24.9%" },
      { label: "p95", value: "+60.5%" },
    ],
    message:
      "A real batch formed, but end-to-end performance got worse.",
  },
  c4: {
    label: "Concurrency 4",
    baseline: {
      rps: "2.17 req/s",
      p95: "2849.9 ms",
      meanBatch: "1.00",
    },
    adaptive: {
      rps: "4.35 req/s",
      p95: "2105.4 ms",
      meanBatch: "4.00",
    },
    deltas: [
      { label: "RPS", value: "+101.0%" },
      { label: "p95", value: "−26.1%" },
    ],
    tokenThroughput:
      "Serving output-token throughput: 67.84 → 136.35 tokens/s (+101.0%)",
  },
} as const;

export const inferenceRuntimeResidency = {
  eyebrow: "05 — Model Residency & Eviction",
  title: "Model Residency & Eviction",
  description:
    "Each Worker owns its ModelManager, logical resident set, estimated memory budget, and backend. Routing alone is not enough under memory pressure.",
  qualifier:
    "Memory accounting is estimate-based — not real Apple GPU / VRAM telemetry.",
  path: [
    "Model request",
    "Already resident?",
    "Fits estimated free budget?",
    "Eviction policy",
    "Unload victim(s)",
    "Reserve",
    "Load requested model",
  ],
  llamaNote:
    "With LlamaCppBackend, load/unload corresponds to real GGUF context/model resources. Capacity decisions remain estimate-based.",
  policies: [
    {
      name: "LRU",
      ordering: ["oldest last_used", "model ID tie-break"],
    },
    {
      name: "Cost Aware",
      note: "Final lexicographic ordering — not a floating-point keep_score formula.",
      ordering: [
        "lower estimated_load_cost",
        "lower use_count",
        "larger estimated_memory_bytes",
        "older last_used",
        "lexical model_id",
      ],
    },
  ],
} as const;

export const inferenceRuntimeBackend = {
  eyebrow: "06 — Real llama.cpp Execution",
  title: "Real llama.cpp Execution",
  description:
    "The control plane depends on an abstract IModelBackend, so deterministic synthetic testing and real GGUF inference share the same scheduler/router/worker architecture.",
  distinction:
    "The default/control-plane test backend is synthetic. The optional llama.cpp backend performs real model inference.",
  boundaries: [
    "No continuous batching",
    "No cross-request KV-cache reuse",
    "No token streaming",
  ],
  verified: [
    "llama.cpp library integration",
    "Qwen3.5-0.8B-Q4_0 GGUF",
    "Real load / unload / reload",
    "Greedy generation",
    "Real static multi-sequence infer_batch",
    "Apple Metal execution",
    "CPU execution",
  ],
  metalProof: {
    value: "25 / 25",
    label: "Layers offloaded",
    hint: "Accepted Metal validation",
  },
} as const;

export const inferenceRuntimeReliability = {
  eyebrow: "07 — Reliability Under Pressure",
  title: "Reliability Under Pressure",
  description:
    "Bounded queues deliberately reject excess work rather than allowing unbounded growth or collapsing transport responsiveness.",
  overload: {
    context: [
      "concurrency 32",
      "64 measured requests",
      "scheduler capacity 4",
      "Worker queue capacity 2",
      "1 Worker",
      "real llama backend",
      "3 independent runs",
    ],
    accepted: 3,
    rejected: 61,
    transportFailures: 0,
    total: 64,
    rateLabel: "503 rate",
    rate: "95.3%",
    framing: "Bounded overload rejection — intentional backpressure under saturation.",
  },
  facts: [
    "Bounded scheduler queue",
    "Bounded Worker lanes",
    "Worker admission is non-blocking",
    "QueueFull → HTTP 503",
    "Cooperative cancellation",
    "Request deadlines",
    "Client-disconnect cancellation",
    "First-terminal-wins",
    "Graceful shutdown",
    "Partial batches flush during close",
    "Exactly-one terminal response",
  ],
} as const;

export const inferenceRuntimeProof = {
  eyebrow: "08 — Engineering Proof",
  title: "Engineering Proof",
  metrics: [
    {
      value: "152",
      label: "CTest entries",
      hint: "148 passed · 4 skipped without AIRUNTIME_TEST_GGUF",
    },
    { value: "19", label: "Benchmark tool tests" },
    { value: "133 / 133", label: "ASan + UBSan" },
    {
      value: "132 / 132",
      label: "TSan",
      hint: "Excludes sandboxed HTTP integration runner",
    },
  ],
  quality: [
    "C++20",
    "CMake",
    "GoogleTest",
    "CTest",
    "ASan",
    "UBSan",
    "TSan",
    "clang-format",
    "GitHub Actions",
  ],
  ciNote:
    "CI runs default + llama CPU jobs. The sanitizer matrix is local validation, not CI-gated.",
  ledger: [
    {
      label: "Benchmark evidence SHA",
      value: "dfc00d73033af62f1888bac014d5586086c5b30d",
    },
    {
      label: "llama.cpp pin",
      value: "9cc33944f9b7a44243618d5522adae357d7fdc90",
    },
    { label: "Real model", value: "Qwen3.5-0.8B-Q4_0" },
  ],
} as const;
