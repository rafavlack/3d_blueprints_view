"use client";

import { motion } from "motion/react";
import { useExperience } from "@/hooks/useExperience";
import { scrollToStage } from "@/hooks/useScrollProgress";

const items = [
  { id: "plan", index: "01", label: "Plan", progress: 0, view: "cinematic" },
  { id: "rise", index: "02", label: "Rise", progress: 0.5, view: "cinematic" },
  { id: "enter", index: "03", label: "Enter", progress: 1, view: "interior" },
  { id: "explore", index: "04", label: "Explore", progress: 1, view: "explore" },
];

function activeId(progress, view) {
  if (view === "explore") return "explore";
  if (view === "interior" || progress > 0.88) return "enter";
  if (progress > 0.28) return "rise";
  return "plan";
}

export function Navigation() {
  const { houseProgress, view } = useExperience();
  const current = activeId(houseProgress, view);

  return (
    <nav className="nav" aria-label="Experience stages">
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          type="button"
          className={`nav__item${current === item.id ? " is-active" : ""}`}
          onClick={() => scrollToStage(item.progress, item.view)}
          aria-label={`${item.label} stage`}
          aria-current={current === item.id ? "true" : undefined}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 + index * 0.08, duration: 0.6 }}
        >
          <span className="nav__index">{item.index}</span>
          <span className="nav__label">{item.label}</span>
        </motion.button>
      ))}
    </nav>
  );
}
