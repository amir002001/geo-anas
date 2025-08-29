import type {
  EasingOptions,
  FilterSpecification,
  LayoutSpecification,
  LngLatBoundsLike,
  PaintSpecification,
} from "mapbox-gl";
import { GAZA_BBOX } from "../constants/constants";
import type { LayerId } from "../constants/layers";
import { anas } from "./anas";
import { attackOnNecessities } from "./attackOnNecessities";
import { displacementTimeline } from "./displacementTimeline";
import { postOctSeven } from "./postOctSeven";
import { preOctSeven } from "./preOctSeven";

export interface ILayerOverride {
  id: LayerId;
  paintOverrides: Partial<PaintSpecification>;
  layoutOverrides?: Partial<LayoutSpecification>;
  filterOverrides?: FilterSpecification;
}

export interface IEventBase {
  fitBounds: { bounds: LngLatBoundsLike; options: EasingOptions };
  layerOverrides: ILayerOverride[];
  title: string;
  audioOverrideSrc?: string;
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
  kind: "image-only",
  imgSrc: "/images/titles/title.jpg",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Architecture of Genocide",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { maxZoom: 10 },
  },
};
const whatAre: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/what-areas.jpg",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Architecture of Genocide",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { maxZoom: 10 },
  },
};
const theAres: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/the-ares.jpg",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Architecture of Genocide",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { maxZoom: 10 },
  },
};

export const timelines: Timeline = [
  intro,
  whatAre,
  theAres,
  ...preOctSeven,
  ...postOctSeven,
  ...displacementTimeline,
  ...attackOnNecessities,
  ...anas,
];
