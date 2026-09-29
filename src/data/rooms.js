export const HOUSE = {
  width: 11.6,
  depth: 12.6,
  wallHeight: 2.85,
  wallThickness: 0.16,
  roofThickness: 0.22,
  roofOverhang: 0.45,
};

export const rooms = [
  {
    id: "living",
    name: "Living Room",
    dimensions: "11.6m × 4.2m",
    area: "48.7 m²",
    center: [0, 0, -4.2],
    size: [11.6, 4.2],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    dimensions: "5.8m × 4.2m",
    area: "24.4 m²",
    center: [-2.9, 0, 0],
    size: [5.8, 4.2],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    dimensions: "5.8m × 4.2m",
    area: "24.4 m²",
    center: [2.9, 0, 0],
    size: [5.8, 4.2],
  },
  {
    id: "garage",
    name: "Garage",
    dimensions: "11.6m × 4.2m",
    area: "48.7 m²",
    center: [0, 0, 4.2],
    size: [11.6, 4.2],
  },
];

export const roomById = Object.fromEntries(rooms.map((room) => [room.id, room]));
