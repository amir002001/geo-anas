import { GAZA_BBOX } from "../../../constants/constants";
import type { GazaEvent } from "../../timelines";

export const refugeeCamps: GazaEvent = {
  title: "Refugee Camps",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "basic",
  layerOverrides: [
    {
      id: "REFUGEE_CAMPS_SYMBOL",
      paintOverrides: { "icon-opacity": 1, "text-opacity": 1 },
    },
  ],
};
