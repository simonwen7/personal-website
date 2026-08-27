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

const statusTone: Record<LabAccent, string> = {
  cyan: "border-cyan-300/20 bg-cyan-400/10 text-cyan-50/80",
  emerald: "border-emerald-300/20 bg-emerald-400/10 text-emerald-50/80",
  violet: "border-violet-300/20 bg-violet-400/10 text-violet-50/80",
};

type LabProjectCardProps = {
  project: LabProject;
  accent?: LabAccent;
};

export default function LabProjectCard({
  project,
  accent = "cyan",
}: LabProjectCardProps) {
  // Case-study CTAs temporarily omitted — they pointed at legacy light /projects/* pages.
  const hasGithub = Boolean(project.githubHref);
  const hasLiveDemo = Boolean(project.liveDemoHref);

  return (
    <article
      className={`
        group relative flex h-full min-h-[280px] flex-col
        overflow-hidden rounded-[30px]
        border border-white/10
        bg-white/[0.042]
        p-6
        shadow-[0_24px_70px_rgba(0,0,0,0.30)]
        backdrop-blur-xl
        transition duration-300
        hover:-translate-y-1
        ${accentHover[accent]}
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

      <div className="relative z-10 flex flex-wrap items-center gap-2">
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

      <h3 className="relative z-10 mt-6 text-2xl font-semibold tracking-[-0.025em] text-white">
        {project.title}
      </h3>

      {project.summary ? (
        <p className="relative z-10 mt-4 text-sm leading-6 text-white/55">
          {project.summary}
        </p>
      ) : (
        <p className="relative z-10 mt-4 text-sm leading-6 text-white/35 italic">
          Summary coming soon.
        </p>
      )}

      {project.technologies && project.technologies.length > 0 ? (
        <div className="relative z-10 mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full border border-white/10
                bg-white/[0.04] px-3 py-1
                text-xs text-white/55
              "
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}

      <div className="relative z-10 mt-auto flex flex-wrap gap-3 pt-8">
        {hasGithub ? (
          <a
            href={project.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full border border-white/15
              bg-white/[0.06] px-4 py-2
              text-xs font-medium text-white/80
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
              bg-white/[0.06] px-4 py-2
              text-xs font-medium text-white/80
              transition hover:bg-white/[0.12] hover:text-white
            "
          >
            Live demo ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
