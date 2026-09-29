"use client";

import { HOUSE_SOURCE } from "@/data/houseSource";
import { ProceduralHouse } from "./ProceduralHouse";
import { GLBHouse } from "./GLBHouse";

export function House() {
  if (HOUSE_SOURCE === "glb") {
    return <GLBHouse />;
  }

  return <ProceduralHouse />;
}
