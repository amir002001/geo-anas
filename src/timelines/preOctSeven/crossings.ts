import type { LngLatBoundsLike } from "mapbox-gl";
import type { GazaEvent } from "../timelines";

const EREZ_CROSSING_BBOX: LngLatBoundsLike = [
  [34.54064568066178, 31.55441171238642],
  [34.54894483683697, 31.562710868561602],
];

const erezCrossing: GazaEvent = {
  fitBounds: {
    bounds: EREZ_CROSSING_BBOX,
    options: { duration: 3000 },
  },
  title: "Erez Crossing",
  layerOverrides: [
    {
      id: "CROSSINGS_SYMBOL",
      paintOverrides: { "icon-opacity": 1, "text-opacity": 1 },
    },
  ],
  kind: "image",
  imgSrc: "/images/crossings/erez.jpg",
};

const RAFAH_CROSSING_BBOX: LngLatBoundsLike = [
  [34.25752407369624, 31.246387235912575],
  [34.26159859208618, 31.250461907743887],
];

const RafahCrossing: GazaEvent = {
  fitBounds: {
    bounds: RAFAH_CROSSING_BBOX,
    options: { duration: 3000 },
  },
  title: "Rafah Crossing",
  layerOverrides: [
    {
      id: "CROSSINGS_SYMBOL",
      paintOverrides: { "icon-opacity": 1, "text-opacity": 1 },
    },
  ],
  kind: "image",
  imgSrc: "/images/crossings/rafah.jpg",
};

const KEREM_CROSSING_BBOX: LngLatBoundsLike = [
  [34.26851297271083, 31.219910330715464],
  [34.27092865640106, 31.222326014405695],
];

const keremCrossing: GazaEvent = {
  fitBounds: {
    bounds: KEREM_CROSSING_BBOX,
    options: { duration: 3000, maxZoom: 15 },
  },
  title: "Kerem Shalom Crossing",
  layerOverrides: [
    {
      id: "CROSSINGS_SYMBOL",
      paintOverrides: { "icon-opacity": 1, "text-opacity": 1 },
    },
  ],
  kind: "image",
  imgSrc: "/images/crossings/kerem.jpg",
};

export const crossings = [erezCrossing, RafahCrossing, keremCrossing];
