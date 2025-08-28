import { GAZA_BBOX } from "../../../constants/constants";
import type { GazaEvent } from "../../timelines";

const populationDensity: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { maxZoom: 9 },
  },
  kind: "basic",
  title: "Density of Gaza",
  layerOverrides: [
    {
      id: "GAZA_LAND_BLOCKADE_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
    {
      id: "GAZA_SPATIALITY_SYMBOL",
      paintOverrides: { "text-opacity": 1 },
    },
  ],
};

const toronto: GazaEvent = {
  kind: "basic",
  layerOverrides: [
    {
      id: "COMPARISON_CITIES_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
    {
      id: "COMPARISON_CITIES_SYMBOL",
      paintOverrides: { "text-opacity": 1 },
      layoutOverrides: { "text-offset": [-1, -5] },
    },
    {
      id: "WORLDWIDE_GAZAS_FILL",
      paintOverrides: { "fill-opacity": 0.4 },
    },
  ],
  title: "Comparison to Toronto",
  fitBounds: {
    bounds: [
      [-79.6392832, 43.57960820000001],
      [-79.11321929999998, 43.8554425],
    ],
    options: { duration: 3000, maxZoom: 9 },
  },
};

const washington: GazaEvent = {
  kind: "basic",
  layerOverrides: [
    {
      id: "COMPARISON_CITIES_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
    {
      id: "COMPARISON_CITIES_SYMBOL",
      paintOverrides: { "text-opacity": 1 },
      layoutOverrides: { "text-offset": [-3, -5] },
    },
    {
      id: "WORLDWIDE_GAZAS_FILL",
      paintOverrides: { "fill-opacity": 0.4 },
    },
  ],
  title: "Comparison to Washington D.C.",
  fitBounds: {
    bounds: [
      [-77.1197949, 38.7916303],
      [-76.909366, 38.995968],
    ],
    options: { duration: 3000, maxZoom: 9 },
  },
};

const montreal: GazaEvent = {
  kind: "basic",
  layerOverrides: [
    {
      id: "COMPARISON_CITIES_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
    {
      id: "COMPARISON_CITIES_SYMBOL",
      paintOverrides: { "text-opacity": 1 },
      layoutOverrides: { "text-offset": [-3, -5] },
    },
    {
      id: "WORLDWIDE_GAZAS_FILL",
      paintOverrides: { "fill-opacity": 0.4 },
    },
  ],
  title: "Comparison to Montreal",
  fitBounds: {
    bounds: [
      [-73.9958013, 45.3984821],
      [-73.47429519999999, 45.7047897],
    ],
    options: { duration: 3000, maxZoom: 9 },
  },
};

export const comparisons = [populationDensity, toronto, montreal, washington];
