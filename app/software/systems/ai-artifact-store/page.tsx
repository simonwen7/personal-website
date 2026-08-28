import type { Metadata } from "next";

import ArtifactStoreShowcase from "@/components/lab/artifact-store-showcase";
import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectBackLink from "@/components/lab/lab-project-back-link";
import { artifactStoreSubnavItems } from "@/components/lab/software-lab-data";

export const metadata: Metadata = {
  title: "AI Artifact Store | Simon Wen",
};

export default function AiArtifactStorePage() {
  return (
    <LabPageShell
      accent="cyan"
      subnavLabel="AI Artifact Store"
      subnavItems={artifactStoreSubnavItems}
    >
      <LabProjectBackLink
        href="/software/#systems"
        label="← Systems Engineering"
      />
      <ArtifactStoreShowcase />
    </LabPageShell>
  );
}
