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

const attackOnJournalists: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  imgSrc: "/images/journalists.png",
  kind: "image-only",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Attack on Journalists (243 till now)",
};

export const journalists: Timeline = [
  targetingMedia,
  tripleStrike,
  allJournalists,
  attackOnJournalists,
];
