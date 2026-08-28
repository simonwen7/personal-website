import type { Metadata } from "next";

import CodeIntelligenceShowcase from "@/components/lab/code-intelligence-showcase";
import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectBackLink from "@/components/lab/lab-project-back-link";
import { codeIntelligenceSubnavItems } from "@/components/lab/software-lab-data";

export const metadata: Metadata = {
  title: "Graph-Augmented Code Intelligence Engine | Simon Wen",
};

export default function CodeIntelligencePage() {
  return (
    <LabPageShell
      accent="cyan"
      subnavLabel="Code Intelligence"
      subnavItems={codeIntelligenceSubnavItems}
    >
      <LabProjectBackLink
        href="/software/#systems"
        label="← Systems Engineering"
      />
      <CodeIntelligenceShowcase />
    </LabPageShell>
  );
}
