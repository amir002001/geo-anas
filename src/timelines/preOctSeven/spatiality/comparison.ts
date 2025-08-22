import type { GazaEvent } from "../../timelines";

const newYork: GazaEvent = {
  kind: "image",
  layerOverrides: [],
  title: "Comparison to New York",
  fitBounds: {
    bounds: [
      [-74.22392511800241, 40.48898151525042],
      [-73.58154782338924, 41.13135880986359],
    ],
    options: { duration: 3000 },
  },
  imgSrc: "/images/nyc.jpg",
};
const detroit: GazaEvent = {
  kind: "image",
  layerOverrides: [],
  title: "Comparison to Detroit",
  fitBounds: {
    bounds: [
      [-83.23182146823217, 42.18178769703899],
      [-82.92309062238544, 42.4905185428857],
    ],
    options: { duration: 3000 },
  },
  imgSrc: "/images/detroit.jpg",
};
const toronto: GazaEvent = {
  kind: "image",
  layerOverrides: [],
  title: "Comparison to Toronto",
  fitBounds: {
    bounds: [
      [-79.60949566368198, 43.467500152163055],
      [-79.33554830104502, 43.741447514800015],
    ],
    options: { duration: 3000 },
  },
  imgSrc: "/images/toronto.jpg",
};

export const comparisons = [toronto, newYork, detroit];
