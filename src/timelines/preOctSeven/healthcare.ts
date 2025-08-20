import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent } from "../timelines";

const hospitalOverview: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    {
      id: "GAZA_HOSPITALS_STATUS_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
    },
  ],
  title: "Healthcare Overview",
  kind: "image",
  imgSrc: "/images/shifa-before.webp",
};

export const healthcare = [hospitalOverview];
