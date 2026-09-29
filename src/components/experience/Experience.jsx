"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { ProgressIndicator } from "@/components/ui/ProgressIndicator";
import { RoomInfo } from "@/components/ui/RoomInfo";
import { HeroCopy } from "@/components/ui/HeroCopy";
import { StorySection } from "@/components/ui/StorySection";
import { ProjectPanel } from "@/components/ui/ProjectPanel";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useExperience } from "@/hooks/useExperience";
import { motion } from "motion/react";

const HouseScene = dynamic(() => import("@/components/three/HouseScene"), {
  ssr: false,
});

export function Experience() {
  const trackRef = useRef(null);
  useScrollProgress(trackRef);
  const { view } = useExperience();

  return (
    <div className="app">
      <div className="canvas-stage" aria-hidden="true">
        <HouseScene />
      </div>
      <Header />
      <Navigation />
      <ProgressIndicator />
      <HeroCopy />
      <RoomInfo />
      {view === "explore" ? (
        <motion.div
          className="explore-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
        >
          Drag to orbit · Scroll to zoom
        </motion.div>
      ) : null}
      <div className="scroll-track" ref={trackRef} />
      <StorySection />
      <ProjectPanel />
    </div>
  );
}
