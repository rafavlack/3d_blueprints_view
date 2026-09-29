"use client";

import { motion } from "motion/react";
import { useExperience } from "@/hooks/useExperience";

export function HeroCopy() {
  const { houseProgress, view } = useExperience();
  const hidden = houseProgress > 0.12 || view === "explore";

  return (
    <motion.section
      className="hero"
      aria-label="Introduction"
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? 18 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero__eyebrow">A digital home experience</div>
      <h1 className="hero__title">
        From plan
        <br />
        to place.
      </h1>
      <p className="hero__copy">
        Scroll through a conceptual house as its floor plan rises into a spatial 3D
        model.
      </p>
    </motion.section>
  );
}
