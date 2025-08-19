import { GAZA_BBOX } from "../../constants/constants";
import type { ImageEvent } from "../timelines";

export const ironFenceAroundStrip: ImageEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Iron Fence Around the Strip",
  layerOverrides: [
    { id: "GAZA_BUFFER_FILL", paintOverrides: { "fill-opacity": 0.5 } },
  ],
  kind: "image",
  imgSrc: "/images/iron-wall.jpg",
};
