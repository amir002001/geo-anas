import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent } from "../timelines";

export const universities: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    {
      id: "GAZA_UNIVERSITIES_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
    },
  ],
  title: "Education",
  kind: "image",
  imgSrc: "/images/al-isra-university.jpg",
};

export const education = [universities];
