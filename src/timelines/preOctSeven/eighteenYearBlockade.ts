import type { LngLatBoundsLike } from "mapbox-gl";
import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent } from "../timelines";

const BLOCKADE_BBOX = [
  [33.944667, 31.219972015],
  [34.568023765, 31.78],
];

const eighteenYearBlockadeLand: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "18-Year Blockade - Land",
  layerOverrides: [
    { id: "GAZA_LAND_BLOCKADE_FILL", paintOverrides: { "fill-opacity": 0.5 } },
  ],
  kind: "basic",
};

const eighteenYearBlockadeSea: GazaEvent = {
  fitBounds: { bounds: BLOCKADE_BBOX as LngLatBoundsLike, options: {} },
  title: "18-Year Blockade - Sea",
  layerOverrides: [
    { id: "GAZA_LAND_BLOCKADE_FILL", paintOverrides: { "fill-opacity": 0.5 } },
    { id: "GAZA_SEA_BLOCKADE_FILL", paintOverrides: { "fill-opacity": 0.5 } },
  ],
  kind: "image",
  imgSrc: "/images/gaza-sea-blockade.png",
};

const GAZA_AIPORT_BBOX: LngLatBoundsLike = [
  [34.267694721, 31.22767785],
  [34.280416019, 31.253835171],
];

const eighteenYearBlockadeAir: GazaEvent = {
  fitBounds: { bounds: GAZA_AIPORT_BBOX, options: {} },
  title: "18-Year Blockade - Air",
  layerOverrides: [
    {
      id: "GAZA_AIRPORT_BOUNDARY_FILL",
      paintOverrides: { "fill-opacity": 0.5 },
    },
  ],
  kind: "image",
  imgSrc: "/images/gaza-blockade-air.jpg",
};

export const eighteenYearBlockade = [
  eighteenYearBlockadeLand,
  eighteenYearBlockadeSea,
  eighteenYearBlockadeAir,
];
