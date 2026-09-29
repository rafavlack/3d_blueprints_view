"use client";

import { OrbitControls } from "@react-three/drei";
import { useExperience } from "@/hooks/useExperience";

export function ExploreControls() {
  const { view } = useExperience();
  const enabled = view === "explore";

  return (
    <OrbitControls
      enabled={enabled}
      makeDefault={enabled}
      enablePan={false}
      enableDamping
      dampingFactor={0.08}
      minDistance={7}
      maxDistance={28}
      minPolarAngle={0.28}
      maxPolarAngle={Math.PI / 2.15}
      target={[0, 1.2, 0]}
    />
  );
}
