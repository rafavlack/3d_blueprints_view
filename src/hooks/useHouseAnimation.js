import { getHouseVisuals } from "@/animations/houseTimeline";
import { getExperience } from "@/store/experienceStore";

export function useHouseAnimation() {
  return {
    read: () => getHouseVisuals(getExperience().houseProgress),
  };
}
