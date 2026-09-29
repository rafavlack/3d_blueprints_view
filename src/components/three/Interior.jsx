"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { getHouseVisuals } from "@/animations/houseTimeline";
import { getExperience } from "@/store/experienceStore";

function Block({ position, size, color, roughness = 0.7 }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={0.04} />
    </mesh>
  );
}

export function Interior() {
  const group = useRef();

  useFrame(() => {
    const visuals = getHouseVisuals(getExperience().houseProgress);
    if (!group.current) return;
    group.current.position.y = (1 - visuals.interiorReveal) * -0.35;
    group.current.children.forEach((child) => {
      if (child.material) {
        child.material.opacity = visuals.interiorReveal;
        child.material.transparent = true;
      }
    });
    group.current.visible = visuals.interiorReveal > 0.05;
  });

  return (
    <group ref={group}>
      <Block position={[-2.2, 0.32, -4.4]} size={[3.2, 0.42, 0.9]} color="#d9d0c0" />
      <Block position={[2.4, 0.28, -3.6]} size={[1.6, 0.36, 1.6]} color="#cfc6b6" />
      <Block position={[-3.35, 0.46, 0.1]} size={[2.4, 0.88, 0.62]} color="#e7dfd0" />
      <Block position={[-3.35, 0.18, -0.7]} size={[2.4, 0.28, 0.7]} color="#b7aaa0" />
      <Block position={[2.85, 0.28, 0.15]} size={[2.1, 0.32, 1.7]} color="#d8cfc0" />
      <Block position={[2.85, 0.42, -0.55]} size={[0.22, 0.55, 1.7]} color="#efe8dc" />
      <Block position={[0, 0.12, 4.15]} size={[4.6, 0.08, 2.4]} color="#4a4742" />
    </group>
  );
}
