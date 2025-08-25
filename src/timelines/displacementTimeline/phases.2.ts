import { GAZA_BBOX } from "../../constants/constants";
import { IMAGE_MAP } from "../../constants/images";
import type { GazaEvent, Timeline } from "../timelines";

const init: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: [
      [0, 0],
      [0, 0],
    ],
    options: { maxZoom: 10 },
  },
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    {
      id: "WORLD_CENTER_SYMBOL",
      paintOverrides: {
        "text-opacity": 1,
      },
      layoutOverrides: { "text-field": "December 1st to May 6th" },
    },
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],

  title: "Grid Evacuation",
};

const populationGrids: GazaEvent = {
  kind: "basic",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "POPULATION_BLOCKS_LINE",
      paintOverrides: {
        "line-opacity": 1,
      },
    },
  ],
  title: "Dec 1st → May 6th : Grid Evacuation",
};

const evacOrder: GazaEvent = {
  kind: "basic",
  layerOverrides: [
    {
      id: "POPULATION_BLOCKS_LINE",
      paintOverrides: {
        "line-opacity": 1,
      },
    },
    // {
    //   id: "FIRST_GRID_ARROWS_RASTER",
    //   paintOverrides: {
    //     "raster-opacity": 1,
    //   },
    // },
    {
      id: "EVACUATION_ARROWS_FILL",
      paintOverrides: {
        "fill-opacity": 1,
      },
      filterOverrides: ["<", ["get", "date"], "2024-05-01"],
    },
  ],
  title: "Evacuation Orders",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
};

const evacOrderZoom: GazaEvent = {
  kind: "basic",
  layerOverrides: [
    {
      id: "POPULATION_BLOCKS_LINE",
      paintOverrides: {
        "line-opacity": 1,
      },
    },
    {
      id: "EVACUATION_ARROWS_FILL",
      paintOverrides: {
        "fill-opacity": 1,
      },
      filterOverrides: ["==", ["get", "date"], "2023-12-02"],
    },
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
      layoutOverrides: { "icon-image": IMAGE_MAP.get("bad-rocket") },
      filterOverrides: [
        "any",
        ["==", ["get", "Public_ID"], "31204-83772"],
        ["==", ["get", "Public_ID"], "31204-06603"],
        ["==", ["get", "Public_ID"], "31204-67873"],
      ],
    },
  ],
  title: "Evacuation Orders",
  fitBounds: {
    bounds: [
      [34.48378877547231, 31.52188585385751],
      [34.48378877547231, 31.52188585385751],
    ],
    options: { maxZoom: 12 },
  },
};

const khanYounisCorner: GazaEvent = {
  kind: "image",
  layerOverrides: [
    {
      id: "POPULATION_BLOCKS_LINE",
      paintOverrides: {
        "line-opacity": 1,
      },
    },
  ],
  title: "Destruction in Khan Younis",
  imgSrc: "/images/khan-younis-destruction.jpg",
  fitBounds: {
    bounds: [
      [34.36030066962047, 31.322674595837274],
      [34.36030066962047, 31.322674595837274],
    ],
    options: {
      maxZoom: 14,
    },
  },
};

export const phaseTwo: Timeline = [
  init,
  populationGrids,
  evacOrder,
  evacOrderZoom,
  khanYounisCorner,
];
