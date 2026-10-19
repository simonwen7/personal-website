import type { Metadata } from "next";

import LabHashRedirect from "@/components/lab/lab-hash-redirect";

export const metadata: Metadata = {
  title: "Simon Wen",
  robots: { index: false, follow: false },
};

/** Retired public resume route. The PDF file remains at /resume.pdf. */
export default function RetiredResumePage() {
  return <LabHashRedirect destination="/" />;
}
