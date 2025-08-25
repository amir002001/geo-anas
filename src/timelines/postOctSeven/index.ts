import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";
import { logicOfZionism } from "./logicOfZionism";

const postOctSevenTitle: GazaEvent = {
  kind: "basic",
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
    {
      id: "WORLD_CENTER_SYMBOL",
      paintOverrides: { "text-opacity": 1 },
      layoutOverrides: { "text-field": "Post-October 7" },
    },
  ],
  title: "Post-October 7",
  fitBounds: {
    bounds: [
      [0, 0],
      [0, 0],
    ],
    options: { maxZoom: 10 },
  },
};

const fourtyEight: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/nakba-displacement.webp",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "The Nakba",
};

const gazaDisplacement: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/gaza-displacement.jpg",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "vs. Now in Gaza",
};

export const postOctSeven: Timeline = [
  postOctSevenTitle,
  fourtyEight,
  gazaDisplacement,
  ...logicOfZionism,
];
