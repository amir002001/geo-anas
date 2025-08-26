import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const init: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/annihilation.jpg",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: {
        "fill-opacity": 1,
      },
    },
  ],

  title: "North to South Evacuation",
};

export const phaseSix: Timeline = [init];
