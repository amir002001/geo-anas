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
  kind: "basic",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
    {
      id: "WORLD_CENTER_SYMBOL",
      paintOverrides: { "text-opacity": 1 },
      layoutOverrides: { "text-field": "Pre-October 7" },
    },
  ],
  title: "Pre-October 7",
  fitBounds: {
    bounds: [
      [0, 0],
      [0, 0],
    ],
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
