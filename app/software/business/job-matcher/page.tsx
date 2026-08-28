import type { Metadata } from "next";

import AiResumeMatchShowcase from "@/components/lab/ai-resume-match-showcase";
import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectBackLink from "@/components/lab/lab-project-back-link";
import { aiResumeMatchSubnavItems } from "@/components/lab/software-lab-data";

export const metadata: Metadata = {
  title: "AI Resume Match | Simon Wen",
};

export default function JobMatcherPage() {
  return (
    <LabPageShell
      accent="violet"
      subnavLabel="AI Resume Match"
      subnavItems={aiResumeMatchSubnavItems}
    >
      <LabProjectBackLink
        href="/software/#business"
        label="← Business & Product Engineering"
      />
      <AiResumeMatchShowcase />
    </LabPageShell>
  );
}
