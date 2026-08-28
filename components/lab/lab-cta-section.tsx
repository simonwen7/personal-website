import Link from "next/link";

import LabSectionHeading from "./lab-section-heading";
import type { LabAccent } from "./lab-types";

const panelGlow: Record<LabAccent, string> = {
  cyan: "bg-cyan-500/[0.08]",
  emerald: "bg-emerald-500/[0.08]",
  violet: "bg-violet-500/[0.08]",
};

const buttonTone: Record<LabAccent, string> = {
  cyan: "border-cyan-300/20 bg-cyan-400/10 text-cyan-50 hover:bg-cyan-400/20",
  emerald:
    "border-emerald-300/20 bg-emerald-400/10 text-emerald-50 hover:bg-emerald-400/20",
  violet:
    "border-violet-300/20 bg-violet-400/10 text-violet-50 hover:bg-violet-400/20",
};

type LabCtaSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  accent?: LabAccent;
  href?: string;
  ctaLabel?: string;
};

export default function LabCtaSection({
  id = "contact",
  eyebrow,
  title,
  description,
  accent = "cyan",
  href = "/#contact",
  ctaLabel = "Contact Me →",
}: LabCtaSectionProps) {
  return (
    <section
      id={id}
      className="
        relative z-10
        scroll-mt-[120px]
        overflow-x-clip
        px-8 py-24
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div
          className="
            relative overflow-hidden rounded-[34px]
            border border-white/10
            bg-white/[0.042]
            px-8 py-12
            text-center
            shadow-[0_24px_75px_rgba(0,0,0,0.32)]
            backdrop-blur-xl
            sm:px-12
          "
        >
          <div
            aria-hidden="true"
            className={`
              pointer-events-none absolute left-1/2 top-1/2
              h-[420px] w-[420px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full blur-[140px]
              ${panelGlow[accent]}
            `}
          />

          <div className="relative z-10 flex w-full flex-col items-center">
            <LabSectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              accent={accent}
              align="center"
            />

            <div className="mt-9 flex w-full justify-center">
              <Link
                href={href}
                className={`
                  rounded-full border px-6 py-3
                  text-sm font-medium transition
                  hover:-translate-y-0.5
                  ${buttonTone[accent]}
                `}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
