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
import LabProjectPreviewCard from "@/components/lab/lab-project-preview-card";
import LabSectionHeading from "@/components/lab/lab-section-heading";
import LabHubExperienceList from "@/components/lab/lab-hub-experience-list";
import {
  businessTrack,
  softwareHubExperienceEntries,
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
      <section id="overview" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <div className={hubCardShell}>
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

              <div className={`${hubContentGap} grid gap-3 sm:grid-cols-3`}>
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

      {/* 02 — Systems Engineering */}
      <section id="systems" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <LabSectionHeading
            accent="cyan"
            eyebrow="02 — Systems"
            title="Systems Engineering"
            description="Infrastructure, storage, retrieval, and runtime systems."
          />

          <div className={`${hubContentGap} flex flex-col gap-3`}>
            <LabProjectPreviewCard
              project={artifactStore}
              accent="cyan"
              featured
            />
            <div className="grid gap-3 lg:grid-cols-2">
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
      <section id="business" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <LabSectionHeading
            accent="violet"
            eyebrow="03 — Product"
            title="Business & Product Engineering"
            description="User-facing software, AI products, and practical workflows."
          />

          <div className={`${hubContentGap} grid gap-3 lg:grid-cols-2`}>
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
      <section id="experience" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <LabSectionHeading
            accent="cyan"
            eyebrow="Experience"
            title="Engineering Experience"
            description="Automation, backend validation, and AI product development."
          />

          <div className={hubContentGap}>
            <LabHubExperienceList
              entries={softwareHubExperienceEntries}
              accent="cyan"
            />
          </div>
        </div>
      </section>
    </LabPageShell>
  );
}
