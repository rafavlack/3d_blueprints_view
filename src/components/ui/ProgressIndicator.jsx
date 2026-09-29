"use client";

import { motion } from "motion/react";
import { useExperience } from "@/hooks/useExperience";

export function ProgressIndicator() {
  const { houseProgress } = useExperience();

  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__label">Progress</div>
      <div className="progress__track">
        <motion.div
          className="progress__fill"
          style={{ height: `${Math.round(houseProgress * 100)}%` }}
        />
      </div>
      <div className="progress__label">{String(Math.round(houseProgress * 100)).padStart(2, "0")}</div>
    </div>
  );
}
