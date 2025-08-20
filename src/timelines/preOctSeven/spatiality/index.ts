import { GAZA_BBOX } from "../../../constants/constants";
import type { GazaEvent } from "../../timelines";
import { refugeeCamps } from "./refugeeCamps";

const population: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "basic",
  title: "Geographic Spatiality",
  layerOverrides: [],
};

export const spatiality = [population, refugeeCamps];
