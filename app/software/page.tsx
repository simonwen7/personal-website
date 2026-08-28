import LabCtaSection from "@/components/lab/lab-cta-section";
import LabExperienceCard from "@/components/lab/lab-experience-card";
import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectPreviewCard from "@/components/lab/lab-project-preview-card";
import LabSectionHeading from "@/components/lab/lab-section-heading";
import {
  businessTrack,
  softwareExperienceEntries,
  softwareHubSubnavItems,
  systemsTrack,
} from "@/components/lab/software-lab-data";

export default function SoftwareLabPage() {
  const [artifactStore, ...otherSystemsProjects] = systemsTrack.projects;

  return (
    <LabPageShell
      accent="cyan"
      subnavLabel="Software Lab"
      subnavItems={softwareHubSubnavItems}
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
                bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]
              "
            />

            <div className="relative z-10">
              <LabSectionHeading
                accent="cyan"
                eyebrow="01 — Scene"
                title="Software Lab"
                description="A hub for two major software work areas — systems infrastructure and product engineering — plus experience."
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Tracks",
                    value: "Systems Engineering · Business & Product",
                  },
                  {
                    label: "Contains",
                    value: "Project showcases and experience",
                  },
                  {
                    label: "Status",
                    value: "Living lab — content expanding over time",
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

      {/* 02 — Systems Engineering */}
      <section
        id="systems"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-16"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <LabSectionHeading
            accent="cyan"
            eyebrow="02 — Systems"
            title="Systems Engineering"
            description="Infrastructure, storage, retrieval, and runtime systems."
          />

          <div className="mt-10 flex flex-col gap-4">
            <LabProjectPreviewCard
              project={artifactStore}
              accent="cyan"
              featured
            />
            <div className="grid gap-4 lg:grid-cols-2">
              {otherSystemsProjects.map((project) => (
                <LabProjectPreviewCard
                  key={project.id}
                  project={project}
                  accent="cyan"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Business & Product Engineering */}
      <section
        id="business"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-16"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <LabSectionHeading
            accent="violet"
            eyebrow="03 — Product"
            title="Business & Product Engineering"
            description="User-facing software, AI products, and practical workflows."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {businessTrack.projects.map((project) => (
              <LabProjectPreviewCard
                key={project.id}
                project={project}
                accent="violet"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Experience */}
      <section
        id="experience"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <LabSectionHeading
            accent="cyan"
            eyebrow="04 — Experience"
            title="Experience"
            description="A flexible structure for education and future software roles. Placeholder entries are clearly marked."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {softwareExperienceEntries.map((entry) => (
              <LabExperienceCard
                key={`${entry.role}-${entry.organization}`}
                entry={entry}
                accent="cyan"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Let's Talk */}
      <LabCtaSection
        accent="cyan"
        eyebrow="05 — Contact"
        title="Let's Talk"
        description="Open to conversations about software engineering, backend systems, AI tools, and collaboration."
        href="/#contact"
        ctaLabel="Contact Me →"
      />
    </LabPageShell>
  );
}
