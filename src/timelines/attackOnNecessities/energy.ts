import { GAZA_BBOX, GAZA_PPLANT_BOUNDS } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const gazaPowerPlantDestroyed: GazaEvent = {
  fitBounds: {
    bounds: GAZA_PPLANT_BOUNDS,
    options: {},
  },
  title: "Power Plant not Operational",
  imgSrc: "/images/power-plant-fire.jpg",
  kind: "image",
  layerOverrides: [
    {
      id: "GAZA_POWER_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
        "icon-opacity-transition": { duration: 1000 },
      },
      layoutOverrides: {
        "icon-allow-overlap": true,
      },
    },
  ],
};

const powerBreakdown: GazaEvent = {
  kind: "image-only",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: {
        "fill-opacity": 1,
      },
    },
  ],

  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  imgSrc: "/images/energy-power-breakdown.jpg",
  title: "Power Breakdown",
};

const meltingPlasticForFuel: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Melting Plastic for Fuel",
  imgSrc: "/images/energy-melting-plastic.jpg",
  kind: "image-only",
  layerOverrides: [],
};

const rubbleAsFuel: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Using Rubble for Cooking",
  imgSrc: "/images/energy-rubble-as-fuel.webp",
  kind: "image-only",
  layerOverrides: [],
};

const phoneChargingStations: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Phone Charging Stations",
  imgSrc: "/images/energy-phone-charging-stations.webp",
  kind: "image-only",
  layerOverrides: [],
};

const solarPanelDestroyed: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Solar Panels Destroyed",
  imgSrc: "/images/energy-solar-panel-destroyed.webp",
  kind: "image-only",
  layerOverrides: [],
};

export const energy: Timeline = [
  gazaPowerPlantDestroyed,
  powerBreakdown,
  meltingPlasticForFuel,
  rubbleAsFuel,
  phoneChargingStations,
  solarPanelDestroyed,
];
