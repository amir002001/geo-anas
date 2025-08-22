import { GAZA_BBOX } from "../../../constants/constants";
import type { GazaEvent } from "../../timelines";

export const salahAlDin: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { duration: 2000 },
  },
  title: "Salah Al-Din Road",
  kind: "image",
  imgSrc: "/images/salah-al-din.jpg",
  layerOverrides: [
    {
      id: "SALAH_AL_DIN_LINE",
      paintOverrides: {
        "line-opacity": 1,
      },
    },
  ],
};
