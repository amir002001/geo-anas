import type { LayerSpecification } from "mapbox-gl";
import { SOURCE_MAP } from "./sources";

export type LayerId =
  | "GAZA_LAND_BLOCKADE_FILL"
  | "GAZA_SEA_BLOCKADE_FILL"
  | "GAZA_BUFFER_FILL"
  | "GAZA_AIRPORT_BOUNDARY_FILL"
  | "HIRIBAYA_BOUNDARY_FILL";

type LayerType = Omit<LayerSpecification, "id"> & { id: LayerId };

export const LAYERS: LayerType[] = [
  {
    id: "GAZA_LAND_BLOCKADE_FILL",
    source: SOURCE_MAP.get("GAZA_BOUNDARY")!.id,
    type: "fill",
    paint: {
      "fill-color": "#FF0000",
      "fill-opacity": 0,
      "fill-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "GAZA_SEA_BLOCKADE_FILL",
    source: SOURCE_MAP.get("GAZA_SEA_BLOCKADE")!.id,
    type: "fill",
    paint: {
      "fill-color": "#FF0000",
      "fill-opacity": 0,
      "fill-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "GAZA_AIRPORT_BOUNDARY_FILL",
    source: SOURCE_MAP.get("GAZA_AIRPORT_BOUNDARY")!.id,
    type: "fill",
    paint: {
      "fill-color": "#FF0000",
      "fill-opacity": 0,
      "fill-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "GAZA_BUFFER_FILL",
    source: SOURCE_MAP.get("GAZA_BUFFER")!.id,
    type: "fill",
    paint: {
      "fill-color": "#FF0000",
      "fill-opacity": 0,
      "fill-opacity-transition": { duration: 500 },
    },
    layout: {},
  },
  {
    id: "HIRIBAYA_BOUNDARY_FILL",
    source: SOURCE_MAP.get("HIRIBAYA_BOUNDARY")!.id,
    type: "fill",
    paint: {
      "fill-color": "#519AC7",
      "fill-opacity": 0,
      "fill-opacity-transition": { duration: 500 },
    },
  },
] as const;

export const LAYER_IDS = LAYERS.map((l) => l.id) as LayerId[];
export const LAYER_MAP = new Map(LAYERS.map((l) => [l.id, l]));
