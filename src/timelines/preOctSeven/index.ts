import type { Timeline } from "../timelines";
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

export const preOctSeven: Timeline = [
  ...eighteenYearBlockade, // ✅
  ...ironFenceAroundStrip, // ✅
  ...balfour, // TODO
  ...hiribya, // ✅
  ...crossings, // ✅
  ...spatiality, // TODO
  ...foodAccessAndAgriculture, // TODO
  ...water, // TODO
  ...powerAccess, // TODO
  ...healthcare, // TODO
  ...economy, // TODO
  ...education, // TODO
];
