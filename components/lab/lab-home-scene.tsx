"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type LabHomeSceneProps = {
  onEnterSoftware: () => void;
  onEnterRobotics: () => void;
};

type InteractiveTheme = "default" | "software" | "robotics";

type InteractiveAreaProps = {
  ariaLabel: string;
  title: string;
  description: string;
  className: string;
  glowClassName: string;
  onClick: () => void;

  tooltipPositionClassName?: string;
  tooltipBoxClassName?: string;

  outerGlowSizeClassName?: string;
  innerGlowSizeClassName?: string;

  hideTooltip?: boolean;
  theme?: InteractiveTheme;
};

const themeStyles: Record<
  InteractiveTheme,
  {
    panel: string;
    dot: string;
    title: string;
    action: string;
    accent: string;
  }
> = {
  default: {
    panel: `
      border-white/15
      bg-[rgba(3,8,15,0.56)]
      shadow-[0_14px_36px_rgba(0,0,0,0.30)]
    `,
    dot: `
      bg-white/80
      shadow-[0_0_10px_rgba(255,255,255,0.65)]
    `,
    title: "text-white",
    action: "text-white/65",
    accent: "from-transparent via-white/35 to-transparent",
  },

  software: {
    panel: `
      border-cyan-300/20
      bg-[rgba(2,12,22,0.56)]
      shadow-[0_14px_38px_rgba(14,165,233,0.16)]
    `,
    dot: `
      bg-cyan-300
      shadow-[0_0_12px_rgba(103,232,249,0.95)]
    `,
    title: "text-cyan-50",
    action: "text-cyan-100/70",
    accent: "from-transparent via-cyan-300/65 to-transparent",
  },

  robotics: {
    panel: `
      border-emerald-300/20
      bg-[rgba(2,15,12,0.56)]
      shadow-[0_14px_38px_rgba(16,185,129,0.15)]
    `,
    dot: `
      bg-emerald-300
      shadow-[0_0_12px_rgba(110,231,183,0.95)]
    `,
    title: "text-emerald-50",
    action: "text-emerald-100/70",
    accent: "from-transparent via-emerald-300/65 to-transparent",
  },
};

function InteractiveArea({
  ariaLabel,
  title,
  description,
  className,
  glowClassName,
  onClick,

  tooltipPositionClassName,
  tooltipBoxClassName,

  outerGlowSizeClassName,
  innerGlowSizeClassName,

  hideTooltip = false,
  theme = "default",
}: InteractiveAreaProps) {
  const tooltipPosition =
    tooltipPositionClassName ??
    "left-1/2 top-[2%] -translate-x-1/2";

  const tooltipBox =
    tooltipBoxClassName ??
    "w-[245px] rounded-[18px]";

  const outerGlowSize =
    outerGlowSizeClassName ?? "h-[88%]";

  const innerGlowSize =
    innerGlowSizeClassName ?? "h-[48%]";

  const styles = themeStyles[theme];

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`
        group absolute z-10 cursor-pointer
        focus-visible:outline-none
        ${className}
      `}
    >
      {/* 外层圆形柔光 */}
      <span
        aria-hidden="true"
        className={`
          pointer-events-none absolute
          left-1/2 top-1/2
          aspect-square
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          opacity-0 blur-[48px]
          transition-all duration-500 ease-out

          group-hover:scale-110
          group-hover:opacity-60

          group-focus-visible:scale-110
          group-focus-visible:opacity-60

          ${outerGlowSize}
          ${glowClassName}
        `}
      />

      {/* 内层圆形柔光 */}
      <span
        aria-hidden="true"
        className={`
          pointer-events-none absolute
          left-1/2 top-1/2
          aspect-square
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          opacity-0 blur-[24px]
          transition-all duration-500 ease-out

          group-hover:scale-110
          group-hover:opacity-90

          group-focus-visible:scale-110
          group-focus-visible:opacity-90

          ${innerGlowSize}
          ${glowClassName}
        `}
      />

      {/* 小型悬停提示，不遮挡工作台 */}
      {!hideTooltip && (
        <span
          className={`
            pointer-events-none absolute
            translate-y-2
            overflow-hidden
            border
            px-4 py-3
            text-left
            opacity-0
            backdrop-blur-md
            transition-all duration-300 ease-out

            group-hover:translate-y-0
            group-hover:opacity-100

            group-focus-visible:translate-y-0
            group-focus-visible:opacity-100

            ${tooltipPosition}
            ${tooltipBox}
            ${styles.panel}
          `}
        >
          {/* 顶部细光线 */}
          <span
            aria-hidden="true"
            className={`
              absolute inset-x-6 top-0
              h-px
              bg-gradient-to-r
              ${styles.accent}
            `}
          />

          <span className="relative z-10 block">
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`
                  h-1.5 w-1.5 rounded-full
                  ${styles.dot}
                `}
              />

              <span
                className={`
                  text-[13px] font-medium
                  ${styles.title}
                `}
              >
                {title}
              </span>
            </span>

            <span className="mt-1.5 block text-[11px] leading-4 text-white/55">
              {description}
            </span>

            <span
              className={`
                mt-2 flex items-center
                text-[11px] font-medium
                ${styles.action}
              `}
            >
              Enter lab

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </span>
        </span>
      )}
    </button>
  );
}

