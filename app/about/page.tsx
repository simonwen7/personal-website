import {
  hubCardShell,
  hubContentGap,
  hubMetaCardClass,
  hubMetaLabelClass,
  hubMetaValueClass,
  hubSectionClass,
  hubSectionContainer,
} from "@/components/lab/lab-hub-scale";
import LabPageShell from "@/components/lab/lab-page-shell";
import LabSectionHeading from "@/components/lab/lab-section-heading";
import { beyondTheLabSubnavItems } from "@/components/lab/beyond-the-lab-data";

function ComingSoon({ label }: { label?: string }) {
  return (
    <div
      className="
        flex items-center justify-center rounded-[20px]
        border border-dashed border-violet-300/15 bg-black/20 px-4 py-6
      "
    >
      <div className="text-center">
        {label ? (
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/30">
            {label}
          </p>
        ) : null}
        <p
          className={`text-[11px] font-medium uppercase tracking-[0.22em] text-violet-100/40 ${label ? "mt-2" : ""}`}
        >
          Coming soon
        </p>
      </div>
    </div>
  );
}

export default function BeyondTheLabPage() {
  return (
    <LabPageShell
      accent="violet"
      subnavLabel="Beyond the Lab"
      subnavItems={beyondTheLabSubnavItems}
    >
      {/* Intro / My Story */}
      <section id="intro" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <div className={hubCardShell}>
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.07),transparent_32%)]
              "
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <LabSectionHeading
                  accent="violet"
                  eyebrow="My Story"
                  title="Beyond the Lab"
                  description="Who I am outside software and robotics — music, sport, making, and stories still taking shape."
                />

                <div className={`${hubContentGap} max-w-2xl space-y-4 text-sm leading-7 text-white/55`}>
                  <p>
                    I&apos;m an undergraduate student at the University of
                    Waterloo, interested in software and robotics.
                  </p>
                  <p>
                    Away from the engineering work, I enjoy piano, singing,
                    basketball, and building with LEGO — small ways of staying
                    curious, creative, and hands-on.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    label: "School",
                    value: "University of Waterloo",
                  },
                  {
                    label: "Outside the labs",
                    value: "Piano · Singing · Basketball · LEGO",
                  },
                ].map((item) => (
                  <div key={item.label} className={hubMetaCardClass}>
                    <p className={hubMetaLabelClass}>{item.label}</p>
                    <p className={hubMetaValueClass}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music */}
      <section id="music" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <div className={hubCardShell}>
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_38%)]
              "
            />

            <div className="relative z-10">
              <LabSectionHeading
                accent="violet"
                eyebrow="Music"
                title="Music"
                description="Piano and singing are part of life outside the lab."
              />

              <div className={`${hubContentGap} flex flex-wrap gap-2`}>
                {["Piano", "Singing"].map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full border border-violet-300/20
                      bg-violet-400/10 px-3 py-1.5
                      text-xs text-violet-50/80
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <ComingSoon label="Piano" />
                <ComingSoon label="Singing" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basketball */}
      <section id="basketball" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <div className={hubCardShell}>
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.10),transparent_38%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.10),transparent_40%)]
              "
            />

            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <LabSectionHeading
                  accent="violet"
                  eyebrow="Basketball"
                  title="Basketball"
                  description="I enjoy playing basketball — movement, rhythm, and time away from the screen."
                />
              </div>

              <ComingSoon label="Photos & moments" />
            </div>
          </div>
        </div>
      </section>

      {/* LEGO & Making */}
      <section id="lego" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <div className={hubCardShell}>
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.10),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_40%)]
              "
            />

            <div className="relative z-10">
              <LabSectionHeading
                accent="violet"
                eyebrow="LEGO & Making"
                title="LEGO & Making"
                description="Building with LEGO is another creative outlet — assembling ideas with hands, not only with code."
              />

              <div className={`${hubContentGap} max-w-md`}>
                <ComingSoon label="Builds & stories" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notes & Stories */}
      <section id="stories" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <div className={hubCardShell}>
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_40%)]
              "
            />

            <div className="relative z-10">
              <LabSectionHeading
                accent="violet"
                eyebrow="Notes & Stories"
                title="Notes & Stories"
                description="Thoughts, stories, and things worth remembering."
              />

              <div className={`${hubContentGap} max-w-lg`}>
                <ComingSoon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LabPageShell>
  );
}
