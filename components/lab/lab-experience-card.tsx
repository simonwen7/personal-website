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
        relative overflow-hidden rounded-[28px]
        border border-white/10
        bg-white/[0.042]
        p-6
        shadow-[0_24px_70px_rgba(0,0,0,0.28)]
        backdrop-blur-xl
        transition duration-300
        hover:-translate-y-0.5
        ${accentBorder[accent]}
        ${entry.isPlaceholder ? "border-dashed border-white/15" : ""}
      `}
    >
      {entry.isPlaceholder ? (
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-amber-200/70">
          Layout placeholder — not final public content
        </p>
      ) : null}

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{entry.role}</h3>
          <p className="mt-2 text-sm text-white/60">{entry.organization}</p>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
          {entry.period}
        </p>
      </div>

      {entry.highlights && entry.highlights.length > 0 ? (
        <ul className="mt-5 space-y-2">
          {entry.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-white/50"
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
