export type NavKind = "route" | "home-section";

export type NavItem = {
  label: string;
  href: string;
  kind: NavKind;
  /** Used for homepage section scroll-spy / active state */
  sectionId?: string;
  /** Path match for route items, without trailing slash */
  routePath?: string;
};

export const centerNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    kind: "route",
    routePath: "/",
    sectionId: "home",
  },
  {
    label: "Software",
    href: "/software/",
    kind: "route",
    routePath: "/software",
  },
  {
    label: "Robotics",
    href: "/robotics/",
    kind: "route",
    routePath: "/robotics",
  },
  {
    label: "Resume",
    href: "/#resume",
    kind: "home-section",
    sectionId: "resume",
  },
  {
    label: "Beyond the Lab",
    href: "/about/",
    kind: "route",
    routePath: "/about",
  },
];

export const contactNavItem: NavItem = {
  label: "Contact Me",
  href: "/#contact",
  kind: "home-section",
  sectionId: "contact",
};

export function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

export const navPillShellClass =
  "flex flex-wrap items-center justify-center gap-0.5 rounded-full border border-white/12 bg-white/[0.055] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_35px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:gap-1 sm:p-1.5";

export const navLinkBaseClass =
  "group/item relative overflow-hidden rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:px-3.5 lg:px-4";

export const navLinkActiveClass =
  "bg-white/[0.11] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_20px_rgba(0,0,0,0.18)]";

export const navLinkInactiveClass =
  "text-white/58 hover:bg-white/[0.08] hover:text-white";

export const contactCtaClass =
  "group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-emerald-400/10 hover:shadow-[0_16px_38px_rgba(16,185,129,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/60 sm:px-5 sm:py-3";
