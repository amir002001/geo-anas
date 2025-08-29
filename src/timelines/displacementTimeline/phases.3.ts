import { GAZA_BBOX } from "../../constants/constants";
import { IMAGE_MAP } from "../../constants/images";
import humanitarianZoneData from "../../data/may-6-humanitarian.json";
import type { GazaEvent, ILayerOverride, Timeline } from "../timelines";

const init: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/32.jpg",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: {
        "fill-opacity": 1,
      },
    },
  ],

  title: "Displacement of Rafah",
};

const commons: ILayerOverride[] = [
  {
    id: "POPULATION_BLOCKS_LINE",
    paintOverrides: {
      "line-opacity": 1,
    },
  },
  {
    id: "INITIAL_HUMANITARIAN_FILL",
    paintOverrides: {
      "fill-opacity": 0.8,
    },
  },
  {
    id: "EVAC_ORDERS_FILL",
    paintOverrides: {
      "fill-opacity": 0.6,
      "fill-color": "#F6DC86",
    },
    filterOverrides: ["<=", ["get", "order_date"], "2024-05-06"],
  },
  {
    id: "ONE_KM_BUFFER_FILL",
    paintOverrides: {
      "fill-opacity": 0.6,
      "fill-color": "#F6DC86",
    },
  },
  {
    id: "NOT_GRID_EVAC_ORDERS_FILL",
    paintOverrides: {
      "fill-opacity": 0.6,
      "fill-color": "#F6DC86",
    },
    filterOverrides: ["<=", ["get", "order_date"], "2024-05-06"],
  },
  {
    id: "GAZA_GOVERNATES_POPULATION_FILL",
    paintOverrides: {
      "fill-color": "#F6DC86",
      "fill-opacity": [
        "match",
        ["get", "name"],
        "Gaza",
        0.5,
        "North Gaza",
        0.5,
        0,
      ],
    },
  },
];

const initialHumanitarianZone: GazaEvent = {
  kind: "basic",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    ...commons,
    {
      id: "EVACUATION_ARROWS_FILL",
      paintOverrides: { "fill-opacity": 1 },
      filterOverrides: ["==", ["get", "date"], "2024-05-06"],
    },
  ],
  title: "Displacement and Humanitarian Zone",
};

const rafahAttack: GazaEvent = {
  kind: "video",
  videoSrc: "/videos/rafah-attack.mp4",
  fitBounds: {
    bounds: [
      [34.24146077161763, 31.3093292096179],
      [34.24146077161763, 31.3093292096179],
    ],
    options: { maxZoom: 14 },
  },
  layerOverrides: [...commons],
  title: "Displacement and Humanitarian Zone",
};

const occupationOfPhiladelphi: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.21903652189556, 31.220020627423352],
      [34.278562120058204, 31.32819975783118],
    ],
    options: {},
  },
  kind: "image",
  imgSrc: "/images/philadelphi-occupation.jpg",
  layerOverrides: [
    {
      id: "PHILADELPHI_FILL",
      paintOverrides: {
        "fill-opacity": 0.5,
      },
    },
  ],
  title: "Occupation of the Philadelphi Corridor",
};

const attackOnHumanitarianZone: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.29959, 31.3779],
      [34.29959, 31.3779],
    ],
    options: { maxZoom: 14 },
  },
  kind: "video",
  videoSrc: "/videos/humuanitarian-zone.mp4",

  layerOverrides: [
    {
      id: "INITIAL_HUMANITARIAN_FILL",
      paintOverrides: {
        "fill-opacity": 0.5,
      },
    },
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("red-dot"),
        "icon-size": 1,
      },
      filterOverrides: ["==", ["get", "Public_ID"], "40524-35109"],
    },
  ],
  title: 'Attacks on "Humanitarian Zone"',
};

const attackOnHumanitarianZoneTwo: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.35468, 31.40538],
      [34.35468, 31.40538],
    ],
    options: { maxZoom: 14 },
  },
  kind: "video",
  videoSrc: "/videos/humuanitarian-zone-2.mp4",

  layerOverrides: [
    {
      id: "INITIAL_HUMANITARIAN_FILL",
      paintOverrides: {
        "fill-opacity": 0.5,
      },
    },
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("red-dot"),
        "icon-size": 1,
      },
      filterOverrides: ["==", ["get", "Public_ID"], "40606-20351"],
    },
  ],
  title: 'Attacks on "Humanitarian Zone"',
};

const attackOnHumanitarianZoneOverview: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },

  kind: "basic",
  title: 'Attacks on "Humanitarian Zone"',
  layerOverrides: [
    {
      id: "INITIAL_HUMANITARIAN_FILL",
      paintOverrides: {
        "fill-opacity": 0.5,
      },
    },
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("red-dot"),
        "icon-size": 0.2,
      },
      filterOverrides: [
        "all",
        ["==", ["get", "Incident Type"], "Attack_on_humanitarian_zone"],
        [">", ["get", "Date"], "2024-05-06"],
        ["<=", ["get", "Date"], "2024-10-06"],
        ["within", humanitarianZoneData],
      ],
    },
  ],
};

export const phaseThree: Timeline = [
  init,
  initialHumanitarianZone,
  rafahAttack,
  occupationOfPhiladelphi,
  attackOnHumanitarianZone,
  attackOnHumanitarianZoneTwo,
  attackOnHumanitarianZoneOverview,
];
