"use client";

import { useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { useResponsive3D } from "@/hooks/useResponsive3D";

export function Lighting() {
  const { shadows, simplify } = useResponsive3D();
  const { size } = useThree();
  const intensity = useMemo(() => (size.width < 768 ? 0.85 : 1.05), [size.width]);

  return (
    <>
      <hemisphereLight args={["#f4f1ea", "#8a867c", 0.55]} />
      <ambientLight intensity={0.22} />
      <directionalLight
        castShadow={shadows}
        position={[8, 14, 6]}
        intensity={intensity}
        color="#fff6ea"
        shadow-mapSize-width={simplify ? 512 : 1024}
        shadow-mapSize-height={simplify ? 512 : 1024}
        shadow-camera-far={40}
        shadow-camera-left={-16}
        shadow-camera-right={16}
        shadow-camera-top={16}
        shadow-camera-bottom={-16}
      />
      <directionalLight position={[-6, 4, -8]} intensity={0.18} color="#d9e4f0" />
      <ContactShadows
        position={[0, 0.001, 0]}
        opacity={0.28}
        scale={28}
        blur={2.4}
        far={12}
      />
    </>
  );
}
