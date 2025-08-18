import { bbox } from "@turf/turf";
import type {
  EasingOptions,
  LngLatBoundsLike,
  PaintSpecification,
} from "mapbox-gl";
import type { LayerId } from "../constants/layers";
import gazaBoundary from "../data/gaza-strip-boundary.json";
import { healthcareTimeline } from "./healthcareTimeline/healthcareTimeline";
import { preOctSeven } from "./preOctSeven";

export interface ILayerOverride {
  id: LayerId;
  paintOverrides: Partial<PaintSpecification>;
}

export interface IGazaEvent {
  fitBounds: { bounds: LngLatBoundsLike; options: EasingOptions };
  layerOverrides: ILayerOverride[];
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
    layerOverrides: [],
  },
  ...preOctSeven,
  ...healthcareTimeline,
];
