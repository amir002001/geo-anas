import type { LngLatBoundsLike } from "mapbox-gl";
import type { GazaEvent, Timeline } from "../timelines";

const WEST_BANK_BBOX: LngLatBoundsLike = [
  [34.85164950175996, 31.3020615747599],
  [35.89104780349571, 32.598067520536446],
];
const westBankPlan: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: WEST_BANK_BBOX,
    options: { padding: 80 },
  },
  layerOverrides: [
    {
      id: "WEST_BANK_PLAN_RASTER",
      paintOverrides: {
        "raster-opacity": 0.9,
      },
    },
  ],

  title: "The Plan for the West Bank",
};

const e1Plan: GazaEvent = {
  kind: "image",
  imgSrc: "/images/e1-larger.jpg",
  fitBounds: {
    bounds: [
      [35.21647846810884, 31.744750439847078],
      [35.3697843906192, 31.845701490924586],
    ],
    options: { padding: 80 },
  },
  layerOverrides: [
    {
      id: "E1_PLAN_RASTER",
      paintOverrides: {
        "raster-opacity": 0.8,
      },
    },
  ],

  title: "Proposed E1 Settlement",
};
export const spatialControls: Timeline = [e1Plan, westBankPlan];
