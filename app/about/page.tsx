import LabPageShell from "@/components/lab/lab-page-shell";
import LabSectionHeading from "@/components/lab/lab-section-heading";
import { beyondTheLabSubnavItems } from "@/components/lab/beyond-the-lab-data";

function MediaReadySlot({
  label,
  hint,
}: {
  label: string;
  hint: string;
}) {
  return (
    <div
      className="
        relative flex min-h-[240px] flex-col justify-between overflow-hidden
        rounded-[28px] border border-dashed border-violet-300/20
        bg-black/25 p-6
        sm:min-h-[280px]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.06),transparent_40%)]
        "
      />

      <div className="relative z-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-violet-100/45">
          {label}
        </p>
        <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
          {hint}
        </p>
      </div>

      <p className="relative z-10 text-xs text-white/30">
        Media-ready · content coming later
      </p>
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
      {/* 01 — Introduction / My Story */}
      <section
        id="intro"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div
            className="
              relative overflow-hidden rounded-[36px]
              border border-white/10
              bg-white/[0.042]
              p-8 shadow-[0_24px_75px_rgba(0,0,0,0.32)]
              backdrop-blur-xl
              md:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.07),transparent_32%)]
              "
            />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <LabSectionHeading
                  accent="violet"
                  eyebrow="01 — My Story"
                  title="Beyond the Lab"
                  description="Who Simon is outside software and robotics — a personal space for music, sport, making, and stories still taking shape."
                />

                <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-white/60">
                  <p>
                    I&apos;m an undergraduate student at the University of
                    Waterloo, interested in software and robotics.
                  </p>
                  <p>
                    Away from the engineering work, I enjoy piano,
                    basketball, and building with LEGO — small ways of
                    staying curious, creative, and hands-on.
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
                    value: "Piano · Basketball · LEGO",
                  },
                  {
                    label: "This page",
                    value: "A living personal framework",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      rounded-[22px] border border-white/[0.08]
                      bg-black/20 p-5
                    "
                  >
                    <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/70">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Music */}
      <section
        id="music"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-16 sm:py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div
            className="
              relative overflow-hidden rounded-[36px]
              border border-white/10 bg-white/[0.042]
              shadow-[0_28px_90px_rgba(0,0,0,0.34)]
              backdrop-blur-xl
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_38%)]
              "
            />

            <div className="relative z-10 grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-white/[0.07] p-8 md:p-10 lg:border-b-0 lg:border-r lg:border-white/[0.07] lg:p-12">
                <LabSectionHeading
                  accent="violet"
                  eyebrow="02 — Music"
                  title="Music"
                  description="Piano and singing are part of life outside the lab. This section will grow with real recordings, moments, and stories when they are ready to share."
                />

                <div className="mt-8 flex flex-wrap gap-2">
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

                <p className="mt-8 text-sm leading-7 text-white/45">
                  Room reserved for images, video, audio, and short
                  personal notes — nothing fabricated for now.
                </p>
              </div>

              <div className="grid gap-4 p-8 md:grid-cols-2 md:p-10 lg:p-12">
                <MediaReadySlot
                  label="Visual / video"
                  hint="A place for performance stills, practice moments, or short clips later."
                />
                <MediaReadySlot
                  label="Audio / notes"
                  hint="Reserved for recordings or reflections once real material exists."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Basketball */}
      <section
        id="basketball"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-16 sm:py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div
            className="
              relative overflow-hidden rounded-[36px]
              border border-white/10 bg-white/[0.042]
              shadow-[0_28px_90px_rgba(0,0,0,0.34)]
              backdrop-blur-xl
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.10),transparent_38%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.10),transparent_40%)]
              "
            />

            <div className="relative z-10 grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="order-2 border-t border-white/[0.07] p-8 md:p-10 lg:order-1 lg:border-t-0 lg:border-r lg:border-white/[0.07] lg:p-12">
                <MediaReadySlot
                  label="Photo / moment"
                  hint="Space for court photos, pickup games, and favorite moments later."
                />
              </div>

              <div className="order-1 p-8 md:p-10 lg:order-2 lg:p-12">
                <LabSectionHeading
                  accent="violet"
                  eyebrow="03 — Basketball"
                  title="Basketball"
                  description="I enjoy playing basketball — movement, rhythm, and time away from the screen."
                />

                <p className="mt-8 text-sm leading-7 text-white/50">
                  Photos, experiences, and short stories can live here
                  later. No teams, stats, or awards are claimed yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — LEGO & Making */}
      <section
        id="lego"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-16 sm:py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div
            className="
              relative overflow-hidden rounded-[36px]
              border border-white/10 bg-white/[0.042]
              shadow-[0_28px_90px_rgba(0,0,0,0.34)]
              backdrop-blur-xl
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.10),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_40%)]
              "
            />

            <div className="relative z-10 p-8 md:p-10 lg:p-12">
              <LabSectionHeading
                accent="violet"
                eyebrow="04 — LEGO & Making"
                title="LEGO & Making"
                description="Building with LEGO is another creative outlet — assembling ideas with hands, not only with code."
              />

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <MediaReadySlot
                  label="Builds"
                  hint="Reserved for future LEGO builds and photos."
                />
                <MediaReadySlot
                  label="Making"
                  hint="Space for creative projects and collections later."
                />
                <MediaReadySlot
                  label="Stories"
                  hint="Short notes about what gets built — when ready."
                />
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45">
                No specific sets, collections, or models are listed
                here yet. This section is ready for real making
                content when it arrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Notes & Stories */}
      <section
        id="stories"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-16 sm:py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <LabSectionHeading
            accent="violet"
            eyebrow="05 — Notes & Stories"
            title="Notes & Stories"
            description="A lightweight place for personal experiences, thoughts, and reflections — not a blog system yet."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Posts",
                copy: "Longer write-ups can land here later.",
              },
              {
                label: "Experiences",
                copy: "Moments from music, sport, and making.",
              },
              {
                label: "Reflections",
                copy: "Short thoughts — when there’s something real to share.",
              },
            ].map((slot) => (
              <div
                key={slot.label}
                className="
                  rounded-[28px] border border-white/10
                  bg-white/[0.035] p-6
                  shadow-[0_18px_50px_rgba(0,0,0,0.22)]
                  backdrop-blur-xl
                "
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
                  {slot.label}
                </p>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  {slot.copy}
                </p>
                <p className="mt-6 text-xs text-white/30">
                  Coming later · no placeholder articles
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/40">
            This is an honest framework state — no fake dates, titles,
            or posts. Content will appear when it exists.
          </p>
        </div>
      </section>
    </LabPageShell>
  );
}
