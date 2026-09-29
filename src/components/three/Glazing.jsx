"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { openings } from "@/data/houseGeometry";
import { getHouseVisuals } from "@/animations/houseTimeline";
import { getExperience } from "@/store/experienceStore";

export function Glazing() {
  const group = useRef();
  const material = useMemo(
    () => ({
      color: "#9fb4c4",
      roughness: 0.08,
      metalness: 0.35,
      transparent: true,
      opacity: 0.28,
    }),
    []
  );

  useFrame(() => {
    const visuals = getHouseVisuals(getExperience().houseProgress);
    if (!group.current) return;
    group.current.scale.y = visuals.glazing;
    group.current.visible = visuals.glazing > 0.04;
  });

  return (
    <group ref={group}>
      {openings.map((opening) => (
        <mesh key={opening.id} position={opening.position}>
          <boxGeometry args={opening.size} />
          <meshStandardMaterial {...material} />
        </mesh>
      ))}
    </group>
  );
}
