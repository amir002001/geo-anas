import type { MapRef } from "react-map-gl/mapbox";
import { timelines } from "../timelines/timelines";

export const slideHandler = (map: MapRef | undefined, currentSlide: number) => {
  if (!map) {
    console.warn("Map is not initialized");
    return;
  }

  if (currentSlide < 0 || currentSlide >= timelines.length) {
    console.warn("Current slide index is out of bounds");
    return;
  }

  const flyTo = timelines[currentSlide].flyTo;
  flyTo && map.flyTo(flyTo);
};
