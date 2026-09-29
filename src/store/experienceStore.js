const listeners = new Set();

let state = {
  houseProgress: 0,
  cameraProgress: 0,
  view: "cinematic",
  selectedRoom: "living",
  projectOpen: false,
  reducedMotion: false,
};

export function getExperience() {
  return state;
}

export function setExperience(partial) {
  state = { ...state, ...partial };
  listeners.forEach((listener) => listener(state));
}

export function subscribeExperience(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getExperienceSnapshot() {
  return state;
}

export function openProjectPanel() {
  setExperience({ projectOpen: true });
}

export function closeProjectPanel() {
  setExperience({ projectOpen: false });
}
