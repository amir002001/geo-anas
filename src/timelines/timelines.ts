import type {
  EasingOptions,
  LayoutSpecification,
  LngLatBoundsLike,
  PaintSpecification,
} from "mapbox-gl";
import type { LayerId } from "../constants/layers";
import { displacementTimeline } from "./displacementTimeline";
import { postOctSeven } from "./postOctSeven";
import { preOctSeven } from "./preOctSeven";

export interface ILayerOverride {
  id: LayerId;
  paintOverrides: Partial<PaintSpecification>;
  layoutOverrides?: Partial<LayoutSpecification>;
}

export interface IEventBase {
  fitBounds: { bounds: LngLatBoundsLike; options: EasingOptions };
  layerOverrides: ILayerOverride[];
  title: string;
}

export type BasicEvent = IEventBase & {
  kind: "basic";
};

export type ImageOnlyEvent = IEventBase & {
  kind: "image-only";
  imgSrc: string;
};

export type VideoOnlyEvent = IEventBase & {
  kind: "video-only";
  videoSrc: string;
};

export type VideoEvent = IEventBase & {
  kind: "video";
  videoSrc: string;
};

export type ImageEvent = IEventBase & {
  kind: "image";
  imgSrc: string;
};

export type GazaEvent =
  | BasicEvent
  | VideoEvent
  | ImageEvent
  | ImageOnlyEvent
  | VideoOnlyEvent;

export type Timeline = GazaEvent[];

const intro: GazaEvent = {
  kind: "basic",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
    {
      id: "WORLD_CENTER_SYMBOL",
      paintOverrides: { "text-opacity": 1 },
      layoutOverrides: {
        "text-field": "Architecture of Genocide",
        "text-max-width": 1000,
      },
    },
  ],
  title: "Architecture of Genocide",
  fitBounds: {
    bounds: [
      [0, 0],
      [0, 0],
    ],
    options: { maxZoom: 10 },
  },
};

export const timelines: Timeline = [
  intro,
  ...preOctSeven,
  ...postOctSeven,
  ...displacementTimeline,
];
