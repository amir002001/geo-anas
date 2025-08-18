import { bbox } from "@turf/turf";
import type { EasingOptions, LngLatBoundsLike } from "mapbox-gl";
import { type LayerId } from "../constants";
import gazaBoundary from "../data/gaza-strip-boundary.json";
import { healthcareTimeline } from "./healthcareTimeline/healthcareTimeline";
import { preOctSeven } from "./preOctSeven";

export interface ILayerOpacity {
  id: LayerId;
  opacity: number;
}

export interface IGazaEvent {
  fitBounds: { bounds: LngLatBoundsLike; options: EasingOptions };
  layerIds: ILayerOpacity[];
  title: string;
}
export type Timeline = IGazaEvent[];
const boundsArray = bbox(gazaBoundary as any); // [minX, minY, maxX, maxY]
const sw: [number, number] = [boundsArray[0], boundsArray[1]];
const ne: [number, number] = [boundsArray[2], boundsArray[3]];

export const timelines: Timeline = [
  {
    fitBounds: {
      bounds: [sw, ne],
      options: {},
    },
    title: "People's Conference for Palestine",
    layerIds: [],
  },
  ...preOctSeven,
  ...healthcareTimeline,
];
