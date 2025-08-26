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
      layoutOverrides: { "text-field": "March 17th to August 4th" },
    },
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],

  title: "Extermination of the Strip",
};

const gazaFragmentationPlan: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { padding: 40 },
  },
  layerOverrides: [
    {
      id: "GAZA_FRAGMENTATION_RASTER",
      paintOverrides: { "raster-opacity": 1 },
    },
  ],
  title: "Gaza Fragmentation Plan",
};

const moragIntro: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    { id: "MORAG_LINE", paintOverrides: { "line-opacity": 1 } },
    { id: "MORAG_SYMBOL", paintOverrides: { "text-opacity": 1 } },
  ],
  title: "Introduction of the Morag Corridor",
};

export const phaseFive: Timeline = [init, gazaFragmentationPlan, moragIntro];
