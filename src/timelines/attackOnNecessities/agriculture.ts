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
  kind: "basic",
  layerOverrides: [],
};

const agricultureOverBufferZoneAndInvasion: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "TODO",
  kind: "basic",
  layerOverrides: [],
};

const beitLahiaFarm: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "TODO",
  kind: "basic",
  layerOverrides: [],
};

const destroyedGreenHouses: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "TODO",
  kind: "basic",
  layerOverrides: [],
};

const whitePhosphorous: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "TODO",
  kind: "basic",
  layerOverrides: [],
};

const trashPiled: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "TODO",
  kind: "basic",
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
