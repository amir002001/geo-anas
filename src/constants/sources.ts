import { centroid, featureCollection } from "@turf/turf";
import type { SourceSpecification } from "mapbox-gl";
import crossings from "../data/crossings.json";
import gazaDesalinationPlants from "../data/desalination-plants.json";
import evacuationArrows from "../data/evac-arrows.json";
import evacOrders from "../data/evac-orders.json";
import gazaAirportBoundary from "../data/gaza-airport-boundary.json";
import gazaBuffer from "../data/gaza-buffer.json";
import comparisonCities from "../data/gaza-comparison-equivs.json";
import worldwideGazas from "../data/gaza-comparisons.json";
import gazaHospitalsStatus from "../data/gaza-hospital-status.json";
import gazaGovernates from "../data/gaza-state-boundaries.json";
import gazaBoundary from "../data/gaza-strip-boundary.json";
import gazaSeaBlockade from "../data/gaza-strip-sea-blockade.json";
import hiribyaBoundary from "../data/hiribaya.json";
import incidents from "../data/incidents.json";
import afterCeaseOrders from "../data/initial-orders-after-cease.json";
import invasionRoutesNov13 from "../data/invasion-nov-12.json";
import magenOz from "../data/magen-oz.json";
import initialHumanitarian from "../data/may-6-humanitarian.json";
import mefalsim from "../data/mefalsim.json";
import mekorotPipes from "../data/mekorot-pipes.json";
import morag from "../data/morag.json";
import notGridEvacOrders from "../data/not-grid-evac-orders.json";
import oneKmBuffer from "../data/one-km-buffer.json";
import philadelphi from "../data/philadelphi.json";
import populationGrid from "../data/population-blocks.json";
import refugeeCamps from "../data/refugee-camps.json";
import salahAlDin from "../data/salah-al-din.json";
import schoolsAndKindergartens from "../data/schools-and-kindergartens.json";
import waterwells from "../data/water-wells.json";
import wwtp from "../data/wwtp.json";
import { WHOLE_WORLD } from "./constants";
const wwtpCentroids = wwtp.features.map((feature) => centroid(feature as any));

const wwtpPointFeatureCollection = featureCollection(wwtpCentroids);

