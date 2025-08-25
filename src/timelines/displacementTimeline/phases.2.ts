import { GAZA_BBOX } from "../../constants/constants";
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
    {
      id: "FIRST_GRID_ARROWS_RASTER",
      paintOverrides: {
        "raster-opacity": 1,
      },
    },
  ],
  title: "Evacuation Orders",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
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
  fitBounds: { bounds: GAZA_BBOX, options: {} }, // TODO
};

export const phaseTwo: Timeline = [
  init,
  populationGrids,
  evacOrder,
  khanYounisCorner,
];
