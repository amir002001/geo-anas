import type { Timeline } from "../timelines";
import { agriculture } from "./agriculture";
import { aid } from "./aid";
import { energy } from "./energy";
import { healthcare } from "./healthcare";
import { infraEdu } from "./infraEdu";
import { journalists } from "./journalists";
import { spatialControls } from "./spatialControls";
import { water } from "./water";

export const attackOnNecessities: Timeline = [
  ...infraEdu,
  ...energy,
  ...healthcare,
  ...water,
  ...agriculture,
  ...aid,
  ...spatialControls,
  ...journalists,
];
