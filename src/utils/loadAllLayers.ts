import gazaBoundary from "../data/gaza-strip-boundary.json";
import gazaSeaBlockade from "../data/gaza-strip-sea-blockade.json";

import type { LayerSpecification, SourceSpecification } from "mapbox-gl";
import { LAYER_IDS, SOURCE_IDS } from "../constants";

const sources: { id: string; source: SourceSpecification }[] = [
  {
    id: SOURCE_IDS.GAZA_BOUNDARY,
    source: { type: "geojson", data: gazaBoundary as any },
  },
  {
    id: SOURCE_IDS.GAZA_SEA_BLOCK,
    source: { type: "geojson", data: gazaSeaBlockade as any },
  },
];
const layers: LayerSpecification[] = [
  {
    source: SOURCE_IDS.GAZA_BOUNDARY,
    type: "fill",
    id: LAYER_IDS.GAZA_BLOCKADE_RED,
    paint: {
      "fill-color": "#FF0000",
      "fill-opacity": 0,
      "fill-opacity-transition": { duration: 500 },
    },
  },
  {
    source: SOURCE_IDS.GAZA_SEA_BLOCK,
    type: "fill",
    id: LAYER_IDS.GAZA_SEA_BLOCKADE_RED,
    paint: {
      "fill-color": "#FF0000",
      "fill-opacity": 0,
      "fill-opacity-transition": { duration: 500 },
    },
  },
];

export const loadAllLayers = (map: mapboxgl.Map) => {
  sources.forEach(({ id, source }) => {
    if (!map.getSource(id)) {
      map.addSource(id, source);
    }
  });

  layers.forEach((layer) => {
    if (!map.getLayer(layer.id)) {
      map.addLayer(layer);
    }
  });
};
