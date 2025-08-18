import { LAYERS } from "../constants/layers";
import { timelines, type ILayerOverride } from "../timelines/timelines";

export const slideHandler = (map: mapboxgl.Map, currentSlide: number) => {
  if (!map) {
    console.warn("Map is not initialized");
    return;
  }
  const nextLayerIds = new Map(
    timelines[currentSlide].layerOverrides.map((layer) => [layer.id, layer])
  );

  LAYERS.forEach((layer) => handleLayer(map, layer, nextLayerIds));

  const fitBounds = timelines[currentSlide].fitBounds;
  fitBounds && map.fitBounds(fitBounds.bounds, fitBounds.options);
};

const handleLayer = (
  map: mapboxgl.Map,
  layer: mapboxgl.Layer,
  nextLayerIds: Map<string, ILayerOverride>
) => {
  const layerId = layer.id;
  const nextLayer = nextLayerIds.get(layerId);

  if (nextLayer) {
    // Apply paint overrides for the current slide
    Object.entries(nextLayer.paintOverrides).forEach(([property, value]) => {
      map.setPaintProperty(layerId, property as any, value);
    });
  } else {
    if (layer.paint) {
      Object.entries(layer.paint).forEach(([property, value]) => {
        map.setPaintProperty(layerId, property as any, value);
      });
    }
  }
};
