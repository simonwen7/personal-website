import type { ReactNode } from "react";

import {
  inferenceRuntimeBackend,
  inferenceRuntimeBatching,
  inferenceRuntimeDemoUrl,
  inferenceRuntimeGithub,
  inferenceRuntimeHero,
  inferenceRuntimeLifecycle,
  inferenceRuntimePolicies,
  inferenceRuntimeProblem,
  inferenceRuntimeProof,
  inferenceRuntimeReliability,
  inferenceRuntimeResidency,
} from "./inference-runtime-data";

export default function InferenceRuntimeShowcase() {
  const demoUrl = inferenceRuntimeDemoUrl;

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
                {inferenceRuntimeHero.eyebrow}
              </span>
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/55">
              {inferenceRuntimeHero.techLine}
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {inferenceRuntimeHero.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {inferenceRuntimeHero.headline}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
              {inferenceRuntimeHero.supporting}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {demoUrl ? (
                <>
                  <a
                    href={demoUrl}
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
                    href={inferenceRuntimeGithub}
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
                </>
              ) : (
                <>
                  <a
                    href={inferenceRuntimeGithub}
                    target="_blank"
                    rel="noreferrer"
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
                </>
              )}
            </div>
          </div>
        </header>

        {/* ── 01 Runtime Problem ── */}
        <StorySection
          id="problem"
          eyebrow={inferenceRuntimeProblem.eyebrow}
          title={inferenceRuntimeProblem.title}
          description={inferenceRuntimeProblem.core}
        >
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {inferenceRuntimeProblem.tensions.map((item) => (
              <div
                key={`${item.left}-${item.right}`}
                className="
                  rounded-[22px] border border-white/10 bg-white/[0.035]
                  px-5 py-4
                "
              >
                <p className="text-sm font-medium text-white/80">
                  {item.left}
                  <span className="mx-2 text-cyan-300/40">vs</span>
                  {item.right}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              mt-8 overflow-x-auto rounded-[28px]
              border border-white/10 bg-black/25 p-6 sm:p-8
            "
          >
            <div className="mx-auto flex max-w-sm flex-col items-center gap-3 text-center">
              {inferenceRuntimeProblem.flow.map((step, index) => (
                <div key={step} className="flex w-full flex-col items-center">
                  {index > 0 ? <DiagramArrow /> : null}
                  <DiagramNode
                    label={step}
                    tone={index === 1 ? "primary" : "neutral"}
                  />
                </div>
              ))}
            </div>
          </div>
        </StorySection>

        {/* ── 02 Request Lifecycle ── */}
        <StorySection
          id="lifecycle"
          eyebrow={inferenceRuntimeLifecycle.eyebrow}
          title={inferenceRuntimeLifecycle.title}
          description={inferenceRuntimeLifecycle.description}
        >
          <div
            className="
              mt-10 overflow-x-auto rounded-[28px]
              border border-white/10 bg-white/[0.03] p-6 sm:p-8
            "
          >
            <div className="flex min-w-[280px] flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
              {inferenceRuntimeLifecycle.pipeline.map((step, index) => (
                <span key={step} className="inline-flex items-center gap-2">
                  {index > 0 ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="hidden text-cyan-300/35 sm:inline"
                      >
                        →
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-cyan-300/35 sm:hidden"
                      >
                        ↓
                      </span>
                    </>
                  ) : null}
                  <span
                    className="
                      rounded-full border border-cyan-300/15 bg-cyan-400/[0.07]
                      px-3 py-1.5 text-xs text-cyan-50/85
                    "
                  >
                    {step}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-black/25 p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
              Request states
            </p>
            <div className="mt-6 flex flex-col items-center gap-3">
              {inferenceRuntimeLifecycle.states.primary.map((state, index) => (
                <div key={state} className="flex w-full max-w-lg flex-col items-center">
                  {index > 0 ? <DiagramArrow /> : null}
                  <DiagramNode label={state} tone="primary" />
                  {state === "Queued" ? (
                    <div className="mt-3 grid w-full gap-2 sm:grid-cols-3">
                      {inferenceRuntimeLifecycle.states.queuedBranches.map(
                        (branch) => (
                          <span
                            key={branch}
                            className="
                              rounded-xl border border-white/10 bg-white/[0.03]
                              px-3 py-2 text-center text-xs text-white/45
                            "
                          >
                            {branch}
                          </span>
                        ),
                      )}
                    </div>
                  ) : null}
                  {state === "Running" ? (
                    <div className="mt-3 grid w-full gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {inferenceRuntimeLifecycle.states.runningBranches.map(
                        (branch) => (
                          <span
                            key={branch}
                            className="
                              rounded-xl border border-white/10 bg-white/[0.03]
                              px-3 py-2 text-center text-xs text-white/45
                            "
                          >
                            {branch}
                          </span>
                        ),
                      )}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium text-white/70">
              {inferenceRuntimeLifecycle.invariant}
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {inferenceRuntimeLifecycle.notes.map((note) => (
              <li key={note} className="text-sm leading-6 text-white/45">
                {note}
              </li>
            ))}
          </ul>
        </StorySection>

        {/* ── 03 Scheduling & Routing ── */}
        <StorySection
          id="policies"
          eyebrow={inferenceRuntimePolicies.eyebrow}
          title={inferenceRuntimePolicies.title}
          description={inferenceRuntimePolicies.description}
        >
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
            {inferenceRuntimePolicies.adaptiveNote}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100/50">
                Request Scheduling
              </p>
              <div className="mt-5 space-y-4">
                {inferenceRuntimePolicies.schedulers.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[18px] border border-white/[0.08] bg-black/20 p-4"
                  >
                    <h4 className="text-base font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {item.purpose}
                    </p>
                    {"starvation" in item && item.starvation ? (
                      <p className="mt-2 text-xs leading-5 text-white/40">
                        {item.starvation}
                      </p>
                    ) : null}
                    {"note" in item && item.note ? (
                      <p className="mt-2 text-xs leading-5 text-cyan-100/45">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100/50">
                Worker Routing
              </p>
              <div className="mt-5 space-y-4">
                {inferenceRuntimePolicies.routers.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[18px] border border-white/[0.08] bg-black/20 p-4"
                  >
                    <h4 className="text-base font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {item.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-[28px] border border-white/10 bg-black/25 p-5 sm:p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
              Residency-aware selection
            </p>
            <table className="mt-5 w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.16em] text-white/35">
                  {[
                    "Worker",
                    "Model resident",
                    "Fits free",
                    "Evict?",
                    "Load",
                    "Tier",
                  ].map((col) => (
                    <th key={col} className="pb-3 pr-3 font-medium">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {inferenceRuntimePolicies.matrix.map((row) => (
                  <tr
                    key={row.worker}
                    className="border-b border-white/[0.06] last:border-0"
                  >
                    <td className="py-3 pr-3 text-white/75">{row.worker}</td>
                    <td className="py-3 pr-3 font-mono text-white/70">
                      {row.resident}
                    </td>
                    <td className="py-3 pr-3 font-mono text-white/70">
                      {row.fits}
                    </td>
                    <td className="py-3 pr-3 font-mono text-white/70">
                      {row.evict}
                    </td>
                    <td className="py-3 pr-3 font-mono text-white/70">
                      {row.load}
                    </td>
                    <td className="py-3 font-mono text-cyan-50/90">
                      {row.tier}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm font-medium text-cyan-50/85">
              {inferenceRuntimePolicies.select}
            </p>
            <p className="mt-2 text-xs text-white/40">
              {inferenceRuntimePolicies.matrixNote}
            </p>
          </div>
        </StorySection>

        {/* ── 04 Dynamic Batching ── */}
        <StorySection
          id="batching"
          eyebrow={inferenceRuntimeBatching.eyebrow}
          title={inferenceRuntimeBatching.title}
          description={inferenceRuntimeBatching.description}
        >
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-cyan-100/55">
            {inferenceRuntimeBatching.definition}
          </p>
          <p className="mt-2 text-sm text-white/45">
            {inferenceRuntimeBatching.notContinuous}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {inferenceRuntimeBatching.factors.map((factor) => (
              <span
                key={factor}
                className="
                  rounded-full border border-white/10 bg-white/[0.04]
                  px-3 py-1.5 text-xs text-white/50
                "
              >
                {factor}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100/50">
                {inferenceRuntimeBatching.contiguousExample.title}
              </p>
              <p className="mt-3 font-mono text-sm text-white/70">
                {inferenceRuntimeBatching.contiguousExample.sequence}
              </p>
              <p className="mt-3 text-sm text-white/55">
                {inferenceRuntimeBatching.contiguousExample.result}
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100/50">
                {inferenceRuntimeBatching.reorderExample.title}
              </p>
              <p className="mt-3 font-mono text-sm text-white/70">
                {inferenceRuntimeBatching.reorderExample.sequence}
              </p>
              <p className="mt-3 text-sm text-white/55">
                {inferenceRuntimeBatching.reorderExample.result}
              </p>
              <p className="mt-2 text-xs text-white/40">
                {inferenceRuntimeBatching.reorderExample.not}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {inferenceRuntimeBatching.context.map((item) => (
              <span
                key={item}
                className="
                  rounded-full border border-white/10 bg-black/20
                  px-3 py-1.5 text-[11px] text-white/40
                "
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <BenchmarkCard
              label={inferenceRuntimeBatching.c2.label}
              baseline={inferenceRuntimeBatching.c2.baseline}
              adaptive={inferenceRuntimeBatching.c2.adaptive}
              deltas={inferenceRuntimeBatching.c2.deltas}
              message={inferenceRuntimeBatching.c2.message}
              tone="muted"
            />
            <BenchmarkCard
              label={inferenceRuntimeBatching.c4.label}
              baseline={inferenceRuntimeBatching.c4.baseline}
              adaptive={inferenceRuntimeBatching.c4.adaptive}
              deltas={inferenceRuntimeBatching.c4.deltas}
              message={inferenceRuntimeBatching.c4.tokenThroughput}
              tone="cyan"
            />
          </div>

          <blockquote className="mt-8 max-w-2xl border-l border-cyan-300/25 pl-4 text-base font-medium leading-7 text-white/75">
            {inferenceRuntimeBatching.lesson}
          </blockquote>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            {inferenceRuntimeBatching.framing}
          </p>
          <p className="mt-3 text-sm text-white/40">
            {inferenceRuntimeBatching.keepBoth}
          </p>
        </StorySection>

        {/* ── 05 Residency ── */}
        <StorySection
          id="residency"
          eyebrow={inferenceRuntimeResidency.eyebrow}
          title={inferenceRuntimeResidency.title}
          description={inferenceRuntimeResidency.description}
        >
          <p className="mt-4 text-sm text-white/45">
            {inferenceRuntimeResidency.qualifier}
          </p>

          <div
            className="
              mt-10 overflow-x-auto rounded-[28px]
              border border-white/10 bg-black/25 p-6 sm:p-8
            "
          >
            <div className="mx-auto flex max-w-sm flex-col items-center gap-3 text-center">
              {inferenceRuntimeResidency.path.map((step, index) => (
                <div key={step} className="flex w-full flex-col items-center">
                  {index > 0 ? <DiagramArrow /> : null}
                  <DiagramNode
                    label={step}
                    tone={
                      index === 0 || index === inferenceRuntimeResidency.path.length - 1
                        ? "primary"
                        : "neutral"
                    }
                  />
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-white/45">
              {inferenceRuntimeResidency.llamaNote}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {inferenceRuntimeResidency.policies.map((policy) => (
              <div
                key={policy.name}
                className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5"
              >
                <h4 className="text-base font-semibold text-white">
                  {policy.name}
                </h4>
                {"note" in policy && policy.note ? (
                  <p className="mt-2 text-xs text-white/40">{policy.note}</p>
                ) : null}
                <ol className="mt-4 list-decimal space-y-1.5 pl-4 text-sm text-white/55">
                  {policy.ordering.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </StorySection>

        {/* ── 06 Backend ── */}
        <StorySection
          id="backend"
          eyebrow={inferenceRuntimeBackend.eyebrow}
          title={inferenceRuntimeBackend.title}
          description={inferenceRuntimeBackend.description}
        >
          <p className="mt-4 text-sm text-white/45">
            {inferenceRuntimeBackend.distinction}
          </p>

          <div
            className="
              mt-10 overflow-x-auto rounded-[28px]
              border border-white/10 bg-white/[0.03] p-6 sm:p-8
            "
          >
            <div className="mx-auto flex min-w-[280px] max-w-lg flex-col items-center gap-3 text-center">
              <DiagramNode label="IModelBackend" tone="primary" />
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-3">
                  <DiagramArrow />
                  <DiagramNode label="SyntheticModelBackend" tone="muted" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <DiagramArrow />
                  <DiagramNode label="LlamaCppBackend" tone="secondary" />
                  <DiagramArrow />
                  <DiagramNode label="llama.cpp" tone="neutral" />
                  <DiagramArrow />
                  <DiagramNode label="Qwen3.5-0.8B-Q4_0" tone="primary" />
                  <div className="grid w-full grid-cols-2 gap-2">
                    <DiagramNode label="Metal" tone="secondary" />
                    <DiagramNode label="CPU" tone="muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
            <div className="flex flex-wrap gap-2">
              {inferenceRuntimeBackend.verified.map((item) => (
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
            <div className="rounded-[20px] border border-cyan-300/20 bg-cyan-400/[0.08] px-5 py-4 text-center">
              <p className="text-2xl font-semibold text-cyan-50">
                {inferenceRuntimeBackend.metalProof.value}
              </p>
              <p className="mt-1 text-sm text-white/70">
                {inferenceRuntimeBackend.metalProof.label}
              </p>
              <p className="mt-1 text-xs text-white/40">
                {inferenceRuntimeBackend.metalProof.hint}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {inferenceRuntimeBackend.boundaries.map((item) => (
              <span
                key={item}
                className="
                  rounded-full border border-white/10 bg-black/20
                  px-3 py-1.5 text-xs text-white/40
                "
              >
                {item}
              </span>
            ))}
          </div>
        </StorySection>

        {/* ── 07 Reliability ── */}
        <StorySection
          id="reliability"
          eyebrow={inferenceRuntimeReliability.eyebrow}
          title={inferenceRuntimeReliability.title}
          description={inferenceRuntimeReliability.description}
        >
          <div className="mt-6 flex flex-wrap gap-2">
            {inferenceRuntimeReliability.overload.context.map((item) => (
              <span
                key={item}
                className="
                  rounded-full border border-white/10 bg-black/20
                  px-3 py-1.5 text-[11px] text-white/40
                "
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100/50">
              Overload result
            </p>
            <p className="mt-3 text-sm text-white/55">
              {inferenceRuntimeReliability.overload.framing}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <StatChip
                value={String(inferenceRuntimeReliability.overload.accepted)}
                label="HTTP 200"
              />
              <StatChip
                value={String(inferenceRuntimeReliability.overload.rejected)}
                label="HTTP 503"
              />
              <StatChip
                value={String(
                  inferenceRuntimeReliability.overload.transportFailures,
                )}
                label="Transport failures"
              />
            </div>

            <p className="mt-4 text-sm text-white/45">
              {inferenceRuntimeReliability.overload.rateLabel}:{" "}
              <span className="font-medium text-white/70">
                {inferenceRuntimeReliability.overload.rate}
              </span>
            </p>

            <div className="mt-6 grid grid-cols-8 gap-1.5 sm:grid-cols-[repeat(16,minmax(0,1fr))]">
              {Array.from({
                length: inferenceRuntimeReliability.overload.total,
              }).map((_, index) => {
                const accepted =
                  index < inferenceRuntimeReliability.overload.accepted;
                return (
                  <span
                    key={`req-${index}`}
                    aria-hidden="true"
                    className={`
                      aspect-square rounded-sm border
                      ${
                        accepted
                          ? "border-cyan-300/30 bg-cyan-400/40"
                          : "border-white/10 bg-white/[0.06]"
                      }
                    `}
                  />
                );
              })}
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-white/40">
              <span>3 accepted</span>
              <span>61 bounded-rejected</span>
              <span>0 transport failure</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {inferenceRuntimeReliability.facts.map((fact) => (
              <span
                key={fact}
                className="
                  rounded-full border border-white/10 bg-white/[0.04]
                  px-3 py-1.5 text-xs text-white/50
                "
              >
                {fact}
              </span>
            ))}
          </div>
        </StorySection>

        {/* ── 08 Engineering Proof ── */}
        <div id="proof" className="scroll-mt-[120px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-100/50">
            {inferenceRuntimeProof.eyebrow}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            {inferenceRuntimeProof.title}
          </h3>

          <div
            className="
              mt-10 grid gap-px overflow-hidden rounded-[28px]
              border border-white/10 bg-white/10
              sm:grid-cols-2 lg:grid-cols-4
            "
          >
            {inferenceRuntimeProof.metrics.map((item) => (
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
            {inferenceRuntimeProof.quality.map((item) => (
              <span
                key={item}
                className="
                  rounded-full border border-cyan-300/15 bg-cyan-400/[0.07]
                  px-3 py-1.5 text-xs text-cyan-50/80
                "
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm text-white/40">
            {inferenceRuntimeProof.ciNote}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {inferenceRuntimeProof.ledger.map((item) => (
              <div
                key={item.label}
                className="rounded-[18px] border border-white/[0.08] bg-white/[0.03] px-4 py-3"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                  {item.label}
                </p>
                <p className="mt-2 break-all font-mono text-xs text-white/55">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {demoUrl ? (
            <>
              <a
                href={demoUrl}
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
                href={inferenceRuntimeGithub}
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
            </>
          ) : (
            <>
              <a
                href={inferenceRuntimeGithub}
                target="_blank"
                rel="noreferrer"
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
            </>
          )}
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
  tone: "primary" | "secondary" | "neutral" | "muted";
}) {
  const toneClass = {
    primary: "border-cyan-300/25 bg-cyan-400/10 text-cyan-50",
    secondary: "border-white/15 bg-white/[0.06] text-white/80",
    neutral: "border-white/12 bg-white/[0.04] text-white/70",
    muted: "border-white/10 bg-black/30 text-white/55",
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

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-black/25 px-4 py-4">
      <p className="text-2xl font-semibold text-cyan-50">{value}</p>
      <p className="mt-1 text-sm text-white/55">{label}</p>
    </div>
  );
}

function BenchmarkCard({
  label,
  baseline,
  adaptive,
  deltas,
  message,
  tone,
}: {
  label: string;
  baseline: { rps: string; p95: string; meanBatch: string };
  adaptive: { rps: string; p95: string; meanBatch: string };
  deltas: readonly { label: string; value: string }[];
  message: string;
  tone: "cyan" | "muted";
}) {
  return (
    <div
      className={`
        rounded-[28px] border p-6 sm:p-7
        ${
          tone === "cyan"
            ? "border-cyan-300/20 bg-cyan-400/[0.06]"
            : "border-white/10 bg-white/[0.035]"
        }
      `}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
        {label}
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
            Baseline
          </p>
          <p className="mt-2 text-sm text-white/70">{baseline.rps}</p>
          <p className="text-sm text-white/55">p95 {baseline.p95}</p>
          <p className="text-xs text-white/40">
            mean batch {baseline.meanBatch}
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
            Adaptive batching
          </p>
          <p className="mt-2 text-sm text-white/70">{adaptive.rps}</p>
          <p className="text-sm text-white/55">p95 {adaptive.p95}</p>
          <p className="text-xs text-white/40">
            mean batch {adaptive.meanBatch}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {deltas.map((delta) => (
          <span
            key={delta.label}
            className="
              rounded-full border border-white/10 bg-black/20
              px-3 py-1.5 text-xs text-white/65
            "
          >
            {delta.label} {delta.value}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm leading-6 text-white/50">{message}</p>
    </div>
  );
}
