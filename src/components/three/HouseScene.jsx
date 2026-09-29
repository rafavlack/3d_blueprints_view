"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import { House } from "./House";
import { CameraRig } from "./CameraRig";
import { Lighting } from "./Lighting";
import { ExploreControls } from "./controls/ExploreControls";
import { useResponsive3D } from "@/hooks/useResponsive3D";

export function HouseScene() {
  const { dpr, shadows } = useResponsive3D();

  return (
    <Canvas
      shadows={shadows}
      dpr={dpr}
      camera={{ position: [0, 18, 0.08], fov: 48, near: 0.1, far: 120 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      style={{ background: "#cfc9bb" }}
    >
      <color attach="background" args={["#cfc9bb"]} />
      <fog attach="fog" args={["#cfc9bb", 22, 48]} />
      <Lighting />
      <House />
      <CameraRig />
      <ExploreControls />
      <AdaptiveDpr pixelated />
      <Preload all />
    </Canvas>
  );
}

export default HouseScene;
