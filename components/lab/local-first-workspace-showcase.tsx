import Image from "next/image";
import type { ReactNode } from "react";

import {
  localFirstArchitecture,
  localFirstChallenge,
  localFirstConvergence,
  localFirstDemoUrl,
  localFirstGithub,
  localFirstHero,
  localFirstIdentity,
  localFirstInspector,
  localFirstPersistence,
  localFirstProof,
} from "./local-first-workspace-data";

export default function LocalFirstWorkspaceShowcase() {
  return (
    <div className="relative overflow-x-clip px-8 py-8 sm:py-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-16 sm:space-y-20">
        <header id="overview" className="relative scroll-mt-[120px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-violet-500/[0.08] blur-[100px]"
          />

          <div className="relative z-10 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              {localFirstHero.trackLabel}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {localFirstHero.productName}
            </h1>

            <p className="mt-5 text-xl font-medium tracking-[-0.02em] text-violet-100/80 sm:text-2xl">
              {localFirstHero.tagline}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
              {localFirstHero.description}
            </p>

            <p className="mt-4 text-sm text-white/40">{localFirstHero.scope}</p>

            <p className="mt-5 text-sm text-white/45">
              {localFirstHero.technologies.join(" · ")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={localFirstDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-violet-300/25 bg-violet-400/15 px-5 py-2.5 text-sm font-medium text-violet-50 transition hover:bg-violet-400/25"
              >
                Try the CRDT Lab ↗
              </a>
              <a
                href={localFirstGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/[0.10] hover:text-white/90"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </header>

        <Section
          id="challenge"
          eyebrow={localFirstChallenge.eyebrow}
          title={localFirstChallenge.title}
        >
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            {localFirstChallenge.body}
          </p>
          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-white/75">
            {localFirstChallenge.choice}
          </p>
        </Section>

        <Section
          id="convergence"
          eyebrow={localFirstConvergence.eyebrow}
          title={localFirstConvergence.title}
        >
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            {localFirstConvergence.description}
          </p>

          <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-100/50">
              {localFirstConvergence.illustrationLabel}
            </p>
            <ol className="mt-4 flex flex-col gap-2 lg:flex-row lg:items-center">
              {localFirstConvergence.flow.map((label, index) => (
                <li
                  key={label}
                  className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row"
                >
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-violet-200/40 lg:px-1">
                      <span className="lg:hidden">↓</span>
                      <span className="hidden lg:inline">→</span>
                    </span>
                  ) : null}
                  <div className="w-full rounded-xl border border-violet-300/20 bg-violet-400/10 px-3 py-3 text-center text-sm font-medium text-violet-50">
                    {label}
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs leading-5 text-white/40">
              {localFirstConvergence.illustrationNote}
            </p>
          </div>

          <div className="mt-6">
            <ProductShot shot={localFirstConvergence.shot} />
          </div>
        </Section>

        <Section
          id="identity"
          eyebrow={localFirstIdentity.eyebrow}
          title={localFirstIdentity.title}
        >
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            {localFirstIdentity.description}
          </p>
          <ul className="mt-8 grid gap-3 lg:grid-cols-2">
            {localFirstIdentity.facts.map((fact) => (
              <li
                key={fact.name}
                className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-base font-semibold text-white">{fact.name}</p>
                <p className="mt-2 text-sm leading-6 text-white/50">{fact.detail}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="persistence"
          eyebrow={localFirstPersistence.eyebrow}
          title={localFirstPersistence.title}
        >
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            {localFirstPersistence.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {localFirstPersistence.stores.map((store) => (
              <li
                key={store}
                className="rounded-full border border-violet-300/15 bg-violet-400/[0.07] px-3 py-1 font-mono text-xs text-white/70"
              >
                {store}
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2">
            {localFirstPersistence.notes.map((note) => (
              <li key={note} className="flex gap-3 text-sm leading-6 text-white/60">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300/70"
                />
                {note}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ProductShot shot={localFirstPersistence.shot} />
          </div>
        </Section>

        <Section
          id="inspector"
          eyebrow={localFirstInspector.eyebrow}
          title={localFirstInspector.title}
        >
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            {localFirstInspector.description}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localFirstInspector.statuses.map((status) => (
              <li
                key={status.name}
                className="rounded-[20px] border border-white/10 bg-black/25 px-4 py-4"
              >
                <p className="text-sm font-semibold text-white">{status.name}</p>
                <p className="mt-1 text-sm leading-6 text-white/50">{status.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ProductShot shot={localFirstInspector.shot} />
          </div>
        </Section>

        <Section
          id="architecture"
          eyebrow={localFirstArchitecture.eyebrow}
          title={localFirstArchitecture.title}
        >
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            {localFirstArchitecture.description}
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {localFirstArchitecture.columns.map((column) => (
              <div
                key={column.name}
                className={`rounded-[24px] border p-6 ${
                  column.tone === "live"
                    ? "border-violet-300/25 bg-violet-400/[0.07]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
                  {column.tone === "live" ? "Live demo" : "Not the hosted demo"}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {column.name}
                </h3>
                <ul className="mt-4 space-y-2">
                  {column.points.map((point) => (
                    <li key={point} className="text-sm leading-6 text-white/60">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <section id="proof" className="scroll-mt-[120px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-violet-100/50">
            {localFirstProof.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            {localFirstProof.title}
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-2">
            {localFirstProof.metrics.map((item) => (
              <div key={item.label} className="bg-[#0a0d14] px-5 py-6 text-center">
                <p className="text-3xl font-semibold tracking-tight text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-white/55">{item.label}</p>
                <p className="mt-2 text-[11px] leading-4 text-white/35">{item.hint}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-white/50">
            {localFirstProof.propertyNote}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
            {localFirstProof.benchmark}
          </p>

          <ul className="mt-8 space-y-2">
            {localFirstProof.limits.map((limit) => (
              <li key={limit} className="flex gap-3 text-sm leading-6 text-white/55">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30"
                />
                {limit}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col items-center gap-4 pb-4 pt-2 sm:flex-row sm:justify-center">
          <a
            href={localFirstDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-violet-300/25 bg-violet-400/15 px-6 py-3 text-sm font-medium text-violet-50 transition hover:bg-violet-400/25"
          >
            Try the CRDT Lab ↗
          </a>
          <a
            href={localFirstGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white/65 transition hover:bg-white/[0.10] hover:text-white/85"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-[120px]">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-violet-100/50">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProductShot({
  shot,
}: {
  shot: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
}) {
  return (
    <figure className="overflow-hidden rounded-[24px] border border-white/10 bg-black/40">
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
