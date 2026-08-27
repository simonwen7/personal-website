import type { ReactNode } from "react";

import LabSubnav from "./lab-subnav";
import type { LabAccent, LabSubnavItem } from "./lab-types";

const ambientGlow: Record<LabAccent, string> = {
  cyan: `
    bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_34%)]
  `,
  emerald: `
    bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.08),transparent_34%)]
  `,
  violet: `
    bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_34%)]
  `,
};

type LabPageShellProps = {
  children: ReactNode;
  accent?: LabAccent;
  subnavLabel: string;
  subnavItems: LabSubnavItem[];
};

export default function LabPageShell({
  children,
  accent = "cyan",
  subnavLabel,
  subnavItems,
}: LabPageShellProps) {
  return (
    <main className="relative isolate min-h-screen bg-[#05070b] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05070b]"
      >
        <div className="lab-grid absolute inset-0 opacity-[0.045]" />
        <div
          className={`absolute inset-0 ${ambientGlow[accent]}`}
        />
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(7,10,16,0.08)_0%,rgba(0,0,0,0.55)_100%)]
          "
        />
      </div>

      <LabSubnav
        label={subnavLabel}
        items={subnavItems}
        accent={accent}
      />

      <div className="relative z-10">{children}</div>
    </main>
  );
}
