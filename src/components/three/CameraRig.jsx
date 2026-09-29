"use client";

import { getCameraPose } from "@/animations/cameraTimeline";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { getExperience } from "@/store/experienceStore";

export function CameraRig() {
  const look = useRef({ x: 0, y: 0, z: 0 });

  useFrame((state, delta) => {
    const { cameraProgress, view, reducedMotion } = getExperience();
    if (view === "explore") return;

    const pose = getCameraPose(cameraProgress, view);
    const damp = reducedMotion ? 1 : 1 - Math.exp(-delta * 3.4);

    state.camera.position.x += (pose.position[0] - state.camera.position.x) * damp;
    state.camera.position.y += (pose.position[1] - state.camera.position.y) * damp;
    state.camera.position.z += (pose.position[2] - state.camera.position.z) * damp;
    state.camera.fov += (pose.fov - state.camera.fov) * damp;
    state.camera.updateProjectionMatrix();

    look.current.x += (pose.target[0] - look.current.x) * damp;
    look.current.y += (pose.target[1] - look.current.y) * damp;
    look.current.z += (pose.target[2] - look.current.z) * damp;
    state.camera.lookAt(look.current.x, look.current.y, look.current.z);
  });

  return null;
}
