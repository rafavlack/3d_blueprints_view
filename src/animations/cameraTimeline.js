import { lerp, lerpVec3, range } from "./math";

const KEYFRAMES = [
  { at: 0, position: [0, 18, 0.08], target: [0, 0, 0], fov: 48 },
  { at: 0.15, position: [2.4, 15.5, 3.2], target: [0, 0.2, 0], fov: 46 },
  { at: 0.35, position: [9.5, 11, 11], target: [0, 0.9, 0], fov: 42 },
  { at: 0.55, position: [12, 8, 14], target: [0, 1.15, 0], fov: 40 },
  { at: 0.7, position: [9.2, 5.6, 10.5], target: [0, 1.25, 0], fov: 39 },
  { at: 0.82, position: [3.2, 2.8, 4.8], target: [0, 1.45, -3.2], fov: 42 },
  { at: 0.92, position: [0.15, 1.68, -6.85], target: [0, 1.45, -3.6], fov: 52 },
  { at: 1, position: [0, 1.62, -3.9], target: [0, 1.35, 1.4], fov: 55 },
];

const INTERIOR = {
  position: [0, 1.62, -3.9],
  target: [0, 1.35, 1.4],
  fov: 55,
};

export function getCameraPose(progress, view) {
  if (view === "interior") {
    return INTERIOR;
  }

  if (view === "explore") {
    return {
      position: [12, 8, 14],
      target: [0, 1.2, 0],
      fov: 40,
    };
  }

  let from = KEYFRAMES[0];
  let to = KEYFRAMES[KEYFRAMES.length - 1];

  for (let i = 0; i < KEYFRAMES.length - 1; i += 1) {
    if (progress >= KEYFRAMES[i].at && progress <= KEYFRAMES[i + 1].at) {
      from = KEYFRAMES[i];
      to = KEYFRAMES[i + 1];
      break;
    }
  }

  const local = range(progress, from.at, to.at);
  const eased = local * local * (3 - 2 * local);

  return {
    position: lerpVec3(from.position, to.position, eased),
    target: lerpVec3(from.target, to.target, eased),
    fov: lerp(from.fov, to.fov, eased),
  };
}

export { KEYFRAMES };
