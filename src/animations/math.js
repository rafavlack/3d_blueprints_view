export function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

export function range(progress, start, end) {
  if (end === start) return progress >= end ? 1 : 0;
  return clamp01((progress - start) / (end - start));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function lerpVec3(a, b, t) {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

export function smoothstep(edge0, edge1, x) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}
