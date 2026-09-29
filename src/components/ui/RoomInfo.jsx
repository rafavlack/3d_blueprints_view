"use client";

import { AnimatePresence, motion } from "motion/react";
import { roomById, rooms } from "@/data/rooms";
import { useExperience } from "@/hooks/useExperience";

export function RoomInfo({ variant = "overlay" }) {
  const { selectedRoom } = useExperience();
  const room = roomById[selectedRoom] ?? rooms[0];

  return (
    <div className={variant === "inline" ? "room-info room-info--inline" : "room-info"} aria-live="polite">
      <div className="room-info__label">Selected space</div>
      <AnimatePresence mode="wait">
        <motion.div
          key={room.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="room-info__name">{room.name}</h2>
          <div className="room-info__meta">{room.dimensions}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
