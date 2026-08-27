import type { LabAccent } from "./lab-types";

const accentStyles: Record<
  LabAccent,
  { dot: string; eyebrow: string }
> = {
  cyan: {
    dot: "bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]",
    eyebrow: "text-cyan-100/55",
  },
  emerald: {
    dot: "bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]",
    eyebrow: "text-emerald-100/55",
  },
  violet: {
    dot: "bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.9)]",
    eyebrow: "text-violet-100/55",
  },
};

type LabSectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: LabAccent;
  align?: "left" | "center";
};

export default function LabSectionHeading({
  eyebrow,
  title,
  description,
  accent = "cyan",
  align = "left",
}: LabSectionHeadingProps) {
  const styles = accentStyles[accent];
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
      >
        <span
          aria-hidden="true"
          className={`h-2 w-2 rounded-full ${styles.dot}`}
        />
        <p
          className={`text-xs font-medium uppercase tracking-[0.34em] ${styles.eyebrow}`}
        >
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/[0.58]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
