"use client";

import { useRouter } from "next/navigation";

import LabHomeScene from "./lab-home-scene";

/**
 * Interactive Lab hero gateway.
 * Software / Robotics hotspots route to dedicated lab pages
 * instead of in-page placeholder scenes.
 */
export default function LabShell() {
  const router = useRouter();

  return (
    <section
      id="home"
      className="
        relative
        min-h-[calc(100vh-88px)]
        overflow-hidden
        bg-[#05070b]
        text-white
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-[#05070b]" />

      <div className="relative z-10 min-h-[calc(100vh-88px)]">
        <LabHomeScene
          onEnterSoftware={() => router.push("/software/")}
          onEnterRobotics={() => router.push("/robotics/")}
        />
      </div>

      {/*
        Visual-only Hero → content dissolve.
        Absolutely positioned so it does NOT add document-flow height.
        Fade happens over the bottom of the hero image itself.
      */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-20
          h-32 sm:h-40 lg:h-48
        "
      >
        {/* Neutral dissolve only — no blue tint at the Hero edge */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_bottom,transparent_0%,rgba(2,5,9,0.18)_28%,rgba(3,6,10,0.55)_58%,rgba(5,7,11,0.88)_82%,#05070b_100%)]
          "
        />
      </div>
    </section>
  );
}
