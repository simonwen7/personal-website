/** Local-first workspace — facts taken from the project source and its own reports. */

export const localFirstDemoUrl =
  "https://local-first-collaborative-workspace.vercel.app/";

export const localFirstGithub =
  "https://github.com/simonwen7/local-first-collaborative-workspace";

export const localFirstHero = {
  trackLabel: "Local-First Collaborative Workspace",
  productName: "LOCAL / FIRST",
  tagline: "Two replicas. Concurrent edits. Deterministic convergence.",
  description:
    "A plain-text editor whose synchronization engine is a custom operation-based CRDT. Each replica keeps its own identity, its own operation log, and its own IndexedDB database.",
  scope:
    "Live demo: two independent in-browser CRDT replicas; no server required.",
  technologies: ["React", "TypeScript", "Vite", "Custom CRDT", "IndexedDB"],
} as const;

export const localFirstChallenge = {
  eyebrow: "01 — Concurrent Editing",
  title: "Concurrent Editing",
  body: "Two people can insert and delete the same text without a shared clock they both trust. The editor has to keep every replica's history, deliver operations that arrive late, and still end on one structure.",
  choice:
    "The CRDT is custom on purpose. Using Yjs or Automerge would have handed the project's main problem to a library.",
} as const;

export const localFirstConvergence = {
  eyebrow: "02 — Two Replicas",
  title: "Two Replicas",
  description:
    "The hosted lab opens two replica controllers in one browser. Each has its own client id and its own IndexedDB database. Operations move through an in-memory transport, not a socket.",
  illustrationLabel: "Illustration",
  flow: [
    "Replica A",
    "Local operations",
    "In-browser transport",
    "Replica B",
    "Matching fingerprints",
  ],
  illustrationNote:
    "The row above is an illustration of that path. It is not a trace from the screenshot.",
  shot: {
    src: "/media/software/local-first-workspace/converged.png",
    alt: "CRDT Collaboration Lab with two empty replicas, matching structure fingerprints, and a Replicas converged status.",
    caption:
      "The live lab after open. Both replicas are linked, both queues are empty, and the structure fingerprints match. Identifiers belong to that browser session.",
    width: 1440,
    height: 980,
  },
} as const;

export const localFirstIdentity = {
  eyebrow: "03 — Identity and Ordering",
  title: "Identity and Ordering",
  description:
    "An operation is an insert or a delete of one grapheme. There is no update operation, and there is no vector clock.",
  facts: [
    {
      name: "Operation id",
      detail: "clientId and a counter. The same id with the same payload is ignored. The same id with a different payload is a conflict.",
    },
    {
      name: "Lamport clock",
      detail: "A plain Lamport clock, not a hybrid clock. Wall time is not an input.",
    },
    {
      name: "Sibling order",
      detail: "Higher Lamport first, then client id, then counter.",
    },
    {
      name: "Missing dependencies",
      detail: "An insert whose anchor has not arrived, or a delete whose target has not arrived, waits in a pending buffer.",
    },
    {
      name: "Tombstones",
      detail: "A delete marks the node. The node stays in the structure. There is no tombstone garbage collection.",
    },
  ],
} as const;

export const localFirstPersistence = {
  eyebrow: "04 — IndexedDB",
  title: "IndexedDB",
  description:
    "Dexie stores the client clock, the operation log, the outbox, and local checkpoints. A local edit is written in one transaction before the in-memory replica changes.",
  stores: [
    "clientMeta",
    "documents",
    "operations",
    "outbox",
    "replicaSnapshots",
  ],
  notes: [
    "A checkpoint is written every 1,000 operations and is discarded if it does not validate.",
    "Lab databases are named apart from the workspace database, so a lab delivery is not recorded as a server write.",
    "Pausing one replica keeps its new operations local. The other replica does not move.",
  ],
  shot: {
    src: "/media/software/local-first-workspace/paused.png",
    alt: "CRDT lab with Replica B paused, Replica A holding 41 pending operations, and a Diverged status with different structure fingerprints.",
    caption:
      "Replica B is paused. Replica A's edits stay pending, and the structure fingerprints diverge until delivery resumes.",
    width: 1440,
    height: 980,
  },
} as const;

export const localFirstInspector = {
  eyebrow: "05 — Inspector",
  title: "Inspector",
  description:
    "Convergence is a structural check. The lab hashes a canonical snapshot with SHA-256 and shows a short prefix. Matching visible text is not enough.",
  statuses: [
    { name: "Converged", detail: "Queues empty and fingerprints match." },
    { name: "Waiting", detail: "An operation is still pending or unresolved." },
    { name: "Partitioned", detail: "Delivery is paused, and the structures still match." },
    { name: "Diverged", detail: "Paused, with different structures or unfinished operations." },
    { name: "Error", detail: "The replica reported a failure." },
  ],
  shot: {
    src: "/media/software/local-first-workspace/operation-log.png",
    alt: "CRDT inspector showing a Diverged status, two different structure fingerprints, and an operation log of local inserts waiting for delivery.",
    caption:
      "The inspector during that pause. Each row is a real insert from the edit, with its Lamport clock, still pending delivery.",
    width: 1384,
    height: 376,
  },
} as const;

export const localFirstArchitecture = {
  eyebrow: "06 — What Is Deployed",
  title: "What Is Deployed",
  description:
    "The Vercel page is the lab. The server-backed workspace is still in the repository, and it is a local-development path.",
  columns: [
    {
      name: "Hosted lab",
      tone: "live" as const,
      points: [
        "Two in-browser replicas",
        "In-memory delivery, with a pause on each side",
        "Separate IndexedDB databases",
        "No WebSocket on this page",
      ],
    },
    {
      name: "Repository server",
      tone: "repo" as const,
      points: [
        "Fastify, WebSocket, and SQLite",
        "A sequenced operation log and fan-out",
        "Used by the local workspace, not by the hosted lab",
        "Unauthenticated, and one database process",
      ],
    },
  ],
} as const;

export const localFirstProof = {
  eyebrow: "07 — Engineering Proof",
  title: "Engineering Proof",
  metrics: [
    {
      value: "208",
      label: "Vitest cases",
      hint: "Declared in the repository. Not a run executed for this page.",
    },
    {
      value: "21",
      label: "Playwright cases",
      hint: "Chromium. Declared in the repository.",
    },
  ],
  propertyNote:
    "The CRDT package also includes property tests that replay the same operations in different orders and check the materialized text.",
  benchmark:
    "A single unpinned laptop note in the repository reports about 11.8 ms to apply 50,000 in-order operations, and about 59.1 ms when those operations arrive reordered. It is not a CI regression gate.",
  limits: [
    "The hosted demo is not cross-device multiplayer.",
    "Plain text only. No rich text, comments, or remote carets.",
    "Tombstones are not compacted.",
    "The local server has no authentication and no horizontal scaling.",
  ],
} as const;
