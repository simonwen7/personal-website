import Image from "next/image";
import type { ReactNode } from "react";

import {
  quantforgeArchitecture,
  quantforgeCausality,
  quantforgeDemoUrl,
  quantforgeDeterminism,
  quantforgeGithub,
  quantforgeHero,
  quantforgeLedger,
  quantforgeProblem,
  quantforgeProof,
  quantforgeTerminal,
} from "./quantforge-data";

export default function QuantforgeShowcase() {
  return (
    <div className="relative overflow-x-clip px-8 py-8 sm:py-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-20 sm:space-y-24">
        <header id="overview" className="relative scroll-mt-[120px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/[0.07] blur-[100px]"
          />

          <div className="relative z-10 max-w-3xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              {quantforgeHero.eyebrow}
            </span>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/55">
              {quantforgeHero.techLine}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {quantforgeHero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {quantforgeHero.headline}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
              {quantforgeHero.supporting}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={quantforgeDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-50 transition hover:bg-cyan-400/20"
              >
                View Live Demo ↗
              </a>
              <a
                href={quantforgeGithub}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.07] px-5 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/[0.12] hover:text-white"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </header>

        <StorySection
          id="problem"
          eyebrow={quantforgeProblem.eyebrow}
          title={quantforgeProblem.title}
          description={quantforgeProblem.core}
        >
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {quantforgeProblem.tensions.map((item) => (
              <li
                key={item.left}
                className="rounded-[22px] border border-white/10 bg-white/[0.035] px-5 py-4"
              >
                <p className="text-sm font-medium text-white/80">{item.left}</p>
                <p className="mt-1 text-sm text-white/45">against {item.right}</p>
              </li>
            ))}
          </ul>
        </StorySection>

        <StorySection
          id="architecture"
          eyebrow={quantforgeArchitecture.eyebrow}
          title={quantforgeArchitecture.title}
          description={quantforgeArchitecture.description}
        >
          <ol className="mt-8 flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
            {quantforgeArchitecture.flow.map((label, index) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row"
              >
                {index > 0 ? <FlowArrow /> : null}
                <div className="w-full rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-center text-sm font-medium text-cyan-50">
                  {label}
                </div>
              </li>
            ))}
          </ol>

          <ul className="mt-6 divide-y divide-white/10 overflow-hidden rounded-[22px] border border-white/10">
            {quantforgeArchitecture.routes.map((route) => (
              <li
                key={route.path}
                className="flex flex-col gap-1 bg-white/[0.03] px-4 py-3 sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="w-14 shrink-0 text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-100/60">
                  {route.method}
                </span>
                <code className="text-sm text-white/80">{route.path}</code>
                <span className="text-sm text-white/45 sm:ml-auto">
                  {route.purpose}
                </span>
              </li>
            ))}
          </ul>
        </StorySection>

        <StorySection
          id="causality"
          eyebrow={quantforgeCausality.eyebrow}
          title={quantforgeCausality.title}
          description={quantforgeCausality.description}
        >
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quantforgeCausality.phases.map((phase, index) => (
              <li
                key={phase.name}
                className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100/50">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-base font-semibold text-white">
                  {phase.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {phase.detail}
                </p>
              </li>
            ))}
          </ol>

          <ul className="mt-6 space-y-2">
            {quantforgeCausality.rules.map((rule) => (
              <li key={rule} className="flex gap-3 text-sm leading-6 text-white/60">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/70"
                />
                {rule}
              </li>
            ))}
          </ul>
        </StorySection>

        <StorySection
          id="determinism"
          eyebrow={quantforgeDeterminism.eyebrow}
          title={quantforgeDeterminism.title}
          description={quantforgeDeterminism.description}
        >
          <div className="mt-8 flex flex-wrap gap-2">
            {quantforgeDeterminism.scenarios.map((name) => (
              <span
                key={name}
                className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-50"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">
            {quantforgeDeterminism.seedNote}
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {quantforgeDeterminism.identities.map((item) => (
              <li
                key={item.name}
                className="rounded-[22px] border border-white/10 bg-black/25 p-5"
              >
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/45">
            {quantforgeDeterminism.hashNote}
          </p>
        </StorySection>

        <StorySection
          id="ledger"
          eyebrow={quantforgeLedger.eyebrow}
          title={quantforgeLedger.title}
          description={quantforgeLedger.description}
        >
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {quantforgeLedger.rules.map((rule) => (
              <li
                key={rule}
                className="rounded-[20px] border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white/65"
              >
                {rule}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">
            {quantforgeLedger.bookNote}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {quantforgeLedger.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/60"
              >
                {metric}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/35">
            These are metrics the engine can compute. This page does not report a result for any of them.
          </p>
        </StorySection>

        <StorySection
          id="terminal"
          eyebrow={quantforgeTerminal.eyebrow}
          title={quantforgeTerminal.title}
          description={quantforgeTerminal.description}
        >
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quantforgeTerminal.workspaces.map((workspace) => (
              <li
                key={workspace.name}
                className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-base font-semibold text-white">
                  {workspace.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {workspace.detail}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {quantforgeTerminal.shots.map((shot, index) => (
              <ProductShot
                key={shot.src}
                shot={shot}
                className={index === 0 ? "lg:col-span-2" : undefined}
              />
            ))}
          </div>
        </StorySection>

        <div id="proof" className="scroll-mt-[120px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-100/50">
            {quantforgeProof.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            {quantforgeProof.title}
          </h2>

          <ul className="mt-8 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-2">
            {quantforgeProof.checks.map((item) => (
              <li key={item.label} className="bg-[#0a0d14] px-5 py-6">
                <p className="text-sm font-semibold text-cyan-50">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/50">{item.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/40">
            {quantforgeProof.countNote}
          </p>

          <ul className="mt-8 space-y-2">
            {quantforgeProof.limits.map((limit) => (
              <li key={limit} className="flex gap-3 text-sm leading-6 text-white/55">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30"
                />
                {limit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pb-4 pt-2">
          <a
            href={quantforgeDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-50 transition hover:bg-cyan-400/20"
          >
            View Live Demo ↗
          </a>
          <a
            href={quantforgeGithub}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/[0.12] hover:text-white"
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
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-[120px]">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-100/50">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
        {description}
      </p>
      {children}
    </section>
  );
}

function FlowArrow() {
  return (
    <span aria-hidden="true" className="text-base text-cyan-300/40 lg:px-1">
      <span className="lg:hidden">↓</span>
      <span className="hidden lg:inline">→</span>
    </span>
  );
}

function ProductShot({
  shot,
  className,
}: {
  shot: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[24px] border border-white/10 bg-black/40 ${className ?? ""}`}
    >
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        unoptimized
        className="h-auto w-full"
      />
      <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-white/45">
        {shot.caption}
      </figcaption>
    </figure>
  );
}
