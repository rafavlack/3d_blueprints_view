"use client";

import { AnimatePresence, motion } from "motion/react";
import { closeProjectPanel } from "@/store/experienceStore";
import { useExperience } from "@/hooks/useExperience";

export function ProjectPanel() {
  const { projectOpen } = useExperience();

  return (
    <AnimatePresence>
      {projectOpen ? (
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProjectPanel}
        >
          <motion.aside
            className="contact-panel__sheet"
            role="dialog"
            aria-labelledby="project-title"
            initial={{ x: 40 }}
            animate={{ x: 0 }}
            exit={{ x: 40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="story__eyebrow">Commission</p>
            <h2 id="project-title">Start a project</h2>
            <p>
              Tell us the site, the brief, and the atmosphere you want to inhabit.
              North House is a study in how a plan becomes a place.
            </p>
            <a className="contact-panel__mail" href="mailto:atelier@north.house">
              atelier@north.house
            </a>
            <button type="button" className="project-button" onClick={closeProjectPanel}>
              Close
            </button>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
