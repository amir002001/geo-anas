import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const init: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/AID.jpg",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { maxZoom: 10 },
  },
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],

  title: "The Weaponization of Aid",
};

const aidBombing: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/aid-bombing.webp",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "The bombing of Aid",
};

const lahiaBakery: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/beit-lahiya-bakery.webp",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "Beit Lahiya Bakery Bombed",
};

const aidMethods: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/AID-METHODS.jpg",
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
  title: "Aid Methods",
};

const aidDrops: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/aid-drops.jpg",
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
  title: "Aid Drops",
};

const aidOnTentsAndStructures: GazaEvent = {
  kind: "image-only",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "Aid Drops on Structures and Tents",
  imgSrc: "/images/aid-on-tents.webp",
};

const aidInPopulated: GazaEvent = {
  kind: "video-only",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  videoSrc: "/videos/populated-aid.mp4",
  title: "Aid Drops in Populated Areas",
  layerOverrides: [],
};

const aidMurder: GazaEvent = {
  kind: "video-only",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "Murderous Aid Drops",
  videoSrc: "/videos/aid-murder.mp4",
};

export const aid: Timeline = [
  init,
  aidBombing,
  lahiaBakery,
  aidMethods,
  aidDrops,
  aidOnTentsAndStructures,
  aidInPopulated,
  aidMurder,
];