export type SourceId =
  | "NASSER_INVASION"
  | "AGRICULTURE_DESTRUCTION_IMG"
  | "MORAG"
  | "INVASION_ROUTES_NOV_13"
  | "OCT_13_HOSPITAL_IMG"
  | "GREENHOUSES"
  | "CEASE_FIRE_LINES"
  | "AFTER_CEASE_ORDERS"
  | "COMPARISON_CITIES"
  | "WORLDWIDE_GAZAS"
  | "HOSPITAL_CAPACITY"
  | "HEATHROW_COMP"
  | "E1_PLAN_IMG"
  | "GAZA_TAKEOVER_IMG"
  | "MAGEN_OZ"
  | "GHF_IMG"
  | "GIDEONS_CHARIOT_IMG"
  | "NOT_GRID_EVAC_ORDERS"
  | "GAZA_FRAGMENTATION"
  | "PHILADELPHI"
  | "MEFALSIM"
  | "EVACUATION_ARROWS"
  | "INITIAL_HUMANITARIAN"
  | "POPULATION_GRIDS"
  | "ONE_KM_BUFFER"
  | "EVAC_ORDERS"
  | "WHOLE_WORLD"
  | "GAZA_BOUNDARY"
  | "GAZA_GOVERNATE_BOUNDARIES"
  | "GAZA_SEA_BLOCKADE"
  | "INCIDENTS"
  | "GAZA_BUFFER"
  | "WEST_BANK_PLAN_IMG"
  | "GAZA_DESALINATION_PLANTS"
  | "GAZA_AIRPORT_BOUNDARY"
  | "GAZA_POWER"
  | "HIRIBAYA_BOUNDARY"
  | "CROSSINGS_POINTS"
  | "MEKOROT_PIPES"
  | "GAZA_HOSPITALS_STATUS"
  | "WWTPS"
  | "NAKBA"
  | "NETZARIM"
  | "NAKBA_MAP"
  | "WATERWELLS"
  | "REFUGEE_CAMPS"
  | "KHAN_YOUNIS_FARM_IMG"
  | "SALAH_AL_DIN"
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
      cluster: true,
      clusterMinPoints: 1,
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
    id: "NAKBA_MAP",
    source: {
      type: "image",
      url: "/images/1949-lines.png",
      coordinates: [
        [34.069832374369945, 33.507320647140247],
        [35.786641369820288, 33.507320962391766],
        [35.786641351276074, 30.504430759572813],
        [34.069831614057399, 30.504430833749623],
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
  {
    id: "SALAH_AL_DIN",
    source: {
      data: salahAlDin as any,
      type: "geojson",
    },
  },
  {
    id: "GAZA_GOVERNATE_BOUNDARIES",
    source: {
      data: gazaGovernates as any,
      type: "geojson",
    },
  },
  {
    id: "WHOLE_WORLD",
    source: {
      data: WHOLE_WORLD as any,
      type: "geojson",
    },
  },
  {
    id: "ONE_KM_BUFFER",
    source: {
      data: oneKmBuffer as any,
      type: "geojson",
    },
  },
  {
    id: "NETZARIM",
    source: {
      type: "image",
      url: "/images/netzarim.png",
      coordinates: [
        [34.395989126888701, 31.49887545124438],
        [34.462121251323602, 31.49887545124438],
        [34.462121238255058, 31.447406535957434],
        [34.395989123458449, 31.447406535828691],
      ],
    },
  },
  {
    id: "POPULATION_GRIDS",
    source: {
      type: "geojson",
      data: populationGrid as any,
    },
  },
  {
    id: "INITIAL_HUMANITARIAN",
    source: {
      type: "geojson",
      data: initialHumanitarian as any,
    },
  },
  {
    id: "EVACUATION_ARROWS",
    source: {
      type: "geojson",
      data: evacuationArrows as any,
    },
  },
  {
    id: "INCIDENTS",
    source: {
      type: "geojson",
      data: incidents as any,
    },
  },
  {
    id: "PHILADELPHI",
    source: {
      type: "geojson",
      data: philadelphi as any,
    },
  },
  {
    id: "MEFALSIM",
    source: {
      type: "geojson",
      data: mefalsim as any,
    },
  },
  {
    id: "GAZA_FRAGMENTATION",
    source: {
      type: "image",
      coordinates: [
        [34.177382310598333, 31.621831836854341],
        [34.598312375148247, 31.621831836854348],
        [34.598312412733236, 31.173210806261956],
        [34.177382179050944, 31.173210677630188],
      ],
      url: "/images/fragmentation.png",
    },
  },
  {
    id: "MORAG",
    source: {
      type: "geojson",
      data: morag as any,
    },
  },
  {
    id: "EVAC_ORDERS",
    source: {
      type: "geojson",
      data: evacOrders as any,
    },
  },
  {
    id: "NOT_GRID_EVAC_ORDERS",
    source: {
      type: "geojson",
      data: notGridEvacOrders as any,
    },
  },
  {
    id: "MAGEN_OZ",
    source: {
      type: "geojson",
      data: magenOz as any,
    },
  },
  {
    id: "GHF_IMG",
    source: {
      type: "image",
      url: "/images/ghf-raster.png",
      coordinates: [
        [34.213989599599117, 31.604974442788741],
        [34.633446230415046, 31.59973396775332],
        [34.628490584291583, 31.203230683557873],
        [34.209033070016254, 31.20847277827793],
      ],
    },
  },
  {
    id: "GIDEONS_CHARIOT_IMG",
    source: {
      type: "image",
      url: "/images/gideons-chariot.png",
      coordinates: [
        [34.213989599599117, 31.604974442788741],
        [34.633446230415046, 31.59973396775332],
        [34.628490584291583, 31.203230683557873],
        [34.209033070016254, 31.20847277827793],
      ],
    },
  },
  {
    id: "WEST_BANK_PLAN_IMG",
    source: {
      type: "image",
      url: "/images/west-bank-plan.png",
      coordinates: [
        [34.851649501759958, 32.598047730934631],
        [35.891047803495709, 32.598067520536446],
        [35.891047332314727, 31.3020615747599],
        [34.851653860184172, 31.3020615747599],
      ],
    },
  },
  {
    id: "E1_PLAN_IMG",
    source: {
      type: "image",
      url: "/images/E1_plan_area.jpg",
      coordinates: [
        [35.216478468108839, 31.845700784153095],
        [35.369784155028711, 31.845701490924586],
        [35.369784390619202, 31.744750491382483],
        [35.216479042360675, 31.744750439847078],
      ],
    },
  },
  {
    id: "GAZA_TAKEOVER_IMG",
    source: {
      type: "image",
      url: "/images/gaza-takeover.png",
      coordinates: [
        [34.19373742358529, 31.624150854162252],
        [34.573584695056937, 31.624269591773167],
        [34.573586579780894, 31.194855964280698],
        [34.19384956466223, 31.194855964280677],
      ],
    },
  },
  {
    id: "HEATHROW_COMP",
    source: {
      type: "image",
      url: "/images/heathrow-comp.png",
      coordinates: [
        [-1.559897133489262, 52.318821907926392],
        [0.396326493144795, 52.318860149631277],
        [0.396326493144797, 51.064633906387733],
        [-1.559896577392154, 51.064634605343997],
      ],
    },
  },
  {
    id: "COMPARISON_CITIES",
    source: {
      type: "geojson",
      data: comparisonCities as any,
    },
  },
  {
    id: "WORLDWIDE_GAZAS",
    source: {
      type: "geojson",
      data: worldwideGazas as any,
    },
  },
  {
    id: "AFTER_CEASE_ORDERS",
    source: {
      type: "geojson",
      data: afterCeaseOrders as any,
    },
  },
  {
    id: "CEASE_FIRE_LINES",
    source: {
      type: "image",
      coordinates: [
        [34.372213428099833, 31.778721282443485],
        [34.785593035685295, 31.492023270994665],
        [34.364661576019074, 31.050733426373046],
        [33.951563969636211, 31.338442088094553],
      ],
      url: "/images/ceasefire-lines.png",
    },
  },
  {
    id: "HOSPITAL_CAPACITY",
    source: {
      type: "image",
      url: "/images/hospital-capacity.png",
      coordinates: [
        [34.201353978969692, 31.652743813533235],
        [34.604224361808228, 31.65274556509349],
        [34.604224389176366, 31.159506221979825],
        [34.201356606332368, 31.159506057771054],
      ],
    },
  },
  {
    id: "OCT_13_HOSPITAL_IMG",
    source: {
      type: "image",
      url: "/images/oct-13-hospitals.png",
      coordinates: [
        [34.138582219068098, 31.632459951994644],
        [34.65289154586155, 31.632684151708478],
        [34.652891107971477, 31.191459114841106],
        [34.13858720006759, 31.191459114841106],
      ],
    },
  },
  {
    id: "INVASION_ROUTES_NOV_13",
    source: {
      type: "geojson",
      data: invasionRoutesNov13 as any,
    },
  },
  {
    id: "NASSER_INVASION",
    source: {
      type: "image",
      coordinates: [
        [34.263836054110975, 31.379755178765041],
        [34.328329743927924, 31.379755182613692],
        [34.328329743927974, 31.324517977932913],
        [34.263836148739131, 31.324517901387676],
      ],
      url: "/images/nasser-invasion.png",
    },
  },
  {
    id: "AGRICULTURE_DESTRUCTION_IMG",
    source: {
      type: "image",
      url: "/images/agriculture-destruction.png",
      coordinates: [
        [34.181668787008533, 31.612334284985671],
        [34.58062884020007, 31.61233423024942],
        [34.580628511782514, 31.201824717053753],
        [34.181677380601094, 31.201828220174299],
      ],
    },
  },
  {
    id: "GREENHOUSES",
    source: {
      type: "image",
      url: "/images/greenhouses.png",
      coordinates: [
        [34.171257348553745, 31.627772646679659],
        [34.609417293224084, 31.627772646679642],
        [34.60941727954004, 31.17578602207708],
        [34.171257228818213, 31.175786020366573],
      ],
    },
  },
] as const;

export const SOURCE_IDS = SOURCES.map((s) => s.id) as SourceId[];
export const SOURCE_MAP = new Map(SOURCES.map((s) => [s.id, s]));
