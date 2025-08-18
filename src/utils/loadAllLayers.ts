import { LAYERS } from "../constants/layers";
import { SOURCES } from "../constants/sources";

export const loadAllLayers = (map: mapboxgl.Map) => {
  SOURCES.forEach(({ id, source }) => {
    if (!map.getSource(id)) {
      map.addSource(id, source);
    }
  });

  LAYERS.forEach((layer) => {
    if (!map.getLayer(layer.id)) {
      map.addLayer(layer);
    }
  });
};
