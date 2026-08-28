"use client";

import Image from "next/image";
import { animate, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  type TouchEvent as ReactTouchEvent,
} from "react";
import type { RoboticsBookMedia, RoboticsBookSpread } from "./lab-types";
import { roboticsArchiveSliderMilestones } from "./robotics-lab-data";

const FRAME_ASPECT = "aspect-[4/3]";
const CAPTION_MIN_H = "min-h-[2.75rem]";
const SETTLE_MS = 280;

function MediaFrame({
  media,
  priority = false,
  onOpen,
}: {
  media: RoboticsBookMedia;
  priority?: boolean;
  onOpen?: (media: RoboticsBookMedia) => void;
}) {
  const isCertificate = media.kind === "certificate";
  const fit = media.fit ?? (isCertificate ? "contain" : "cover");

  return (
    <figure className="flex w-full min-w-0 flex-col">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onOpen?.(media);
        }}
        className={`
          relative ${FRAME_ASPECT} w-full overflow-hidden rounded-lg
          border border-white/10 text-left
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-2 focus-visible:outline-emerald-300/50
          ${isCertificate || fit === "contain" ? "bg-black/50" : "bg-black/30"}
        `}
        aria-label={`View ${media.alt}`}
      >
        <Image
          src={media.src}
          alt={media.alt}
          fill
          unoptimized
          priority={priority}
          className={
            fit === "contain" ? "object-contain p-3 sm:p-4" : "object-cover"
          }
          style={
            fit === "cover" && media.objectPosition
              ? { objectPosition: media.objectPosition }
              : undefined
          }
          sizes="(max-width: 768px) 92vw, 42vw"
        />
      </button>
      <figcaption className={`mt-2 ${CAPTION_MIN_H}`}>
        <p className="text-sm font-medium leading-snug text-white/75">
          {media.caption}
        </p>
        {media.captionDetail ? (
          <p className="mt-0.5 text-xs leading-snug text-white/40">
            {media.captionDetail}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}

function ClosingPage({
  note,
}: {
  note: NonNullable<RoboticsBookSpread["closingNote"]>;
}) {
  return (
    <div className="flex w-full min-w-0 flex-col">
      <div
        className={`
          ${FRAME_ASPECT} flex w-full items-center justify-center
          rounded-lg border border-dashed border-white/10 bg-black/15
        `}
      >
        <div className="px-4 text-center">
          <p className="text-[11px] tracking-[0.18em] text-white/35">
            {note.line1}
          </p>
          <p className="mt-2 text-sm text-white/45">{note.line2}</p>
        </div>
      </div>
      <div className={`mt-2 ${CAPTION_MIN_H}`} aria-hidden="true" />
    </div>
  );
}

function SpreadPages({
  spread,
  priority,
  onOpen,
}: {
  spread: RoboticsBookSpread;
  priority?: boolean;
  onOpen?: (media: RoboticsBookMedia) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-0">
      <div className="md:pr-4">
        <MediaFrame media={spread.left} priority={priority} onOpen={onOpen} />
      </div>
      <div className="md:border-l md:border-white/10 md:pl-4">
        {spread.right ? (
          <MediaFrame media={spread.right} priority={priority} onOpen={onOpen} />
        ) : spread.closingNote ? (
          <ClosingPage note={spread.closingNote} />
        ) : (
          <div className="hidden md:block">
            <div className={`${FRAME_ASPECT} w-full`} />
            <div className={`mt-2 ${CAPTION_MIN_H}`} />
          </div>
        )}
      </div>
    </div>
  );
}

function CoverPageSlot({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full min-w-0 flex-col">
      <div
        className={`
          relative ${FRAME_ASPECT} w-full overflow-hidden rounded-lg
          border border-white/10 bg-black/25
        `}
      >
        {children}
      </div>
      <div className={`mt-2 ${CAPTION_MIN_H}`} aria-hidden="true" />
    </div>
  );
}

function BookCover({ mobile = false }: { mobile?: boolean }) {
  const info = (
    <div className="flex h-full flex-col justify-center px-6 py-5 sm:px-8 md:px-9 md:pl-10 md:pr-8">
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-emerald-100/45">
        Robotics Archive
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-[1.65rem] md:text-3xl">
        A Decade in Robotics
      </h3>
      <p className="mt-3 text-sm text-white/50">2015 — Present</p>
      <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-white/35">
        VEX · FRC · University Robotics
      </p>
    </div>
  );

  const prompt = (
    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/30">
      Slide to explore →
    </p>
  );

  if (mobile) {
    return (
      <div className="mx-auto w-full max-w-md">
        <CoverPageSlot>
          <div className="flex h-full flex-col justify-center">
            {info}
            <div className="mt-2 px-6 pb-5 sm:px-8">{prompt}</div>
          </div>
        </CoverPageSlot>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-0">
      <div className="md:pr-4">
        <CoverPageSlot>
          <div className="h-full">{info}</div>
        </CoverPageSlot>
      </div>
      <div className="md:border-l md:border-white/10 md:pl-4">
        <CoverPageSlot>
          <div className="flex h-full items-center justify-center px-6 md:justify-start md:pl-8 lg:pl-10">
            {prompt}
          </div>
        </CoverPageSlot>
      </div>
    </div>
  );
}

function MobilePage({
  media,
  priority,
  onOpen,
}: {
  media: RoboticsBookMedia;
  priority?: boolean;
  onOpen?: (media: RoboticsBookMedia) => void;
}) {
  return (
    <div className="mx-auto w-full max-w-md">
      <MediaFrame media={media} priority={priority} onOpen={onOpen} />
    </div>
  );
}

function Lightbox({
  media,
  onClose,
}: {
  media: RoboticsBookMedia;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={media.alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="
          absolute right-4 top-4 rounded-full border border-white/15
          bg-black/40 px-3 py-1.5 text-xs text-white/70
          hover:text-white focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-2 focus-visible:outline-emerald-300/50
        "
      >
        Close
      </button>
      <div
        className="relative max-h-[88vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-black/60">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            unoptimized
            className="object-contain p-4"
            sizes="100vw"
          />
        </div>
        <p className="mt-3 text-center text-sm text-white/70">{media.caption}</p>
      </div>
    </div>
  );
}

function flattenMobilePages(spreads: readonly RoboticsBookSpread[]) {
  const pages: RoboticsBookMedia[] = [];
  for (const spread of spreads) {
    pages.push(spread.left);
    if (spread.right) pages.push(spread.right);
  }
  return pages;
}

/**
 * Book progress model:
 * 0 = cover
 * 1..N = spreads[0]..spreads[N-1]
 *
 * Mobile image progress (after cover):
 * (bookProgress - 1) * 2  → 0..16 for 17 images
 */
function bookToMobileImage(progress: number, pageCount: number) {
  if (progress <= 0) return -1; // cover
  const t = Math.max(0, progress - 1);
  return Math.min(pageCount - 1, t * 2);
}

function mobileImageToBook(imageIndex: number, maxBook: number) {
  if (imageIndex < 0) return 0;
  return Math.max(0, Math.min(maxBook, imageIndex / 2 + 1));
}

type LabRoboticsArchiveProps = {
  spreads: readonly RoboticsBookSpread[];
};

export default function LabRoboticsArchive({ spreads }: LabRoboticsArchiveProps) {
  const sliderId = useId();
  const reducedMotion = useReducedMotion();
  /** 0 = cover, 1..spreads.length = photo spreads */
  const maxBook = spreads.length;
  const mobilePages = useMemo(() => flattenMobilePages(spreads), [spreads]);
  const maxMobile = mobilePages.length - 1;

  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [lightbox, setLightbox] = useState<RoboticsBookMedia | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const settleRef = useRef<ReturnType<typeof animate> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const progressRef = useRef(0);

  const setProgressSynced = useCallback((value: number) => {
    progressRef.current = value;
    setProgress(value);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const stopSettle = useCallback(() => {
    settleRef.current?.stop();
    settleRef.current = null;
  }, []);

  const settleTo = useCallback(
    (target: number) => {
      stopSettle();
      const clamped = Math.max(0, Math.min(maxBook, target));
      settleRef.current = animate(progressRef.current, clamped, {
        duration: SETTLE_MS / 1000,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => setProgressSynced(v),
        onComplete: () => {
          setProgressSynced(clamped);
          settleRef.current = null;
        },
      });
    },
    [maxBook, setProgressSynced, stopSettle],
  );

  const snapNearest = useCallback(() => {
    if (isMobile) {
      const mobilePos = bookToMobileImage(
        progressRef.current,
        mobilePages.length,
      );
      if (mobilePos < 0) {
        // Between cover and first image
        settleTo(progressRef.current < 0.5 ? 0 : 1);
        return;
      }
      // Between cover (0) and first image when 0 < progress < 1
      if (progressRef.current < 1) {
        settleTo(progressRef.current < 0.5 ? 0 : 1);
        return;
      }
      settleTo(mobileImageToBook(Math.round(mobilePos), maxBook));
      return;
    }
    settleTo(Math.round(progressRef.current));
  }, [isMobile, maxBook, mobilePages.length, settleTo]);

  const goToBook = useCallback(
    (index: number) => {
      setDragging(false);
      settleTo(Math.max(0, Math.min(maxBook, index)));
    },
    [maxBook, settleTo],
  );

  const goPrev = useCallback(() => {
    if (isMobile) {
      if (progressRef.current <= 1.001) {
        settleTo(0);
        return;
      }
      const mobilePos = bookToMobileImage(progressRef.current, mobilePages.length);
      const nextMobile = Math.max(0, Math.floor(mobilePos + 0.001) - 1);
      settleTo(mobileImageToBook(nextMobile, maxBook));
      return;
    }
    goToBook(Math.round(progressRef.current) - 1);
  }, [goToBook, isMobile, maxBook, mobilePages.length, settleTo]);

  const goNext = useCallback(() => {
    if (isMobile) {
      if (progressRef.current < 1) {
        settleTo(1);
        return;
      }
      const mobilePos = bookToMobileImage(progressRef.current, mobilePages.length);
      const nextMobile = Math.min(maxMobile, Math.ceil(mobilePos - 0.001) + 1);
      settleTo(mobileImageToBook(nextMobile, maxBook));
      return;
    }
    goToBook(Math.round(progressRef.current) + 1);
  }, [goToBook, isMobile, maxBook, maxMobile, mobilePages.length, settleTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox) return;
      const target = e.target as HTMLElement | null;
      if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, lightbox]);

  const onSliderInput = (raw: number) => {
    stopSettle();
    setDragging(true);
    setProgressSynced(Math.max(0, Math.min(maxBook, raw)));
  };

  const onSliderRelease = () => {
    setDragging(false);
    snapNearest();
  };

  const onBookClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const target = e.target as HTMLElement;
    if (target.closest("button, a, input")) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;

    // On cover, any substantial click opens the book
    if (progressRef.current < 0.5) {
      goNext();
      return;
    }

    if (ratio < 0.35) goPrev();
    else if (ratio > 0.65) goNext();
  };

  const onTouchStart = (e: ReactTouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: ReactTouchEvent) => {
    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start == null || end == null) return;
    const delta = end - start;
    if (Math.abs(delta) < 48) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  const metaRounded = Math.min(maxBook, Math.round(progress));
  const onCover = metaRounded === 0;
  const chapterLabel = onCover
    ? "Robotics Archive"
    : spreads[metaRounded - 1]?.chapter;
  const counterLabel = onCover
    ? "COVER"
    : `${String(metaRounded).padStart(2, "0")} / ${String(spreads.length).padStart(2, "0")}`;

  // Cover ↔ first spread (0 → 1)
  const opening = Math.min(1, Math.max(0, progress));
  const inCoverTransition = progress < 1;

  // Spread-to-spread when progress >= 1
  const spreadProgress = Math.max(0, progress - 1);
  const currentSpread = Math.min(spreads.length - 1, Math.floor(spreadProgress));
  const nextSpread = Math.min(spreads.length - 1, currentSpread + 1);
  const spreadBlend = Math.min(
    1,
    Math.max(0, spreadProgress - currentSpread),
  );

  // Mobile
  const mobileFloat = bookToMobileImage(progress, mobilePages.length);
  const onMobileCover = mobileFloat < 0 || progress < 1;
  const mobileCurrent = Math.min(
    maxMobile,
    Math.max(0, Math.floor(Math.max(0, mobileFloat))),
  );
  const mobileNext = Math.min(maxMobile, mobileCurrent + 1);
  const mobileBlend =
    progress < 1
      ? opening
      : Math.min(1, Math.max(0, mobileFloat - Math.floor(mobileFloat)));

  const use3d = !reducedMotion;

  const coverStyle = (): CSSProperties => {
    if (reducedMotion) {
      return { opacity: 1 - opening, transform: "none" };
    }
    const rot = -78 * opening;
    const lift = -8 * opening;
    return {
      opacity: 1 - opening * 0.85,
      transform: use3d
        ? `perspective(1400px) rotateY(${rot}deg) translateX(${lift}%)`
        : `translateX(${-12 * opening}%)`,
      transformOrigin: "left center",
    };
  };

  const firstSpreadRevealStyle = (): CSSProperties => {
    if (reducedMotion) {
      return { opacity: opening, transform: "none" };
    }
    const scale = 0.985 + 0.015 * opening;
    return {
      opacity: opening,
      transform: `scale(${scale})`,
    };
  };

  const spreadLayerStyle = (opacity: number, outgoing: boolean) => {
    if (reducedMotion) {
      return { opacity, transform: "none" as const };
    }
    const offset = outgoing ? -12 * spreadBlend : 12 * (1 - spreadBlend);
    const rot = outgoing ? -8 * spreadBlend : 8 * (1 - spreadBlend);
    return {
      opacity,
      transform: use3d
        ? `perspective(1200px) translateX(${outgoing ? offset : -offset * 0.4}px) rotateY(${outgoing ? rot : -rot * 0.5}deg)`
        : `translateX(${outgoing ? offset : -offset * 0.35}px)`,
    };
  };

  const mobileLayerStyle = (opacity: number, outgoing: boolean) => {
    if (reducedMotion) return { opacity, transform: "none" as const };
    const offset = outgoing ? -18 * mobileBlend : 18 * (1 - mobileBlend);
    return {
      opacity,
      transform: `translateX(${outgoing ? offset : -offset}px)`,
    };
  };

  const showSpine = progress < 1 || progress >= 0.85;

  return (
    <div className="w-full min-w-0">
      <div className="mb-5">
        <div className="mb-2 flex items-end justify-between gap-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-100/50">
            {chapterLabel}
          </p>
          <p className="text-[11px] tabular-nums tracking-wide text-white/40">
            {counterLabel}
          </p>
        </div>

        <label htmlFor={sliderId} className="sr-only">
          Robotics archive photo book timeline
        </label>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={maxBook}
          step={0.01}
          value={progress}
          aria-valuetext={onCover ? "Cover" : chapterLabel}
          onPointerDown={() => {
            stopSettle();
            setDragging(true);
          }}
          onChange={(e) => onSliderInput(Number(e.target.value))}
          onPointerUp={onSliderRelease}
          onPointerCancel={onSliderRelease}
          onTouchEnd={onSliderRelease}
          onKeyUp={(e) => {
            if (
              e.key === "ArrowLeft" ||
              e.key === "ArrowRight" ||
              e.key === "Home" ||
              e.key === "End"
            ) {
              onSliderRelease();
            }
          }}
          className={`
            h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10
            accent-emerald-400
            [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-emerald-900
            [&::-webkit-slider-thumb]:bg-emerald-400
            [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_rgba(52,211,153,0.18)]
            [&::-webkit-slider-thumb]:transition-transform
            [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5
            [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-emerald-900 [&::-moz-range-thumb]:bg-emerald-400
            ${dragging ? "[&::-webkit-slider-thumb]:scale-110 [&::-moz-range-thumb]:scale-110" : ""}
          `}
        />

        <div className="mt-2 flex justify-between px-0.5 text-[10px] tabular-nums tracking-wide text-white/35">
          {roboticsArchiveSliderMilestones.map((m) => (
            <button
              key={m.year}
              type="button"
              onClick={() => goToBook(m.progress)}
              className="
                hover:text-white/60 focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-emerald-300/40
              "
            >
              {m.year}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3 flex items-center justify-end gap-1.5">
        <button
          type="button"
          aria-label="Previous"
          disabled={progress <= 0.02}
          onClick={goPrev}
          className="
            inline-flex h-8 w-8 items-center justify-center rounded-full
            border border-white/12 bg-white/[0.04] text-sm text-white/70
            transition hover:border-white/20 hover:bg-white/[0.08]
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-emerald-300/50
            disabled:pointer-events-none disabled:opacity-25
          "
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next"
          disabled={progress >= maxBook - 0.02}
          onClick={goNext}
          className="
            inline-flex h-8 w-8 items-center justify-center rounded-full
            border border-white/12 bg-white/[0.04] text-sm text-white/70
            transition hover:border-white/20 hover:bg-white/[0.08]
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-emerald-300/50
            disabled:pointer-events-none disabled:opacity-25
          "
        >
          →
        </button>
      </div>

      <div
        role="region"
        aria-label="Robotics photo book"
        className="
          relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl
          border border-white/10 bg-[#12151a]
          shadow-[0_24px_60px_rgba(0,0,0,0.45)]
        "
        onClick={onBookClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          aria-hidden="true"
          className={`
            pointer-events-none absolute inset-y-4 left-1/2 z-20 hidden w-px
            -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-300/30
            to-transparent transition-opacity duration-200 md:block
            ${showSpine ? "opacity-100" : "opacity-0"}
          `}
        />

        <div className="relative p-3 sm:p-4 md:p-5">
          {/* Desktop */}
          <div className="relative hidden md:block" style={{ perspective: 1400 }}>
            {inCoverTransition ? (
              <>
                <div
                  className="relative"
                  style={firstSpreadRevealStyle()}
                >
                  <SpreadPages
                    spread={spreads[0]}
                    priority
                    onOpen={setLightbox}
                  />
                </div>
                <div
                  className={`absolute inset-0 ${opening > 0.55 ? "pointer-events-none" : ""}`}
                  style={coverStyle()}
                >
                  <BookCover />
                </div>
              </>
            ) : (
              <>
                <div
                  className="relative"
                  style={spreadLayerStyle(1 - spreadBlend, true)}
                >
                  <SpreadPages
                    spread={spreads[currentSpread]}
                    priority={currentSpread <= 1}
                    onOpen={setLightbox}
                  />
                </div>
                {spreadBlend > 0.001 && nextSpread !== currentSpread ? (
                  <div
                    className={`absolute inset-0 ${spreadBlend < 0.55 ? "pointer-events-none" : ""}`}
                    style={spreadLayerStyle(spreadBlend, false)}
                    aria-hidden={spreadBlend < 0.55}
                  >
                    <SpreadPages
                      spread={spreads[nextSpread]}
                      onOpen={setLightbox}
                    />
                  </div>
                ) : null}
              </>
            )}
          </div>

          {/* Mobile */}
          <div className="relative md:hidden">
            {onMobileCover || progress < 1 ? (
              <>
                <div style={firstSpreadRevealStyle()}>
                  <MobilePage
                    media={mobilePages[0]}
                    priority
                    onOpen={setLightbox}
                  />
                </div>
                <div
                  className={`absolute inset-0 ${opening > 0.55 ? "pointer-events-none" : ""}`}
                  style={
                    reducedMotion
                      ? { opacity: 1 - opening }
                      : coverStyle()
                  }
                >
                  <BookCover mobile />
                </div>
              </>
            ) : (
              <>
                <div style={mobileLayerStyle(1 - mobileBlend, true)}>
                  <MobilePage
                    media={mobilePages[mobileCurrent]}
                    priority={mobileCurrent <= 1}
                    onOpen={setLightbox}
                  />
                </div>
                {mobileBlend > 0.001 && mobileNext !== mobileCurrent ? (
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={mobileLayerStyle(mobileBlend, false)}
                    aria-hidden="true"
                  >
                    <MobilePage
                      media={mobilePages[mobileNext]}
                      onOpen={setLightbox}
                    />
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>

      {lightbox ? (
        <Lightbox media={lightbox} onClose={() => setLightbox(null)} />
      ) : null}
    </div>
  );
}
