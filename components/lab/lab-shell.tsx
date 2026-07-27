"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LabHomeScene from "./lab-home-scene";
import SoftwareScene from "./software-scene";
import RoboticsScene from "./robotics-scene";

export type LabScene =
  | "lab-home"
  | "software"
  | "robotics";

export default function LabShell() {
  const [scene, setScene] = useState<LabScene>("lab-home");

  return (
    <section
      id="home"
      className="
        relative
        min-h-[calc(100vh-88px)]
        overflow-hidden
        bg-neutral-950
        text-white
      "
    >
      {/* 场景底色 */}
      <div className="pointer-events-none absolute inset-0 bg-neutral-950" />

      {/* 非首页场景使用的环境光 */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_75%_35%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_25%)]
        "
      />

      {/* 轻微网格 */}
      <div className="lab-grid pointer-events-none absolute inset-0 opacity-[0.10]" />

      <AnimatePresence mode="wait" initial={false}>
        {scene === "lab-home" && (
          <motion.div
            key="lab-home"
            initial={{
              opacity: 0,
              scale: 1.015,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.985,
            }}
            transition={{
              duration: 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative z-10
              min-h-[calc(100vh-88px)]
            "
          >
            <LabHomeScene
              onEnterSoftware={() => setScene("software")}
              onEnterRobotics={() => setScene("robotics")}
            />
          </motion.div>
        )}

        {scene === "software" && (
          <motion.div
            key="software"
            initial={{
              opacity: 0,
              scale: 1.02,
              x: 35,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.985,
              x: -25,
            }}
            transition={{
              duration: 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative z-10
              min-h-[calc(100vh-88px)]
            "
          >
            <SoftwareScene
              onBack={() => setScene("lab-home")}
            />
          </motion.div>
        )}

        {scene === "robotics" && (
          <motion.div
            key="robotics"
            initial={{
              opacity: 0,
              scale: 1.02,
              x: 35,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.985,
              x: -25,
            }}
            transition={{
              duration: 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative z-10
              min-h-[calc(100vh-88px)]
            "
          >
            <RoboticsScene
              onBack={() => setScene("lab-home")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
