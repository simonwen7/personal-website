"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  centerNavItems,
  contactNavItem,
  contactCtaClass,
  navLinkActiveClass,
  navLinkBaseClass,
  navLinkInactiveClass,
  navPillShellClass,
  normalizePath,
  type NavItem,
} from "@/components/site-nav-data";

export default function Navbar() {
  const pathname = usePathname();
  const normalizedPath = normalizePath(pathname);
  const isHome = normalizedPath === "/";

  const [homeSection, setHomeSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sectionIds = ["resume", "about", "contact"];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 160;
      let currentSection = "home";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      }

      setHomeSection(currentSection);
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    const frameId = window.requestAnimationFrame(updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [isHome]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const getIsActive = (item: NavItem) => {
    if (item.kind === "route") {
      if (item.routePath === "/") {
        return isHome && homeSection === "home";
      }

      if (!item.routePath) {
        return false;
      }

      // Keep lab parents active on nested track pages (e.g. /software/systems/).
      return (
        normalizedPath === item.routePath ||
        normalizedPath.startsWith(`${item.routePath}/`)
      );
    }

    // home-section items (Resume / Contact)
    return isHome && homeSection === item.sectionId;
  };

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    if (item.kind === "home-section" && isHome && item.sectionId) {
      event.preventDefault();
      document.getElementById(item.sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `/#${item.sectionId}`);
      setMobileOpen(false);
      return;
    }

    if (item.kind === "route" && item.routePath === "/" && isHome) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      setMobileOpen(false);
    }
  };

  const renderNavLink = (
    item: NavItem,
    options?: { onNavigate?: () => void; className?: string },
  ) => {
    const isActive = getIsActive(item);

    return (
      <Link
        key={item.label}
        href={item.href}
        onClick={(event) => {
          handleNavigation(event, item);
          options?.onNavigate?.();
        }}
        aria-current={isActive ? "page" : undefined}
        className={
          options?.className ??
          `
            ${navLinkBaseClass}
            ${
              isActive ? navLinkActiveClass : navLinkInactiveClass
            }
          `
        }
      >
        {isActive && !options?.className ? (
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-x-4 top-0 h-px
              bg-gradient-to-r from-transparent via-white/65 to-transparent
            "
          />
        ) : null}

        <span className="relative z-10 flex items-center gap-2">
          {isActive ? (
            <span
              aria-hidden="true"
              className="
                h-1.5 w-1.5 rounded-full bg-cyan-300
                shadow-[0_0_9px_rgba(103,232,249,0.85)]
              "
            />
          ) : null}
          {item.label}
        </span>
      </Link>
    );
  };

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-white/10
        bg-[rgba(3,7,13,0.82)]
        text-white
        shadow-[0_10px_35px_rgba(0,0,0,0.28)]
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-[rgba(3,7,13,0.68)]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-[26%] top-[-90px]
          h-[180px] w-[260px] rounded-full
          bg-cyan-400/[0.08] blur-[70px]
        "
      />
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute right-[18%] top-[-90px]
          h-[180px] w-[240px] rounded-full
          bg-emerald-400/[0.07] blur-[70px]
        "
      />

      <nav
        className="
          relative z-10 mx-auto flex h-[88px] max-w-7xl
          items-center justify-between px-8
        "
      >
        <Link
          href="/"
          aria-label="Go to Simon Wen's home page"
          onClick={(event) =>
            handleNavigation(event, centerNavItems[0])
          }
          className="
            group flex items-center gap-3 rounded-2xl
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
          "
        >
          <div
            className="
              relative flex h-11 w-11 items-center justify-center
              overflow-hidden rounded-2xl border border-white/15
              bg-white/[0.07] text-sm font-bold text-white
              shadow-[0_12px_30px_rgba(0,0,0,0.32)] backdrop-blur-xl
              transition-all duration-300
              group-hover:-rotate-6 group-hover:border-cyan-300/30
              group-hover:bg-cyan-400/10
              group-hover:shadow-[0_14px_35px_rgba(14,165,233,0.18)]
            "
          >
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-x-2 top-0 h-px
                bg-gradient-to-r from-transparent via-white/65 to-transparent
              "
            />
            <span className="relative z-10">SW</span>
          </div>

          <div>
            <p className="text-sm font-semibold leading-none tracking-[-0.01em] text-white">
              Simon Wen
            </p>
            <p className="mt-1.5 text-xs text-white/45">Software Engineer</p>
          </div>
        </Link>

        <div className={`hidden md:flex ${navPillShellClass}`}>
          {centerNavItems.map((item) => renderNavLink(item))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={contactNavItem.href}
            onClick={(event) => handleNavigation(event, contactNavItem)}
            aria-current={getIsActive(contactNavItem) ? "page" : undefined}
            className={`${contactCtaClass} hidden md:inline-flex`}
          >
            <span
              aria-hidden="true"
              className="
                h-2 w-2 rounded-full bg-emerald-300
                shadow-[0_0_12px_rgba(110,231,183,0.9)]
              "
            />
            <span>Contact Me</span>
            <span
              aria-hidden="true"
              className="
                text-white/45 transition-transform duration-300
                group-hover:translate-x-1 group-hover:text-emerald-100
              "
            >
              →
            </span>
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="
              inline-flex h-11 w-11 items-center justify-center
              rounded-2xl border border-white/15 bg-white/[0.07]
              text-white transition
              hover:bg-white/[0.12]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-white/60
              md:hidden
            "
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span
                className={`
                  block h-0.5 w-5 rounded-full bg-white transition
                  ${mobileOpen ? "translate-y-[4px] rotate-45" : ""}
                `}
              />
              <span
                className={`
                  block h-0.5 w-5 rounded-full bg-white transition
                  ${mobileOpen ? "opacity-0" : ""}
                `}
              />
              <span
                className={`
                  block h-0.5 w-5 rounded-full bg-white transition
                  ${mobileOpen ? "-translate-y-[4px] -rotate-45" : ""}
                `}
              />
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div
          ref={menuPanelRef}
          id={menuId}
          className="
            border-t border-white/10 px-8 pb-6 pt-4
            md:hidden
          "
        >
          <div
            className="
              overflow-hidden rounded-[24px]
              border border-white/12 bg-white/[0.05]
              p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
            "
          >
            {[...centerNavItems, contactNavItem].map((item) =>
              renderNavLink(item, {
                onNavigate: () => setMobileOpen(false),
                className: `
                  flex w-full items-center rounded-2xl px-4 py-3
                  text-sm font-medium transition
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-white/50
                  ${
                    getIsActive(item)
                      ? "bg-white/[0.11] text-white"
                      : "text-white/70 hover:bg-white/[0.08] hover:text-white"
                  }
                `,
              }),
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
