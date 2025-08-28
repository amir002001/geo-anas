import { GAZA_BBOX } from "../../constants/constants";
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

const desalinationPlants: GazaEvent = {
  kind: "image-only",
  title: "Desalination Plants",
  imgSrc: "/images/water/81.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
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

const IDFDrinking: GazaEvent = {
  kind: "image-only",
  title: "IDF Drinking",
  imgSrc: "/images/water/83.jpg",
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
  kind: "image-only",
  title: "Satellite Image",
  imgSrc: "/images/water/85.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
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
  kind: "image-only",
  title: "Murky Water",
  imgSrc: "/images/water/89.jpg",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
};

export const water: Timeline = [
  waterPipes,
  desalinationPlants,
  explosion,
  IDFDrinking,
  waterWells,
  satelliteImage,
  tunnel,
  waterSatellite,
  waterWreckage,
  murkyWater,
];