export default function LabHomeScene({
  onEnterSoftware,
  onEnterRobotics,
}: LabHomeSceneProps) {
  const router = useRouter();
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const openBeyondTheLab = () => {
    setIsAboutOpen(false);
    router.push("/about/");
  };

  return (
    <div className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-black">
      {/* 实验室背景 */}
      <Image
        src="/images/lab-home-hero.png"
        alt="Simon Wen's interactive software and robotics laboratory"
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />

      {/* 轻微暗角 */}
      <div className="pointer-events-none absolute inset-0 bg-black/[0.02]" />

      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_58%,rgba(0,0,0,0.16)_100%)]
        "
      />

      {/* 人物交互区域 */}
      <InteractiveArea
        ariaLabel="Open Simon Wen's introduction"
        title=""
        description=""
        onClick={() => setIsAboutOpen(true)}
        className="
          left-[4%]
          top-[27%]
          h-[71%]
          w-[28%]
        "
        outerGlowSizeClassName="h-[58%]"
        innerGlowSizeClassName="h-[34%]"
        hideTooltip
        glowClassName="
          bg-[radial-gradient(circle,rgba(255,238,214,0.24)_0%,rgba(255,238,214,0.09)_38%,transparent_72%)]
        "
      />

      {/* Simon 欢迎框 */}
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.55,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none absolute
          left-[4.5%]
          top-[5%]
          z-20
          w-[300px]
          overflow-hidden
          rounded-[26px]
          border border-white/20
          bg-[rgba(7,20,35,0.44)]
          px-5 py-4
          text-white
          shadow-[0_18px_50px_rgba(0,0,0,0.34)]
          backdrop-blur-[14px]
        "
      >
        {/* 顶部玻璃高光 */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            rounded-[inherit]
            bg-gradient-to-b
            from-white/[0.08]
            via-transparent
            to-black/[0.04]
          "
        />

        {/* 左上柔光 */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -left-14 -top-14
            h-40 w-40
            rounded-full
            bg-white/[0.06]
            blur-3xl
          "
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="
                h-2 w-2 rounded-full
                bg-emerald-300/90
                shadow-[0_0_12px_rgba(110,231,183,0.85)]
              "
            />

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/55">
              Welcome to my lab
            </p>
          </div>

          <p className="mt-3 text-[21px] font-semibold leading-tight tracking-[-0.01em]">
            Hi, I&apos;m Simon.
          </p>

          <p className="mt-2 text-[13px] leading-5 text-white/70">
            Click Simon to learn about him.
          </p>

          <p className="mt-2 text-[13px] leading-5 text-white/70">
            Enter the Software Lab or Robotics Lab to explore the
            engineering work.
          </p>

          <div className="mt-3 flex items-center gap-2 text-[11px] text-white/50">
            <span>Simon</span>
            <span>•</span>
            <span>Software</span>
            <span>•</span>
            <span>Robotics</span>
          </div>
        </div>
      </motion.div>

      {/* Software 工作台 */}
      <InteractiveArea
        ariaLabel="Enter the Software Lab"
        title="Software Lab"
        description="Projects, education, experience, and thoughts."
        theme="software"
        onClick={onEnterSoftware}
        className="
          left-[29%]
          top-[39%]
          h-[50%]
          w-[40%]
        "
        tooltipPositionClassName="
          left-[50%]
          top-[-30%]
          -translate-x-1/2
        "
        tooltipBoxClassName="
          w-[245px]
          rounded-[18px]
        "
        glowClassName="
          bg-[radial-gradient(circle,rgba(37,169,255,0.32)_0%,rgba(37,169,255,0.13)_38%,transparent_72%)]
        "
      />

      {/* Robotics 工作台 */}
      <InteractiveArea
        ariaLabel="Enter the Robotics Lab"
        title="Robotics Lab"
        description="Projects, hands-on experience, and experiments."
        theme="robotics"
        onClick={onEnterRobotics}
        className="
          right-[2%]
          top-[27%]
          h-[51%]
          w-[30%]
        "
        tooltipPositionClassName="
          left-[50%]
          top-[-15%]
          -translate-x-1/2
        "
        tooltipBoxClassName="
          w-[245px]
          rounded-[18px]
        "
        glowClassName="
          bg-[radial-gradient(circle,rgba(52,211,153,0.30)_0%,rgba(52,211,153,0.12)_38%,transparent_72%)]
        "
      />

      {/* 点击人物后出现详细自我介绍 */}
      <AnimatePresence>
        {isAboutOpen && (
          <>
            {/* 点击外部关闭 */}
            <motion.button
              type="button"
              aria-label="Close introduction"
              onClick={() => setIsAboutOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
                absolute inset-0 z-30
                cursor-default bg-black/[0.10]
              "
            />

            {/* 自我介绍玻璃面板 */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="simon-introduction-title"
              initial={{
                opacity: 0,
                x: -35,
                y: 15,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -25,
                y: 10,
                scale: 0.97,
              }}
              transition={{
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute left-[3%] top-[5%] z-40
                w-[350px]
                overflow-hidden rounded-[26px]
                border border-white/20
                bg-[rgba(6,14,27,0.48)]
                p-5 text-white
                shadow-[0_24px_70px_rgba(0,0,0,0.45)]
                backdrop-blur-[14px]
              "
            >
              {/* 顶部玻璃高光 */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-b
                  from-white/[0.08]
                  via-transparent
                  to-black/[0.05]
                "
              />

              {/* 面板圆形柔光 */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -left-16 -top-16
                  h-52 w-52 rounded-full
                  bg-[radial-gradient(circle,rgba(255,238,214,0.12)_0%,transparent_72%)]
                  blur-2xl
                "
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className="
                        text-[10px] font-medium uppercase
                        tracking-[0.34em] text-white/[0.50]
                      "
                    >
                      Meet Simon
                    </p>

                    <h1
                      id="simon-introduction-title"
                      className="mt-3 text-[28px] font-semibold leading-tight"
                    >
                      Hi, I&apos;m Simon Wen.
                    </h1>
                  </div>

                  <button
                    type="button"
                    aria-label="Close introduction"
                    onClick={() => setIsAboutOpen(false)}
                    className="
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-white/15
                      bg-white/[0.06]
                      text-lg text-white/[0.65]
                      transition
                      hover:bg-white/[0.12]
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white/60
                    "
                  >
                    ×
                  </button>
                </div>

                <p className="mt-4 text-[14px] leading-6 text-white/[0.68]">
                  I&apos;m an undergraduate student at the University of
                  Waterloo.
                </p>

                <p className="mt-3 text-[14px] leading-6 text-white/[0.68]">
                  Outside of software and robotics, I enjoy playing
                  piano, basketball, and building LEGO.
                </p>

                <p className="mt-3 text-[14px] leading-6 text-white/[0.68]">
                  Those interests keep me curious — making, creating,
                  and learning beyond the lab.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "University of Waterloo",
                    "Piano",
                    "Basketball",
                    "LEGO",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border border-white/15
                        bg-white/[0.06]
                        px-3 py-1.5
                        text-xs text-white/[0.72]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-xs text-white/[0.42]">
                    Click outside to close
                  </p>

                  <button
                    type="button"
                    onClick={openBeyondTheLab}
                    className="
                      rounded-full
                      border border-violet-300/20
                      bg-violet-400/10
                      px-4 py-2
                      text-xs font-medium text-violet-50
                      transition
                      hover:bg-violet-400/20
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-violet-200/60
                    "
                  >
                    Beyond the Lab →
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
