import Image from "next/image";
import type { ReactNode } from "react";

import {
  actionworldLiteArchitecture,
  actionworldLiteDemo,
  actionworldLiteDemoUrl,
  actionworldLiteEvaluation,
  actionworldLiteGithub,
  actionworldLiteHero,
  actionworldLiteModel,
  actionworldLiteProblem,
  actionworldLiteProof,
  actionworldLiteResidual,
} from "./actionworld-lite-data";

export default function ActionworldLiteShowcase() {
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
              {actionworldLiteHero.eyebrow}
            </span>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/55">
              {actionworldLiteHero.techLine}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {actionworldLiteHero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {actionworldLiteHero.headline}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
              {actionworldLiteHero.supporting}
            </p>

            <p className="mt-4 max-w-2xl rounded-2xl border border-cyan-300/15 bg-cyan-400/[0.06] px-4 py-3 text-sm leading-6 text-cyan-50/80">
              {actionworldLiteHero.scope}
            </p>

            <ProjectLinks className="mt-8" size="md" />
          </div>
        </header>

        <StorySection
          id="problem"
          eyebrow={actionworldLiteProblem.eyebrow}
          title={actionworldLiteProblem.title}
          description={actionworldLiteProblem.description}
        >
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {actionworldLiteProblem.considerations.map((item) => (
              <li
                key={item}
                className="rounded-[22px] border border-white/10 bg-white/[0.035] px-5 py-4 text-sm leading-6 text-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </StorySection>

        <StorySection
          id="architecture"
          eyebrow={actionworldLiteArchitecture.eyebrow}
          title={actionworldLiteArchitecture.title}
          description={actionworldLiteArchitecture.description}
        >
          <ol className="mt-8 flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
            {actionworldLiteArchitecture.flow.map((label, index) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row"
              >
                {index > 0 ? <FlowArrow /> : null}
                <div className="w-full rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-3 py-3 text-center text-sm font-medium text-cyan-50">
                  {label}
                </div>
              </li>
            ))}
          </ol>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {actionworldLiteArchitecture.notes.map((note) => (
              <li
                key={note.label}
                className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100/50">
                  {note.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/55">{note.detail}</p>
              </li>
            ))}
          </ul>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
            {actionworldLiteArchitecture.tokenNote}
          </p>
        </StorySection>

        <StorySection
          id="model"
          eyebrow={actionworldLiteModel.eyebrow}
          title={actionworldLiteModel.title}
          description={actionworldLiteModel.description}
        >
          <BulletList items={actionworldLiteModel.points} />
          <p className="mt-6 max-w-2xl rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/50">
            {actionworldLiteModel.limitation}
          </p>
        </StorySection>

        <StorySection
          id="residual"
          eyebrow={actionworldLiteResidual.eyebrow}
          title={actionworldLiteResidual.title}
          description={actionworldLiteResidual.description}
        >
          <BulletList items={actionworldLiteResidual.points} />
          <p className="mt-6 max-w-2xl rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/50">
            {actionworldLiteResidual.note}
          </p>
        </StorySection>

        <StorySection
          id="evaluation"
          eyebrow={actionworldLiteEvaluation.eyebrow}
          title={actionworldLiteEvaluation.title}
          description={actionworldLiteEvaluation.description}
        >
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {actionworldLiteEvaluation.blocks.map((block) => (
              <div
                key={block.label}
                className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-sm font-semibold text-cyan-50">{block.label}</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100/50">
                  {block.population}
                </p>
                <BulletList items={block.items} className="mt-4" />
              </div>
            ))}

            <div className="rounded-[22px] border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-semibold text-white">
                {actionworldLiteEvaluation.regressions.label}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
                Negative results retained
              </p>
              <BulletList
                items={actionworldLiteEvaluation.regressions.items}
                className="mt-4"
                muted
              />
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
            {actionworldLiteEvaluation.separationNote}
          </p>
        </StorySection>

        <StorySection
          id="demo"
          eyebrow={actionworldLiteDemo.eyebrow}
          title={actionworldLiteDemo.title}
          description={actionworldLiteDemo.description}
        >
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100/50">
                Try it
              </p>
              <BulletList
                items={actionworldLiteDemo.interactions}
                className="mt-4"
              />
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100/50">
                What runs where
              </p>
              <BulletList
                items={actionworldLiteDemo.clarifications}
                className="mt-4"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {actionworldLiteDemo.shots.map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-black/40"
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
            ))}
          </div>

          <div className="mt-6">
            <a
              href={actionworldLiteDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-50 transition hover:bg-cyan-400/20"
            >
              Live Demo ↗
            </a>
          </div>
        </StorySection>

        <StorySection
          id="proof"
          eyebrow={actionworldLiteProof.eyebrow}
          title={actionworldLiteProof.title}
          description={actionworldLiteProof.description}
        >
          <BulletList items={actionworldLiteProof.evidence} />
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/40">
            {actionworldLiteProof.countNote}
          </p>

          <p className="mt-6 max-w-2xl rounded-2xl border border-cyan-300/15 bg-cyan-400/[0.06] px-4 py-3 text-sm leading-6 text-cyan-50/80">
            {actionworldLiteProof.status}
          </p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {actionworldLiteProof.limits.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/50"
              >
                {item}
              </li>
            ))}
          </ul>
        </StorySection>

        <ProjectLinks
          className="justify-center pb-4 pt-2"
          size="lg"
        />
      </div>
    </div>
  );
}

function ProjectLinks({
  className,
  size,
}: {
  className: string;
  size: "md" | "lg";
}) {
  const padding = size === "lg" ? "px-6 py-3" : "px-5 py-2.5";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={actionworldLiteDemoUrl}
        target="_blank"
        rel="noreferrer"
        className={`rounded-full border border-cyan-300/20 bg-cyan-400/10 ${padding} text-sm font-medium text-cyan-50 transition hover:bg-cyan-400/20`}
      >
        Live Demo ↗
      </a>
      <a
        href={actionworldLiteGithub}
        target="_blank"
        rel="noreferrer"
        className={`rounded-full border border-white/15 bg-white/[0.07] ${padding} text-sm font-medium text-white/85 transition hover:bg-white/[0.12] hover:text-white`}
      >
        GitHub ↗
      </a>
    </div>
  );
}

function BulletList({
  items,
  className = "mt-8",
  muted = false,
}: {
  items: readonly string[];
  className?: string;
  muted?: boolean;
}) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 text-sm leading-6 ${muted ? "text-white/55" : "text-white/60"}`}
        >
          <span
            aria-hidden="true"
            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${muted ? "bg-white/30" : "bg-cyan-300/70"}`}
          />
          {item}
        </li>
      ))}
    </ul>
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
      <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">{description}</p>
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
