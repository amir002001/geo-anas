import type { Timeline } from "../timelines";
import { crossings } from "./crossings";
import { eighteenYearBlockade } from "./eighteenYearBlockade";
import { ironFenceAroundStrip } from "./fenceAroundTheStrip";
import { hiribya } from "./hiribya";

export const preOctSeven: Timeline = [
  ...eighteenYearBlockade,
  ironFenceAroundStrip,
  ...hiribya,
  ...crossings,
];
