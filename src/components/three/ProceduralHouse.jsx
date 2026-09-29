"use client";

import { useMemo } from "react";
import { Html } from "@react-three/drei";
import { HOUSE, rooms } from "@/data/rooms";
import { FloorPlan } from "./FloorPlan";
import { Walls } from "./Walls";
import { Roof } from "./Roof";
import { Interior } from "./Interior";
import { Glazing } from "./Glazing";

export function ProceduralHouse() {
  const slab = useMemo(
    () => ({
      width: HOUSE.width + 0.4,
      depth: HOUSE.depth + 0.4,
    }),
    []
  );

  return (
    <group>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[48, 48]} />
        <meshStandardMaterial color="#d8d2c6" roughness={1} />
      </mesh>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[slab.width, slab.depth]} />
        <meshStandardMaterial color="#efeae0" roughness={0.92} />
      </mesh>
      <FloorPlan />
      {rooms.map((room) => (
        <Html
          key={room.id}
          position={[room.center[0], 0.06, room.center[2]]}
          center
          distanceFactor={18}
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: "#1a1914",
              opacity: 0.7,
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {room.name}
          </div>
        </Html>
      ))}
      <Walls />
      <Glazing />
      <Interior />
      <Roof />
    </group>
  );
}
