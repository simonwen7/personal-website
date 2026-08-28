import Link from "next/link";

import type { LabAccent, LabProject } from "./lab-types";

type LabProjectSkeletonPageProps = {
  project: LabProject;
  accent: LabAccent;
  trackLabel: string;
  backHref?: string;
};

export default function LabProjectSkeletonPage({
  project,
  accent,
  trackLabel,
  backHref = "/software/",
}: LabProjectSkeletonPageProps) {
  const eyebrowTone =
    accent === "cyan" ? "text-cyan-100/55" : "text-violet-100/55";

  const maturityLabel = project.previewCta ?? "Demo coming soon";

  return (
    <section
      id="overview"
      className="relative scroll-mt-[120px] overflow-x-clip px-8 py-8 sm:py-12"
    >
      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <div
          className="
            overflow-hidden rounded-[34px]
            border border-white/10 bg-white/[0.042]
            p-8 shadow-[0_24px_75px_rgba(0,0,0,0.32)]
            backdrop-blur-xl md:p-12
          "
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              Project {project.number}
            </span>
          </div>

          <p
            className={`mt-5 text-xs font-medium uppercase tracking-[0.28em] ${eyebrowTone}`}
          >
            {trackLabel}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            {project.title}
          </h1>

          {project.summary ? (
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
              {project.summary}
            </p>
          ) : (
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
              Project details will be added here as the work develops.
            </p>
          )}

          {project.technologies && project.technologies.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full border border-white/10
                    bg-white/[0.04] px-3 py-1.5
                    text-xs text-white/55
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          <div
            className="
              mt-10 rounded-[24px] border border-dashed border-white/15
              bg-black/20 px-6 py-10 text-center
            "
          >
            <p className="text-sm font-medium text-white/50">{maturityLabel}</p>
            <p className="mt-3 text-sm text-white/35">
              Project details will be added here as the work develops.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href={backHref}
              className="
                inline-flex rounded-full border border-white/15
                bg-white/[0.06] px-5 py-2.5
                text-sm font-medium text-white/75
                transition hover:bg-white/[0.12] hover:text-white
              "
            >
              ← Back to {trackLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
