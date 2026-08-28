import type { Metadata } from "next";

import LabProjectSkeletonPage from "@/components/lab/lab-project-skeleton-page";
import { businessTrack } from "@/components/lab/software-lab-data";

const project = businessTrack.projects.find(
  (entry) => entry.id === "apa-formatter",
)!;

export const metadata: Metadata = {
  title: "APA Document Formatter | Simon Wen",
};

export default function ApaFormatterPage() {
  return (
    <LabProjectSkeletonPage
      project={project}
      accent="violet"
      subnavLabel="APA Formatter"
      trackLabel="Business & Product Engineering"
      backHref="/software/#business"
      backLabel="← Business & Product Engineering"
    />
  );
}
