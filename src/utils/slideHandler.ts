import { LAYER_IDS } from "../constants";
import { timelines } from "../timelines/timelines";

export const slideHandler = (map: mapboxgl.Map, currentSlide: number) => {
  if (!map) {
    console.warn("Map is not initialized");
    return;
  }
  const nextLayerIds = new Map(
    timelines[currentSlide].layerIds.map((layer) => [layer.id, layer])
  );

  Object.values(LAYER_IDS).forEach((layerId) => {
    const layer = map.getLayer(layerId);
    if (!layer) {
      return;
    }

    if (nextLayerIds.has(layerId)) {
      // set the opacity of layers that are in the next slide
      map.setPaintProperty(
        layerId,
        "fill-opacity",
        nextLayerIds.get(layerId)?.opacity || 1
      );
    } else {
      // hide all layers that aren't in the next slide
      map.setPaintProperty(layerId, "fill-opacity", 0);
    }
  });

  const flyTo = timelines[currentSlide].flyTo;
  flyTo && map.flyTo({ ...flyTo, duration: 1000 });
};
