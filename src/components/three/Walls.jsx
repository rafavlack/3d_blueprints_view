"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { innerWalls, outerWalls } from "@/data/houseGeometry";
import { getHouseVisuals } from "@/animations/houseTimeline";
import { getExperience } from "@/store/experienceStore";

function WallGroup({ segments, color }) {
  const group = useRef();
  const material = useMemo(
    () => ({
      color,
      roughness: 0.86,
      metalness: 0.02,
    }),
    [color]
  );

  useFrame(() => {
    const { wallScaleY } = getHouseVisuals(getExperience().houseProgress);
    if (!group.current) return;
    group.current.scale.y = wallScaleY;
    group.current.position.y = 0;
  });

  return (
    <group ref={group}>
      {segments.map((wall, index) => (
        <mesh
          key={index}
          castShadow
          receiveShadow
          position={[wall.position[0], wall.size[1] / 2, wall.position[2]]}
        >
          <boxGeometry args={wall.size} />
          <meshStandardMaterial {...material} />
        </mesh>
      ))}
    </group>
  );
}

export function Walls() {
  return (
    <>
      <WallGroup segments={outerWalls} color="#f2efe6" />
      <WallGroup segments={innerWalls} color="#ebe6d8" />
    </>
  );
}
