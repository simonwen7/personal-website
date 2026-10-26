import type { Metadata } from "next";

import ActionworldLiteShowcase from "@/components/lab/actionworld-lite-showcase";
import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectBackLink from "@/components/lab/lab-project-back-link";
import { actionworldLiteSubnavItems } from "@/components/lab/software-lab-data";

export const metadata: Metadata = {
  title: "ActionWorld Lite | Simon Wen",
  description:
    "An action-conditioned visual world model for simulated physical interaction, combining frozen neural prediction, MuJoCo physics and an interactive FastAPI deployment.",
};

export default function ActionworldLitePage() {
  return (
    <LabPageShell
      accent="cyan"
      subnavLabel="ActionWorld Lite"
      subnavItems={actionworldLiteSubnavItems}
    >
      <LabProjectBackLink
        href="/software/#systems"
        label="← Systems Engineering"
      />
      <ActionworldLiteShowcase />
    </LabPageShell>
  );
}
