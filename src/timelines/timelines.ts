import type {
  EasingOptions,
  FilterSpecification,
  LayoutSpecification,
  LngLatBoundsLike,
  PaintSpecification,
} from "mapbox-gl";
import { GAZA_BBOX } from "../constants/constants";
import type { LayerId } from "../constants/layers";
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

const weBack: GazaEvent = {
  kind: "video-only",
  videoSrc: "/videos/we-be-back.mp4",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "We Back",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { maxZoom: 10 },
  },
};

const anasMyFriend: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/anas-my-friend.jpg",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
  title: "Anas my friend",
};

const childrenPlaying: GazaEvent = {
  kind: "video-only",
  videoSrc: "/videos/children-playing.mp4",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "children playing",
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
  weBack,
  anasMyFriend,
  childrenPlaying,
];
