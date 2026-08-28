import type { Metadata } from "next";

import FormaApaShowcase from "@/components/lab/forma-apa-showcase";
import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectBackLink from "@/components/lab/lab-project-back-link";
import { formaApaSubnavItems } from "@/components/lab/software-lab-data";

export const metadata: Metadata = {
  title: "Forma APA | Simon Wen",
};

export default function ApaFormatterPage() {
  return (
    <LabPageShell
      accent="violet"
      subnavLabel="Forma APA"
      subnavItems={formaApaSubnavItems}
    >
      <LabProjectBackLink
        href="/software/#business"
        label="← Business & Product Engineering"
      />
      <FormaApaShowcase />
    </LabPageShell>
  );
}
