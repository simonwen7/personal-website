import type { Metadata } from "next";

import LabHashRedirect from "@/components/lab/lab-hash-redirect";

export const metadata: Metadata = {
  title: "QuantForge | Simon Wen",
  robots: { index: false, follow: false },
};

export default function QuantforgeBusinessAlias() {
  return <LabHashRedirect destination="/software/systems/quantforge/" />;
}
