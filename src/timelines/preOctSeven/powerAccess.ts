import type { LngLatBoundsLike } from "mapbox-gl";
import type { GazaEvent } from "../timelines";

const GAZA_PPLANT_BOUNDS: LngLatBoundsLike = [
  [34.39867080760257, 31.451685942978582], // Southwest corner
  [34.40544712745469, 31.458462518018624], // Northeast corner
];

const gazaPowerPlant: GazaEvent = {
  fitBounds: {
    bounds: GAZA_PPLANT_BOUNDS,
    options: {},
  },
  title: "Power Access Overview",
  imgSrc: "/images/gaza-powerplant.jpg",
  kind: "image",
  layerOverrides: [],
};

export const powerAccess = [gazaPowerPlant];
