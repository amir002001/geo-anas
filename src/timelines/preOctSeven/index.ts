import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";
import { balfour } from "./balfour";
import { crossings } from "./crossings";
import { economy } from "./economy";
import { education } from "./education";
import { eighteenYearBlockade } from "./eighteenYearBlockade";
import { ironFenceAroundStrip } from "./fenceAroundTheStrip";
import { foodAccessAndAgriculture } from "./foodAccessAndAgriculture";
import { healthcare } from "./healthcare";
import { hiribya } from "./hiribya";
import { powerAccess } from "./powerAccess";
import { spatiality } from "./spatiality";
import { water } from "./water";

const intro: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/1.jpg",
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Pre-October 7",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { maxZoom: 10 },
  },
};

export const preOctSeven: Timeline = [
  intro,
  ...eighteenYearBlockade,
  ...ironFenceAroundStrip,
  ...balfour,
  ...hiribya,
  ...crossings,
  ...spatiality,
  ...foodAccessAndAgriculture,
  ...water,
  ...powerAccess,
  ...healthcare,
  ...economy,
  ...education,
];
