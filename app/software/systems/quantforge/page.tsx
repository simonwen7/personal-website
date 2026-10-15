import type { Metadata } from "next";

import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectBackLink from "@/components/lab/lab-project-back-link";
import QuantforgeShowcase from "@/components/lab/quantforge-showcase";
import { quantforgeSubnavItems } from "@/components/lab/software-lab-data";

export const metadata: Metadata = {
  title: "QuantForge | Simon Wen",
  description:
    "A deterministic Python event-driven backtesting engine with causal execution, Decimal accounting, and a synthetic research terminal.",
};

export default function QuantforgePage() {
  return (
    <LabPageShell
      accent="cyan"
      subnavLabel="QuantForge"
      subnavItems={quantforgeSubnavItems}
    >
      <LabProjectBackLink
        href="/software/#systems"
        label="← Systems Engineering"
      />
      <QuantforgeShowcase />
    </LabPageShell>
  );
}
