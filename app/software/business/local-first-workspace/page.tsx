import type { Metadata } from "next";

import LabHashRedirect from "@/components/lab/lab-hash-redirect";

export const metadata: Metadata = {
  title: "Local-First Collaborative Workspace | Simon Wen",
  robots: { index: false, follow: false },
};

export default function LocalFirstBusinessAlias() {
  return (
    <LabHashRedirect destination="/software/systems/local-first-workspace/" />
  );
}
