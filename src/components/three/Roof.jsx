"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { HOUSE } from "@/data/rooms";
import { getHouseVisuals } from "@/animations/houseTimeline";
import { getExperience } from "@/store/experienceStore";

export function Roof() {
  const group = useRef();
  const material = useMemo(
    () => ({
      color: "#2b2a26",
      roughness: 0.62,
      metalness: 0.08,
    }),
    []
  );

  const width = HOUSE.width + HOUSE.roofOverhang * 2;
  const depth = HOUSE.depth + HOUSE.roofOverhang * 2;

  useFrame(() => {
    const visuals = getHouseVisuals(getExperience().houseProgress);
    if (!group.current) return;
    group.current.position.y = visuals.roofY;
    group.current.rotation.x = (1 - visuals.roofReveal) * -0.18;
    group.current.scale.setScalar(0.86 + visuals.roofReveal * 0.14);
    group.current.visible = visuals.roofReveal > 0.02;
    group.current.children.forEach((child) => {
      if (child.material) child.material.opacity = 0.15 + visuals.roofOpacity * 0.85;
    });
  });

  return (
    <group ref={group} position={[0, 3.2, 0]}>
      <mesh castShadow>
        <boxGeometry args={[width, HOUSE.roofThickness, depth]} />
        <meshStandardMaterial {...material} transparent />
      </mesh>
      <mesh position={[0, -0.12, 0]}>
        <boxGeometry args={[HOUSE.width * 0.18, 0.08, HOUSE.depth + 0.2]} />
        <meshStandardMaterial color="#3d3b36" roughness={0.5} />
      </mesh>
    </group>
  );
}
