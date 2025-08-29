import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const destroyedAgriculture: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Destruction of Agriculture",
  kind: "basic",
  layerOverrides: [
    {
      id: "AGRICULTURE_DESTRUCTION_RASTER",
      paintOverrides: { "raster-opacity": 1 },
    },
  ],
};

const immediateDestPermaDecimation: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Immediate Destruction and Permanent Decimation",
  kind: "image-only",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  imgSrc: "/images/immediate-dest.jpg",
};

const agricultureOverBufferZoneAndInvasion: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "TODO",
  kind: "basic",
  layerOverrides: [
    {
      id: "ONE_KM_BUFFER_FILL",
      paintOverrides: { "fill-opacity": 0.5 },
    },
    {
      id: "GIDEONS_CHARIOT",
      paintOverrides: { "raster-opacity": 0.5 },
    },
    {
      id: "AGRICULTURE_DESTRUCTION_RASTER",
      paintOverrides: { "raster-opacity": 1 },
    },
  ],
};

const beitLahiaFarm: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.505492, 31.544595],
      [34.505492, 31.544595],
    ],
    options: { maxZoom: 14 },
  },
  title: "TODO",
  kind: "image",
  imgSrc: "/images/agri-compare-beit.jpg",
  layerOverrides: [],
};

const destroyedGreenHouses: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { padding: 140 },
  },
  title: "TODO",
  kind: "basic",
  layerOverrides: [
    { id: "GREENHOUSES_RASTER", paintOverrides: { "raster-opacity": 1 } },
  ],
};

const whitePhosphorous: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "TODO",
  kind: "image-only",
  imgSrc: "/images/phosphorous.jpg",
  layerOverrides: [],
};

const trashPiled: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "TODO",
  kind: "image-only",
  imgSrc: "/images/trash-pile.jpg",
  layerOverrides: [],
};

export const agriculture: Timeline = [
  destroyedAgriculture,
  immediateDestPermaDecimation,
  agricultureOverBufferZoneAndInvasion,
  beitLahiaFarm,
  destroyedGreenHouses,
  whitePhosphorous,
  trashPiled,
];
