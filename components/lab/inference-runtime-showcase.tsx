import {
  inferenceRuntimeAdaptiveDecisions,
  inferenceRuntimeAdaptiveMeaning,
  inferenceRuntimeBackendNote,
  inferenceRuntimeBaselineNote,
  inferenceRuntimeDesignNote,
  inferenceRuntimeGithub,
  inferenceRuntimeHero,
  inferenceRuntimeHighlights,
  inferenceRuntimeMemoryExample,
  inferenceRuntimePipeline,
  inferenceRuntimeProblem,
  inferenceRuntimeTechLabels,
  inferenceRuntimeTradeoffs,
} from "./inference-runtime-data";

export default function InferenceRuntimeShowcase() {
  return (
    <div className="relative overflow-x-clip px-8 py-8 sm:py-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-16 sm:space-y-20">
        {/* ── Hero ── */}
        <header id="overview" className="relative scroll-mt-[120px]">
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -right-16 top-0
              h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[100px]
            "
          />

          <div className="relative z-10 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              {inferenceRuntimeHero.eyebrow}
            </p>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/55">
              {inferenceRuntimeHero.techLine}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.1rem] lg:leading-[1.08]">
              Adaptive AI
              <br />
              Inference Runtime
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {inferenceRuntimeHero.positioning}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={inferenceRuntimeGithub}
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

          <RuntimeHeroVisual />
        </header>

        {/* ── Runtime problem ── */}
        <section id="problem" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow={inferenceRuntimeProblem.eyebrow}
            title={inferenceRuntimeProblem.headline}
            description="Serving multiple models under concurrent load turns inference into scheduling, routing, and memory management — not just model execution."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div
              className="
                rounded-[26px] border border-white/10
                bg-white/[0.03] p-6 sm:p-7
              "
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
                Runtime pressure
              </p>
              <ul className="mt-4 space-y-2">
                {inferenceRuntimeProblem.setup.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-6 text-white/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="
                rounded-[26px] border border-cyan-300/20
                bg-cyan-400/[0.06] p-6 sm:p-7
              "
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-100/45">
                Decisions that follow
              </p>
              <ul className="mt-4 space-y-2">
                {inferenceRuntimeProblem.questions.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-6 text-white/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <MemoryPressureVisual />
        </section>

        {/* ── System design ── */}
        <section id="design" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow="System design"
            title="Runtime architecture"
            description="Requests enter the runtime; the scheduler decides what should run, the router decides where it should run, and workers execute using resident or loadable models."
          />

          <div
            className="
              mt-8 overflow-hidden rounded-[28px] border border-white/10
              bg-white/[0.03] px-6 py-8 sm:px-8
            "
          >
            <DesignPipeline steps={inferenceRuntimePipeline} />
            <p className="mt-8 text-sm leading-6 text-white/45">
              {inferenceRuntimeDesignNote}
            </p>
            <p className="mt-3 text-sm text-white/40">
              {inferenceRuntimeBackendNote}
            </p>
          </div>
        </section>

        {/* ── Adaptive decisions ── */}
        <section id="adaptive" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow="Adaptive runtime"
            title="Four decision surfaces"
            description="Adaptive means runtime decisions respond to workload and resource state — not automatic model switching or learned schedulers."
          />

          <div className="mt-6 flex flex-wrap gap-2">
            {inferenceRuntimeAdaptiveMeaning.map((item) => (
              <span
                key={item}
                className="
                  rounded-full border border-cyan-300/15
                  bg-cyan-400/[0.07] px-3 py-1 text-xs text-cyan-50/75
                "
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {inferenceRuntimeAdaptiveDecisions.map((decision) => (
              <DecisionCard key={decision.number} decision={decision} />
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-white/40">
            {inferenceRuntimeBaselineNote}
          </p>
        </section>

        {/* ── Trade-offs ── */}
        <section id="trade-offs" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow="Performance trade-offs"
            title="Systems judgment over invented metrics"
            description="The runtime design centers on explicit trade-offs — not benchmark claims."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {inferenceRuntimeTradeoffs.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[24px] border border-white/10
                  bg-white/[0.035] p-6
                "
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Engineering highlights ── */}
        <section id="highlights" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow="Engineering highlights"
            title="Architecture principles"
            description="Policy, bounded execution, and evaluable baselines."
          />

          <div className="mt-8 space-y-4">
            {inferenceRuntimeHighlights.map((highlight) => (
              <HighlightCard key={highlight.number} highlight={highlight} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {inferenceRuntimeTechLabels.map((tech) => (
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
            href={inferenceRuntimeGithub}
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

function RuntimeHeroVisual() {
  return (
    <div
      className="
        mt-10 overflow-hidden rounded-[28px] border border-white/10
        bg-white/[0.03] p-6 sm:p-8
      "
      aria-label="Conceptual runtime flow diagram"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/35">
        Conceptual runtime flow
      </p>
      <div className="mt-6 flex flex-col items-center gap-3">
        <FlowChip label="Incoming requests" accent />
        <span aria-hidden="true" className="text-white/25">
          ↓
        </span>
        <FlowChip label="Queue lanes" />
        <span aria-hidden="true" className="text-white/25">
          ↓
        </span>
        <FlowChip label="Scheduler" accent />
        <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <WorkerCard name="Worker A" model="Model X" queue="Queue depth · med" />
          <WorkerCard name="Worker B" model="Model Y" queue="Queue depth · low" />
        </div>
      </div>
    </div>
  );
}

function MemoryPressureVisual() {
  const example = inferenceRuntimeMemoryExample;

  return (
    <div
      className="
        mt-6 rounded-[26px] border border-white/10
        bg-black/20 p-6 sm:p-7
      "
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
        {example.label}
      </p>
      <p className="mt-2 text-sm text-white/50">{example.capacity}</p>
      <div className="mt-5 space-y-3">
        {example.models.map((model) => (
          <div key={model.name}>
            <div className="mb-1 flex justify-between text-xs text-white/50">
              <span>{model.name}</span>
              <span>relative demand</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-cyan-400/40"
                style={{ width: `${model.share}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-white/35">{example.note}</p>
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

function DecisionCard({
  decision,
}: {
  decision: (typeof inferenceRuntimeAdaptiveDecisions)[number];
}) {
  return (
    <div
      className="
        rounded-[24px] border border-white/10
        bg-white/[0.035] p-6
      "
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-100/45">
        {decision.number}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">{decision.title}</h3>
      <p className="mt-2 text-sm leading-7 text-white/55">{decision.body}</p>
    </div>
  );
}

function HighlightCard({
  highlight,
}: {
  highlight: (typeof inferenceRuntimeHighlights)[number];
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

function FlowChip({
  label,
  accent,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <span
      className={`
        rounded-full border px-4 py-2 text-sm
        ${
          accent
            ? "border-cyan-300/20 bg-cyan-400/[0.08] text-cyan-50/85"
            : "border-white/12 bg-black/25 text-white/70"
        }
      `}
    >
      {label}
    </span>
  );
}

function WorkerCard({
  name,
  model,
  queue,
}: {
  name: string;
  model: string;
  queue: string;
}) {
  return (
    <div
      className="
        flex-1 rounded-[20px] border border-white/10
        bg-black/25 p-4 text-center
      "
    >
      <p className="text-sm font-medium text-white">{name}</p>
      <p className="mt-1 text-xs text-cyan-100/55">{model}</p>
      <p className="mt-2 text-[11px] text-white/40">{queue}</p>
      <div className="mx-auto mt-3 h-1.5 w-3/4 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-cyan-400/35" />
      </div>
    </div>
  );
}
