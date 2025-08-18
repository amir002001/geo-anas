export const GAZA_LONGITUDE = 34.37;
export const GAZA_LATITUDE = 31.41;
export const GAZA_DEFAULT_ZOOM = 10.5;

export const SOURCE_IDS = {
  GAZA_BOUNDARY: "GAZA_BOUNDARY",
};

export const LAYER_IDS = {
  GAZA_BLOCKADE_RED: "GAZA_BLOCKADE_RED",
} as const;

export type LayerId = keyof typeof LAYER_IDS;
