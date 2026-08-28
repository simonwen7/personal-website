import {
  codeIntelligenceArchitectureSupport,
  codeIntelligenceDesignIntro,
  codeIntelligenceDesignNote,
  codeIntelligenceEvaluationNote,
  codeIntelligenceFlatFlow,
  codeIntelligenceGithub,
  codeIntelligenceGraphEdges,
  codeIntelligenceHero,
  codeIntelligenceHighlights,
  codeIntelligenceLanguageStrategy,
  codeIntelligencePipeline,
  codeIntelligenceRetrievalFlow,
  codeIntelligenceTechLabels,
  codeIntelligenceThesis,
} from "./code-intelligence-data";

export default function CodeIntelligenceShowcase() {
  return (
    <div className="relative overflow-x-clip px-8 py-8 sm:py-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-16 sm:space-y-20">
        {/* ── Hero ── */}
        <header id="overview" className="relative scroll-mt-[120px]">
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -left-16 top-0
              h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[100px]
            "
          />

          <div className="relative z-10 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              {codeIntelligenceHero.eyebrow}
            </p>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/55">
              {codeIntelligenceHero.techLine}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.1rem] lg:leading-[1.08]">
              Graph-Augmented
              <br />
              Code Intelligence Engine
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {codeIntelligenceHero.positioning}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
              {codeIntelligenceHero.supporting}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={codeIntelligenceGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full border border-cyan-300/20
                  bg-cyan-400/10 px-5 py-2.5
                  text-sm font-medium text-cyan-50
                  transition hover:bg-cyan-400/20
                "
              >
                GitHub ↗
              </a>
              <p className="text-sm text-white/35">Demo coming soon</p>
            </div>
          </div>
        </header>

        {/* ── Code is more than text ── */}
        <section id="why-graph" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow={codeIntelligenceThesis.eyebrow}
            title={codeIntelligenceThesis.headline}
            description={codeIntelligenceThesis.body}
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <ComparisonPanel label="Flat retrieval" tone="muted">
              <VerticalFlow steps={codeIntelligenceFlatFlow} />
            </ComparisonPanel>

            <ComparisonPanel label="Structural retrieval" tone="accent">
              <GraphPath edges={codeIntelligenceGraphEdges} />
            </ComparisonPanel>
          </div>
        </section>

        {/* ── System design ── */}
        <section id="design" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow="System design"
            title="Intelligence pipeline"
            description={codeIntelligenceDesignIntro}
          />

          <div
            className="
              mt-8 overflow-hidden rounded-[28px] border border-white/10
              bg-white/[0.03] px-6 py-8 sm:px-8
            "
          >
            <DesignPipeline steps={codeIntelligencePipeline} />

            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.22em] text-white/35">
              Retrieval flow
            </p>
            <RetrievalFlow steps={codeIntelligenceRetrievalFlow} />

            <p className="mt-8 text-sm leading-6 text-white/45">
              {codeIntelligenceDesignNote}
            </p>

            <p className="mt-4 text-sm text-white/40">
              {codeIntelligenceLanguageStrategy}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {codeIntelligenceArchitectureSupport.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full border border-white/10
                    bg-black/20 px-2.5 py-1 text-[11px] text-white/40
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engineering highlights ── */}
        <section id="highlights" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow="Engineering highlights"
            title="Design principles"
            description={`Three ideas at the center of the engine's architecture. ${codeIntelligenceEvaluationNote}`}
          />

          <div className="mt-8 space-y-4">
            {codeIntelligenceHighlights.map((highlight) => (
              <HighlightCard key={highlight.number} highlight={highlight} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {codeIntelligenceTechLabels.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full border border-white/10
                  bg-white/[0.04] px-3 py-1 text-xs text-white/50
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <div className="flex flex-col items-center gap-4 pb-4 pt-2 sm:flex-row sm:justify-center">
          <a
            href={codeIntelligenceGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full border border-cyan-300/20
              bg-cyan-400/10 px-6 py-3
              text-sm font-medium text-cyan-50
              transition hover:bg-cyan-400/20
            "
          >
            GitHub ↗
          </a>
          <p className="text-sm text-white/35">Demo coming soon</p>
        </div>
      </div>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-100/50">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
        {description}
      </p>
    </div>
  );
}

function ComparisonPanel({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "muted" | "accent";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`
        rounded-[26px] border p-6 sm:p-7
        ${
          tone === "accent"
            ? "border-cyan-300/20 bg-cyan-400/[0.06]"
            : "border-white/10 bg-white/[0.03]"
        }
      `}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
        {label}
      </p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function VerticalFlow({ steps }: { steps: readonly string[] }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center">
          <span
            className="
              rounded-xl border border-white/12 bg-black/25
              px-4 py-2 text-sm text-white/70
            "
          >
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span aria-hidden="true" className="my-1 text-white/25">
              ↓
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function GraphPath({
  edges,
}: {
  edges: readonly { from: string; relation: string; to: string }[];
}) {
  const nodes = [
    edges[0]?.from,
    ...edges.map((edge) => edge.to),
  ].filter(Boolean);

  return (
    <div className="flex flex-col items-center">
      {nodes.map((node, index) => (
        <div key={node} className="flex flex-col items-center">
          <span
            className="
              rounded-xl border border-cyan-300/20 bg-cyan-400/[0.08]
              px-4 py-2 text-sm font-medium text-cyan-50/90
            "
          >
            {node}
          </span>
          {index < edges.length ? (
            <>
              <span className="my-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-100/45">
                {edges[index]?.relation}
              </span>
              <span aria-hidden="true" className="mb-1 text-white/20">
                │
              </span>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function DesignPipeline({ steps }: { steps: readonly string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
      {steps.map((step, index) => (
        <span key={step} className="inline-flex items-center gap-2">
          {index > 0 ? (
            <span aria-hidden="true" className="text-white/25">
              →
            </span>
          ) : null}
          <span
            className="
              rounded-full border border-white/10 bg-black/25
              px-3 py-1.5 text-xs text-white/60
            "
          >
            {step}
          </span>
        </span>
      ))}
    </div>
  );
}

function RetrievalFlow({ steps }: { steps: readonly string[] }) {
  return (
    <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
      <div className="flex items-center gap-2">
        <FlowChip label={steps[0]!} />
        <span aria-hidden="true" className="text-white/30">
          +
        </span>
        <FlowChip label={steps[1]!} />
      </div>
      {steps.slice(2).map((step) => (
        <span key={step} className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="text-white/25">
            →
          </span>
          <FlowChip label={step} />
        </span>
      ))}
    </div>
  );
}

function FlowChip({ label }: { label: string }) {
  return (
    <span
      className="
        rounded-full border border-cyan-300/15 bg-cyan-400/[0.07]
        px-3 py-1.5 text-xs text-cyan-50/75
      "
    >
      {label}
    </span>
  );
}

function HighlightCard({
  highlight,
}: {
  highlight: (typeof codeIntelligenceHighlights)[number];
}) {
  return (
    <div
      className="
        rounded-[24px] border border-white/10
        bg-white/[0.035] px-6 py-5 sm:px-7 sm:py-6
      "
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-100/45">
        Highlight {highlight.number}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
        {highlight.title}
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-7 text-white/55">
        {highlight.body}
      </p>
    </div>
  );
}
