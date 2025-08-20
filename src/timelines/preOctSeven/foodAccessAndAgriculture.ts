import type { GazaEvent } from "../timelines";

const khanYounisFarms: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.22314934453179, 31.295431966571627],
      [34.30815842763261, 31.388671198920647],
    ],
    options: {},
  },

  kind: "image",
  title: "Food Access and Agriculture",
  imgSrc: "/images/khan-younis-olives.jpg",
  layerOverrides: [
    {
      id: "KHAN_YOUNIS_FARMS_COORDINATES",
      paintOverrides: { "raster-opacity": 1 },
    },
  ],
};

export const foodAccessAndAgriculture = [khanYounisFarms];
