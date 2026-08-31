import type { ReactNode } from "react";

import {
  codeIntelligenceBenchmark,
  codeIntelligenceContext,
  codeIntelligenceDemoUrl,
  codeIntelligenceExperiment,
  codeIntelligenceFlatChunks,
  codeIntelligenceGithub,
  codeIntelligenceGraphExample,
  codeIntelligenceHero,
  codeIntelligenceIdea,
  codeIntelligenceIncremental,
  codeIntelligenceProof,
  codeIntelligenceRetrieval,
  codeIntelligenceStructure,
} from "./code-intelligence-data";

export default function CodeIntelligenceShowcase() {
  return (
    <div className="relative overflow-x-clip px-8 py-8 sm:py-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-20 sm:space-y-24">
        {/* ── Hero ── */}
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
                {codeIntelligenceHero.eyebrow}
              </span>
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/55">
              {codeIntelligenceHero.techLine}
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {codeIntelligenceHero.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {codeIntelligenceHero.headline}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
              {codeIntelligenceHero.supporting}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={codeIntelligenceDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-full border border-cyan-300/20
                  bg-cyan-400/10 px-5 py-2.5
                  text-sm font-medium text-cyan-50
                  transition hover:bg-cyan-400/20
                "
              >
                View Demo ↗
              </a>
              <a
                href={codeIntelligenceGithub}
                target="_blank"
                rel="noreferrer"
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

        {/* ── 01 The Idea ── */}
        <StorySection
          id="idea"
          eyebrow={codeIntelligenceIdea.eyebrow}
          title={codeIntelligenceIdea.title}
          description={codeIntelligenceIdea.core}
        >
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            {codeIntelligenceIdea.body}
          </p>
          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-white/70">
            {codeIntelligenceIdea.question}
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
                Flat text chunks
              </p>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm text-white/60">
                <p className="text-white/45">file.py</p>
                <p className="mt-2 border-t border-white/10 pt-2 text-white/30">
                  ────────
                </p>
                <ul className="mt-2 space-y-1.5">
                  {codeIntelligenceFlatChunks.map((chunk) => (
                    <li key={chunk}>{chunk}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[26px] border border-cyan-300/20 bg-cyan-400/[0.06] p-6 sm:p-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
                Semantic program structure
              </p>
              <div className="mt-5 flex flex-col items-center">
                {codeIntelligenceGraphExample.map((item, index) => (
                  <div key={item.node} className="flex flex-col items-center">
                    {item.relation ? (
                      <>
                        <span className="my-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-100/45">
                          {item.relation}
                        </span>
                        <span aria-hidden="true" className="mb-1 text-cyan-300/35">
                          ↓
                        </span>
                      </>
                    ) : null}
                    <span
                      className="
                        rounded-xl border border-cyan-300/20 bg-cyan-400/[0.08]
                        px-4 py-2 font-mono text-sm font-medium text-cyan-50/90
                      "
                    >
                      {item.node}
                    </span>
                    {index === 0 ? null : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StorySection>

        {/* ── 02 From Code to Structure ── */}
        <StorySection
          id="structure"
          eyebrow={codeIntelligenceStructure.eyebrow}
          title={codeIntelligenceStructure.title}
          description={codeIntelligenceStructure.description}
        >
          <div
            className="
              mt-10 overflow-x-auto rounded-[28px]
              border border-white/10 bg-white/[0.03] p-6 sm:p-8
            "
          >
            <div className="flex min-w-[280px] flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              {codeIntelligenceStructure.pipeline.map((step, index) => (
                <span key={step} className="inline-flex items-center gap-2">
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="hidden text-cyan-300/35 sm:inline"
                    >
                      →
                    </span>
                  ) : null}
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="text-cyan-300/35 sm:hidden"
                    >
                      ↓
                    </span>
                  ) : null}
                  <span
                    className="
                      rounded-full border border-white/10 bg-black/25
                      px-3 py-1.5 text-xs text-white/65
                    "
                  >
                    {step}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {codeIntelligenceStructure.cards.map((card) => (
              <div
                key={card.label}
                className="rounded-[18px] border border-white/[0.08] bg-white/[0.03] px-4 py-4"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/35">
                  {card.label}
                </p>
                <p className="mt-2 text-sm text-white/70">{card.value}</p>
              </div>
            ))}
          </div>

          <ul className="mt-6 space-y-2">
            {codeIntelligenceStructure.qualifiers.map((line) => (
              <li key={line} className="text-sm leading-6 text-white/45">
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {codeIntelligenceStructure.details.map((detail) => (
              <span
                key={detail}
                className="
                  rounded-full border border-white/10 bg-white/[0.04]
                  px-3 py-1.5 text-xs text-white/50
                "
              >
                {detail}
              </span>
            ))}
          </div>
        </StorySection>

        {/* ── 03 Retrieval Engine ── */}
        <StorySection
          id="retrieval"
          eyebrow={codeIntelligenceRetrieval.eyebrow}
          title={codeIntelligenceRetrieval.title}
          description={codeIntelligenceRetrieval.description}
        >
          <div
            className="
              mt-10 overflow-hidden rounded-[28px]
              border border-white/10 bg-white/[0.03] p-6 sm:p-8
            "
          >
            <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center">
              {codeIntelligenceRetrieval.ladder.map((step, index) => (
                <div key={step.stage} className="flex flex-col items-center lg:flex-row">
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="my-1 text-cyan-300/35 lg:mx-2 lg:my-0"
                    >
                      <span className="lg:hidden">↓</span>
                      <span className="hidden lg:inline">→</span>
                    </span>
                  ) : null}
                  <div
                    className="
                      w-full rounded-xl border border-cyan-300/15
                      bg-cyan-400/[0.07] px-4 py-3 text-center
                      lg:w-auto lg:min-w-[8.5rem]
                    "
                  >
                    <p className="text-sm font-medium text-cyan-50">
                      {step.stage}
                    </p>
                    <p className="mt-1 text-[10px] text-cyan-100/45">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {codeIntelligenceRetrieval.decisions.map((decision) => (
              <div
                key={decision.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-100/50">
                  {decision.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {decision.body}
                </p>
              </div>
            ))}
          </div>
        </StorySection>

        {/* ── 04 The Experiment ── */}
        <StorySection
          id="experiment"
          eyebrow={codeIntelligenceExperiment.eyebrow}
          title={codeIntelligenceExperiment.title}
          description={codeIntelligenceExperiment.headline}
        >
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            {codeIntelligenceExperiment.body}
          </p>

          <div
            className="
              mt-10 grid gap-px overflow-hidden rounded-[28px]
              border border-white/10 bg-white/10
              sm:grid-cols-2 lg:grid-cols-4
            "
          >
            {codeIntelligenceExperiment.metrics.map((item) => (
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
              </div>
            ))}
          </div>
        </StorySection>

        {/* ── 05 Benchmark ── */}
        <StorySection
          id="benchmark"
          eyebrow={codeIntelligenceBenchmark.eyebrow}
          title={codeIntelligenceBenchmark.title}
          description={codeIntelligenceBenchmark.explanation}
        >
          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
              {codeIntelligenceBenchmark.metricLabel}
            </p>

            <div className="mt-8 space-y-5">
              {codeIntelligenceBenchmark.results.map((row) => (
                <MetricBar
                  key={row.mode}
                  label={row.mode}
                  value={row.score}
                  percent={row.percent}
                />
              ))}
            </div>
          </div>

          <blockquote className="mt-8 max-w-2xl border-l border-cyan-300/25 pl-4 text-base font-medium leading-7 text-white/75">
            {codeIntelligenceBenchmark.lesson}
          </blockquote>

          <p className="mt-4 text-sm text-white/40">
            {codeIntelligenceBenchmark.headToHead}
          </p>
        </StorySection>

        {/* ── 06 Incremental Indexing ── */}
        <StorySection
          id="incremental"
          eyebrow={codeIntelligenceIncremental.eyebrow}
          title={codeIntelligenceIncremental.title}
          description={codeIntelligenceIncremental.description}
        >
          <p className="mt-4 text-sm text-white/40">
            {codeIntelligenceIncremental.caveat}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <WorkTable
              title="Files Analyzed"
              columns={["Scenario", "Full", "Incremental"]}
              rows={codeIntelligenceIncremental.filesAnalyzed.map((r) => [
                r.scenario,
                r.full,
                r.incremental,
              ])}
            />
            <WorkTable
              title="Vector Work"
              columns={["Scenario", "Reused", "Embedded"]}
              rows={codeIntelligenceIncremental.vectorWork.map((r) => [
                r.scenario,
                r.reused,
                r.embedded,
              ])}
            />
          </div>
        </StorySection>

        {/* ── 07 Context ── */}
        <StorySection
          id="context"
          eyebrow={codeIntelligenceContext.eyebrow}
          title={codeIntelligenceContext.title}
          description={codeIntelligenceContext.description}
        >
          <div className="mt-6 flex flex-wrap gap-2">
            {codeIntelligenceContext.preserves.map((item) => (
              <span
                key={item}
                className="
                  rounded-full border border-white/10 bg-white/[0.04]
                  px-3 py-1.5 text-xs text-white/50
                "
              >
                {item}
              </span>
            ))}
          </div>

          <div
            className="
              mt-10 overflow-x-auto rounded-[28px]
              border border-white/10 bg-black/25 p-6 sm:p-8
            "
          >
            <div className="mx-auto flex max-w-md flex-col items-center gap-3 text-center">
              <DiagramNode label="Ranked candidates" tone="neutral" />
              <DiagramArrow />
              <div className="grid w-full gap-2">
                {codeIntelligenceContext.flow.map((item) => (
                  <div
                    key={item.label}
                    className={`
                      rounded-xl border px-4 py-2.5 text-sm
                      ${
                        item.tone === "keep"
                          ? "border-cyan-300/20 bg-cyan-400/[0.08] text-cyan-50"
                          : "border-white/10 bg-white/[0.03] text-white/45"
                      }
                    `}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
              <DiagramArrow />
              <DiagramNode label="TOKEN BUDGET" tone="secondary" />
              <DiagramArrow />
              <DiagramNode label="CompiledContext" tone="primary" />
            </div>
          </div>
        </StorySection>

        {/* ── 08 Engineering Proof ── */}
        <div id="proof" className="scroll-mt-[120px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-100/50">
            {codeIntelligenceProof.eyebrow}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            {codeIntelligenceProof.title}
          </h3>

          <div
            className="
              mt-10 grid gap-px overflow-hidden rounded-[28px]
              border border-white/10 bg-white/10
              sm:grid-cols-2 lg:grid-cols-4
            "
          >
            {codeIntelligenceProof.metrics.map((item) => (
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

          <div className="mt-6 flex flex-wrap gap-2">
            {codeIntelligenceProof.checks.map((check) => (
              <span
                key={check}
                className="
                  rounded-full border border-cyan-300/15 bg-cyan-400/[0.07]
                  px-3 py-1.5 text-xs text-cyan-50/80
                "
              >
                {check}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm text-white/40">
            {codeIntelligenceProof.breakdown}
          </p>
        </div>

        {/* ── Final CTA ── */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href={codeIntelligenceDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="
              rounded-full border border-cyan-300/20
              bg-cyan-400/10 px-6 py-3
              text-sm font-medium text-cyan-50
              transition hover:bg-cyan-400/20
            "
          >
            View Demo ↗
          </a>
          <a
            href={codeIntelligenceGithub}
            target="_blank"
            rel="noreferrer"
            className="
              rounded-full border border-white/15
              bg-white/[0.07] px-6 py-3
              text-sm font-medium text-white/85
              transition hover:bg-white/[0.12] hover:text-white
            "
          >
            GitHub ↗
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
  children?: ReactNode;
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
  tone,
}: {
  label: string;
  tone: "primary" | "secondary" | "neutral";
}) {
  const toneClass = {
    primary: "border-cyan-300/25 bg-cyan-400/10 text-cyan-50",
    secondary: "border-white/15 bg-white/[0.06] text-white/80",
    neutral: "border-white/12 bg-white/[0.04] text-white/70",
  }[tone];

  return (
    <div className={`w-full rounded-xl border px-4 py-3 text-sm ${toneClass}`}>
      <p className="font-medium">{label}</p>
    </div>
  );
}

function DiagramArrow() {
  return (
    <span aria-hidden="true" className="text-base text-cyan-300/35">
      ↓
    </span>
  );
}

function MetricBar({
  label,
  value,
  percent,
}: {
  label: string;
  value: string;
  percent: number;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium text-white/75">{label}</p>
        <p className="font-mono text-sm text-white/85">{value}</p>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.08]">
        <div
          className="h-full rounded-full bg-cyan-400/70"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function WorkTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100/50">
        {title}
      </p>
      <table className="mt-5 w-full min-w-[260px] text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.18em] text-white/35">
            {columns.map((col) => (
              <th key={col} className="pb-3 font-medium first:pr-4">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-white/[0.06] last:border-0">
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`py-3 ${i === 0 ? "pr-4 text-white/70" : "font-mono text-white/85"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
