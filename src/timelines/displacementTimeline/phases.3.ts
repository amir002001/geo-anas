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
  layerOverrides: [
    {
      id: "WORLD_CENTER_SYMBOL",
      paintOverrides: {
        "text-opacity": 1,
      },
      layoutOverrides: { "text-field": "May 6th to October 6th" },
    },
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],

  title: "Displacement of Rafah",
};

export const phaseThree: Timeline = [init];
