import type { EasingOptions } from "mapbox-gl";
import {
  GAZA_DEFAULT_ZOOM,
  GAZA_LATITUDE,
  GAZA_LONGITUDE,
  type LayerId,
} from "../constants";
import { healthcareTimeline } from "./healthcareTimeline/healthcareTimeline";
import { preOctSeven } from "./preOctSeven";

export interface ILayerOpacity {
  id: LayerId;
  opacity: number;
}

export interface IGazaEvent {
  flyTo: EasingOptions;
  layerIds: ILayerOpacity[];
  title: string;
}
export type Timeline = IGazaEvent[];

export const timelines: Timeline = [
  {
    flyTo: { zoom: GAZA_DEFAULT_ZOOM, center: [GAZA_LONGITUDE, GAZA_LATITUDE] },
    title: "People's Conference for Palestine",
    layerIds: [],
  },
  ...preOctSeven,
  ...healthcareTimeline,
];
