import Link from "next/link";

import LabCtaSection from "@/components/lab/lab-cta-section";
import LabPageShell from "@/components/lab/lab-page-shell";
import LabProjectShowcase from "@/components/lab/lab-project-showcase";
import LabSectionHeading from "@/components/lab/lab-section-heading";
import {
  businessSubnavItems,
  businessTrack,
} from "@/components/lab/software-lab-data";

export default function SoftwareBusinessPage() {
  return (
    <LabPageShell
      accent="violet"
      subnavLabel="Business & Product"
      subnavItems={businessSubnavItems}
    >
      <section
        id="overview"
        className="relative scroll-mt-[120px] overflow-x-clip px-8 py-20"
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div
            className="
              relative overflow-hidden rounded-[36px]
              border border-white/10 bg-white/[0.042]
              p-8 shadow-[0_24px_75px_rgba(0,0,0,0.32)]
              backdrop-blur-xl md:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_30%)]
              "
            />

            <div className="relative z-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
                Software Lab · Track 02
              </p>

              <LabSectionHeading
                accent="violet"
                eyebrow="Business & Product Engineering"
                title="User-facing software and AI product workflows."
                description={businessTrack.focusLine}
              />

              <div className="mt-8">
                <Link
                  href="/software/"
                  className="
                    inline-flex rounded-full border border-white/15
                    bg-white/[0.05] px-4 py-2
                    text-xs font-medium text-white/65
                    transition hover:bg-white/[0.10] hover:text-white
                  "
                >
                  ← Software Lab hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {businessTrack.projects.map((project) => (
        <LabProjectShowcase
          key={project.id}
          project={project}
          accent="violet"
        />
      ))}

      <LabCtaSection
        accent="violet"
        eyebrow="Contact"
        title="Let's Talk"
        description="Discuss product engineering, AI tools, or applied software projects."
        href="/#contact"
        ctaLabel="Contact Me →"
      />
    </LabPageShell>
  );
}
