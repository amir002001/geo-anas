import type React from "react";

export const handleSlideChange = (
  direction: "next" | "prev",
  map: mapboxgl.Map,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
  maxSlides: number,
) => {
  if (!map.idle()) {
    console.warn("Map is currently changing, cannot change slide");
    return;
  }

  if (direction === "next") {
    setCurrentIndex((prev) => Math.min(prev + 1, maxSlides * 2 - 1));
  } else {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }
};

export const handleSlideChangeByIndex = (
  index: number,
  map: mapboxgl.Map,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
  maxSlides: number,
) => {
  if (!map.idle()) {
    console.warn("Map is currently changing, cannot change slide");
    return;
  }

  if (index < 0 || index >= maxSlides * 2) {
    console.warn("Index out of bounds for slides");
    return;
  }

  setCurrentIndex(index * 2);
};
