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
  imgSrc: "/images/TODO.jpg",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
};

export const logicOfZionism: Timeline = [gazaTakeover, realEstateSales];
