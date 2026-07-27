"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import LabShell from "@/components/lab/lab-shell";

type SectionId =
  | "home"
  | "projects"
  | "about"
  | "resume"
  | "contact";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type BlendTheme =
  | "cyan"
  | "violet"
  | "blue"
  | "emerald";

const projects = [
  {
    number: "01",
    title: "APA Document Formatter",
    category: "AI · Backend · Document Processing",
    description:
      "An AI-powered document tool that detects APA formatting issues and produces a polished, formatted result.",
    href: "/projects/apa-formatter",
  },
  {
    number: "02",
    title: "CMBB Asking",
    category: "FastAPI · React · OpenAI",
    description:
      "A full-stack AI question-answering application built with FastAPI, React, OpenAI, and an Ubuntu deployment environment.",
    href: "/projects/cmbb-asking",
  },
  {
    number: "03",
    title: "WorkAway",
    category: "Unity · Game Development",
    description:
      "A game-jam project about escaping workplace pressure through driving, obstacles, collectibles, and multiple levels.",
    href: "/projects",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Backend Systems",
    description:
      "APIs, databases, server logic, and reliable data flows.",
  },
  {
    number: "02",
    title: "AI Applications",
    description:
      "Practical AI tools designed around real user problems.",
  },
  {
    number: "03",
    title: "Full-Stack Products",
    description:
      "Turning ideas into complete, deployable applications.",
  },
  {
    number: "04",
    title: "QA Automation",
    description:
      "Building dependable test systems and workflows.",
  },
  {
    number: "05",
    title: "Robotics",
    description:
      "Connecting software with machines and physical systems.",
  },
  {
    number: "06",
    title: "Creative Engineering",
    description:
      "Exploring games, interactions, and experimental projects.",
  },
];

const blendThemeStyles: Record<BlendTheme, string> = {
  cyan:
    "bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.045)_0%,rgba(34,211,238,0.018)_36%,transparent_72%)]",

  violet:
    "bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,rgba(139,92,246,0.018)_36%,transparent_72%)]",

  blue:
    "bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,rgba(59,130,246,0.018)_36%,transparent_72%)]",

  emerald:
    "bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,rgba(16,185,129,0.018)_36%,transparent_72%)]",
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(element);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0px)"
          : "translateY(24px)",
        transition: `
          opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms,
          transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms
        `,
        willChange: isVisible
          ? "auto"
          : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/*
 * Hero 图片和 Projects 之间的过渡。
 *
 * 顺序：
 * 实验室图片
 * → 深黑雾化
 * → 一小段黑色缓冲
 * → 很淡的青蓝色
 * → Projects 内容
 */
function HeroToContentBlend() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        relative z-20
        -mt-56 h-72
      "
    >
      {/* Hero 图片逐渐进入深黑背景 */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,transparent_0%,rgba(2,5,9,0.16)_16%,rgba(3,6,10,0.50)_38%,rgba(5,7,11,0.88)_66%,#05070b_86%,#05070b_100%)]
        "
      />

      {/* Software 蓝色残光 */}
      <div
        className="
          absolute
          bottom-[-45px] left-[22%]
          h-[210px] w-[430px]
          rounded-full
          bg-cyan-500/[0.022]
          blur-[125px]
        "
      />

      {/* Robotics 绿色残光 */}
      <div
        className="
          absolute
          bottom-[-45px] right-[12%]
          h-[210px] w-[390px]
          rounded-full
          bg-emerald-500/[0.018]
          blur-[125px]
        "
      />

      {/* 最底部中性黑雾 */}
      <div
        className="
          absolute inset-x-0 bottom-0
          h-28
          bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,7,11,0.72)_58%,#05070b_100%)]
        "
      />
    </div>
  );
}

/*
 * 跨越相邻两个 section 的接缝雾化层。
 *
 * 它会同时覆盖：
 * - 上一个 section 的底部
 * - 当前 section 的顶部
 */
function SectionBlend({
  theme,
}: {
  theme: BlendTheme;
}) {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none absolute
        inset-x-0 top-[-220px]
        z-0 h-[440px]
      "
    >
      {/* 中央深色雾层 */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,7,11,0.16)_20%,rgba(5,7,11,0.50)_50%,rgba(5,7,11,0.16)_80%,transparent_100%)]
        "
      />

      {/* 当前模块主题残光 */}
      <div
        className={`
          absolute
          left-1/2 top-1/2
          h-[360px] w-[86%]
          -translate-x-1/2 -translate-y-1/2
          rounded-[50%]
          blur-[105px]
          ${blendThemeStyles[theme]}
        `}
      />

      {/* 中性色雾 */}
      <div
        className="
          absolute
          left-1/2 top-1/2
          h-[150px] w-[74%]
          -translate-x-1/2 -translate-y-1/2
          rounded-[50%]
          bg-[#05070b]/30
          blur-[70px]
        "
      />
    </div>
  );
}

