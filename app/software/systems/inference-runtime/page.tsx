import type { Metadata } from "next";

import LabProjectSkeletonPage from "@/components/lab/lab-project-skeleton-page";
import { systemsTrack } from "@/components/lab/software-lab-data";

const project = systemsTrack.projects.find(
  (entry) => entry.id === "inference-runtime",
)!;

export const metadata: Metadata = {
  title: "Adaptive AI Inference Runtime | Simon Wen",
};

export default function InferenceRuntimePage() {
  return (
    <LabProjectSkeletonPage
      project={project}
      accent="cyan"
      subnavLabel="Inference Runtime"
      trackLabel="Systems Engineering"
      backHref="/software/#systems"
      backLabel="← Systems Engineering"
    />
  );
}
