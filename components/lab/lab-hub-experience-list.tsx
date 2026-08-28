import type {
  HubExperienceEntry,
  LabAccent,
  SoftwareExperienceProofPoint,
} from "./lab-types";

const accentTag: Record<LabAccent, string> = {
  cyan: "border-cyan-300/15 bg-cyan-400/[0.07] text-cyan-100/65",
  emerald: "border-emerald-300/15 bg-emerald-400/[0.07] text-emerald-100/65",
  violet: "border-violet-300/15 bg-violet-400/[0.07] text-violet-100/65",
};

const accentMetric: Record<LabAccent, string> = {
  cyan: "text-cyan-50/90",
  emerald: "text-emerald-50/90",
  violet: "text-violet-50/90",
};

const accentNumber: Record<LabAccent, string> = {
  cyan: "text-cyan-100/45",
  emerald: "text-emerald-100/45",
  violet: "text-violet-100/45",
};

const accentAffiliationLabel: Record<LabAccent, string> = {
  cyan: "text-cyan-100/45",
  emerald: "text-emerald-100/45",
  violet: "text-violet-100/45",
};

function ProofPoint({
  point,
  accent,
}: {
  point: SoftwareExperienceProofPoint;
  accent: LabAccent;
}) {
  if (point.type === "relation") {
    return (
      <div
        className="
          rounded-lg border border-white/10 bg-black/20
          px-3 py-2
        "
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">
          {point.text}
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        min-w-[5.5rem] rounded-lg border border-white/10
        bg-black/20 px-3 py-2 text-center
      "
    >
      <p className={`text-base font-semibold leading-none ${accentMetric[accent]}`}>
        {point.value}
      </p>
      <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/40">
        {point.label}
      </p>
    </div>
  );
}

function ExperienceRow({
  entry,
  accent,
  showDivider,
}: {
  entry: HubExperienceEntry;
  accent: LabAccent;
  showDivider: boolean;
}) {
  const proofPoints = entry.proofPoints ?? [];
  const achievements = entry.achievements ?? [];
  const tags = entry.tags ?? [];
  const affiliations = entry.affiliations ?? [];
  const hasProofCards = proofPoints.length > 0;

  return (
    <article
      className={`
        grid grid-cols-1 gap-x-4 gap-y-4
        px-7 py-6
        lg:grid-cols-[minmax(0,1fr)_auto]
        md:px-10 md:py-7
        ${showDivider ? "border-t border-white/[0.08]" : ""}
      `}
    >
      <div className="row-start-1 flex min-w-0 gap-3.5 sm:gap-4 lg:col-start-1">
        <p
          className={`shrink-0 pt-0.5 text-[11px] font-medium uppercase tracking-[0.22em] ${accentNumber[accent]}`}
        >
          {entry.number}
        </p>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-white sm:text-lg">
            {entry.role}
          </h3>
          {entry.organizationContext ? (
            <p className="mt-0.5 text-sm leading-snug">
              <span className="font-semibold text-white">
                {entry.organization}
              </span>
              <span className="text-xs font-normal text-white/45">
                {" "}
                · {entry.organizationContext}
              </span>
            </p>
          ) : (
            <p className="mt-0.5 text-sm font-semibold text-white">
              {entry.organization}
            </p>
          )}
          {entry.description ? (
            <p className="mt-2.5 text-sm leading-6 text-white/50">
              {entry.description}
            </p>
          ) : null}
        </div>
      </div>

      <div className="row-start-3 shrink-0 lg:col-start-2 lg:row-start-1 lg:pl-4 lg:text-right">
        {hasProofCards ? (
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {proofPoints.map((point) =>
              point.type === "metric" ? (
                <ProofPoint
                  key={`${entry.number}-${point.label}`}
                  point={point}
                  accent={accent}
                />
              ) : (
                <ProofPoint
                  key={`${entry.number}-${point.text}`}
                  point={point}
                  accent={accent}
                />
              ),
            )}
          </div>
        ) : null}
        <p
          className={`text-center text-[11px] font-medium uppercase tracking-[0.16em] text-white/40 lg:text-right ${hasProofCards ? "mt-2.5" : ""}`}
        >
          {entry.period}
        </p>
      </div>

      {affiliations.length > 0 ? (
        <div className="row-start-2 space-y-3 sm:ml-8 lg:col-start-1">
          {affiliations.map((affiliation) => (
            <div
              key={affiliation.name}
              className="
                rounded-lg border border-white/10
                bg-black/15 px-3.5 py-3
              "
            >
              <p
                className={`text-[10px] font-medium uppercase tracking-[0.2em] ${accentAffiliationLabel[accent]}`}
              >
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

      {achievements.length > 0 ? (
        <ul className="row-start-2 space-y-1.5 sm:ml-8 lg:col-start-1">
          {achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex gap-2.5 text-sm leading-6 text-white/50"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/35"
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {tags.length > 0 ? (
        <div className="row-start-4 flex flex-wrap gap-1.5 sm:ml-8 lg:col-start-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`
                rounded-full border px-2.5 py-1
                text-[11px]
                ${accentTag[accent]}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

type LabHubExperienceListProps = {
  entries: readonly HubExperienceEntry[];
  accent?: LabAccent;
};

export default function LabHubExperienceList({
  entries,
  accent = "cyan",
}: LabHubExperienceListProps) {
  return (
    <div
      className="
        overflow-hidden rounded-[34px]
        border border-white/10 bg-white/[0.042]
        shadow-[0_20px_60px_rgba(0,0,0,0.28)]
        backdrop-blur-xl
      "
    >
      {entries.map((entry, index) => (
        <ExperienceRow
          key={`${entry.number}-${entry.organization}`}
          entry={entry}
          accent={accent}
          showDivider={index > 0}
        />
      ))}
    </div>
  );
}
