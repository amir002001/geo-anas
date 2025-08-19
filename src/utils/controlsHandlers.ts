import type React from "react";

export const handleSlideChange = (
  direction: "next" | "prev",
  map: mapboxgl.Map,
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
  maxSlides: number
) => {
  if (!map.idle()) {
    console.warn("Map is currently changing, cannot change slide");
    return;
  }

  if (direction === "next") {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides - 1));
  } else {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }
};

export const handleSlideChangeByIndex = (
  index: number,
  map: mapboxgl.Map,
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
  maxSlides: number
) => {
  if (!map.idle()) {
    console.warn("Map is currently changing, cannot change slide");
    return;
  }

  if (index < 0 || index >= maxSlides) {
    console.warn("Index out of bounds for slides");
    return;
  }

  setCurrentSlide(index);
};
