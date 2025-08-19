import { bbox } from "@turf/turf";
import type { LngLatBoundsLike } from "mapbox-gl";
import gazaBoundary from "../data/gaza-strip-boundary.json";

const boundsArray = bbox(gazaBoundary as any); // [minX, minY, maxX, maxY]

const sw: [number, number] = [boundsArray[0], boundsArray[1]];
const ne: [number, number] = [boundsArray[2], boundsArray[3]];

export const GAZA_BBOX = [sw, ne] as LngLatBoundsLike;
