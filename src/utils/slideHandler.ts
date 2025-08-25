import { LAYERS } from "../constants/layers";
import { timelines, type ILayerOverride } from "../timelines/timelines";

export const slideHandler = (map: mapboxgl.Map, currentSlide: number) => {
  const nextLayerIds = new Map(
    timelines[currentSlide].layerOverrides.map((layer) => [layer.id, layer]),
  );

  LAYERS.forEach((layer) => handleLayer(map, layer, nextLayerIds));

  const fitBounds = timelines[currentSlide].fitBounds;
  fitBounds &&
    map.fitBounds(fitBounds.bounds, {
      padding: { bottom: 10, top: 10, right: 10, left: 10 },
      duration: 1000,
      ...fitBounds.options,
    });
};

const handleLayer = (
  map: mapboxgl.Map,
  layer: mapboxgl.Layer,
  nextLayerIds: Map<string, ILayerOverride>,
) => {
  const layerId = layer.id;
  const nextLayer = nextLayerIds.get(layerId);

  if (nextLayer) {
    // Apply paint overrides for the current slide
    Object.entries(nextLayer.paintOverrides).forEach(([property, value]) => {
      map.setPaintProperty(layerId, property as any, value);
    });
    nextLayer.layoutOverrides &&
      Object.entries(nextLayer.layoutOverrides).forEach(([property, value]) => {
        map.setLayoutProperty(layerId, property as any, value);
      });

    nextLayer.filterOverrides &&
      map.setFilter(layerId, nextLayer.filterOverrides);
  } else {
    if (layer.paint) {
      Object.entries(layer.paint).forEach(([property, value]) => {
        map.setPaintProperty(layerId, property as any, value);
      });
    }
    if (layer.layout) {
      Object.entries(layer.layout).forEach(([property, value]) => {
        map.setLayoutProperty(layerId, property as any, value);
      });
    }
    if (layer.filter) {
      map.setFilter(layerId, layer.filter);
    }
  }
};
