import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const attackOnHospitals: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/healthcare/hospital-press-conf.jpg",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Attack on Hospitals",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { maxZoom: 10 },
  },
};

export const healthcare: Timeline = [attackOnHospitals];
