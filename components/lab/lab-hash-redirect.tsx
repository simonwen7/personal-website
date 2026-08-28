"use client";

import { useEffect } from "react";

type LabHashRedirectProps = {
  destination: string;
};

/** Client redirect for static export — category routes → Software hub anchors. */
export default function LabHashRedirect({ destination }: LabHashRedirectProps) {
  useEffect(() => {
    window.location.replace(destination);
  }, [destination]);

  return (
    <div className="flex min-h-[40vh] items-center justify-center px-8 text-sm text-white/50">
      Redirecting…
    </div>
  );
}
