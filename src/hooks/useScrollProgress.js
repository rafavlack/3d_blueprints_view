"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setExperience, getExperience } from "@/store/experienceStore";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function useScrollProgress(trackRef) {
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setExperience({ reducedMotion: reduced });

    const track = trackRef.current;
    if (!track) return undefined;

    const proxy = { p: 0 };

    const timeline = gsap.timeline({
      scrollTrigger: {
        id: "house-story",
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        scrub: reduced ? 0 : 1.2,
        invalidateOnRefresh: true,
      },
    });

    timeline.to(proxy, {
      p: 1,
      ease: "none",
      duration: 1,
      onUpdate: () => {
        const view = getExperience().view;
        if (view === "explore") return;
        setExperience({
          houseProgress: proxy.p,
          cameraProgress: proxy.p,
        });
      },
    });

    timelineRef.current = timeline;
    ScrollTrigger.refresh();

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [trackRef]);

  return timelineRef;
}

export function scrollToStage(progress, view) {
  const reduced = getExperience().reducedMotion;
  const trigger = ScrollTrigger.getById("house-story");

  setExperience({
    view: view === "explore" ? "explore" : view === "interior" ? "interior" : "cinematic",
  });

  if (!trigger) {
    setExperience({ houseProgress: progress, cameraProgress: progress, view });
    return;
  }

  const y = trigger.start + (trigger.end - trigger.start) * progress;

  gsap.to(window, {
    scrollTo: { y, autoKill: false },
    duration: reduced ? 0.15 : 1.65,
    ease: "power3.inOut",
    onUpdate: () => {
      if (view === "explore") {
        setExperience({ houseProgress: 1, cameraProgress: 1, view: "explore" });
      }
    },
    onComplete: () => {
      setExperience({
        houseProgress: progress,
        cameraProgress: progress,
        view,
      });
    },
  });
}
