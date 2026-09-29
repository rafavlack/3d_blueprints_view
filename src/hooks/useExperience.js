import { useSyncExternalStore } from "react";
import {
  getExperienceSnapshot,
  subscribeExperience,
} from "@/store/experienceStore";

export function useExperience() {
  return useSyncExternalStore(
    subscribeExperience,
    getExperienceSnapshot,
    getExperienceSnapshot
  );
}
