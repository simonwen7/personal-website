"use client";

import { useEffect, useRef } from "react";

import LabProjectPreviewCard from "@/components/lab/lab-project-preview-card";
import type { LabAccent, LabProject } from "@/components/lab/lab-types";

type LabProjectGridProps = {
  projects: readonly LabProject[];
  accent: LabAccent;
  layout: "systems" | "business";
};

export default function LabProjectGrid({
  projects,
  accent,
  layout,
}: LabProjectGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const columns =
    layout === "systems"
      ? "md:grid-cols-2 xl:grid-cols-3 md:[&>a:first-child]:col-span-2 xl:[&>a:first-child]:col-span-3"
      : "md:grid-cols-2";

  useEffect(() => {
    const root = gridRef.current;
    if (!root || layout !== "systems") {
      return;
    }

    const media = window.matchMedia("(min-width: 1280px)");

    const apply = () => {
      const cards = [...root.querySelectorAll<HTMLElement>(":scope > a")];
      cards.forEach((card) => {
        card.style.minHeight = "";
      });
      // The first Systems card spans the full row and keeps its natural height.
      const regular = cards.slice(1);
      if (!media.matches || regular.length === 0) {
        return;
      }
      const tallest = Math.max(...regular.map((card) => card.offsetHeight));
      if (!Number.isFinite(tallest) || tallest <= 0) {
        return;
      }
      const next = `${Math.ceil(tallest)}px`;
      regular.forEach((card) => {
        card.style.minHeight = next;
      });
    };

    apply();
    media.addEventListener("change", apply);
    window.addEventListener("resize", apply);
    const fontsReady = document.fonts?.ready.then(apply);

    return () => {
      media.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
      void fontsReady;
      root.querySelectorAll<HTMLElement>(":scope > a").forEach((card) => {
        card.style.minHeight = "";
      });
    };
  }, [layout, projects]);

  return (
    <div ref={gridRef} className={`grid items-stretch gap-3 ${columns}`}>
      {projects.map((project) => (
        <LabProjectPreviewCard
          key={project.id}
          project={project}
          accent={accent}
        />
      ))}
    </div>
  );
}
