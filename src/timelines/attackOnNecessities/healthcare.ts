import { GAZA_BBOX } from "../../constants/constants";
import { IMAGE_MAP } from "../../constants/images";
import type { GazaEvent, Timeline } from "../timelines";

const attackOnHospitals: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/hospital-press-conf.jpg",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Attack on Hospitals",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
};

const destroyedHospitals: GazaEvent = {
  kind: "image",
  imgSrc: "/images/shifa-destroyed.jpg",
  title: "All Hospitals Bombed",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    {
      id: "GAZA_HOSPITALS_STATUS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("hospital-destroyed"),
        "icon-size": 1,
      },
    },
  ],
};

export const healthcare: Timeline = [attackOnHospitals, destroyedHospitals];