/*
 * 页面共用的固定背景。
 *
 * 内容会滚动，但网格和环境光保持固定。
 * activeSection 改变时，环境光缓慢交叉渐变。
 */
function FixedLaboratoryBackground({
  activeSection,
}: {
  activeSection: SectionId;
}) {
  const visibleClass = "scale-100 opacity-100";
  const hiddenClass = "scale-110 opacity-0";

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none fixed inset-0 z-0
        overflow-hidden bg-[#05070b]
      "
    >
      {/* 固定网格 */}
      <div
        className="
          absolute inset-0
          opacity-[0.026]
          [background-image:linear-gradient(rgba(255,255,255,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.20)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* 全局暗角 */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(7,10,16,0.08)_0%,rgba(0,0,0,0.60)_100%)]
        "
      />

      {/* 永久存在的中性底光 */}
      <div
        className="
          absolute
          left-1/2 top-1/2
          h-[900px] w-[1100px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-slate-900/[0.10]
          blur-[220px]
        "
      />

      {/* Home：Software 蓝光 */}
      <div
        className={`
          absolute -left-40 top-[12%]
          h-[560px] w-[560px]
          rounded-full
          bg-cyan-500/[0.09]
          blur-[180px]
          transition-[opacity,transform]
          duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            activeSection === "home"
              ? visibleClass
              : hiddenClass
          }
        `}
      />

      {/* Home：Robotics 绿光 */}
      <div
        className={`
          absolute -right-40 top-[18%]
          h-[560px] w-[560px]
          rounded-full
          bg-emerald-500/[0.07]
          blur-[180px]
          transition-[opacity,transform]
          duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            activeSection === "home"
              ? visibleClass
              : hiddenClass
          }
        `}
      />

      {/* Projects：青蓝色 */}
      <div
        className={`
          absolute -left-48 top-[18%]
          h-[680px] w-[680px]
          rounded-full
          bg-cyan-500/[0.105]
          blur-[205px]
          transition-[opacity,transform]
          duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            activeSection === "projects"
              ? visibleClass
              : hiddenClass
          }
        `}
      />

      <div
        className={`
          absolute right-[-12%] bottom-[-10%]
          h-[580px] w-[580px]
          rounded-full
          bg-blue-600/[0.075]
          blur-[195px]
          transition-[opacity,transform]
          duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            activeSection === "projects"
              ? visibleClass
              : hiddenClass
          }
        `}
      />

      {/* About：紫色 */}
      <div
        className={`
          absolute left-[4%] top-[20%]
          h-[680px] w-[680px]
          rounded-full
          bg-violet-600/[0.09]
          blur-[210px]
          transition-[opacity,transform]
          duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            activeSection === "about"
              ? visibleClass
              : hiddenClass
          }
        `}
      />

      <div
        className={`
          absolute right-[4%] bottom-[-8%]
          h-[500px] w-[500px]
          rounded-full
          bg-fuchsia-500/[0.035]
          blur-[190px]
          transition-[opacity,transform]
          duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            activeSection === "about"
              ? visibleClass
              : hiddenClass
          }
        `}
      />

      {/* Resume：深蓝色 */}
      <div
        className={`
          absolute right-[0%] top-[14%]
          h-[720px] w-[720px]
          rounded-full
          bg-blue-600/[0.095]
          blur-[215px]
          transition-[opacity,transform]
          duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            activeSection === "resume"
              ? visibleClass
              : hiddenClass
          }
        `}
      />

      {/* Contact：绿色 */}
      <div
        className={`
          absolute left-1/2 top-1/2
          h-[780px] w-[780px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-emerald-500/[0.095]
          blur-[225px]
          transition-[opacity,transform]
          duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            activeSection === "contact"
              ? visibleClass
              : hiddenClass
          }
        `}
      />
    </div>
  );
}

export default function HomeScrollExperience() {
  const [activeSection, setActiveSection] =
    useState<SectionId>("home");

  useEffect(() => {
    const sectionIds: SectionId[] = [
      "home",
      "projects",
      "about",
      "resume",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio -
              first.intersectionRatio,
          );

        const mostVisible = visibleEntries[0];

        if (!mostVisible) {
          return;
        }

        setActiveSection(
          mostVisible.target.id as SectionId,
        );
      },
      {
        threshold: [
          0.12,
          0.2,
          0.32,
          0.46,
          0.6,
          0.72,
        ],
        rootMargin: "-14% 0px -34% 0px",
      },
    );

    sectionIds.forEach((sectionId) => {
      const section =
        document.getElementById(sectionId);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main
      className="
        relative isolate min-h-screen
        bg-[#05070b] text-white
      "
    >
      <FixedLaboratoryBackground
        activeSection={activeSection}
      />

      {/* Hero */}
      <div className="relative z-10">
        <LabShell />
      </div>

      <HeroToContentBlend />

      {/* Projects */}
      <section
        id="projects"
        className="
          relative z-10
          flex min-h-[calc(100vh-88px)]
          scroll-mt-[88px]
          items-center
          overflow-x-clip
          px-8 py-20
        "
      >
        <SectionBlend theme="cyan" />

        {/* Projects 顶部黑色缓冲层 */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            inset-x-0 top-0
            z-[1] h-[360px]
            bg-[linear-gradient(to_bottom,#05070b_0%,rgba(5,7,11,0.97)_18%,rgba(5,7,11,0.80)_42%,rgba(5,7,11,0.42)_68%,transparent_100%)]
          "
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="flex items-end justify-between gap-10">
            <Reveal>
              <div>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      h-2 w-2 rounded-full
                      bg-cyan-300
                      shadow-[0_0_14px_rgba(103,232,249,0.9)]
                    "
                  />

                  <p className="text-xs font-medium uppercase tracking-[0.34em] text-cyan-100/55">
                    Software Lab Archive
                  </p>
                </div>

                <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em]">
                  Selected Projects
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/[0.58]">
                  A collection of software, AI, backend,
                  automation, and creative projects built
                  through school, work, and personal
                  experimentation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <a
                href="/projects"
                className="
                  hidden shrink-0 items-center gap-2
                  rounded-full
                  border border-cyan-300/20
                  bg-cyan-400/10
                  px-5 py-3
                  text-sm font-medium text-cyan-50
                  transition duration-300
                  hover:-translate-y-0.5
                  hover:bg-cyan-400/20
                  lg:inline-flex
                "
              >
                View all projects
                <span>→</span>
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 120}
                className="h-full"
              >
                <a
                  href={project.href}
                  className="
                    group relative flex h-full
                    min-h-[320px]
                    overflow-hidden rounded-[30px]
                    border border-white/10
                    bg-white/[0.042]
                    p-6
                    shadow-[0_24px_70px_rgba(0,0,0,0.30)]
                    backdrop-blur-xl
                    transition duration-300
                    hover:-translate-y-1.5
                    hover:border-cyan-300/25
                    hover:bg-white/[0.065]
                    hover:shadow-[0_28px_85px_rgba(14,165,233,0.14)]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      -right-16 -top-16
                      h-40 w-40 rounded-full
                      bg-cyan-400/10
                      blur-3xl
                      transition duration-300
                      group-hover:bg-cyan-400/20
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      absolute inset-x-8 top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-300/50
                      to-transparent
                    "
                  />

                  <span className="relative z-10 flex w-full flex-col">
                    <span className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/35">
                        Project {project.number}
                      </span>

                      <span
                        className="
                          flex h-9 w-9
                          items-center justify-center
                          rounded-full
                          border border-white/10
                          bg-white/[0.05]
                          text-white/50
                          transition duration-300
                          group-hover:border-cyan-300/25
                          group-hover:bg-cyan-400/10
                          group-hover:text-cyan-50
                        "
                      >
                        ↗
                      </span>
                    </span>

                    <span className="mt-9 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100/55">
                      {project.category}
                    </span>

                    <span className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-white">
                      {project.title}
                    </span>

                    <span className="mt-4 text-sm leading-6 text-white/55">
                      {project.description}
                    </span>

                    <span className="mt-auto pt-8 text-sm font-medium text-white/60 transition group-hover:text-cyan-100">
                      Explore project →
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="
          relative z-10
          flex min-h-[calc(100vh-88px)]
          scroll-mt-[88px]
          items-center
          overflow-x-clip
          px-8 py-20
        "
      >
        <SectionBlend theme="violet" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-2 w-2 rounded-full
                  bg-violet-300
                  shadow-[0_0_14px_rgba(196,181,253,0.85)]
                "
              />

              <p className="text-xs font-medium uppercase tracking-[0.34em] text-violet-100/55">
                About Simon
              </p>
            </div>

            <h2 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-[-0.04em]">
              Building useful systems across software and
              robotics.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/60">
              I&apos;m a University of Waterloo Computer
              Science student interested in backend
              engineering, AI-powered tools, full-stack
              products, automation, and robotics.
            </p>

            <p className="mt-4 text-base leading-8 text-white/60">
              I enjoy transforming practical ideas into
              working products and exploring how software can
              interact with real-world machines.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="/about"
                className="
                  rounded-full
                  border border-violet-300/20
                  bg-violet-400/10
                  px-5 py-3
                  text-sm font-medium text-violet-50
                  transition
                  hover:bg-violet-400/20
                "
              >
                Full profile →
              </a>

              <a
                href="/#contact"
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.05]
                  px-5 py-3
                  text-sm font-medium text-white/65
                  transition
                  hover:bg-white/[0.10]
                  hover:text-white
                "
              >
                Contact me
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="lg:col-span-7"
          >
            <div
              className="
                relative overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/[0.042]
                p-8
                shadow-[0_24px_70px_rgba(0,0,0,0.30)]
                backdrop-blur-xl
              "
            >
              <p className="relative z-10 text-xs font-medium uppercase tracking-[0.3em] text-white/35">
                Current areas of focus
              </p>

              <div className="relative z-10 mt-6 grid gap-4 sm:grid-cols-2">
                {focusAreas.map((area, index) => (
                  <Reveal
                    key={area.title}
                    delay={index * 80}
                  >
                    <div
                      className="
                        rounded-[22px]
                        border border-white/[0.08]
                        bg-black/20
                        p-4
                        transition duration-300
                        hover:-translate-y-0.5
                        hover:border-violet-300/20
                        hover:bg-white/[0.045]
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            flex h-8 w-8 shrink-0
                            items-center justify-center
                            rounded-full
                            border border-violet-300/15
                            bg-violet-400/10
                            text-[11px] text-violet-100/70
                          "
                        >
                          {area.number}
                        </span>

                        <h3 className="text-sm font-medium text-white/80">
                          {area.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-xs leading-5 text-white/45">
                        {area.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Resume */}
      <section
        id="resume"
        className="
          relative z-10
          flex min-h-[calc(100vh-88px)]
          scroll-mt-[88px]
          items-center
          overflow-x-clip
          px-8 py-20
        "
      >
        <SectionBlend theme="blue" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <Reveal>
            <div
              className="
                relative flex flex-col
                justify-between gap-10
                overflow-hidden rounded-[34px]
                border border-white/10
                bg-white/[0.042]
                px-9 py-10
                shadow-[0_24px_75px_rgba(0,0,0,0.32)]
                backdrop-blur-xl
                lg:flex-row lg:items-center
              "
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      h-2 w-2 rounded-full
                      bg-blue-300
                      shadow-[0_0_14px_rgba(147,197,253,0.85)]
                    "
                  />

                  <p className="text-xs font-medium uppercase tracking-[0.34em] text-blue-100/50">
                    Career Archive
                  </p>
                </div>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em]">
                  Experience, skills, and education.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
                  View my resume for a complete overview of my
                  technical experience, education, projects,
                  and professional background.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Software Engineering",
                    "QA Automation",
                    "Backend",
                    "AI",
                    "Robotics",
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      style={{
                        transitionDelay: `${index * 60}ms`,
                      }}
                      className="
                        rounded-full
                        border border-blue-300/15
                        bg-blue-400/[0.07]
                        px-3 py-1.5
                        text-xs text-blue-100/65
                        transition duration-300
                        hover:-translate-y-0.5
                        hover:bg-blue-400/[0.13]
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex shrink-0 gap-3">
                <a
                  href="/resume"
                  className="
                    rounded-full
                    border border-blue-300/20
                    bg-blue-400/10
                    px-5 py-3
                    text-sm font-medium text-blue-50
                    transition
                    hover:-translate-y-0.5
                    hover:bg-blue-400/20
                  "
                >
                  View resume →
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.05]
                    px-5 py-3
                    text-sm font-medium text-white/65
                    transition
                    hover:-translate-y-0.5
                    hover:bg-white/[0.10]
                    hover:text-white
                  "
                >
                  Open PDF ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="
          relative z-10
          flex min-h-[calc(100vh-88px)]
          scroll-mt-[88px]
          items-center
          overflow-x-clip
          px-8 py-20
        "
      >
        <SectionBlend theme="emerald" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-2 w-2 rounded-full
                  bg-emerald-300
                  shadow-[0_0_14px_rgba(110,231,183,0.9)]
                "
              />

              <p className="text-xs font-medium uppercase tracking-[0.34em] text-emerald-100/55">
                Contact Terminal
              </p>
            </div>

            <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em]">
              Let&apos;s build something useful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/[0.58]">
              Reach out to discuss software engineering, AI,
              backend systems, robotics, internships, or
              potential collaborations.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 flex justify-center gap-3">
              <a
                href="/contact"
                className="
                  rounded-full
                  border border-emerald-300/20
                  bg-emerald-400/10
                  px-6 py-3
                  text-sm font-medium text-emerald-50
                  transition
                  hover:-translate-y-0.5
                  hover:bg-emerald-400/20
                "
              >
                Open contact page →
              </a>

              <a
                href="https://github.com/Simonwen7"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.05]
                  px-6 py-3
                  text-sm font-medium text-white/65
                  transition
                  hover:-translate-y-0.5
                  hover:bg-white/[0.10]
                  hover:text-white
                "
              >
                GitHub ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
