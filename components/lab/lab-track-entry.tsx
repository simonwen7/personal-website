import Link from "next/link";

import type { LabAccent, SoftwareTrack } from "./lab-types";

const panelGlow: Record<LabAccent, string> = {
  cyan: "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_36%)]",
  emerald:
    "bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_40%)]",
  violet:
    "bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_36%)]",
};

const ctaTone: Record<LabAccent, string> = {
  cyan: "border-cyan-300/25 bg-cyan-400/10 text-cyan-50 hover:bg-cyan-400/20",
  emerald:
    "border-emerald-300/25 bg-emerald-400/10 text-emerald-50 hover:bg-emerald-400/20",
  violet:
    "border-violet-300/25 bg-violet-400/10 text-violet-50 hover:bg-violet-400/20",
};

const emphasisRing: Record<"default" | "strong", string> = {
  default: "border-white/10",
  strong: "border-cyan-300/25 shadow-[0_28px_90px_rgba(14,165,233,0.12)]",
};

type LabTrackEntryProps = {
  track: SoftwareTrack;
  index: number;
  emphasized?: boolean;
  enterLabel?: string;
};

export default function LabTrackEntry({
  track,
  index,
  emphasized = false,
  enterLabel,
}: LabTrackEntryProps) {
  const projectCount = track.projects.length;
  const cta =
    enterLabel ??
    (track.id === "systems" ? "Enter Systems Lab →" : "Enter Product Lab →");

  return (
    <article
      className={`
        group relative overflow-hidden rounded-[34px]
        border bg-white/[0.042]
        p-8 backdrop-blur-xl transition duration-300
        hover:-translate-y-1
        md:p-10
        ${emphasized ? emphasisRing.strong : emphasisRing.default}
      `}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${panelGlow[track.accent]}`}
      />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
            0{index} — Track
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            {track.label}
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/55">
            {track.focusLine}
          </p>

          <p className="mt-5 text-xs font-medium uppercase tracking-[0.24em] text-white/40">
            {projectCount} project{projectCount === 1 ? "" : "s"}
          </p>
        </div>

        <Link
          href={track.href}
          className={`
            inline-flex shrink-0 items-center justify-center
            rounded-full border px-6 py-3
            text-sm font-medium transition
            hover:-translate-y-0.5
            ${ctaTone[track.accent]}
          `}
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
