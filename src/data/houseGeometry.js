import { HOUSE } from "./rooms";

const T = HOUSE.wallThickness;
const H = HOUSE.wallHeight;
const HW = HOUSE.width / 2;
const HD = HOUSE.depth / 2;

function wallAlongX(z, x1, x2, extra = {}) {
  const length = Math.abs(x2 - x1);
  return {
    position: [(x1 + x2) / 2, extra.y ?? 0, z],
    rotation: [0, 0, 0],
    size: [length, extra.height ?? H, T],
    ...extra,
  };
}

function wallAlongZ(x, z1, z2, extra = {}) {
  const length = Math.abs(z2 - z1);
  return {
    position: [x, extra.y ?? 0, (z1 + z2) / 2],
    rotation: [0, 0, 0],
    size: [T, extra.height ?? H, length],
    ...extra,
  };
}

export const outerWalls = [
  wallAlongX(-HD, -HW, -4.4),
  wallAlongX(-HD, -2.4, -0.55),
  wallAlongX(-HD, 0.55, 2.4),
  wallAlongX(-HD, 4.4, HW),
  wallAlongX(HD, -HW, -2.2),
  wallAlongX(HD, 2.2, HW),
  wallAlongZ(-HW, -HD, -4.5),
  wallAlongZ(-HW, -2.6, 2.4),
  wallAlongZ(-HW, 4.2, HD),
  wallAlongZ(HW, -HD, -4.5),
  wallAlongZ(HW, -2.6, 2.4),
  wallAlongZ(HW, 4.2, HD),
];

export const innerWalls = [
  wallAlongX(-2.1, -HW, -4.35),
  wallAlongX(-2.1, -3.15, -0.55),
  wallAlongX(-2.1, 0.55, 2.15),
  wallAlongX(-2.1, 3.35, HW),
  wallAlongZ(0, -2.1, -0.45),
  wallAlongZ(0, 0.55, 2.1),
  wallAlongX(2.1, -HW, -4.35),
  wallAlongX(2.1, -3.15, 3.15),
  wallAlongX(2.1, 4.35, HW),
];

export const openings = [
  { id: "entry", type: "door", position: [0, 1.1, -HD], size: [1.1, 2.2, 0.08] },
  { id: "garage", type: "garage", position: [0, 1.15, HD], size: [4.2, 2.3, 0.08] },
  { id: "living-w1", type: "window", position: [-3.4, 1.45, -HD], size: [2, 1.2, 0.06] },
  { id: "living-w2", type: "window", position: [3.4, 1.45, -HD], size: [2, 1.2, 0.06] },
  { id: "kitchen-w", type: "window", position: [-HW, 1.45, -3.55], size: [0.06, 1.2, 1.8] },
  { id: "bedroom-w", type: "window", position: [HW, 1.45, -3.55], size: [0.06, 1.2, 1.8] },
  { id: "kitchen-side", type: "window", position: [-HW, 1.45, 3.3], size: [0.06, 1.2, 1.6] },
  { id: "bedroom-side", type: "window", position: [HW, 1.45, 3.3], size: [0.06, 1.2, 1.6] },
];

export const planLines = [
  { from: [-HW, -HD], to: [HW, -HD] },
  { from: [HW, -HD], to: [HW, HD] },
  { from: [HW, HD], to: [-HW, HD] },
  { from: [-HW, HD], to: [-HW, -HD] },
  { from: [-HW, -2.1], to: [HW, -2.1] },
  { from: [-HW, 2.1], to: [HW, 2.1] },
  { from: [0, -2.1], to: [0, 2.1] },
];

export { T, H, HW, HD };
