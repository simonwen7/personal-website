import Link from "next/link";

import type { LabAccent, LabProject } from "./lab-types";

const accentHover: Record<LabAccent, string> = {
  cyan: "hover:border-cyan-300/25 hover:shadow-[0_28px_85px_rgba(14,165,233,0.14)]",
  emerald:
    "hover:border-emerald-300/25 hover:shadow-[0_28px_85px_rgba(16,185,129,0.14)]",
  violet:
    "hover:border-violet-300/25 hover:shadow-[0_28px_85px_rgba(139,92,246,0.14)]",
};

const glowHover: Record<LabAccent, string> = {
  cyan: "bg-cyan-400/10 group-hover:bg-cyan-400/20",
  emerald: "bg-emerald-400/10 group-hover:bg-emerald-400/20",
  violet: "bg-violet-400/10 group-hover:bg-violet-400/20",
};

const ctaTone: Record<LabAccent, string> = {
  cyan: "text-cyan-100/70 group-hover:text-cyan-50",
  emerald: "text-emerald-100/70 group-hover:text-emerald-50",
  violet: "text-violet-100/70 group-hover:text-violet-50",
};

const systemsStackLayers = [
  {
    layer: "Data",
    title: "AI Artifact Store",
    tags: "Storage · Integrity · Recovery",
  },
  {
    layer: "Intelligence",
    title: "Code Intelligence",
    tags: "Structure · Retrieval · Ranking",
  },
  {
    layer: "Compute",
    title: "Inference Runtime",
    tags: "Scheduling · Batching · Serving",
  },
] as const;

function getPreviewCta(project: LabProject) {
  return project.previewCta ?? "Explore Project";
}

type LabProjectPreviewCardProps = {
  project: LabProject;
  accent?: LabAccent;
  /** Wider landscape layout for featured Systems project */
  featured?: boolean;
};

export default function LabProjectPreviewCard({
  project,
  accent = "cyan",
  featured = false,
}: LabProjectPreviewCardProps) {
  if (!project.href) {
    return null;
  }

  const ctaLabel = getPreviewCta(project);
  const ctaMuted = ctaLabel === "Demo coming soon";

  return (
    <Link
      href={project.href}
      className={`
        group relative flex overflow-hidden rounded-[24px]
        border border-white/10 bg-white/[0.042]
        shadow-[0_20px_60px_rgba(0,0,0,0.28)]
        backdrop-blur-xl transition duration-300
        hover:-translate-y-1
        ${accentHover[accent]}
        ${featured ? "flex-col gap-0 lg:flex-row lg:items-stretch" : "min-h-[190px] flex-col"}
      `}
    >
      <span
        aria-hidden="true"
        className={`
          pointer-events-none absolute -right-16 -top-16
          h-40 w-40 rounded-full blur-3xl transition duration-300
          ${glowHover[accent]}
        `}
      />

      <div
        className={`
          relative z-10 flex flex-1 flex-col p-5
          ${featured ? "lg:p-6" : ""}
        `}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
            {project.number}
          </span>
        </div>

        <h3
          className={`
            mt-3 font-semibold tracking-[-0.025em] text-white
            ${featured ? "text-xl sm:text-2xl" : "text-lg"}
          `}
        >
          {project.title}
        </h3>

        {project.summary ? (
          <p
            className={`
              mt-2.5 leading-6 text-white/55
              ${featured ? "max-w-2xl text-sm" : "text-sm line-clamp-3"}
            `}
          >
            {project.summary}
          </p>
        ) : (
          <p className="mt-3 text-sm italic leading-6 text-white/35">
            Summary coming soon.
          </p>
        )}

        {project.technologies && project.technologies.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, featured ? 5 : 4).map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full border border-white/10
                  bg-white/[0.04] px-2.5 py-0.5
                  text-[11px] text-white/50
                "
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        <p
          className={`
            mt-auto flex items-center gap-2 pt-4 text-sm font-medium
            ${ctaMuted ? "text-white/35" : ctaTone[accent]}
          `}
        >
          {ctaLabel}
          {!ctaMuted ? (
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          ) : null}
        </p>
      </div>

      {featured ? (
        <div
          aria-hidden="true"
          className="
            relative z-10 flex flex-col justify-center gap-2
            border-t border-white/[0.06] bg-black/20
            p-4 lg:w-[38%] lg:shrink-0 lg:border-l lg:border-t-0 lg:p-5
          "
        >
          {systemsStackLayers.map((item) => (
            <div
              key={item.layer}
              className="
                rounded-xl border border-white/10
                bg-white/[0.03] px-3 py-2.5
              "
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-100/45">
                {item.layer}
              </p>
              <p className="mt-1 text-sm font-medium text-white/80">
                {item.title}
              </p>
              <p className="mt-0.5 text-[11px] text-white/40">{item.tags}</p>
            </div>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
