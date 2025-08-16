import type { MapRef } from "react-map-gl/mapbox";
import { timelines } from "../timelines/timelines";

export const slideHandler = (map: MapRef | undefined, currentSlide: number) => {
  if (!map) {
    console.warn("Map is not initialized");
    return;
  }

  const flyTo = timelines[currentSlide].flyTo;
  flyTo && map.flyTo({ ...flyTo, duration: 1000 });
};
