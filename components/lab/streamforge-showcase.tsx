import Image from "next/image";
import type { ReactNode } from "react";

import {
  streamforgeAnalytics,
  streamforgeArchitecture,
  streamforgeDemo,
  streamforgeDemoUrl,
  streamforgeGithub,
  streamforgeHero,
  streamforgeOutbox,
  streamforgeProblem,
  streamforgeProof,
  streamforgeReliability,
  streamforgeWorker,
} from "./streamforge-data";

export default function StreamforgeShowcase() {
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
              {streamforgeHero.eyebrow}
            </span>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/55">
              {streamforgeHero.techLine}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {streamforgeHero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {streamforgeHero.headline}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
              {streamforgeHero.supporting}
            </p>

            <p className="mt-4 max-w-2xl rounded-2xl border border-cyan-300/15 bg-cyan-400/[0.06] px-4 py-3 text-sm leading-6 text-cyan-50/80">
              {streamforgeHero.scope}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={streamforgeDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-50 transition hover:bg-cyan-400/20"
              >
                Live Demo ↗
              </a>
              <a
                href={streamforgeGithub}
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
          eyebrow={streamforgeProblem.eyebrow}
          title={streamforgeProblem.title}
          description={streamforgeProblem.core}
        >
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {streamforgeProblem.tensions.map((item) => (
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
          eyebrow={streamforgeArchitecture.eyebrow}
          title={streamforgeArchitecture.title}
          description={streamforgeArchitecture.description}
        >
          <ol className="mt-8 flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
            {streamforgeArchitecture.flow.map((label, index) => (
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

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {streamforgeArchitecture.notes.map((note) => (
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
        </StorySection>

        <PointSection
          id="outbox"
          eyebrow={streamforgeOutbox.eyebrow}
          title={streamforgeOutbox.title}
          description={streamforgeOutbox.description}
          points={streamforgeOutbox.points}
        />

        <PointSection
          id="reliability"
          eyebrow={streamforgeReliability.eyebrow}
          title={streamforgeReliability.title}
          description={streamforgeReliability.description}
          points={streamforgeReliability.points}
        />

        <PointSection
          id="worker"
          eyebrow={streamforgeWorker.eyebrow}
          title={streamforgeWorker.title}
          description={streamforgeWorker.description}
          points={streamforgeWorker.points}
        />

        <PointSection
          id="analytics"
          eyebrow={streamforgeAnalytics.eyebrow}
          title={streamforgeAnalytics.title}
          description={streamforgeAnalytics.description}
          points={streamforgeAnalytics.points}
        />

        <StorySection
          id="demo"
          eyebrow={streamforgeDemo.eyebrow}
          title={streamforgeDemo.title}
          description={streamforgeDemo.description}
        >
          <div className="mt-8 grid gap-4">
            {streamforgeDemo.shots.map((shot) => (
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
        </StorySection>

        <StorySection
          id="proof"
          eyebrow={streamforgeProof.eyebrow}
          title={streamforgeProof.title}
          description={streamforgeProof.description}
        >
          <ul className="mt-8 space-y-2">
            {streamforgeProof.evidence.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-white/60">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/70"
                />
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {streamforgeProof.limits.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/50"
              >
                {item}
              </li>
            ))}
          </ul>
        </StorySection>

        <div className="flex flex-wrap items-center justify-center gap-3 pb-4 pt-2">
          <a
            href={streamforgeDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-50 transition hover:bg-cyan-400/20"
          >
            Live Demo ↗
          </a>
          <a
            href={streamforgeGithub}
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

function PointSection({
  id,
  eyebrow,
  title,
  description,
  points,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: readonly string[];
}) {
  return (
    <StorySection id={id} eyebrow={eyebrow} title={title} description={description}>
      <ul className="mt-8 space-y-2">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-6 text-white/60">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/70"
            />
            {point}
          </li>
        ))}
      </ul>
    </StorySection>
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
