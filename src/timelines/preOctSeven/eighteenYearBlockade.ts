import type { LngLatBoundsLike } from "mapbox-gl";
import { GAZA_BBOX } from "../../constants/constants";
import type { IGazaEvent } from "../timelines";

const BLOCKADE_BBOX = [
  [33.944667, 31.219972015],
  [34.568023765, 31.78],
];

const eighteenYearBlockadeLand: IGazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "18-Year Blockade - Land",
  layerOverrides: [
    { id: "GAZA_LAND_BLOCKADE_FILL", paintOverrides: { "fill-opacity": 0.5 } },
  ],
};

const eighteenYearBlockadeSea: IGazaEvent = {
  fitBounds: { bounds: BLOCKADE_BBOX as LngLatBoundsLike, options: {} },
  title: "18-Year Blockade - Sea",
  layerOverrides: [
    { id: "GAZA_LAND_BLOCKADE_FILL", paintOverrides: { "fill-opacity": 0.5 } },
    { id: "GAZA_SEA_BLOCKADE_FILL", paintOverrides: { "fill-opacity": 0.5 } },
  ],
};

export const eighteenYearBlockade = [
  eighteenYearBlockadeLand,
  eighteenYearBlockadeSea,
];
