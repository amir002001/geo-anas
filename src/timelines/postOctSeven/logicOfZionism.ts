import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const intro: GazaEvent = {
  kind: "image-only",
  title: "Logic of Zionism",
  imgSrc: "/images/titles/logic-of-zion.jpg",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
};

const imperialismQuote: GazaEvent = {
  kind: "image-only",
  title: "Ghassan Kanafani",
  imgSrc: "/images/imperialism-quote.jpg",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
};

const gallantSpeech: GazaEvent = {
  kind: "image-only",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  imgSrc: "/images/gallant-quote.jpg",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],

  title: "Yoav Gallant - October 9th",
};

export const logicOfZionism: Timeline = [
  intro,
  imperialismQuote,
  gallantSpeech,
];
