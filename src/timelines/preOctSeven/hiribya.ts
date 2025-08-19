import type { LngLatBoundsLike } from "mapbox-gl";
import type { GazaEvent } from "../timelines";

const HIRIBAYA_BBOX: LngLatBoundsLike = [
  [34.498992705527456, 31.571687305043458],
  [34.57662294009474, 31.635163960932726],
];

const hiribyaBefore: GazaEvent = {
  fitBounds: { bounds: HIRIBAYA_BBOX, options: {} },
  title: "Hiribya - Before",
  layerOverrides: [
    {
      id: "HIRIBAYA_BOUNDARY_FILL",
      paintOverrides: { "fill-opacity": 0.5 },
    },
  ],
  kind: "basic",
};

const hiribyaAfter: GazaEvent = {
  fitBounds: { bounds: HIRIBAYA_BBOX, options: {} },
  title: "Hiribya - After",
  layerOverrides: [
    {
      id: "HIRIBAYA_BOUNDARY_FILL",
      paintOverrides: { "fill-opacity": 0.5 },
    },
  ],
  kind: "image",
  imgSrc: "/images/kibbutz.jpg",
};

export const hiribya = [hiribyaBefore, hiribyaAfter];
