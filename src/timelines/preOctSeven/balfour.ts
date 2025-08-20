import { PALESTINE_BBOX } from "../../constants/constants";
import type { GazaEvent } from "../timelines";

const nakba: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: PALESTINE_BBOX,
    options: {},
  },
  title: "Balfour Declaration",
  layerOverrides: [
    {
      id: "NAKBA_RASTER",
      paintOverrides: {
        "raster-opacity": 1,
      },
    },
  ],
};

export const balfour = [nakba];
