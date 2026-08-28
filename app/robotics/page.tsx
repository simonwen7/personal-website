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
import LabRoboticsArchive from "@/components/lab/lab-robotics-archive";
import LabRoboticsJourney from "@/components/lab/lab-robotics-journey";
import LabSectionHeading from "@/components/lab/lab-section-heading";
import {
  roboticsArchiveSlots,
  roboticsJourneyEntries,
  roboticsOverviewMeta,
  roboticsProgressionSteps,
  roboticsSubnavItems,
} from "@/components/lab/robotics-lab-data";

export default function RoboticsLabPage() {
  return (
    <LabPageShell
      accent="emerald"
      subnavLabel="Robotics Lab"
      subnavItems={roboticsSubnavItems}
    >
      {/* Overview */}
      <section id="overview" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <div className={hubCardShell}>
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
                eyebrow="Robotics Lab"
                title="Robotics Lab"
                description="From early VEX competitions to FRC leadership, technical mentorship, and university robotics, robotics has remained a long-running part of how I build, learn, and lead."
              />

              <div className={`${hubContentGap} grid gap-3 sm:grid-cols-3`}>
                {roboticsOverviewMeta.map((item) => (
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

      {/* 01 — Robotics Journey */}
      <section id="journey" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <LabSectionHeading
            accent="emerald"
            eyebrow="Robotics Journey"
            title="A Decade in Robotics"
            description="From VEX competition to FRC leadership, mentorship, and university robotics."
          />

          <div className={hubContentGap}>
            <LabRoboticsJourney
              entries={roboticsJourneyEntries}
              progressionSteps={roboticsProgressionSteps}
            />
          </div>
        </div>
      </section>

      {/* 02 — Robotics Archive */}
      <section id="archive" className={hubSectionClass}>
        <div className={hubSectionContainer}>
          <LabSectionHeading
            accent="emerald"
            eyebrow="Robotics Archive"
            title="Robotics Archive"
            description="Certificates and moments from more than a decade in robotics."
          />

          <div className={hubContentGap}>
            <LabRoboticsArchive slots={roboticsArchiveSlots} />
          </div>
        </div>
      </section>
    </LabPageShell>
  );
}
