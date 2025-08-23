import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const northToSouthEvac: GazaEvent = {
  kind: "basic",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "GAZA_GOVERNATES_POPULATION_FILL",
      paintOverrides: {
        "fill-opacity": 0.5,

        "fill-color": [
          "match",
          ["get", "name"],
          "Gaza",
          "#FF0000",
          "North Gaza",
          "#FF0000",
          "#B0D4FF",
        ],
      },
    },
    {
      id: "SALAH_AL_DIN_LINE",
      paintOverrides: {
        "line-opacity": 1,
      },
    },
    {
      id: "SALAH_AL_DIN_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
    },
  ],
  title: "North to South Evacuation",
};

export const phaseOne: Timeline = [northToSouthEvac];
