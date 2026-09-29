"use client";

import { motion } from "motion/react";
import { rooms } from "@/data/rooms";
import { setExperience } from "@/store/experienceStore";
import { useExperience } from "@/hooks/useExperience";
import { RoomInfo } from "./RoomInfo";

export function StorySection() {
  const { selectedRoom } = useExperience();

  return (
    <section className="story" id="story">
      <div>
        <div className="story__eyebrow">Scroll storytelling</div>
        <h2 className="story__title">
          A floor plan
          <br />
          becomes an
          <br />
          experience.
        </h2>
        <p className="story__copy">
          The sequence is not a cut. Lines remain, walls lift from the slab, the roof
          settles, and the camera crosses the threshold. Architecture is shown as a
          continuous transformation — from drawing to dwelling.
        </p>
      </div>
      <div>
        <div className="story__spaces">
          {rooms.map((room) => (
            <motion.button
              key={room.id}
              type="button"
              className={`space-row${selectedRoom === room.id ? " is-active" : ""}`}
              onClick={() => setExperience({ selectedRoom: room.id })}
              aria-pressed={selectedRoom === room.id}
            >
              <span className="space-row__name">{room.name}</span>
              <span className="space-row__size">{room.dimensions}</span>
            </motion.button>
          ))}
        </div>
        <div style={{ marginTop: 48, position: "relative" }}>
          <RoomInfo variant="inline" />
        </div>
      </div>
    </section>
  );
}
