import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent } from "../timelines";

const desalinationPlants: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Desalination Plants",
  layerOverrides: [
    {
      id: "GAZA_DESALINATION_PLANTS_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
    },
  ],
  kind: "image",
  imgSrc: "/images/desalination-plant.jpg",
};

export const water = [desalinationPlants];
