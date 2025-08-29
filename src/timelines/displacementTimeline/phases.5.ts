import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const init: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/39.jpg",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { maxZoom: 10 },
  },
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],

  title: "Annhilation: Laying the Foundation",
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

const gideonsChariot: GazaEvent = {
  kind: "image",
  imgSrc: "/images/gideons-chariot-girl-escapes-fire.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "GIDEONS_CHARIOT",
      paintOverrides: {
        "raster-opacity": 1,
      },
    },
  ],
  title: "Gideon's Chariot",
};

const ghfIntro: GazaEvent = {
  kind: "image",
  imgSrc: "/images/ghf-site.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "GHF_RASTER",
      paintOverrides: {
        "raster-opacity": 1,
      },
    },
  ],
  title: "Introduction of GHF",
};

export const phaseFive: Timeline = [
  init,
  initialOrders,
  ghfIntro,
  gideonsChariot,
];
