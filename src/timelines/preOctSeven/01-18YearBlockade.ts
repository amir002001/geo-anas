import type { IGazaEvent } from "../timelines";

export const eighteenYearBlockade: IGazaEvent = {
  fitBounds: {
    bounds: [
      [33.944667, 31.219972015],
      [34.568023765, 31.78],
    ],
    options: {},
  },
  title: "18-Year Blockade",
  layerOverrides: [
    { id: "GAZA_LAND_BLOCKADE_FILL", paintOverrides: { "fill-opacity": 0.5 } },
    { id: "GAZA_SEA_BLOCKADE_FILL", paintOverrides: { "fill-opacity": 0.5 } },
  ],
};
