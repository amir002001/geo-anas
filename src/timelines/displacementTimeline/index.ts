import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";
import { phaseOne } from "./phases.1";
import { phaseTwo } from "./phases.2";
import { phaseThree } from "./phases.3";
import { phaseFour } from "./phases.4";
import { phaseFive } from "./phases.5";

const initial: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/displacement-timeline.png",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "Displacement Timeline",
};

export const displacementTimeline: Timeline = [
  initial,
  ...phaseOne,
  ...phaseTwo,
  ...phaseThree,
  ...phaseFour,
  ...phaseFive,
];
