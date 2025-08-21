import { GAZA_PPLANT_BOUNDS } from "../../constants/constants";
import type { GazaEvent } from "../timelines";

const gazaPowerPlant: GazaEvent = {
  fitBounds: {
    bounds: GAZA_PPLANT_BOUNDS,
    options: {},
  },
  title: "Power Access Overview",
  imgSrc: "/images/gaza-powerplant.jpg",
  kind: "image",
  layerOverrides: [
    {
      id: "GAZA_POWER_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
        "text-opacity": 1,
      },
    },
  ],
};

export const powerAccess = [gazaPowerPlant];
