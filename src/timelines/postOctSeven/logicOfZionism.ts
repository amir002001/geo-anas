import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const gazaTakeover: GazaEvent = {
  kind: "image-only",
  title: "Gaza Takeover",
  imgSrc: "/images/gaza-takeover.jpg",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
};

const realEstateSales: GazaEvent = {
  kind: "image-only",
  title: "Real Estate Sales",
  imgSrc: "/images/israel-sales.png",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
};

const gallantSpeech: GazaEvent = {
  kind: "video-only",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  videoSrc: "/videos/yoav-gallant.mp4",
  layerOverrides: [],

  title: "Yoav Gallant - October 9th",
};

export const logicOfZionism: Timeline = [
  gazaTakeover,
  realEstateSales,
  gallantSpeech,
];
