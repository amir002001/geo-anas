import {
  GAZA_DEFAULT_ZOOM,
  GAZA_LATITUDE,
  GAZA_LONGITUDE,
} from "../../constants";
import type { IGazaEvent } from "../timelines";

export const eighteenYearBlockade: IGazaEvent = {
  flyTo: { zoom: GAZA_DEFAULT_ZOOM, center: [GAZA_LONGITUDE, GAZA_LATITUDE] },
  title: "18-Year Blockade",
  layerIds: [{ id: "GAZA_BLOCKADE_RED", opacity: 0.5 }],
};
