import {
  aiResumeMatchAnalysisNote,
  aiResumeMatchDemoResult,
  aiResumeMatchEngineeringNote,
  aiResumeMatchGithub,
  aiResumeMatchHero,
  aiResumeMatchHighlights,
  aiResumeMatchLiveUrl,
  aiResumeMatchWorkflowSteps,
} from "./ai-resume-match-data";

export default function AiResumeMatchShowcase() {
  return (
    <div className="relative overflow-x-clip px-8 py-8 sm:py-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-16 sm:space-y-20">
        {/* ── Hero ── */}
        <header id="overview" className="relative scroll-mt-[120px]">
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -left-12 top-0
              h-72 w-72 rounded-full bg-fuchsia-500/[0.07] blur-[100px]
            "
          />

          <div className="relative z-10 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              {aiResumeMatchHero.trackLabel}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {aiResumeMatchHero.productName}
            </h1>

            <p className="mt-5 text-xl font-medium tracking-[-0.02em] text-fuchsia-100/80 sm:text-2xl">
              {aiResumeMatchHero.tagline}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
              {aiResumeMatchHero.description}
            </p>

            <p className="mt-5 text-sm text-white/45">
              {aiResumeMatchHero.technologies.join(" · ")} ·{" "}
              {aiResumeMatchHero.inputFormats}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={aiResumeMatchLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full border border-fuchsia-300/25
                  bg-fuchsia-400/15 px-5 py-2.5
                  text-sm font-medium text-fuchsia-50
                  transition hover:bg-fuchsia-400/25
                "
              >
                Try AI Resume Match ↗
              </a>
              <a
                href={aiResumeMatchGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full border border-white/15
                  bg-white/[0.06] px-5 py-2.5
                  text-sm font-medium text-white/70
                  transition hover:bg-white/[0.10] hover:text-white/90
                "
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </header>

        {/* ── How it works ── */}
        <section id="workflow" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow="How it works"
            title="Resume + job description → structured feedback"
          />

          <ConvergenceDiagram />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {aiResumeMatchWorkflowSteps.map((step) => (
              <div
                key={step.number}
                className="
                  rounded-[22px] border border-white/10
                  bg-white/[0.04] p-5
                "
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-fuchsia-100/45">
                  {step.number}
                </p>
                <p className="mt-3 text-base font-semibold text-white">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Product highlights ── */}
        <section id="highlights" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow="Product highlights"
            title="Alignment, gaps, and next steps"
          />

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
            {aiResumeMatchAnalysisNote}
          </p>

          <div className="mt-8 space-y-6">
            {aiResumeMatchHighlights.map((highlight) => (
              <HighlightCard
                key={highlight.number}
                number={highlight.number}
                title={highlight.title}
                body={highlight.body}
              />
            ))}
          </div>

          <ResultPreview />

          <p className="mt-6 text-center text-xs text-white/35">
            {aiResumeMatchEngineeringNote}
          </p>
        </section>

        {/* ── Final CTA ── */}
        <div className="flex flex-col items-center gap-4 pb-4 pt-2 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
            See how your resume aligns
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={aiResumeMatchLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full border border-fuchsia-300/25
                bg-fuchsia-400/15 px-6 py-3
                text-sm font-medium text-fuchsia-50
                transition hover:bg-fuchsia-400/25
              "
            >
              Try AI Resume Match ↗
            </a>
            <a
              href={aiResumeMatchGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full border border-white/15
                bg-white/[0.06] px-6 py-3
                text-sm font-medium text-white/65
                transition hover:bg-white/[0.10] hover:text-white/85
              "
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-fuchsia-100/50">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function ConvergenceDiagram() {
  return (
    <div
      className="
        mt-8 overflow-hidden rounded-[28px] border border-white/10
        bg-white/[0.03] px-6 py-8 sm:px-10
      "
      aria-label="Resume and job description converge into structured feedback"
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
        <FlowNode label="Your resume" sub="Paste or upload" />
        <span aria-hidden="true" className="text-xl text-white/30">
          +
        </span>
        <FlowNode label="Job description" sub="User-pasted target" />
      </div>

      <div className="my-5 flex justify-center" aria-hidden="true">
        <div className="h-8 w-px bg-gradient-to-b from-white/20 to-fuchsia-300/40" />
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
        <FlowNode label="AI analysis" sub="Structured comparison" accent />
        <span aria-hidden="true" className="hidden text-white/30 sm:inline">
          →
        </span>
        <span aria-hidden="true" className="text-white/30 sm:hidden">
          ↓
        </span>
        <FlowNode
          label="Structured feedback"
          sub="Score · strengths · gaps · suggestions"
          accent
        />
      </div>
    </div>
  );
}

function FlowNode({
  label,
  sub,
  accent,
}: {
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`
        w-full max-w-[220px] rounded-[18px] border px-4 py-3 text-center
        ${
          accent
            ? "border-fuchsia-300/25 bg-fuchsia-400/[0.08]"
            : "border-white/12 bg-black/25"
        }
      `}
    >
      <p className="text-sm font-medium text-white">{label}</p>
      <p className="mt-1 text-xs text-white/45">{sub}</p>
    </div>
  );
}

function HighlightCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className="
        rounded-[28px] border border-white/10
        bg-white/[0.035] p-6 sm:p-8
      "
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-fuchsia-100/45">
        Highlight {number}
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-2xl text-base leading-7 text-white/55">{body}</p>
    </div>
  );
}

function ResultPreview() {
  const demo = aiResumeMatchDemoResult;

  return (
    <div
      className="
        mt-8 overflow-hidden rounded-[28px] border border-white/10
        bg-white/[0.03] p-6 sm:p-8
      "
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
        Portfolio illustration · not a real user result
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,200px)_1fr]">
        <div
          className="
            flex flex-col items-center justify-center rounded-[22px]
            border border-fuchsia-300/20 bg-fuchsia-400/[0.08]
            px-6 py-8 text-center
          "
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-fuchsia-100/55">
            {demo.scoreLabel}
          </p>
          <p className="mt-3 text-5xl font-semibold tracking-tight text-white">
            {demo.scoreValue}
            <span className="text-2xl text-white/50">%</span>
          </p>
          <p className="mt-2 text-xs text-white/45">{demo.scoreSubLabel}</p>
          <p className="mt-4 text-[11px] leading-4 text-white/35">
            {demo.scoreCaveat}
          </p>
        </div>

        <div className="space-y-5">
          <ResultBlock label="Summary" body={demo.summary} />
          <ResultBlock label="Strengths">
            <PillList items={demo.strengths} tone="strength" />
          </ResultBlock>
          <ResultBlock label="Missing Skills">
            <PillList items={demo.missingSkills} tone="gap" />
          </ResultBlock>
          <ResultBlock label="Suggestions">
            <ul className="mt-2 space-y-2">
              {demo.suggestions.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-6 text-white/55"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300/60" />
                  {item}
                </li>
              ))}
            </ul>
          </ResultBlock>
        </div>
      </div>
    </div>
  );
}

function ResultBlock({
  label,
  body,
  children,
}: {
  label: string;
  body?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
        {label}
      </p>
      {body ? (
        <p className="mt-2 text-sm leading-6 text-white/55">{body}</p>
      ) : null}
      {children}
    </div>
  );
}

function PillList({
  items,
  tone,
}: {
  items: readonly string[];
  tone: "strength" | "gap";
}) {
  const pillClass =
    tone === "strength"
      ? "border-emerald-300/20 bg-emerald-400/[0.08] text-emerald-50/75"
      : "border-amber-300/20 bg-amber-400/[0.08] text-amber-50/75";

  return (
    <ul className="mt-2 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border px-3 py-1 text-xs ${pillClass}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
