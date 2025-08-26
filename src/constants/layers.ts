import type { LayerSpecification } from "mapbox-gl";
import { IMAGE_MAP } from "./images";
import { SOURCE_MAP } from "./sources";

export type LayerId =
  | "MORAG_SYMBOL"
  | "MORAG_LINE"
  | "MEFALISM_SYMBOL"
  | "GAZA_FRAGMENTATION_RASTER"
  | "MEFALSIM_LINE"
  | "PHILADELPHI_FILL"
  | "INCIDENTS_SYMBOL"
  | "EVACUATION_ARROWS_FILL"
  | "FIRST_GRID_ARROWS_RASTER"
  | "INITIAL_HUMANITARIAN_FILL"
  | "POPULATION_BLOCKS_LINE"
  | "ONE_KM_BUFFER_FILL"
  | "SALAH_AL_DIN_SYMBOL"
  | "WORLD_CENTER_SYMBOL"
  | "WHOLE_WORLD_FILL"
  | "GAZA_LAND_BLOCKADE_FILL"
  | "GAZA_SEA_BLOCKADE_FILL"
  | "GAZA_BUFFER_FILL"
  | "GAZA_AIRPORT_BOUNDARY_FILL"
  | "HIRIBAYA_BOUNDARY_FILL"
  | "CROSSINGS_SYMBOL"
  | "GAZA_HOSPITALS_STATUS_SYMBOL"
  | "GAZA_SCH_KIND_CIRCLE_CLUSTER"
  | "GAZA_SCH_KIND_SYMBOL_CLUSTER"
  | "MEKOROT_PIPES_SYMBOL"
  | "WWTP_SYMBOL"
  | "REFUGEE_CAMPS_SYMBOL"
  | "GAZA_DESALINATION_PLANTS_SYMBOL"
  | "WATER_WELLS_CIRCLE"
  | "WATER_WELLS_SYMBOL"
  | "GAZA_POWER_SYMBOL"
  | "NAKBA_RASTER"
  | "NETZARIM_RASTER"
  | "NAKBA_1949_RASTER"
  | "SALAH_AL_DIN_LINE"
  | "GAZA_GOVERNATES_POPULATION_FILL"
  | "GAZA_GOVERNATES_POPULATION_SYMBOL"
  | "GAZA_GOVERNATES_NAME_SYMBOL"
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
      "icon-image": IMAGE_MAP.get("crossing"),
      "icon-size": 0.5,
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
      "text-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-allow-overlap": true,
      "text-allow-overlap": true,
      "text-field": ["get", "name"],
      "text-offset": [0, 1],
      "icon-image": "hospital",
      "icon-size": 0.4,
    },
  },
  //   SCHOOLS AND UNI BEGIN
  {
    id: "GAZA_SCH_KIND_CIRCLE_CLUSTER",
    source: SOURCE_MAP.get("SCHOOLS_AND_KINDERGARTENS")!.id,
    type: "circle",
    paint: {
      "circle-opacity": 0,
      "circle-color": "#0A8048",
      "circle-opacity-transition": { duration: 500 },
      "circle-radius": [
        "step",
        ["get", "point_count"],
        40,
        50,
        50,
        100,
        60,
        200,
        70,
      ],
    },
  },
  {
    id: "GAZA_SCH_KIND_SYMBOL_CLUSTER",
    source: SOURCE_MAP.get("SCHOOLS_AND_KINDERGARTENS")!.id,
    type: "symbol",
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
      "text-opacity": 0,
      "text-opacity-transition": { duration: 500 },
      "text-color": "#FFFFFF",
    },
    layout: {
      "icon-allow-overlap": true,
      "text-allow-overlap": true,
      "text-field": ["get", "point_count"],
      "text-offset": [0, 1.5],
      "icon-image": "school",
      "icon-size": 0.5,
    },
  },
  //   SCHOOLS AND UNI END
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
      "icon-image": IMAGE_MAP.get("desalination"),
      "icon-size": 0.5,
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
      "icon-size": 0.5,
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
    id: "WATER_WELLS_CIRCLE",
    type: "circle",
    source: SOURCE_MAP.get("WATERWELLS")!.id,
    paint: {
      "circle-opacity": 0,
      "circle-color": "#0A8048",
      "circle-opacity-transition": { duration: 500 },
      "circle-radius": [
        "step",
        ["get", "point_count"],
        35,
        40,
        40,
        50,
        50,
        100,
        60,
        200,
        70,
      ],
    },
    layout: {},
  },
  {
    id: "WATER_WELLS_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("WATERWELLS")!.id,
    paint: {
      "icon-opacity": 0,
      "text-opacity": 0,
      "text-color": "#FFFFFF",
      "text-opacity-transition": { duration: 500 },
      "icon-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-image": IMAGE_MAP.get("well"),
      "icon-allow-overlap": true,
      "text-allow-overlap": true,
      "icon-size": 0.3,
      "icon-offset": [0, -1.5],
      "text-field": ["get", "point_count"],
      "text-offset": [0, 1],
    },
  },
  {
    id: "REFUGEE_CAMPS_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("REFUGEE_CAMPS")!.id,
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500 },
      "text-opacity": 0,
      "text-opacity-transition": { duration: 500 },
    },
    layout: {
      "icon-image": "camp",
      "icon-allow-overlap": true,
      "text-allow-overlap": true,
      "icon-size": 0.33,
      "text-field": ["get", "Name"],
      "text-offset": [-1.5, 0],
      "text-anchor": "right",
      "text-size": 12,
    },
  },
  {
    id: "NAKBA_1949_RASTER",
    type: "raster",
    source: SOURCE_MAP.get("NAKBA_MAP")!.id,
    paint: {
      "raster-opacity": 0,
      "raster-opacity-transition": { duration: 500 },
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
  {
    id: "SALAH_AL_DIN_LINE",
    type: "line",
    source: SOURCE_MAP.get("SALAH_AL_DIN")!.id,
    paint: {
      "line-opacity": 0,
      "line-opacity-transition": { duration: 500 },
      "line-width": 3,
    },
  },
  {
    id: "GAZA_GOVERNATES_POPULATION_FILL",
    type: "fill",
    source: SOURCE_MAP.get("GAZA_GOVERNATE_BOUNDARIES")!.id,
    paint: {
      "fill-opacity": 0,
      "fill-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "GAZA_GOVERNATES_POPULATION_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("GAZA_GOVERNATE_BOUNDARIES")!.id,
    paint: {
      "text-opacity": 0,
      "text-opacity-transition": { duration: 500 },
    },
    layout: {
      "text-field": ["get", "population"],
      "text-allow-overlap": true,
      "text-offset": [0, 1],
    },
  },
  {
    id: "GAZA_GOVERNATES_NAME_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("GAZA_GOVERNATE_BOUNDARIES")!.id,
    paint: {
      "text-opacity": 0,
      "text-opacity-transition": { duration: 500 },
    },
    layout: {
      "text-field": ["get", "name"],
      "text-allow-overlap": true,
      "text-font": ["Open Sans Bold"],
      "text-size": 20,
      "text-offset": [0, -1],
    },
  },
  {
    id: "WHOLE_WORLD_FILL",
    source: SOURCE_MAP.get("WHOLE_WORLD")!.id,
    type: "fill",
    paint: {
      "fill-color": "#EFEFEF",
      "fill-opacity": 0,
      "fill-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "WORLD_CENTER_SYMBOL",
    source: SOURCE_MAP.get("WORLD_CENTER")!.id,
    type: "symbol",
    paint: {
      "text-opacity": 0,

      "text-opacity-transition": { duration: 500 },
    },
    layout: {
      "text-field": "",
      "text-font": ["League Spartan Bold"],
      "text-size": 36,
    },
  },
  {
    id: "SALAH_AL_DIN_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("SALAH_AL_DIN")!.id,
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 500, delay: 200 },
    },
    layout: {
      "symbol-placement": "line",
      "symbol-spacing": 60,
      "icon-image": "red-chevron",
      "icon-size": 0.25,
      "icon-rotate": 180,
      "icon-allow-overlap": true,
      "icon-rotation-alignment": "map",
    },
  },
  {
    id: "ONE_KM_BUFFER_FILL",
    type: "fill",
    source: SOURCE_MAP.get("ONE_KM_BUFFER")!.id,
    paint: {
      "fill-color": "#890000",
      "fill-opacity": 0,
      "fill-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "NETZARIM_RASTER",
    type: "raster",
    source: SOURCE_MAP.get("NETZARIM")!.id,
    paint: {
      "raster-opacity": 0,
      "raster-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "POPULATION_BLOCKS_LINE",
    type: "line",
    source: SOURCE_MAP.get("POPULATION_GRIDS")!.id,
    paint: {
      "line-opacity": 0,
      "line-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "INITIAL_HUMANITARIAN_FILL",
    type: "fill",
    source: SOURCE_MAP.get("INITIAL_HUMANITARIAN")!.id,
    paint: {
      "fill-opacity": 0,
      "fill-color": "#86B5F8",
      "fill-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "EVACUATION_ARROWS_FILL",
    type: "fill",
    source: SOURCE_MAP.get("EVACUATION_ARROWS")!.id,
    paint: {
      "fill-opacity": 0,
      "fill-color": "#FF0000",
      "fill-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "INCIDENTS_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("INCIDENTS")!.id,
    paint: {
      "icon-opacity": 0,
      "icon-opacity-transition": { duration: 1500 },
    },
    layout: {
      "icon-image": "cross",
      "icon-size": 0.5,
      "icon-allow-overlap": true,
    },
  },
  {
    id: "PHILADELPHI_FILL",
    type: "fill",
    source: SOURCE_MAP.get("PHILADELPHI")!.id,
    paint: {
      "fill-opacity": 0,
      "fill-color": "#FF0000",
      "fill-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "MEFALSIM_LINE",
    type: "line",
    source: SOURCE_MAP.get("MEFALSIM")!.id,
    paint: {
      "line-opacity": 0,
      "line-opacity-transition": { duration: 500 },
      "line-width": 4,
      "line-dasharray": [1.5, 1.5],
    },
  },
  {
    id: "MEFALISM_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("MEFALSIM")!.id,
    paint: {
      "text-opacity": 0,
      "text-opacity-transition": { duration: 500 },
    },
    layout: {
      "text-allow-overlap": true,
      "icon-allow-overlap": true,
      "text-field": "Mefalism",
      "text-size": 24,
      "text-offset": [0, 1],
    },
  },
  {
    id: "GAZA_FRAGMENTATION_RASTER",
    type: "raster",
    source: SOURCE_MAP.get("GAZA_FRAGMENTATION")!.id,
    paint: {
      "raster-opacity": 0,
      "raster-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "MORAG_LINE",
    source: SOURCE_MAP.get("MORAG")!.id,
    type: "line",
    paint: {
      "line-width": 4,
      "line-dasharray": [1.5, 1.5],
      "line-opacity": 0,
      "line-opacity-transition": { duration: 500 },
    },
  },
  {
    id: "MORAG_SYMBOL",
    type: "symbol",
    source: SOURCE_MAP.get("MORAG")!.id,
    paint: {
      "text-opacity": 0,
      "text-opacity-transition": { duration: 500 },
    },
    layout: {
      "text-allow-overlap": true,
      "icon-allow-overlap": true,
      "text-field": "Morag",
      "text-size": 24,
      "text-offset": [0, 1],
    },
  },
] as const;

export const LAYER_IDS = LAYERS.map((l) => l.id) as LayerId[];
export const LAYER_MAP = new Map(LAYERS.map((l) => [l.id, l]));
