import { bbox } from "@turf/turf";
import type { LngLatBoundsLike } from "mapbox-gl";
import gazaBoundary from "../data/gaza-strip-boundary.json";

const boundsArray = bbox(gazaBoundary as any); // [minX, minY, maxX, maxY]

const sw: [number, number] = [boundsArray[0], boundsArray[1]];
const ne: [number, number] = [boundsArray[2], boundsArray[3]];

export const GAZA_BBOX = [sw, ne] as LngLatBoundsLike;

export const PALESTINE_BBOX: LngLatBoundsLike = [
  [32.91672330531775, 29.09635466516708],
  [37.098283800403294, 33.67759005626652],
];

export const GAZA_PPLANT_BOUNDS: LngLatBoundsLike = [
  [34.39367080760257, 31.451685942978582], // Southwest corner
  [34.40544712745469, 31.458462518018624], // Northeast corner
];
