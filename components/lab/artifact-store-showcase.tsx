import type { ReactNode } from "react";

import {
  artifactStoreBenchmarks,
  artifactStoreDemoVideo,
  artifactStoreFailureSteps,
  artifactStoreGithub,
  artifactStoreProof,
} from "./artifact-store-data";

const DEMO_VIDEO_ID = "artifact-store-demo";

export default function ArtifactStoreShowcase() {
  return (
    <div className="relative overflow-x-clip px-8 py-8 sm:py-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-20 sm:space-y-24">
        {/* ── Project identity ── */}
        <header id="overview" className="relative scroll-mt-[120px]">
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -left-24 top-0
              h-64 w-64 rounded-full bg-cyan-500/[0.07] blur-[100px]
            "
          />

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
                01 / AI Artifact Store
              </span>
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/55">
              C++20 · Distributed Storage
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              AI Artifact Store
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              A C++20 distributed artifact store for AI/ML workloads, built
              around content addressing, resumable transfer, replication, and
              failure recovery.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`#${DEMO_VIDEO_ID}`}
                className="
                  rounded-full border border-cyan-300/20
                  bg-cyan-400/10 px-5 py-2.5
                  text-sm font-medium text-cyan-50
                  transition hover:bg-cyan-400/20
                "
              >
                Watch Demo ▶
              </a>
              <a
                href={artifactStoreGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full border border-white/15
                  bg-white/[0.07] px-5 py-2.5
                  text-sm font-medium text-white/85
                  transition hover:bg-white/[0.12] hover:text-white
                "
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </header>

        {/* ── Demo video ── */}
        <div id={DEMO_VIDEO_ID} className="scroll-mt-[120px]">
          <div
            className="
              relative overflow-hidden rounded-[32px]
              border border-white/10 bg-white/[0.035]
              shadow-[0_28px_90px_rgba(0,0,0,0.38)]
              backdrop-blur-xl
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_42%)]
              "
            />

            <div className="relative z-10 border-b border-white/[0.07] px-6 py-5 sm:px-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
                Interactive Systems Demo
              </p>
              <p className="mt-2 text-sm text-white/55">
                Node failure · Verified recovery · Replica repair
              </p>
            </div>

            <div className="relative z-10 p-4 sm:p-6">
              <div
                className="
                  overflow-hidden rounded-[20px]
                  border border-cyan-300/15 bg-black/50
                "
              >
                <video
                  className="block h-auto w-full"
                  controls
                  preload="metadata"
                  playsInline
                  aria-label="AI Artifact Store interactive systems demo recording"
                >
                  <source src={artifactStoreDemoVideo} type="video/mp4" />
                  Your browser does not support embedded video playback.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* ── Story 1: Failure recovery ── */}
        <StorySection
          id="failure"
          eyebrow="Story 01"
          title="Built for Failure"
          description="Replication and verified recovery when a storage node goes offline — repair is explicit, not autonomous."
        >
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {artifactStoreFailureSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < artifactStoreFailureSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="
                      absolute right-0 top-8 z-10 hidden translate-x-1/2
                      text-cyan-300/40 lg:block
                    "
                  >
                    →
                  </span>
                ) : null}
                <div
                  className="
                    h-full rounded-[24px] border border-white/10
                    bg-white/[0.04] p-5
                  "
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-100/50">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {step.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </StorySection>

        {/* ── Story 2: Content identity ── */}
        <StorySection
          id="identity"
          eyebrow="Story 02"
          title="Object ≠ ObjectLayout"
          description="The same raw content can keep the same Object identity while being represented by different chunk layouts such as FixedSize and FastCDC."
        >
          <div
            className="
              mt-10 overflow-x-auto rounded-[28px]
              border border-white/10 bg-black/25 p-6 sm:p-8
            "
          >
            <div className="mx-auto flex min-w-[280px] max-w-lg flex-col items-center gap-3 text-center">
              <DiagramNode label="Raw Artifact" tone="neutral" />
              <DiagramArrow />
              <DiagramNode label="Object" tone="primary" sub="SHA-256(entire raw object)" />
              <div className="flex w-full items-start justify-center gap-6 sm:gap-10">
                <div className="flex flex-col items-center gap-3">
                  <DiagramArrow short />
                  <DiagramNode label="FixedSize Layout" tone="secondary" sub="physical chunking" />
                  <DiagramArrow short />
                  <DiagramNode label="Chunks" tone="muted" sub="SHA-256(chunk bytes)" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <DiagramArrow short />
                  <DiagramNode label="FastCDC Layout" tone="secondary" sub="physical chunking" />
                  <DiagramArrow short />
                  <DiagramNode label="Chunks" tone="muted" sub="SHA-256(chunk bytes)" />
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 border-t border-white/[0.07] pt-6 sm:grid-cols-3">
              {[
                { label: "Chunk", value: "SHA-256(chunk bytes)" },
                { label: "Object", value: "SHA-256(entire raw object)" },
                {
                  label: "ObjectLayout",
                  value: "the physical chunking representation",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[18px] border border-white/[0.08] bg-white/[0.03] px-4 py-3"
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </StorySection>

        {/* ── Story 3: Measured trade-off ── */}
        <StorySection
          id="performance"
          eyebrow="Story 03"
          title="Measured Trade-off"
          description="FastCDC trades chunking throughput for much stronger boundary stability and shifted-content reuse on this deterministic reference workload."
        >
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <BenchmarkColumn
              title="FixedSize"
              throughput={artifactStoreBenchmarks.fixedSize.throughput}
              reuse={artifactStoreBenchmarks.fixedSize.reuse}
              throughputBar={100}
              reuseBar={0}
              accent="muted"
            />
            <BenchmarkColumn
              title="FastCDC"
              throughput={artifactStoreBenchmarks.fastCdc.throughput}
              reuse={artifactStoreBenchmarks.fastCdc.reuse}
              throughputBar={15}
              reuseBar={96}
              accent="cyan"
            />
          </div>
          <p className="mt-6 text-xs text-white/40">
            {artifactStoreBenchmarks.caveat}
          </p>
        </StorySection>

        {/* ── Proof strip ── */}
        <div
          id="proof"
          className="
            scroll-mt-[120px]
            grid gap-px overflow-hidden rounded-[28px]
            border border-white/10 bg-white/10
            sm:grid-cols-2 lg:grid-cols-4
          "
        >
          {artifactStoreProof.map((item) => (
            <div
              key={item.label}
              className="bg-[#070b10] px-6 py-6 text-center sm:text-left"
            >
              <p className="text-3xl font-semibold tracking-tight text-cyan-50">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white/75">
                {item.label}
              </p>
              {"hint" in item && item.hint ? (
                <p className="mt-1 text-xs text-white/40">{item.hint}</p>
              ) : null}
            </div>
          ))}
        </div>

        {/* ── Architecture ── */}
        <StorySection
          id="architecture"
          eyebrow="Architecture"
          title="Control Plane · Data Plane"
          description="Client-orchestrated transfers with a PostgreSQL-backed metadata service and replicated content-addressed storage nodes."
        >
          <div
            className="
              mt-10 overflow-x-auto rounded-[28px]
              border border-white/10 bg-white/[0.03] p-6 sm:p-10
            "
          >
            <div className="mx-auto flex min-w-[300px] max-w-md flex-col items-center gap-4 text-center">
              <DiagramNode label="C++ Client / CLI" tone="primary" wide />
              <DiagramArrow />
              <div className="grid w-full grid-cols-2 gap-4">
                <DiagramNode label="Control Plane" tone="secondary" />
                <DiagramNode label="Data Plane" tone="secondary" />
              </div>
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-3">
                  <DiagramArrow short />
                  <DiagramNode label="Metadata Service" tone="neutral" />
                  <DiagramArrow short />
                  <DiagramNode label="PostgreSQL" tone="muted" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <DiagramArrow short />
                  <div className="grid w-full grid-cols-3 gap-2">
                    {["Node A", "Node B", "Node C"].map((node) => (
                      <DiagramNode key={node} label={node} tone="muted" small />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2 border-t border-white/[0.07] pt-6">
              {[
                "SHA-256 CAS",
                "FixedSize / FastCDC",
                "Rendezvous placement",
                "Configurable replication",
              ].map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full border border-white/10
                    bg-white/[0.04] px-3 py-1.5
                    text-xs text-white/50
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </StorySection>

        {/* ── Closing CTA ── */}
        <div className="flex justify-center pt-2">
          <a
            href={artifactStoreGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full border border-cyan-300/20
              bg-cyan-400/10 px-6 py-3
              text-sm font-medium text-cyan-50
              transition hover:bg-cyan-400/20
            "
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function StorySection({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className={id ? "scroll-mt-[120px]" : undefined}>
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-100/50">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
        {title}
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
        {description}
      </p>
      {children}
    </div>
  );
}

function DiagramNode({
  label,
  sub,
  tone,
  wide,
  small,
}: {
  label: string;
  sub?: string;
  tone: "primary" | "secondary" | "neutral" | "muted";
  wide?: boolean;
  small?: boolean;
}) {
  const toneClass = {
    primary:
      "border-cyan-300/25 bg-cyan-400/10 text-cyan-50",
    secondary:
      "border-white/15 bg-white/[0.06] text-white/80",
    neutral:
      "border-white/12 bg-white/[0.04] text-white/70",
    muted:
      "border-white/10 bg-black/30 text-white/55",
  }[tone];

  return (
    <div
      className={`
        rounded-xl border px-4 py-3
        ${toneClass}
        ${wide ? "w-full" : ""}
        ${small ? "px-2 py-2 text-xs" : "text-sm"}
      `}
    >
      <p className={`font-medium ${small ? "text-[11px]" : ""}`}>{label}</p>
      {sub ? (
        <p className="mt-1 text-[10px] text-white/45">{sub}</p>
      ) : null}
    </div>
  );
}

function DiagramArrow({ short }: { short?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`text-cyan-300/35 ${short ? "text-sm" : "text-base"}`}
    >
      ↓
    </span>
  );
}

function BenchmarkColumn({
  title,
  throughput,
  reuse,
  throughputBar,
  reuseBar,
  accent,
}: {
  title: string;
  throughput: string;
  reuse: string;
  throughputBar: number;
  reuseBar: number;
  accent: "cyan" | "muted";
}) {
  const barColor =
    accent === "cyan" ? "bg-cyan-400/70" : "bg-white/25";

  return (
    <div
      className="
        rounded-[28px] border border-white/10
        bg-white/[0.04] p-6 sm:p-8
      "
    >
      <h4 className="text-xl font-semibold text-white">{title}</h4>

      <div className="mt-8 space-y-6">
        <MetricBar
          label="Chunk/hash throughput"
          value={throughput}
          percent={throughputBar}
          barColor={barColor}
        />
        <MetricBar
          label="Shifted-content reuse"
          value={reuse}
          percent={reuseBar}
          barColor={barColor}
        />
      </div>
    </div>
  );
}

function MetricBar({
  label,
  value,
  percent,
  barColor,
}: {
  label: string;
  value: string;
  percent: number;
  barColor: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-xs text-white/45">{label}</p>
        <p className="text-sm font-medium text-white/85">{value}</p>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.08]">
        <div
          className={`h-full rounded-full transition-all ${barColor}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
