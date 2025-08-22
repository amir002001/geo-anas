import { GAZA_BBOX } from "../../../constants/constants";
import type { GazaEvent, Timeline } from "../../timelines";
import { comparisons } from "./comparison";
import { refugeeCamps } from "./refugeeCamps";
import { salahAlDin } from "./roads";

const population: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "basic",
  title: "Population of Governates",
  layerOverrides: [
    {
      id: "GAZA_GOVERNATES_POPULATION_FILL",
      paintOverrides: {
        "fill-color": [
          "step",
          ["get", "population"],
          "#8BD5B2",
          200000,
          "#78C9A3",
          250000,
          "#54B184",
          300000,
          "#2F9866",
          600000,
          "#0A8048",
        ],
        "fill-opacity": 0.8,
      },
    },
    {
      id: "GAZA_GOVERNATES_POPULATION_SYMBOL",
      paintOverrides: {
        "text-opacity": 1,
      },
    },
    {
      id: "GAZA_GOVERNATES_NAME_SYMBOL",
      paintOverrides: {
        "text-opacity": 1,
      },
    },
  ],
};

export const spatiality: Timeline = [
  population,
  ...comparisons,
  salahAlDin,
  refugeeCamps,
];
