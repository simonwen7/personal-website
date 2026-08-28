import type { Metadata } from "next";

import LabProjectSkeletonPage from "@/components/lab/lab-project-skeleton-page";
import { businessTrack } from "@/components/lab/software-lab-data";

const project = businessTrack.projects.find(
  (entry) => entry.id === "job-matcher",
)!;

export const metadata: Metadata = {
  title: "Job Matcher Agent | Simon Wen",
};

export default function JobMatcherPage() {
  return (
    <LabProjectSkeletonPage
      project={project}
      accent="violet"
      subnavLabel="Job Matcher"
      trackLabel="Business & Product Engineering"
      backHref="/software/#business"
      backLabel="← Business & Product Engineering"
    />
  );
}
