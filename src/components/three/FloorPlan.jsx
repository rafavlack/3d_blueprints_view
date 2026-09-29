"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { rooms } from "@/data/rooms";
import { planLines } from "@/data/houseGeometry";
import { getHouseVisuals } from "@/animations/houseTimeline";
import { getExperience, setExperience } from "@/store/experienceStore";

export function FloorPlan() {
  const group = useRef();
  const lineMeshes = useRef([]);

  const lines = useMemo(
    () =>
      planLines.map((line) => {
        const dx = line.to[0] - line.from[0];
        const dz = line.to[1] - line.from[1];
        const length = Math.hypot(dx, dz);
        return {
          position: [(line.from[0] + line.to[0]) / 2, 0.03, (line.from[1] + line.to[1]) / 2],
          rotation: [0, Math.atan2(dx, dz), 0],
          size: [0.045, 0.02, length],
        };
      }),
    []
  );

  useFrame(() => {
    const visuals = getHouseVisuals(getExperience().houseProgress);
    lineMeshes.current.forEach((mesh) => {
      if (mesh?.material) mesh.material.opacity = 0.35 + visuals.planClarity * 0.55;
    });
  });

  return (
    <group ref={group}>
      {lines.map((line, index) => (
        <mesh
          key={index}
          ref={(node) => {
            lineMeshes.current[index] = node;
          }}
          position={line.position}
          rotation={line.rotation}
        >
          <boxGeometry args={line.size} />
          <meshBasicMaterial color="#1a1914" transparent opacity={0.85} />
        </mesh>
      ))}
      {rooms.map((room) => (
        <mesh
          key={room.id}
          position={[room.center[0], 0.04, room.center[2]]}
          rotation={[-Math.PI / 2, 0, 0]}
          onClick={(event) => {
            event.stopPropagation();
            setExperience({ selectedRoom: room.id });
          }}
          onPointerOver={(event) => {
            event.stopPropagation();
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "auto";
          }}
        >
          <planeGeometry args={[room.size[0] - 0.3, room.size[1] - 0.3]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      ))}
      <RoomHighlights />
    </group>
  );
}

function RoomHighlights() {
  const meshes = useRef({});

  useFrame(() => {
    const { selectedRoom, houseProgress } = getExperience();
    const visuals = getHouseVisuals(houseProgress);
    rooms.forEach((room) => {
      const mesh = meshes.current[room.id];
      if (!mesh) return;
      const active = selectedRoom === room.id;
      mesh.material.opacity = (active ? 0.18 : 0.035) * (0.4 + visuals.planClarity * 0.6);
    });
  });

  return rooms.map((room) => (
    <mesh
      key={room.id}
      ref={(node) => {
        meshes.current[room.id] = node;
      }}
      position={[room.center[0], 0.025, room.center[2]]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[room.size[0] - 0.22, room.size[1] - 0.22]} />
      <meshBasicMaterial color="#c4a574" transparent opacity={0.05} />
    </mesh>
  ));
}
