import type { LabAccent, LabProject } from "./lab-types";

const statusTone: Record<LabAccent, string> = {
  cyan: "border-cyan-300/20 bg-cyan-400/10 text-cyan-50/85",
  emerald: "border-emerald-300/20 bg-emerald-400/10 text-emerald-50/85",
  violet: "border-violet-300/20 bg-violet-400/10 text-violet-50/85",
};

const panelGlow: Record<LabAccent, string> = {
  cyan: "bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_42%)]",
  emerald:
    "bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_42%)]",
  violet:
    "bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.06),transparent_40%)]",
};

const mediaBorder: Record<LabAccent, string> = {
  cyan: "border-cyan-300/15",
  emerald: "border-emerald-300/15",
  violet: "border-violet-300/15",
};

type LabProjectShowcaseProps = {
  project: LabProject;
  accent?: LabAccent;
  /** Show reserved media region even when empty (framework layout). */
  showMediaSlot?: boolean;
};

export default function LabProjectShowcase({
  project,
  accent = "cyan",
  showMediaSlot = true,
}: LabProjectShowcaseProps) {
  // Case-study CTAs temporarily omitted — they pointed at legacy light /projects/* pages.
  const hasGithub = Boolean(project.githubHref);
  const hasLiveDemo = Boolean(project.liveDemoHref);
  const hasTech = Boolean(project.technologies?.length);
  const hasHighlights = Boolean(project.highlights?.length);
  const hasMetrics = Boolean(project.metrics?.length);
  const hasCtas = hasGithub || hasLiveDemo;

  return (
    <section
      id={project.id}
      className="relative scroll-mt-[120px] overflow-x-clip px-8 py-16 sm:py-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <article
          className="
            relative overflow-hidden rounded-[36px]
            border border-white/10 bg-white/[0.042]
            shadow-[0_28px_90px_rgba(0,0,0,0.34)]
            backdrop-blur-xl
          "
        >
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 ${panelGlow[accent]}`}
          />

          <div className="relative z-10 grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
                  Project {project.number}
                </span>

                {project.status ? (
                  <span
                    className={`
                      rounded-full border px-3 py-1
                      text-[11px] font-medium uppercase tracking-[0.18em]
                      ${statusTone[accent]}
                    `}
                  >
                    {project.status}
                  </span>
                ) : null}
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
                {project.title}
              </h2>

              {project.summary ? (
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/58">
                  {project.summary}
                </p>
              ) : (
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/35 italic">
                  Project details will be added here.
                </p>
              )}

              {hasTech ? (
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies!.map((tech) => (
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

              {hasHighlights ? (
                <ul className="mt-8 space-y-3">
                  {project.highlights!.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-white/55"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {hasMetrics ? (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.metrics!.map((metric) => (
                    <div
                      key={metric.label}
                      className="
                        rounded-[20px] border border-white/[0.08]
                        bg-black/20 px-4 py-4
                      "
                    >
                      <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/35">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white/80">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {hasCtas ? (
                <div className="mt-9 flex flex-wrap gap-3">
                  {hasGithub ? (
                    <a
                      href={project.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-full border border-white/15
                        bg-white/[0.07] px-5 py-2.5
                        text-sm font-medium text-white/85
                        transition hover:bg-white/[0.12] hover:text-white
                      "
                    >
                      GitHub ↗
                    </a>
                  ) : null}

                  {hasLiveDemo ? (
                    <a
                      href={project.liveDemoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-full border border-white/15
                        bg-white/[0.07] px-5 py-2.5
                        text-sm font-medium text-white/85
                        transition hover:bg-white/[0.12] hover:text-white
                      "
                    >
                      Live demo ↗
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>

            {showMediaSlot ? (
              <div className="border-t border-white/10 p-6 lg:border-l lg:border-t-0 lg:p-8">
                <div
                  className={`
                    flex min-h-[220px] items-center justify-center
                    rounded-[28px] border border-dashed
                    bg-black/25 px-6 py-10 text-center
                    sm:min-h-[280px]
                    ${mediaBorder[accent]}
                  `}
                >
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
                      Media / demo
                    </p>
                    <p className="mt-3 max-w-[220px] text-sm leading-6 text-white/40">
                      {project.mediaLabel ??
                        "Reserved for screenshots, architecture, or demo visuals."}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  );
}
