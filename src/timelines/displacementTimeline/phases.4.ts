import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const init: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: [
      [0, 0],
      [0, 0],
    ],
    options: { maxZoom: 10 },
  },
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    {
      id: "WORLD_CENTER_SYMBOL",
      paintOverrides: {
        "text-opacity": 1,
      },
      layoutOverrides: { "text-field": "October 6th to January 15th" },
    },
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],

  title: "Extermination of the North",
};

const mefalsimCorrdior: GazaEvent = {
  kind: "basic",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "MEFALSIM_LINE",
      paintOverrides: {
        "line-opacity": 1,
      },
    },
    {
      id: "MEFALISM_SYMBOL",
      paintOverrides: {
        "text-opacity": 1,
      },
    },
  ],
  title: "Mefalsim Corridor",
};

const roundingUp: GazaEvent = {
  kind: "video",
  title: "Rounding Up Civilians",
  fitBounds: {
    bounds: [
      [34.509393598110414, 31.535240940352804],
      [34.509393598110414, 31.535240940352804],
    ],
    options: { maxZoom: 15 },
  },

  layerOverrides: [
    {
      id: "GAZA_HOSPITALS_STATUS_SYMBOL",
      filterOverrides: ["==", ["get", "name"], "Indonesian Hospital"],
      paintOverrides: {
        "icon-opacity": 1,
        "text-opacity": 1,
      },
    },
  ],
  videoSrc: "/videos/round-up.mp4",
};

export const phaseFour: Timeline = [init, mefalsimCorrdior, roundingUp];
