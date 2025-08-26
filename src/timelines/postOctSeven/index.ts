import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";
import { logicOfZionism } from "./logicOfZionism";

const postOctSevenTitle: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/20.jpg",
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Post-October 7",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
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
