import type { RoboticsJourneyEntry } from "./lab-types";

function CompactAward({
  award,
}: {
  award: { title: string; event: string; context?: string };
}) {
  return (
    <div className="rounded-lg border border-white/[0.08] bg-black/15 px-3 py-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-100/55">
        {award.title}
      </p>
      <p className="mt-1 text-sm leading-snug text-white/70">{award.event}</p>
      {award.context ? (
        <p className="mt-0.5 text-xs text-white/40">{award.context}</p>
      ) : null}
    </div>
  );
}

function JourneyEntryBlock({ entry }: { entry: RoboticsJourneyEntry }) {
  return (
    <article className="relative pl-8 sm:pl-10">
      <span
        aria-hidden="true"
        className="
          absolute left-0 top-2 h-2.5 w-2.5 rounded-full
          border border-emerald-300/40 bg-emerald-400/20
          shadow-[0_0_10px_rgba(16,185,129,0.35)]
        "
      />

      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-100/45">
        {entry.period}
        {entry.category ? ` · ${entry.category}` : ""}
      </p>

      <h3 className="mt-1.5 text-base font-semibold text-white sm:text-lg">
        {entry.stage}
      </h3>

      {entry.organization ? (
        <p className="mt-0.5 text-sm font-semibold text-white">
          {entry.organization}
        </p>
      ) : null}

      {entry.description ? (
        <p className="mt-2.5 text-sm leading-6 text-white/50">
          {entry.description}
        </p>
      ) : null}

      {entry.context ? (
        <p className="mt-1.5 text-sm text-white/45">{entry.context}</p>
      ) : null}

      {entry.awards && entry.awards.length > 0 ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {entry.awards.map((award) => (
            <CompactAward
              key={`${entry.id}-${award.title}-${award.event}`}
              award={award}
            />
          ))}
        </div>
      ) : null}

      {entry.bullets && entry.bullets.length > 0 ? (
        <ul className="mt-3 space-y-1.5">
          {entry.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2.5 text-sm leading-6 text-white/50"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/35"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {entry.highlight ? (
        <div className="mt-3 inline-flex min-w-[8rem] flex-col rounded-lg border border-white/10 bg-black/20 px-3 py-2">
          <p className="text-base font-semibold leading-none text-emerald-50/90">
            {entry.highlight.label}
          </p>
          <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/40">
            {entry.highlight.detail}
          </p>
        </div>
      ) : null}

      {entry.affiliations && entry.affiliations.length > 0 ? (
        <div className="mt-3 space-y-2.5">
          {entry.affiliations.map((affiliation) => (
            <div
              key={affiliation.name}
              className="
                rounded-lg border border-white/10
                bg-black/15 px-3.5 py-3
              "
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-100/45">
                {affiliation.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {affiliation.role}
              </p>
              <p className="mt-1 text-sm leading-6 text-white/50">
                {affiliation.description}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {entry.tags && entry.tags.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full border border-emerald-300/15
                bg-emerald-400/[0.07] px-2.5 py-1
                text-[11px] text-emerald-100/65
              "
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

type LabRoboticsJourneyProps = {
  entries: readonly RoboticsJourneyEntry[];
  progressionSteps: readonly string[];
};

export default function LabRoboticsJourney({
  entries,
  progressionSteps,
}: LabRoboticsJourneyProps) {
  return (
    <div
      className="
        overflow-hidden rounded-[34px]
        border border-white/10 bg-white/[0.042]
        px-7 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.28)]
        backdrop-blur-xl
        md:px-10 md:py-8
      "
    >
      <div
        className="
          mb-6 flex flex-wrap items-center gap-x-2 gap-y-1
          border-b border-white/[0.08] pb-5
          text-[11px] text-white/40
        "
        aria-label="Robotics progression"
      >
        {progressionSteps.map((step, index) => (
          <span key={step} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-white/25">
                →
              </span>
            ) : null}
            <span className="font-medium text-white/55">{step}</span>
          </span>
        ))}
      </div>

      <div className="relative space-y-8">
        <div
          aria-hidden="true"
          className="
            absolute bottom-2 left-[4px] top-2
            w-px bg-gradient-to-b from-emerald-400/25 via-emerald-400/15 to-emerald-400/25
          "
        />

        {entries.map((entry) => (
          <JourneyEntryBlock key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
