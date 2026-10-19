import type { Metadata } from "next";

import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectBackLink from "@/components/lab/lab-project-back-link";
import LocalFirstWorkspaceShowcase from "@/components/lab/local-first-workspace-showcase";
import { localFirstWorkspaceSubnavItems } from "@/components/lab/software-lab-data";

export const metadata: Metadata = {
  title: "Local-First Collaborative Workspace | Simon Wen",
  description:
    "A local-first collaborative editor built on a custom operation-based CRDT, with a two-replica in-browser convergence lab.",
};

export default function LocalFirstWorkspacePage() {
  return (
    <LabPageShell
      accent="violet"
      subnavLabel="Local-First Workspace"
      subnavItems={localFirstWorkspaceSubnavItems}
    >
      <LabProjectBackLink
        href="/software/#systems"
        label="← Systems Engineering"
      />
      <LocalFirstWorkspaceShowcase />
    </LabPageShell>
  );
}
