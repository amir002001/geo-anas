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

const ghfTraps: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/GHF-TRAPS.jpg",
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
  title: "GHF Death Traps",
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

const fenceWalk: GazaEvent = {
  kind: "video",
  videoSrc: "/videos/fence-walk.mp4",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "Fence Walk",
};

const ghfNight: GazaEvent = {
  kind: "video",
  videoSrc: "/videos/ghf-night.mp4",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "GHF at Night",
};

const foodParcel: GazaEvent = {
  kind: "video",
  videoSrc: "/videos/food-parcel.mp4",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "Food Parcel",
};

const ghfAttack1: GazaEvent = {
  kind: "video",
  videoSrc: "/videos/ghf-attack-1.mp4",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "GHF Attack: Netzarim Axis Point",
};
const ghfAttack2: GazaEvent = {
  kind: "video",
  videoSrc: "/videos/ghf-attack-2.mp4",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "GHF Attack: Khan Yunis Flour",
};
const ghfAttack3: GazaEvent = {
  kind: "video",
  videoSrc: "/videos/ghf-attack-3.mp4",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "GHF Attack: Netzarim",
};
const ghfAttack4: GazaEvent = {
  kind: "video",
  videoSrc: "/videos/ghf-attack-4.mp4",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "GHF Attack: Rafah",
};
const ghfAttack5: GazaEvent = {
  kind: "video",
  videoSrc: "/videos/ghf-attack-5.mp4",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "GHF Attack: Rafah",
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
  ghfTraps,
  ghfIntro,
  fenceWalk,
  ghfNight,
  foodParcel,
  ghfAttack1,
  ghfAttack2,
  ghfAttack3,
  ghfAttack4,
  ghfAttack5,
];
