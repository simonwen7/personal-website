import {
  formaApaAuthorExamples,
  formaApaDeterministicNote,
  formaApaGithub,
  formaApaHero,
  formaApaInlineProof,
  formaApaLiveUrl,
  formaApaPromise,
  formaApaSafeExamples,
  formaApaVerifyLoop,
  formaApaWorkflowSteps,
} from "./forma-apa-data";

export default function FormaApaShowcase() {
  return (
    <div className="relative overflow-x-clip px-8 py-8 sm:py-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-16 sm:space-y-20">
        {/* ── Hero ── */}
        <header id="overview" className="relative scroll-mt-[120px]">
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -right-16 top-0
              h-72 w-72 rounded-full bg-violet-500/[0.08] blur-[100px]
            "
          />

          <div className="relative z-10 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              {formaApaHero.secondaryLabel}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {formaApaHero.productName}
            </h1>

            <p className="mt-5 text-xl font-medium tracking-[-0.02em] text-violet-100/80 sm:text-2xl">
              {formaApaHero.tagline}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
              {formaApaHero.audience}
            </p>

            <p className="mt-4 text-sm text-white/40">{formaApaHero.scope}</p>

            <p className="mt-5 text-sm text-white/45">
              {formaApaHero.technologies.join(" · ")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={formaApaLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full border border-violet-300/25
                  bg-violet-400/15 px-5 py-2.5
                  text-sm font-medium text-violet-50
                  transition hover:bg-violet-400/25
                "
              >
                Try Forma APA ↗
              </a>
              <a
                href={formaApaGithub}
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

        {/* ── Workflow ── */}
        <section id="workflow" className="scroll-mt-[120px]">
          <SectionIntro
            eyebrow="Workflow"
            title="Upload → Analyze → Fix → Verify → Download"
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {formaApaWorkflowSteps.map((step) => (
              <div
                key={step.number}
                className="
                  rounded-[22px] border border-white/10
                  bg-white/[0.04] p-5
                "
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-violet-100/45">
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
            title="Formatting automation with clear boundaries"
          />

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
            {formaApaDeterministicNote}
          </p>

          <div className="mt-8 space-y-6">
            {/* Highlight 1 */}
            <HighlightCard
              number="01"
              title={formaApaPromise.headline}
              body="Supported deterministic formatting can be corrected without rewriting user-authored academic content."
            >
              <ExampleList items={formaApaSafeExamples} />
            </HighlightCard>

            {/* Highlight 2 */}
            <HighlightCard
              number="02"
              title="Automate format. Keep the author in control."
              body="Forma APA automatically fixes deterministic formatting. Content-dependent issues — citations, reference content, and semantic decisions — are surfaced for author review instead of silently rewritten."
            >
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <CompactSplitPanel
                  tone="safe"
                  label="Safe to automate"
                  items={formaApaSafeExamples.slice(0, 4)}
                />
                <CompactSplitPanel
                  tone="author"
                  label="Author review"
                  items={formaApaAuthorExamples.slice(0, 4)}
                />
              </div>
            </HighlightCard>

            {/* Highlight 3 */}
            <HighlightCard
              number="03"
              title="Verify before download."
              body="Every supported fix passes a trust loop before a corrected document is released."
            >
              <VerifyLoop />
            </HighlightCard>
          </div>

          {/* Inline proof */}
          <div
            className="
              mt-8 grid gap-px overflow-hidden rounded-[24px]
              border border-white/10 bg-white/10
              sm:grid-cols-2 lg:grid-cols-4
            "
          >
            {formaApaInlineProof.map((item) => (
              <div
                key={item.label}
                className="bg-[#0a0d14] px-5 py-6 text-center"
              >
                <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-white/50">
                  {item.label}
                </p>
                {"hint" in item && item.hint ? (
                  <p className="mt-2 text-[11px] leading-4 text-white/35">
                    {item.hint}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <div className="flex flex-col items-center gap-4 pb-4 pt-2 sm:flex-row sm:justify-center">
          <a
            href={formaApaLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full border border-violet-300/25
              bg-violet-400/15 px-6 py-3
              text-sm font-medium text-violet-50
              transition hover:bg-violet-400/25
            "
          >
            Try Forma APA ↗
          </a>
          <a
            href={formaApaGithub}
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
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-violet-100/50">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function HighlightCard({
  number,
  title,
  body,
  children,
}: {
  number: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="
        rounded-[28px] border border-white/10
        bg-white/[0.035] p-6 sm:p-8
      "
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-violet-100/45">
        Highlight {number}
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-2xl text-base leading-7 text-white/55">{body}</p>
      {children}
    </div>
  );
}

function ExampleList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="
            rounded-full border border-violet-300/15
            bg-violet-400/[0.07] px-3 py-1
            text-xs text-white/55
          "
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function CompactSplitPanel({
  tone,
  label,
  items,
}: {
  tone: "safe" | "author";
  label: string;
  items: readonly string[];
}) {
  const isSafe = tone === "safe";

  return (
    <div
      className={`
        rounded-[20px] border px-4 py-4
        ${
          isSafe
            ? "border-emerald-300/20 bg-emerald-500/[0.06]"
            : "border-amber-300/20 bg-amber-500/[0.05]"
        }
      `}
    >
      <p
        className={`
          text-[10px] font-medium uppercase tracking-[0.22em]
          ${isSafe ? "text-emerald-100/55" : "text-amber-100/55"}
        `}
      >
        {label}
      </p>
      <ul className="mt-3 space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm leading-5 text-white/60"
          >
            <span
              className={`
                mt-2 h-1.5 w-1.5 shrink-0 rounded-full
                ${isSafe ? "bg-emerald-300/70" : "bg-amber-300/70"}
              `}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function VerifyLoop() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-white/55">
      {formaApaVerifyLoop.map((step, index) => (
        <span key={step} className="inline-flex items-center gap-2">
          {index > 0 ? (
            <span aria-hidden="true" className="text-white/25">
              →
            </span>
          ) : null}
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
            {step}
          </span>
        </span>
      ))}
    </div>
  );
}
