import LabCtaSection from "@/components/lab/lab-cta-section";
import LabExperienceCard from "@/components/lab/lab-experience-card";
import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectCard from "@/components/lab/lab-project-card";
import LabSectionHeading from "@/components/lab/lab-section-heading";
import {
  roboticsExperienceEntries,
  roboticsProjects,
  roboticsSubnavItems,
} from "@/components/lab/robotics-lab-data";

export default function RoboticsLabPage() {
  return (
    <LabPageShell
      accent="emerald"
      subnavLabel="Robotics Lab"
      subnavItems={roboticsSubnavItems}
    >
      {/* 01 — Overview */}
      <section
        id="overview"
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
                bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.08),transparent_30%)]
              "
            />

            <div className="relative z-10">
              <LabSectionHeading
                accent="emerald"
                eyebrow="01 — Scene"
                title="Robotics Lab"
                description="A dedicated space for robotics projects, experiments, and hands-on systems work. Content will be added as real work lands here."
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Focus",
                    value: "Machines · control · physical systems",
                  },
                  {
                    label: "Contains",
                    value: "Projects and experience scaffolds",
                  },
                  {
                    label: "Status",
                    value: "Framework ready — content forthcoming",
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

      {/* 02 — Projects */}
      <section
        id="projects"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <LabSectionHeading
            accent="emerald"
            eyebrow="02 — Builds"
            title="Projects"
            description="Structural slots for future robotics work. No invented projects are listed here."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {roboticsProjects.map((project, index) => (
              <LabProjectCard
                key={`robotics-slot-${index + 1}`}
                project={{
                  ...project,
                  title: `Robotics project slot ${index + 1}`,
                }}
                accent="emerald"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Experience / Experiments */}
      <section
        id="experience"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <LabSectionHeading
            accent="emerald"
            eyebrow="03 — Experience"
            title="Experience / Experiments"
            description="A flexible structure for future robotics experience. Placeholder entries are clearly marked."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {roboticsExperienceEntries.map((entry) => (
              <LabExperienceCard
                key={`${entry.role}-${entry.organization}`}
                entry={entry}
                accent="emerald"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Let's Talk */}
      <LabCtaSection
        accent="emerald"
        eyebrow="04 — Contact"
        title="Let's Talk"
        description="Reach out about robotics, physical systems, or collaborations that connect software with machines."
        href="/#contact"
        ctaLabel="Contact Me →"
      />
    </LabPageShell>
  );
}
