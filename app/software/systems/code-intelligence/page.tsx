import type { Metadata } from "next";

import LabProjectSkeletonPage from "@/components/lab/lab-project-skeleton-page";
import { systemsTrack } from "@/components/lab/software-lab-data";

const project = systemsTrack.projects.find(
  (entry) => entry.id === "code-intelligence",
)!;

export const metadata: Metadata = {
  title: "Graph-Augmented Code Intelligence Engine | Simon Wen",
};

export default function CodeIntelligencePage() {
  return (
    <LabProjectSkeletonPage
      project={project}
      accent="cyan"
      subnavLabel="Code Intelligence"
      trackLabel="Systems Engineering"
      backHref="/software/#systems"
      backLabel="← Systems Engineering"
    />
  );
}
