import { GAZA_BBOX } from "../constants/constants";
import type { GazaEvent, Timeline } from "./timelines";

const anasLastWords: GazaEvent = {
  kind: "video-only",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Anas's last words",
  videoSrc: "/videos/anas-last-words.mp4",
};

export const anas: Timeline = [anasLastWords];
