import type { SourceSpecification } from "mapbox-gl";
import gazaAirportBoundary from "../data/gaza-airport-boundary.json";
import gazaBoundary from "../data/gaza-strip-boundary.json";
import gazaSeaBlockade from "../data/gaza-strip-sea-blockade.json";

export type SourceId =
  | "GAZA_BOUNDARY"
  | "GAZA_SEA_BLOCKADE"
  | "GAZA_AIRPORT_BOUNDARY";

export const SOURCES: { id: SourceId; source: SourceSpecification }[] = [
  {
    id: "GAZA_BOUNDARY",
    source: { type: "geojson", data: gazaBoundary as any },
  },
  {
    id: "GAZA_SEA_BLOCKADE",
    source: { type: "geojson", data: gazaSeaBlockade as any },
  },
  {
    id: "GAZA_AIRPORT_BOUNDARY",
    source: {
      type: "geojson",
      data: gazaAirportBoundary as any,
    },
  },
] as const;

export const SOURCE_IDS = SOURCES.map((s) => s.id) as SourceId[];
export const SOURCE_MAP = new Map(SOURCES.map((s) => [s.id, s]));
