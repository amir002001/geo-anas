import type { LngLatBoundsLike } from "mapbox-gl";
import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const WEST_BANK_BBOX: LngLatBoundsLike = [
  [34.85164950175996, 31.3020615747599],
  [35.89104780349571, 32.598067520536446],
];

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

const initialOrders: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    {
      id: "AFTER_CEASE_ORDERS_FILL",
      paintOverrides: {
        "fill-opacity": 0.8,
      },
    },
  ],

  title: "Initial Orders",
};

const westBankPlan: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: WEST_BANK_BBOX,
    options: { padding: 80 },
  },
  layerOverrides: [
    {
      id: "WEST_BANK_PLAN_RASTER",
      paintOverrides: {
        "raster-opacity": 0.9,
      },
    },
  ],

  title: "The Plan for the West Bank",
};

const e1Plan: GazaEvent = {
  kind: "image",
  imgSrc: "/images/e1-larger.jpg",
  fitBounds: {
    bounds: [
      [35.21647846810884, 31.744750439847078],
      [35.3697843906192, 31.845701490924586],
    ],
    options: { padding: 80 },
  },
  layerOverrides: [
    {
      id: "E1_PLAN_RASTER",
      paintOverrides: {
        "raster-opacity": 0.8,
      },
    },
  ],

  title: "Proposed E1 Settlement",
};

const gazaTakeover: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { padding: 80 },
  },
  layerOverrides: [
    {
      id: "GAZA_TAKEOVER_RASTER",
      paintOverrides: {
        "raster-opacity": 0.8,
      },
    },
  ],

  title: "Plan for Gaza's Takeover",
};

const heathrowComparison: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: [
      //   [-1.559897133489262, 51.06463390638773],
      //   [0.396326493144797, 52.31886014963128],
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

export const phaseSix: Timeline = [
  init,
  smotrichQuote,
  initialOrders,
  westBankPlan,
  e1Plan,
  gazaTakeover,
  heathrowComparison,
];
