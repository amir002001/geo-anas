import type { MapRef } from "react-map-gl/mapbox";
import { LAYER_IDS } from "../constants";
import { timelines } from "../timelines/timelines";

export const slideHandler = (map: MapRef | undefined, currentSlide: number) => {
  if (!map) {
    console.warn("Map is not initialized");
    return;
  }
  const nextLayerIds = new Map(
    timelines[currentSlide].layerIds.map((layer) => [layer.id, layer])
  );

  Object.values(LAYER_IDS).forEach((layerId) => {
    debugger;
    const layer = map.getLayer(layerId);
    if (!layer) {
      return;
    }
    const layerType = layer.type;
  });

  const flyTo = timelines[currentSlide].flyTo;
  flyTo && map.flyTo({ ...flyTo, duration: 1000 });
};
