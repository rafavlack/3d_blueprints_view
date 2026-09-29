"use client";

import { motion } from "motion/react";
import { ProjectButton } from "@/components/ui/ProjectButton";

export function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header__mark">North / House</div>
      <div className="header__tag">Interactive Architecture</div>
      <div className="header__cta">
        <ProjectButton />
      </div>
    </motion.header>
  );
}
