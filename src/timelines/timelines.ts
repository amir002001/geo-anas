import type { EasingOptions } from "mapbox-gl";
import { displacementTimeline } from "./displacementTimeline/displacementTimeline";
import { healthcareTimeline } from "./healthcareTimeline/healthcareTimeline";
import { GAZA_DEFAULT_ZOOM, GAZA_LATITUDE, GAZA_LONGITUDE } from "../constants";

export interface GazaEvent {
  flyTo: EasingOptions;
  layers: any[];
  title: string;
}
export type Timeline = GazaEvent[];

export const timelines: Timeline = [
  {
    flyTo: { zoom: GAZA_DEFAULT_ZOOM, center: [GAZA_LONGITUDE, GAZA_LATITUDE] },
    title: "People's Conference for Palestine",
    layers: [],
  },
  ...displacementTimeline,
  ...healthcareTimeline,
];
