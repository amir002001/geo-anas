import type {
  EasingOptions,
  LngLatBoundsLike,
  PaintSpecification,
} from "mapbox-gl";
import type { LayerId } from "../constants/layers";
import { healthcareTimeline } from "./healthcareTimeline/healthcareTimeline";
import { postOctSeven } from "./postOctSeven";
import { preOctSeven } from "./preOctSeven";

export interface ILayerOverride {
  id: LayerId;
  paintOverrides: Partial<PaintSpecification>;
}

export interface IEventBase {
  fitBounds: { bounds: LngLatBoundsLike; options: EasingOptions };
  layerOverrides: ILayerOverride[];
  title: string;
}

export type BasicEvent = IEventBase & {
  kind: "basic";
};

export type VideoEvent = IEventBase & {
  kind: "video";
  videoSrc: string;
};

export type ImageEvent = IEventBase & {
  kind: "image";
  imgSrc: string;
};

export type GazaEvent = BasicEvent | VideoEvent | ImageEvent;

export type Timeline = GazaEvent[];

export const timelines: Timeline = [
  ...preOctSeven,
  ...postOctSeven,
  ...healthcareTimeline,
];
