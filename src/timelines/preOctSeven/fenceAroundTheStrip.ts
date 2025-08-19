import { GAZA_BBOX } from "../../constants/constants";
import type { IGazaEvent } from "../timelines";

export const ironFenceAroundStrip: IGazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Iron Fence Around the Strip",
  layerOverrides: [
    { id: "GAZA_FENCE_OUTLINE", paintOverrides: { "line-opacity": 0.5 } },
  ],
};
