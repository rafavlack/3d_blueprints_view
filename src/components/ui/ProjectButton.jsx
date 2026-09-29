"use client";

import { motion } from "motion/react";
import { openProjectPanel } from "@/store/experienceStore";

export function ProjectButton() {
  return (
    <motion.button
      type="button"
      className="project-button"
      onClick={openProjectPanel}
      aria-label="Start a project"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      Start a Project
    </motion.button>
  );
}
