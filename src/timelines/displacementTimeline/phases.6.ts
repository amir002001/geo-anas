import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const init: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/annhilation-implementation.jpg",
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

  title: "Annhilation Implementation: August 8th to Present",
};

const smotrichQuote: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/annhilation-implementation-quote.jpg",
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

  title: "Smotrich Quote",
};

const heathrowComparison: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: [
      [-0.07344267363210126, 51.507832025123385],
      [-0.07344267363210126, 51.507832025123385],
    ],
    options: { maxZoom: 8, duration: 2000 },
  },
  layerOverrides: [
    {
      id: "HEATHROW_COMP_RASTER",
      paintOverrides: {
        "raster-opacity": 0.9,
      },
    },
  ],

  title: "Comparisons to London",
};

export const phaseSix: Timeline = [init, smotrichQuote, heathrowComparison];
