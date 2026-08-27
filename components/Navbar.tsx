"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  sectionId: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    sectionId: "home",
  },
  {
    label: "Projects",
    href: "/#projects",
    sectionId: "projects",
  },
  {
    label: "About",
    href: "/#about",
    sectionId: "about",
  },
  {
    label: "Resume",
    href: "/#resume",
    sectionId: "resume",
  },
  {
    label: "Contact",
    href: "/#contact",
    sectionId: "contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  /*
   * Scroll-spy state only matters on "/".
   * isActive already gates on pathname === "/", so non-home routes
   * never show a homepage section highlight without resetting state.
   */
  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = [
      "projects",
      "about",
      "resume",
      "contact",
    ];

    const updateActiveSection = () => {
      /*
       * Navbar 高度约为 88px。
       * 再加入一点偏移，让区域高亮更自然。
       */
      const scrollPosition = window.scrollY + 160;

      let currentSection = "home";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);

        if (
          section &&
          scrollPosition >= section.offsetTop
        ) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    const frameId = window.requestAnimationFrame(updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener(
        "scroll",
        updateActiveSection,
      );
    };
  }, [pathname]);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    /*
     * 如果当前就在首页，拦截普通跳转，
     * 改成平滑滚动。
     */
    if (pathname === "/") {
      event.preventDefault();

      if (item.sectionId === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        window.history.replaceState(null, "", "/");
        return;
      }

      const targetSection = document.getElementById(
        item.sectionId,
      );

      targetSection?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(
        null,
        "",
        `/#${item.sectionId}`,
      );
    }
  };

  return (
    <header
      className="
        sticky top-0 z-50
        h-[88px]
        overflow-hidden
        border-b border-white/10
        bg-[rgba(3,7,13,0.82)]
        text-white
        shadow-[0_10px_35px_rgba(0,0,0,0.28)]
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-[rgba(3,7,13,0.68)]
      "
    >
      {/* Software 蓝色环境光 */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[26%] top-[-90px]
          h-[180px] w-[260px]
          rounded-full
          bg-cyan-400/[0.08]
          blur-[70px]
        "
      />

      {/* Robotics 绿色环境光 */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[18%] top-[-90px]
          h-[180px] w-[240px]
          rounded-full
          bg-emerald-400/[0.07]
          blur-[70px]
        "
      />

      <nav
        className="
          relative z-10
          mx-auto flex h-full max-w-7xl
          items-center justify-between
          px-8
        "
      >
        {/* 左侧品牌 */}
        <Link
          href="/"
          aria-label="Go to Simon Wen's home page"
          onClick={(event) =>
            handleNavigation(event, navItems[0])
          }
          className="
            group flex items-center gap-3
            rounded-2xl
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white/60
          "
        >
          <div
            className="
              relative flex h-11 w-11
              items-center justify-center
              overflow-hidden rounded-2xl
              border border-white/15
              bg-white/[0.07]
              text-sm font-bold text-white
              shadow-[0_12px_30px_rgba(0,0,0,0.32)]
              backdrop-blur-xl
              transition-all duration-300
              group-hover:-rotate-6
              group-hover:border-cyan-300/30
              group-hover:bg-cyan-400/10
              group-hover:shadow-[0_14px_35px_rgba(14,165,233,0.18)]
            "
          >
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute
                inset-x-2 top-0 h-px
                bg-gradient-to-r
                from-transparent
                via-white/65
                to-transparent
              "
            />

            <span className="relative z-10">SW</span>
          </div>

          <div>
            <p className="text-sm font-semibold leading-none tracking-[-0.01em] text-white">
              Simon Wen
            </p>

            <p className="mt-1.5 text-xs text-white/45">
              Software Engineer
            </p>
          </div>
        </Link>

        {/* 中间导航胶囊 */}
        <div
          className="
            hidden items-center gap-1
            rounded-full
            border border-white/12
            bg-white/[0.055]
            p-1.5
            shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_35px_rgba(0,0,0,0.22)]
            backdrop-blur-xl
            md:flex
          "
        >
          {navItems.map((item) => {
            const isActive =
              pathname === "/" &&
              activeSection === item.sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) =>
                  handleNavigation(event, item)
                }
                aria-current={
                  isActive ? "page" : undefined
                }
                className={`
                  group/item relative
                  overflow-hidden rounded-full
                  px-4 py-2
                  text-sm font-medium
                  transition-all duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white/50

                  ${
                    isActive
                      ? `
                        bg-white/[0.11]
                        text-white
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_20px_rgba(0,0,0,0.18)]
                      `
                      : `
                        text-white/58
                        hover:bg-white/[0.08]
                        hover:text-white
                      `
                  }
                `}
              >
                {/* 当前区块顶部高光 */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      inset-x-4 top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white/65
                      to-transparent
                    "
                  />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="
                        h-1.5 w-1.5
                        rounded-full
                        bg-cyan-300
                        shadow-[0_0_9px_rgba(103,232,249,0.85)]
                      "
                    />
                  )}

                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* 右侧 CTA */}
        <Link
          href="/#contact"
          onClick={(event) =>
            handleNavigation(event, navItems[4])
          }
          className="
            group hidden items-center gap-2.5
            rounded-full
            border border-white/15
            bg-white/[0.07]
            px-5 py-3
            text-sm font-semibold text-white
            shadow-[0_12px_32px_rgba(0,0,0,0.28)]
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-emerald-300/30
            hover:bg-emerald-400/10
            hover:shadow-[0_16px_38px_rgba(16,185,129,0.15)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-emerald-200/60
            md:inline-flex
          "
        >
          <span
            aria-hidden="true"
            className="
              h-2 w-2 rounded-full
              bg-emerald-300
              shadow-[0_0_12px_rgba(110,231,183,0.9)]
            "
          />

          <span>Let&apos;s Talk</span>

          <span
            aria-hidden="true"
            className="
              text-white/45
              transition-transform duration-300
              group-hover:translate-x-1
              group-hover:text-emerald-100
            "
          >
            →
          </span>
        </Link>
      </nav>
    </header>
  );
}
