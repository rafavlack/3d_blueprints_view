"use client";

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { HOUSE_MODEL_URL } from "@/data/houseSource";
import { HOUSE } from "@/data/rooms";

export function GLBHouse() {
  const { scene } = useGLTF(HOUSE_MODEL_URL);
  const cloned = useMemo(() => scene.clone(true), [scene]);

  return (
    <group
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    >
      <primitive object={cloned} />
    </group>
  );
}

export function GLBHouseFallback() {
  return (
    <mesh position={[0, HOUSE.wallHeight / 2, 0]}>
      <boxGeometry args={[HOUSE.width, HOUSE.wallHeight, HOUSE.depth]} />
      <meshStandardMaterial color="#e8e2d6" />
    </mesh>
  );
}
