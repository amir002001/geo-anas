import type { LayerSpecification } from "mapbox-gl";
import { IMAGE_MAP } from "./images";
import { SOURCE_MAP } from "./sources";

export type LayerId =
  | "GAZA_LAND_BLOCKADE_FILL"
  | "GAZA_SEA_BLOCKADE_FILL"
  | "GAZA_BUFFER_FILL"
  | "GAZA_AIRPORT_BOUNDARY_FILL"
  | "HIRIBAYA_BOUNDARY_FILL"
  | "CROSSINGS_SYMBOL"
  | "GAZA_HOSPITALS_STATUS_SYMBOL"
  | "GAZA_UNIVERSITIES_SYMBOL"
  | "MEKOROT_PIPES_SYMBOL"
  | "WWTP_SYMBOL"
  | "REFUGEE_CAMPS_SYMBOL"
  | "GAZA_DESALINATION_PLANTS_SYMBOL"
  | "WATER_WELLS_SYMBOL"
  | "GAZA_POWER_SYMBOL"
  | "NAKBA_RASTER"
  | "KHAN_YOUNIS_FARMS_COORDINATES";

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
    id: "GAZA_POWER_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("GAZA_POWER")!.id,
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
      "text-opacity": 0,
      "text-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-image": IMAGE_MAP.get("power"),
      "text-field": "Gaza Power Plant GPGC",
      "text-font": ["Open Sans Bold"],
      "text-offset": [0, 3],
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
  {
    id: "CROSSINGS_SYMBOL",
    source: SOURCE_MAP.get("CROSSINGS_POINTS")!.id,
    type: "symbol",
    paint: {
      "text-opacity": 0,
      "text-opacity-transition": { duration: 500 },
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-image": "cross",
      "icon-size": 2,
      "icon-allow-overlap": true,
      "text-field": ["get", "name"],
      "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
      "text-size": 16,
      "text-offset": [0, 2],
    },
  },
  {
    id: "GAZA_HOSPITALS_STATUS_SYMBOL",
    source: SOURCE_MAP.get("GAZA_HOSPITALS_STATUS")!.id,
    type: "symbol",
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-allow-overlap": true,
      "icon-image": "building",
    },
  },
  {
    id: "GAZA_UNIVERSITIES_SYMBOL",
    source: SOURCE_MAP.get("GAZA_UNIVERSITIES")!.id,
    type: "symbol",
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
    },

    layout: {
      "icon-allow-overlap": true,
      "icon-image": "building",
    },
  },
  {
    id: "GAZA_DESALINATION_PLANTS_SYMBOL",
    source: SOURCE_MAP.get("GAZA_DESALINATION_PLANTS")!.id,
    type: "symbol",
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-allow-overlap": true,
      "icon-image": "building",
    },
  },
  {
    id: "MEKOROT_PIPES_SYMBOL",
    source: SOURCE_MAP.get("MEKOROT_PIPES")!.id,
    type: "symbol",
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-allow-overlap": true,
      "icon-image": IMAGE_MAP.get("pipe"),
      "icon-size": 1,
    },
  },
  {
    id: "WWTP_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("WWTPS")!.id,
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-allow-overlap": true,
      "icon-image": IMAGE_MAP.get("wwts"),
      "icon-size": 1,
    },
  },
  {
    id: "WATER_WELLS_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("WATERWELLS")!.id,
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-image": IMAGE_MAP.get("well"),
      "icon-allow-overlap": true,
      "icon-size": 0.3,
    },
  },
  {
    id: "REFUGEE_CAMPS_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("REFUGEE_CAMPS")!.id,
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-image": "bicycle",
      "icon-allow-overlap": true,
    },
  },
  {
    id: "NAKBA_RASTER",
    type: "raster",
    source: SOURCE_MAP.get("NAKBA")!.id,
    paint: {
      "raster-opacity": 0,
      "raster-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "KHAN_YOUNIS_FARMS_COORDINATES",
    type: "raster",
    source: SOURCE_MAP.get("KHAN_YOUNIS_FARM_IMG")!.id,
    paint: {
      "raster-opacity": 0,
      "raster-opacity-transition": { duration: 500 },
    },
  },
] as const;

export const LAYER_IDS = LAYERS.map((l) => l.id) as LayerId[];
export const LAYER_MAP = new Map(LAYERS.map((l) => [l.id, l]));
