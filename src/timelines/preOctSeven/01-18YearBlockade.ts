import type { IGazaEvent } from "../timelines";

export const eighteenYearBlockade: IGazaEvent = {
  fitBounds: {
    bounds: [
      [33.94733301660154, 31.242486542006084],
      [34.60317050605896, 31.90209009722733],
    ],
    options: {},
  },
  title: "18-Year Blockade",
  layerOverrides: [
    { id: "GAZA_LAND_BLOCKADE_FILL", paintOverrides: { "fill-opacity": 0.5 } },
    { id: "GAZA_SEA_BLOCKADE_FILL", paintOverrides: { "fill-opacity": 0.5 } },
  ],
};
