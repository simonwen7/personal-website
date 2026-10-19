import type { Metadata } from "next";

import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectBackLink from "@/components/lab/lab-project-back-link";
import StreamforgeShowcase from "@/components/lab/streamforge-showcase";
import { streamforgeSubnavItems } from "@/components/lab/software-lab-data";

export const metadata: Metadata = {
  title: "StreamForge | Simon Wen",
  description:
    "A Java, Spring Boot, Kafka, and PostgreSQL telemetry pipeline with a transactional outbox, idempotent worker receipts, and a browser-local pipeline simulation.",
};

export default function StreamforgePage() {
  return (
    <LabPageShell
      accent="cyan"
      subnavLabel="StreamForge"
      subnavItems={streamforgeSubnavItems}
    >
      <LabProjectBackLink
        href="/software/#systems"
        label="← Systems Engineering"
      />
      <StreamforgeShowcase />
    </LabPageShell>
  );
}
