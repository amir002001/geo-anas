import type {
  EasingOptions,
  LngLatBoundsLike,
  PaintSpecification,
} from "mapbox-gl";
import { GAZA_BBOX } from "../constants/constants";
import type { LayerId } from "../constants/layers";
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

export const timelines: Timeline = [
  {
    fitBounds: {
      bounds: GAZA_BBOX,
      options: {},
    },
    title: "People's Conference for Palestine",
    layerOverrides: [],
  },
  ...preOctSeven,
  ...healthcareTimeline,
];
