import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent } from "../timelines";

export const universities: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    {
      id: "GAZA_SCH_KIND_CIRCLE_CLUSTER",
      paintOverrides: { "circle-opacity": 0.6 },
    },
    {
      id: "GAZA_SCH_KIND_SYMBOL_CLUSTER",
      paintOverrides: { "icon-opacity": 1, "text-opacity": 1 },
    },
  ],
  title: "Education",
  kind: "image",
  imgSrc: "/images/al-isra-university.jpg",
};

export const education = [universities];
