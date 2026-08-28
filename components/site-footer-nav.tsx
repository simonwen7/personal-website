"use client";

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
} from "./site-nav-data";

function useNavActive() {
  const pathname = usePathname();
  const normalizedPath = normalizePath(pathname);
  const isHome = normalizedPath === "/";

  const getIsActive = (item: NavItem) => {
    if (item.kind === "route") {
      if (item.routePath === "/") {
        return isHome;
      }

      if (!item.routePath) {
        return false;
      }

      return (
        normalizedPath === item.routePath ||
        normalizedPath.startsWith(`${item.routePath}/`)
      );
    }

    return false;
  };

  return { getIsActive, isHome };
}

function NavPillLink({ item }: { item: NavItem }) {
  const { getIsActive } = useNavActive();
  const isActive = getIsActive(item);

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={`
        ${navLinkBaseClass}
        ${isActive ? navLinkActiveClass : navLinkInactiveClass}
      `}
    >
      {isActive ? (
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-3 top-0 h-px
            bg-gradient-to-r from-transparent via-white/65 to-transparent
          "
        />
      ) : null}

      <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
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
}

export function SiteFooterNavPill() {
  return (
    <nav
      aria-label="Footer navigation"
      className={`${navPillShellClass} max-w-full`}
    >
      {centerNavItems.map((item) => (
        <NavPillLink key={item.label} item={item} />
      ))}
    </nav>
  );
}

export function SiteFooterContactCta() {
  const { getIsActive } = useNavActive();
  const isActive = getIsActive(contactNavItem);

  return (
    <Link
      href={contactNavItem.href}
      aria-current={isActive ? "page" : undefined}
      className={contactCtaClass}
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
  );
}
