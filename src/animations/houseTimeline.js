import { range, smoothstep } from "./math";

export function getHouseVisuals(progress) {
  const planClarity = 1 - smoothstep(0.18, 0.48, progress);
  const wallRise = range(progress, 0.15, 0.55);
  const structureSettle = range(progress, 0.35, 0.62);
  const roofReveal = range(progress, 0.55, 0.7);
  const interiorReveal = range(progress, 0.62, 0.88);
  const glazing = range(progress, 0.4, 0.64);

  return {
    planClarity,
    wallRise,
    structureSettle,
    roofReveal,
    interiorReveal,
    glazing,
    wallScaleY: 0.012 + wallRise * 0.988,
    roofY: 4.4 - roofReveal * 1.32,
    roofOpacity: roofReveal,
    labelOpacity: planClarity,
  };
}
