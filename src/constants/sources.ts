import type { SourceSpecification } from "mapbox-gl";
import crossings from "../data/crossings.json";
import gazaDesalinationPlants from "../data/desalination-plants.json";
import gazaAirportBoundary from "../data/gaza-airport-boundary.json";
import gazaBuffer from "../data/gaza-buffer.json";
import gazaHospitalsStatus from "../data/gaza-hospital-status.json";
import gazaBoundary from "../data/gaza-strip-boundary.json";
import gazaSeaBlockade from "../data/gaza-strip-sea-blockade.json";
import hiribyaBoundary from "../data/hiribaya.json";
import gazaUniversities from "../data/universities.json";

export type SourceId =
  | "GAZA_BOUNDARY"
  | "GAZA_SEA_BLOCKADE"
  | "GAZA_BUFFER"
  | "GAZA_DESALINATION_PLANTS"
  | "GAZA_AIRPORT_BOUNDARY"
  | "HIRIBAYA_BOUNDARY"
  | "CROSSINGS_POINTS"
  | "GAZA_HOSPITALS_STATUS"
  | "GAZA_UNIVERSITIES";
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
  {
    id: "GAZA_BUFFER",
    source: {
      type: "geojson",
      data: gazaBuffer as any,
    },
  },
  {
    id: "HIRIBAYA_BOUNDARY",
    source: {
      type: "geojson",
      data: hiribyaBoundary as any,
    },
  },
  {
    id: "CROSSINGS_POINTS",
    source: {
      type: "geojson",
      data: crossings as any,
    },
  },
  {
    id: "GAZA_HOSPITALS_STATUS",

    source: {
      type: "geojson",
      data: gazaHospitalsStatus as any,
    },
  },
  {
    id: "GAZA_UNIVERSITIES",
    source: {
      type: "geojson",
      data: gazaUniversities as any,
    },
  },
  {
    id: "GAZA_DESALINATION_PLANTS",
    source: {
      type: "geojson",
      data: gazaDesalinationPlants as any,
    },
  },
] as const;

export const SOURCE_IDS = SOURCES.map((s) => s.id) as SourceId[];
export const SOURCE_MAP = new Map(SOURCES.map((s) => [s.id, s]));
