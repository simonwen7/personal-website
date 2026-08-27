"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { LabAccent, LabSubnavItem } from "./lab-types";

const accentActive: Record<LabAccent, string> = {
  cyan: "bg-cyan-400/15 text-cyan-50",
  emerald: "bg-emerald-400/15 text-emerald-50",
  violet: "bg-violet-400/15 text-violet-50",
};

const accentDot: Record<LabAccent, string> = {
  cyan: "bg-cyan-300 shadow-[0_0_9px_rgba(103,232,249,0.85)]",
  emerald: "bg-emerald-300 shadow-[0_0_9px_rgba(110,231,183,0.85)]",
  violet: "bg-violet-300 shadow-[0_0_9px_rgba(196,181,253,0.85)]",
};

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

function normalizeHref(href: string) {
  const pathOnly = href.split("#")[0] || href;
  return normalizePath(pathOnly);
}

type LabSubnavProps = {
  label: string;
  items: LabSubnavItem[];
  accent?: LabAccent;
};

export default function LabSubnav({
  label,
  items,
  accent = "cyan",
}: LabSubnavProps) {
  const pathname = usePathname();
  const normalizedPath = normalizePath(pathname);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const anchorItems = items.filter((item) => !item.href);
    const sectionIds = anchorItems.map((item) => item.id);

    if (sectionIds.length === 0) {
      return;
    }

    const updateActive = () => {
      const scrollPosition = window.scrollY + 160;
      let current = sectionIds[0] ?? "";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop) {
          current = sectionId;
        }
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    const frameId = window.requestAnimationFrame(updateActive);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateActive);
    };
  }, [items]);

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <div
      className="
        sticky top-[88px] z-40
        border-b border-white/10
        bg-[rgba(3,7,13,0.78)]
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-[rgba(3,7,13,0.62)]
      "
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-8 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">
          {label}
        </p>

        <nav
          aria-label={`${label} sections`}
          className="
            flex items-center gap-1 overflow-x-auto
            rounded-full border border-white/12
            bg-white/[0.045] p-1.5
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {items.map((item) => {
            const isRoute = Boolean(item.href);
            const isActive = isRoute
              ? normalizeHref(item.href!) === normalizedPath
              : activeId === item.id &&
                !items.some(
                  (candidate) =>
                    candidate.href &&
                    normalizeHref(candidate.href) === normalizedPath,
                );

            const className = `
              shrink-0 rounded-full px-3.5 py-2
              text-xs font-medium transition
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-white/50
              sm:text-sm
              ${
                isActive
                  ? accentActive[accent]
                  : "text-white/55 hover:bg-white/[0.08] hover:text-white"
              }
            `;

            const content = (
              <span className="inline-flex items-center gap-2">
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${accentDot[accent]}`}
                  />
                ) : null}
                {item.label}
              </span>
            );

            if (isRoute) {
              return (
                <Link
                  key={item.id}
                  href={item.href!}
                  aria-current={isActive ? "page" : undefined}
                  className={className}
                >
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleAnchorClick(event, item.id)}
                aria-current={isActive ? "true" : undefined}
                className={className}
              >
                {content}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
