import type { EasingOptions } from "mapbox-gl";
import { type LayerProps, type SourceProps } from "react-map-gl/mapbox";
import { GAZA_DEFAULT_ZOOM, GAZA_LATITUDE, GAZA_LONGITUDE } from "../constants";
import { displacementTimeline } from "./displacementTimeline/displacementTimeline";
import { healthcareTimeline } from "./healthcareTimeline/healthcareTimeline";
import json from "./sample.json";

export interface GazaEvent {
  flyTo: EasingOptions;
  sources: {
    props: SourceProps;
    layers: LayerProps[];
  }[];
  title: string;
}
export type Timeline = GazaEvent[];

export const timelines: Timeline = [
  {
    flyTo: { zoom: GAZA_DEFAULT_ZOOM, center: [GAZA_LONGITUDE, GAZA_LATITUDE] },
    title: "People's Conference for Palestine",
    sources: [
      {
        props: { id: "vehicles", type: "geojson", data: json as any },
        layers: [
          {
            type: "line",
            paint: {
              "line-color": "#FF0000",
            },
          },
        ],
      },
    ],
  },
  ...displacementTimeline,
  ...healthcareTimeline,
];
