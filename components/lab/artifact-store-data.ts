/** Verified reference values from ai-artifact-store M10 benchmark JSON. */
export const artifactStoreBenchmarks = {
  fixedSize: {
    throughput: "2533.5 MiB/s",
    reuse: "0%",
  },
  fastCdc: {
    throughput: "380.3 MiB/s",
    reuse: "95.8%",
  },
  caveat: "Local Release reference workload — not a production SLA.",
} as const;

export const artifactStoreProof = [
  { value: "415", label: "Correctness Tests" },
  { value: "6", label: "Process E2Es" },
  { value: "3", label: "Storage Nodes", hint: "in the interactive demo" },
  {
    value: "95.8%",
    label: "Shifted-content reuse",
    hint: "FastCDC reference fixture",
  },
] as const;

export const artifactStoreFailureSteps = [
  {
    title: "Healthy",
    copy: "Artifact stored with replicated chunks across storage nodes.",
  },
  {
    title: "Node Offline",
    copy: "A real StorageNode process can go offline while metadata may still list replicas.",
  },
  {
    title: "Pull Verified",
    copy: "Pull reads from another available replica and verifies SHA-256 on restore.",
  },
  {
    title: "Repair",
    copy: "Explicit repair restores the desired replication factor — not autonomous self-healing.",
  },
] as const;

export const artifactStoreGithub =
  "https://github.com/simonwen7/ai-artifact-store";

export const artifactStoreDemoVideo = "/media/ai-artifact-store/demo.mp4";
