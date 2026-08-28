import type { Metadata } from "next";

import InferenceRuntimeShowcase from "@/components/lab/inference-runtime-showcase";
import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectBackLink from "@/components/lab/lab-project-back-link";
import { inferenceRuntimeSubnavItems } from "@/components/lab/software-lab-data";

export const metadata: Metadata = {
  title: "Adaptive AI Inference Runtime | Simon Wen",
};

export default function InferenceRuntimePage() {
  return (
    <LabPageShell
      accent="cyan"
      subnavLabel="Inference Runtime"
      subnavItems={inferenceRuntimeSubnavItems}
    >
      <LabProjectBackLink
        href="/software/#systems"
        label="← Systems Engineering"
      />
      <InferenceRuntimeShowcase />
    </LabPageShell>
  );
}
