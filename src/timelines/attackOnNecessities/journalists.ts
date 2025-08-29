import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const targetingMedia: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  imgSrc: "/images/titles/targeting-media.jpg",
  kind: "image-only",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  audioOverrideSrc: "/audio/internalize.wav",
  title: "Attack on Journalists (243 till now)",
};

const khan: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.29720199941994, 31.322829237875112],
      [34.29720199941994, 31.322829237875112],
    ],
    options: { maxZoom: 12 },
  },
  title: "Samer Abu Daqqa",
  imgSrc: "/images/samer-abu-daqqa.webp",
  kind: "image",
  layerOverrides: [],
};

const wael: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.29720199941994, 31.322829237875112],
      [34.29720199941994, 31.322829237875112],
    ],
    options: { maxZoom: 12 },
  },
  title: "Wael al-Dahdouh",
  imgSrc: "/images/wael-al-dahdouh.webp",
  kind: "image",
  layerOverrides: [],
};

const shati: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.45418394030819, 31.53793978452787],
      [34.45418394030819, 31.53793978452787],
    ],
    options: { maxZoom: 12 },
  },
  title: "Ismail Al Ghoul and Rami Al Refee",
  imgSrc: "/images/shati.png",
  kind: "image",
  layerOverrides: [],
};

const tripleStrike: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.2923534655626, 31.346889038669],
      [34.2923534655626, 31.346889038669],
    ],
    options: { maxZoom: 14, duration: 1499 },
  },
  videoSrc: "/videos/serial-murder.mp4",
  kind: "video",
  layerOverrides: [],
  title: "Serial Strikes on Civilians and Journalists at Nasser Hospital",
};

const allJournalists: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Journalists Killed by Governate (Doesn't Account for All)",
  kind: "basic",
  layerOverrides: [
    {
      id: "GAZA_GOVERNATES_NAME_SYMBOL",
      paintOverrides: { "text-opacity": 1 },
    },
    {
      id: "GAZA_GOVERNATES_POPULATION_FILL",
      paintOverrides: {
        "fill-opacity": [
          "match",
          ["get", "journalists_killed"],
          5,
          0.2,
          22,
          0.4,
          28,
          0.5,
          9,
        ],
        "fill-color": "#ff0000",
      },
    },
    {
      id: "GAZA_GOVERNATES_POPULATION_SYMBOL",
      paintOverrides: { "text-opacity": 1 },
      layoutOverrides: {
        "text-field": ["get", "journalists_killed"],
      },
    },
  ],
};

const salah: GazaEvent = {
  kind: "image-only",
  title: "Protect Saleh Al Jafarawi",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  imgSrc: "/images/saleh-al-jafarawi.webp",
  layerOverrides: [],
};

export const journalists: Timeline = [
  targetingMedia,
  khan,
  wael,
  shati,
  salah,
  tripleStrike,
  allJournalists,
];
