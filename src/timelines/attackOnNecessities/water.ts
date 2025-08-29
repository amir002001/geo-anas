import { GAZA_BBOX } from "../../constants/constants";
import { IMAGE_MAP } from "../../constants/images";
import type { GazaEvent, Timeline } from "../timelines";

const waterPipes: GazaEvent = {
  kind: "image-only",
  title: "Water Pipes",
  imgSrc: "/images/water/80.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
};

const mekorotBroken: GazaEvent = {
  kind: "image",
  title: "Water Pipes",
  imgSrc: "/images/water/80.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "MEKOROT_PIPES_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("broken-pipe"),
      },
    },
  ],
};

const desalinationPlants: GazaEvent = {
  kind: "image-only",
  title: "Desalination Plants",
  imgSrc: "/images/water/81.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
};

const brokenDesalinationPlants: GazaEvent = {
  kind: "image",
  title: "Out of Order Desalination Plants",
  imgSrc: "/images/water/81.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "GAZA_DESALINATION_PLANTS_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("broken-factory"),
        "icon-size": 0.5,
      },
    },
  ],
};

const IDFDrinking: GazaEvent = {
  kind: "image",
  title: "IDF Drinking",
  imgSrc: "/images/water/83.jpg",
  fitBounds: {
    bounds: [
      [34.26542324022958, 31.294908176330257],
      [34.26542324022958, 31.294908176330257],
    ],
    options: { maxZoom: 18 },
  },
  layerOverrides: [
    {
      id: "GAZA_DESALINATION_PLANTS_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("broken-factory"),
        "icon-size": 1.5,
      },
    },
  ],
};

const explosion: GazaEvent = {
  kind: "image-only",
  title: "Explosion",
  imgSrc: "/images/water/82.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
};

const waterWells: GazaEvent = {
  kind: "image-only",
  title: "Water Wells",
  imgSrc: "/images/water/84.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
};

const satelliteImage: GazaEvent = {
  kind: "image",
  title: "Broken Wells",
  imgSrc: "/images/water/85.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "WATER_WELLS_SYMBOL",
      paintOverrides: { "icon-opacity": 1, "text-opacity": 1 },
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("broken-pipe"),
      },
    },
    {
      id: "WATER_WELLS_CIRCLE",
      paintOverrides: {
        "circle-opacity": 0.5,
        "circle-color": "#ff0000",
      },
    },
  ],
};

const tunnel: GazaEvent = {
  kind: "image-only",
  title: "Tunnel",
  imgSrc: "/images/water/86.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
};

const waterSatellite: GazaEvent = {
  kind: "image-only",
  title: "Water Satellite",
  imgSrc: "/images/water/87.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
};

const waterWreckage: GazaEvent = {
  kind: "image-only",
  title: "Water Wreckage",
  imgSrc: "/images/water/88.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
};

const murkyWater: GazaEvent = {
  kind: "image",
  title: "Out of Order Wastewater Treatment Plants",
  imgSrc: "/images/water/89.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "WWTP_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("broken-factory"),
      },
    },
  ],
};

export const water: Timeline = [
  waterPipes,
  mekorotBroken,
  desalinationPlants,
  brokenDesalinationPlants,
  IDFDrinking,
  explosion,
  waterWells,
  satelliteImage,
  tunnel,
  waterSatellite,
  waterWreckage,
  murkyWater,
];
