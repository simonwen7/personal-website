"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";

import LabShell from "@/components/lab/lab-shell";

type SectionId = "home" | "about" | "resume" | "contact";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type BlendTheme = "violet" | "blue" | "emerald";

const blendThemeStyles: Record<BlendTheme, string> = {
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
    return () => observer.disconnect();
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
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

function SectionBlend({
  theme,
  rise = "default",
}: {
  theme: BlendTheme;
  /** Soften / place ambient relative to the Hero boundary. */
  rise?: "default" | "after-hero";
}) {
  const riseClass =
    rise === "after-hero"
      ? "top-[-180px] h-[400px]"
      : "top-[-220px] h-[440px]";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-0 ${riseClass}`}
    >
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,7,11,0.16)_20%,rgba(5,7,11,0.50)_50%,rgba(5,7,11,0.16)_80%,transparent_100%)]
        "
      />
      <div
        className={`
          absolute left-1/2 top-1/2 h-[360px] w-[86%]
          -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[105px]
          ${blendThemeStyles[theme]}
        `}
      />
    </div>
  );
}

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
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05070b]"
    >
      <div
        className="
          absolute inset-0 opacity-[0.026]
          [background-image:linear-gradient(rgba(255,255,255,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.20)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(7,10,16,0.08)_0%,rgba(0,0,0,0.60)_100%)]
        "
      />

      <div
        className={`
          absolute -left-40 top-[12%] h-[560px] w-[560px]
          rounded-full bg-cyan-500/[0.09] blur-[180px]
          transition-[opacity,transform] duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${activeSection === "home" ? visibleClass : hiddenClass}
        `}
      />
      <div
        className={`
          absolute -right-40 top-[18%] h-[560px] w-[560px]
          rounded-full bg-emerald-500/[0.07] blur-[180px]
          transition-[opacity,transform] duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${activeSection === "home" ? visibleClass : hiddenClass}
        `}
      />

      <div
        className={`
          absolute left-[4%] top-[20%] h-[680px] w-[680px]
          rounded-full bg-violet-600/[0.09] blur-[210px]
          transition-[opacity,transform] duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${activeSection === "about" ? visibleClass : hiddenClass}
        `}
      />

      <div
        className={`
          absolute right-[0%] top-[14%] h-[720px] w-[720px]
          rounded-full bg-blue-600/[0.095] blur-[215px]
          transition-[opacity,transform] duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${activeSection === "resume" ? visibleClass : hiddenClass}
        `}
      />

      <div
        className={`
          absolute left-1/2 top-1/2 h-[780px] w-[780px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-emerald-500/[0.095] blur-[225px]
          transition-[opacity,transform] duration-[1500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${activeSection === "contact" ? visibleClass : hiddenClass}
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
      "resume",
      "about",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          );

        const mostVisible = visibleEntries[0];
        if (!mostVisible) {
          return;
        }

        setActiveSection(mostVisible.target.id as SectionId);
      },
      {
        threshold: [0.12, 0.2, 0.32, 0.46, 0.6, 0.72],
        rootMargin: "-14% 0px -34% 0px",
      },
    );

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative isolate min-h-screen bg-[#05070b] text-white">
      <FixedLaboratoryBackground activeSection={activeSection} />

      <div className="relative z-10">
        <LabShell />
      </div>

      {/* Resume */}
      <section
        id="resume"
        className="
          relative z-10 scroll-mt-[88px] overflow-x-clip
          px-8 py-14 sm:py-16 lg:py-20
        "
      >
        <SectionBlend theme="blue" rise="after-hero" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <Reveal>
            <div
              className="
                relative flex flex-col justify-between gap-10
                overflow-hidden rounded-[34px]
                border border-white/10 bg-white/[0.042]
                px-9 py-10 shadow-[0_24px_75px_rgba(0,0,0,0.32)]
                backdrop-blur-xl lg:flex-row lg:items-center
              "
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      h-2 w-2 rounded-full bg-blue-300
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
                  technical experience, education, projects, and
                  professional background.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Software Engineering",
                    "QA Automation",
                    "Backend",
                    "AI",
                    "Robotics",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full border border-blue-300/15
                        bg-blue-400/[0.07] px-3 py-1.5
                        text-xs text-blue-100/65
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex shrink-0 flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full border border-blue-300/20
                    bg-blue-400/10 px-5 py-3
                    text-sm font-medium text-blue-50
                    transition hover:-translate-y-0.5 hover:bg-blue-400/20
                  "
                >
                  View Resume ↗
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="
                    rounded-full border border-white/10
                    bg-white/[0.05] px-5 py-3
                    text-sm font-medium text-white/65
                    transition hover:-translate-y-0.5
                    hover:bg-white/[0.10] hover:text-white
                  "
                >
                  Download ↓
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Beyond the Lab preview */}
      <section
        id="about"
        className="
          relative z-10 scroll-mt-[88px] overflow-x-clip
          px-8 py-14 sm:py-16 lg:py-20
        "
      >
        <SectionBlend theme="violet" />

        <div className="relative z-10 mx-auto w-full max-w-4xl">
          <Reveal>
            <div
              className="
                relative overflow-hidden rounded-[34px]
                border border-white/10 bg-white/[0.042]
                px-8 py-10 shadow-[0_24px_70px_rgba(0,0,0,0.30)]
                backdrop-blur-xl md:px-12 md:py-12
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.05),transparent_38%)]
                "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      h-2 w-2 rounded-full bg-violet-300
                      shadow-[0_0_14px_rgba(196,181,253,0.85)]
                    "
                  />
                  <p className="text-xs font-medium uppercase tracking-[0.34em] text-violet-100/55">
                    Beyond the Lab
                  </p>
                </div>

                <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                  Who I am outside software and robotics.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                  I&apos;m an undergraduate at the University of
                  Waterloo. Away from the labs, I enjoy piano,
                  basketball, and building LEGO.
                </p>

                <div className="mt-8">
                  <Link
                    href="/about/"
                    className="
                      inline-flex rounded-full
                      border border-violet-300/20 bg-violet-400/10
                      px-5 py-3 text-sm font-medium text-violet-50
                      transition hover:-translate-y-0.5 hover:bg-violet-400/20
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-violet-200/50
                    "
                  >
                    Explore Beyond the Lab →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="
          relative z-10 scroll-mt-[88px] overflow-x-clip
          px-8 py-14 pb-20 sm:py-16 sm:pb-24 lg:py-20 lg:pb-28
        "
      >
        <SectionBlend theme="emerald" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-2 w-2 rounded-full bg-emerald-300
                  shadow-[0_0_14px_rgba(110,231,183,0.9)]
                "
              />
              <p className="text-xs font-medium uppercase tracking-[0.34em] text-emerald-100/55">
                Contact Terminal
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/[0.58]">
              Reach out to discuss software engineering, AI,
              backend systems, robotics, internships, or potential
              collaborations.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Email",
                  value: "simonwensw7@gmail.com",
                  href: "mailto:simonwensw7@gmail.com",
                  external: false,
                },
                {
                  label: "LinkedIn",
                  value: "Connect with me",
                  href: "https://www.linkedin.com/in/xiemin-wen-40a1742a7",
                  external: true,
                },
                {
                  label: "GitHub",
                  value: "View my code",
                  href: "https://github.com/simonwen7",
                  external: true,
                },
                {
                  label: "Resume",
                  value: "View PDF",
                  href: "/resume.pdf",
                  external: true,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    rounded-[24px] border border-white/10
                    bg-white/[0.042] px-6 py-5 text-left
                    shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                    backdrop-blur-xl transition
                    hover:-translate-y-0.5 hover:border-emerald-300/20
                    hover:bg-white/[0.06]
                  "
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-medium text-white/80">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
