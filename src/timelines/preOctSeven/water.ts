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

const mekorotPipes: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image",
  title: "Mekorot Pipes",
  imgSrc: "/images/mekorot.jpg",
  layerOverrides: [
    {
      id: "MEKOROT_PIPES_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
    },
  ],
};

const waterWells: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image",
  title: "Waterwells",
  imgSrc: "/images/aquifer.png",
  layerOverrides: [
    {
      id: "WATER_WELLS_SYMBOL",
      paintOverrides: { "icon-opacity": 1, "text-opacity": 1 },
    },
    {
      id: "WATER_WELLS_CIRCLE",
      paintOverrides: {
        "circle-opacity": 0.5,
      },
    },
  ],
};

const wwtp: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image",
  title: "Wastewater Treatment Plants",
  imgSrc: "/images/wwtp.jpg",
  layerOverrides: [
    {
      id: "WWTP_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
    },
  ],
};

export const water = [desalinationPlants, mekorotPipes, waterWells, wwtp];
