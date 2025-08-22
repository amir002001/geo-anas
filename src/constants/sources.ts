import { centroid, featureCollection } from "@turf/turf";
import type { SourceSpecification } from "mapbox-gl";
import crossings from "../data/crossings.json";
import gazaDesalinationPlants from "../data/desalination-plants.json";
import gazaAirportBoundary from "../data/gaza-airport-boundary.json";
import gazaBuffer from "../data/gaza-buffer.json";
import gazaHospitalsStatus from "../data/gaza-hospital-status.json";
import gazaBoundary from "../data/gaza-strip-boundary.json";
import gazaSeaBlockade from "../data/gaza-strip-sea-blockade.json";
import hiribyaBoundary from "../data/hiribaya.json";
import mekorotPipes from "../data/mekorot-pipes.json";
import refugeeCamps from "../data/refugee-camps.json";
import schoolsAndKindergartens from "../data/schools-and-kindergartens.json";
import waterwells from "../data/water-wells.json";
import wwtp from "../data/wwtp.json";

const wwtpCentroids = wwtp.features.map((feature) => centroid(feature as any));

const wwtpPointFeatureCollection = featureCollection(wwtpCentroids);

export type SourceId =
  | "GAZA_BOUNDARY"
  | "GAZA_SEA_BLOCKADE"
  | "GAZA_BUFFER"
  | "GAZA_DESALINATION_PLANTS"
  | "GAZA_AIRPORT_BOUNDARY"
  | "GAZA_POWER"
  | "HIRIBAYA_BOUNDARY"
  | "CROSSINGS_POINTS"
  | "MEKOROT_PIPES"
  | "GAZA_HOSPITALS_STATUS"
  | "WWTPS"
  | "NAKBA"
  | "WATERWELLS"
  | "REFUGEE_CAMPS"
  | "KHAN_YOUNIS_FARM_IMG"
  | "SCHOOLS_AND_KINDERGARTENS";
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
    id: "SCHOOLS_AND_KINDERGARTENS",
    source: {
      type: "geojson",
      data: schoolsAndKindergartens as any,
      cluster: true,
      clusterMinPoints: 1,
    },
  },
  {
    id: "GAZA_DESALINATION_PLANTS",
    source: {
      type: "geojson",
      data: gazaDesalinationPlants as any,
    },
  },
  {
    id: "MEKOROT_PIPES",
    source: {
      type: "geojson",
      data: mekorotPipes as any, // Placeholder for Mekorot pipes
    },
  },
  {
    id: "WWTPS",
    source: {
      type: "geojson",
      data: wwtpPointFeatureCollection as any,
    },
  },
  {
    id: "WATERWELLS",
    source: {
      type: "geojson",
      data: waterwells as any,
    },
  },
  {
    id: "REFUGEE_CAMPS",
    source: {
      type: "geojson",
      data: refugeeCamps as any,
    },
  },
  {
    id: "GAZA_POWER",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [34.400238922538904, 31.455255737321906],
          type: "Point",
        },
      },
    },
  },

  {
    id: "NAKBA",
    source: {
      type: "image",
      url: "/images/nakba.png",
      coordinates: [
        [32.918083945246565, 33.676268665566397], // TL
        [37.098231468098355, 33.677590056266517], // TR
        [37.098283800403294, 29.096406997472034], // BR
        [32.916723305317753, 29.09635466516708], // BL
      ],
    },
  },
  {
    id: "KHAN_YOUNIS_FARM_IMG",
    source: {
      type: "image",
      url: "/images/khan-younis-farms.png",

      coordinates: [
        [34.246700387470071, 31.36872213373891],
        [34.288209363058691, 31.365754022611231],
        [34.284607406275384, 31.315381029733061],
        [34.243098408354257, 31.318349201546965],
      ],
    },
  },
] as const;

export const SOURCE_IDS = SOURCES.map((s) => s.id) as SourceId[];
export const SOURCE_MAP = new Map(SOURCES.map((s) => [s.id, s]));
