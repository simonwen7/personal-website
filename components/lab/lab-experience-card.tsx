import type { LabAccent, LabExperienceEntry } from "./lab-types";

const accentBorder: Record<LabAccent, string> = {
  cyan: "hover:border-cyan-300/20",
  emerald: "hover:border-emerald-300/20",
  violet: "hover:border-violet-300/20",
};

type LabExperienceCardProps = {
  entry: LabExperienceEntry;
  accent?: LabAccent;
};

export default function LabExperienceCard({
  entry,
  accent = "cyan",
}: LabExperienceCardProps) {
  return (
    <article
      className={`
        relative overflow-hidden rounded-[24px]
        border border-white/10
        bg-white/[0.042]
        p-5
        shadow-[0_20px_60px_rgba(0,0,0,0.26)]
        backdrop-blur-xl
        transition duration-300
        hover:-translate-y-0.5
        ${accentBorder[accent]}
        ${entry.isPlaceholder ? "border-dashed border-white/15" : ""}
      `}
    >
      {entry.isPlaceholder ? (
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.26em] text-amber-200/70">
          Layout placeholder — not final public content
        </p>
      ) : null}

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{entry.role}</h3>
          <p className="mt-1.5 text-sm text-white/55">{entry.organization}</p>
        </div>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
          {entry.period}
        </p>
      </div>

      {entry.highlights && entry.highlights.length > 0 ? (
        <ul className="mt-4 space-y-1.5">
          {entry.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-6 text-white/50"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/35"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
