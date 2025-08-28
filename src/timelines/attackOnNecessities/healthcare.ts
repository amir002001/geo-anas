import { featureCollection, union } from "@turf/turf";
import type { LngLatBoundsLike } from "mapbox-gl";
import { GAZA_BBOX } from "../../constants/constants";
import { IMAGE_MAP } from "../../constants/images";
import gazaStates from "../../data/gaza-state-boundaries.json";
import type { GazaEvent, Timeline } from "../timelines";

const intro: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/healthcare.png",
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Attack on Healthcare",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
};

const attackOnHospitals: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/hospital-press-conf.jpg",
  layerOverrides: [
    { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
  ],
  title: "Attack on Hospitals",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
};

const destroyedHospitals: GazaEvent = {
  kind: "image",
  imgSrc: "/images/shifa-destroyed.jpg",
  title: "All Hospitals Bombed",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [
    {
      id: "GAZA_HOSPITALS_STATUS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("hospital-destroyed"),
        "icon-size": 1,
      },
    },
  ],
};

const stageOne: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/healthcare-1.jpg",
  title: "First Three Weeks",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
};

const bombingOfEyeHospital: GazaEvent = {
  kind: "image",
  fitBounds: {
    bounds: [
      [34.4314051669262, 31.5079018988424],
      [34.4314051669262, 31.5079018988424],
    ],
    options: { maxZoom: 14 },
  },
  imgSrc: "/images/international-eye.jpg",
  layerOverrides: [
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["==", ["get", "Public_ID"], "31009-64406"],
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("bad-rocket"),
      },
    },
  ],
  title: "Bombing of the International Eye Hospital",
};

const hospitalCapacity: GazaEvent = {
  kind: "basic",
  title: "Resulting Hospital Capacity",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { padding: 120 },
  },
  layerOverrides: [
    {
      id: "HOSPITAL_CAPACITY_RASTER",
      paintOverrides: { "raster-opacity": 1 },
    },
  ],
};

const beitHanoun: GazaEvent = {
  kind: "video",
  videoSrc: "/videos/hanoun.mp4",
  title: "Beit Hanoun",
  fitBounds: {
    bounds: [
      [34.53745365, 31.53938984],
      [34.53745365, 31.53938984],
    ],
    options: { maxZoom: 14 },
  },
  layerOverrides: [
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["==", ["get", "Public_ID"], "31009-74237"],
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("bad-rocket"),
      },
    },
  ],
};

const muhammadAlDurra: GazaEvent = {
  kind: "image",
  imgSrc: "/images/white-phosphor.webp",
  title: "Muhammad Al-Durra",
  fitBounds: {
    bounds: [
      [34.4805535675483, 31.5143897000453],
      [34.4805535675483, 31.5143897000453],
    ],
    options: { maxZoom: 14 },
  },
  layerOverrides: [
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["==", ["get", "Public_ID"], "31013-47741"],
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("bad-rocket"),
      },
    },
  ],
};

const alKarama: GazaEvent = {
  title: "Al-Karama",
  fitBounds: {
    bounds: [
      [34.4705534895871, 31.5427897523383],
      [34.4705534895871, 31.5427897523383],
    ],
    options: { maxZoom: 14 },
  },
  imgSrc: "/images/al-karama.jpg",
  kind: "image",
  layerOverrides: [
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["==", ["get", "Public_ID"], "31017-39971"],
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("bad-rocket"),
      },
    },
  ],
};

const hospitalStatus: GazaEvent = {
  title: "Hospitals Status",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: { padding: 80 },
  },
  kind: "basic",
  layerOverrides: [
    {
      id: "OCT_13_HOSPITAL_RASTER",
      paintOverrides: { "raster-opacity": 1 },
    },
  ],
};

const drHammam: GazaEvent = {
  title: "Dr. Hammam",
  videoSrc: "/videos/dr-hammam.mp4",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "video-only",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
};

const hospitalStatus2 = structuredClone(hospitalStatus);
hospitalStatus2.title = "Operations in the Dark";
Object.assign(hospitalStatus2, {
  kind: "video",
  videoSrc: "/videos/dark-op.mp4",
});

const allHospitalsAttacked: GazaEvent = {
  title: "Attacked hospitals",
  kind: "basic",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: [
        "any",
        ["==", ["get", "Public_ID"], "31008-87626"],
        ["==", ["get", "Public_ID"], "31009-74237"],
        ["==", ["get", "Public_ID"], "31009-64406"],
        ["==", ["get", "Public_ID"], "31013-47741"],
        ["==", ["get", "Public_ID"], "31015-35056"],
        ["==", ["get", "Public_ID"], "31017-81032"],
        ["==", ["get", "Public_ID"], "31017-39971"],
        ["==", ["get", "Public_ID"], "31028-91205"],
        ["==", ["get", "Public_ID"], "31009-64406"],
      ],
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("bad-rocket"),
      },
    },
  ],
};

const stageTwo: GazaEvent = {
  kind: "image-only",
  imgSrc: "/images/titles/healthcare-2.jpg",
  title: "Ground Invasion of the North",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
};

const topBbox: LngLatBoundsLike = [
  [34.398, 31.444],
  [34.567, 31.595],
];

const groundInvasionRoutes: GazaEvent = {
  title: "Ground Invasion Routes",
  fitBounds: {
    bounds: topBbox,
    options: {},
  },
  kind: "basic",
  layerOverrides: [
    {
      id: "INVASION_ROUTES_NOV_13_FILL",
      paintOverrides: { "fill-opacity": 0.5 },
    },
  ],
};

const gazaCity = gazaStates.features[0];
const northGaza = gazaStates.features[3];

const combo = union(featureCollection([gazaCity, northGaza] as any));

const gazaCityHospitals: GazaEvent = {
  title: "Gaza City Hospitals",
  fitBounds: {
    bounds: topBbox,
    options: {},
  },

  kind: "basic",
  layerOverrides: [
    {
      id: "GAZA_HOSPITALS_STATUS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["within", gazaCity],
    },

    {
      id: "INVASION_ROUTES_NOV_13_FILL",
      paintOverrides: { "fill-opacity": 0.5 },
    },
  ],
};

const gazaAndNorthHospitals: GazaEvent = {
  title: "Gaza and North Hospitals",
  fitBounds: {
    bounds: topBbox,
    options: {},
  },
  kind: "basic",
  layerOverrides: [
    {
      id: "GAZA_HOSPITALS_STATUS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["within", combo],
    },
    {
      id: "INVASION_ROUTES_NOV_13_FILL",
      paintOverrides: { "fill-opacity": 0.5 },
    },
  ],
};

const netzarimAdd: GazaEvent = {
  title: "Turning into Netzarim",
  fitBounds: {
    bounds: topBbox,
    options: {},
  },
  kind: "basic",
  layerOverrides: [
    {
      id: "INVASION_ROUTES_NOV_13_FILL",
      paintOverrides: { "fill-opacity": 0.5 },
    },
    {
      id: "NETZARIM_RASTER",
      paintOverrides: { "raster-opacity": 1 },
    },
  ],
};

const besiegedHospitals: GazaEvent = {
  title: "Besieged Hospitals",
  kind: "basic",
  fitBounds: { bounds: topBbox, options: {} },
  layerOverrides: [
    {
      id: "GAZA_HOSPITALS_STATUS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["within", combo],
    },
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: [
        "any",
        ["==", ["get", "Public_ID"], "31105-52971"],
        ["==", ["get", "Public_ID"], "31107-15508"],
        ["==", ["get", "Public_ID"], "31110-95365"],
        ["==", ["get", "Public_ID"], "31111-00049"],
        ["==", ["get", "Public_ID"], "31114-59129"],
        ["==", ["get", "Public_ID"], "31116-93455"],
        ["==", ["get", "Public_ID"], "31120-23667"],
      ],
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("tank"),
        "icon-size": 0.5,
        "icon-offset": [-40, 0],
      },
    },
  ],
};

const alRantisi: GazaEvent = {
  title: "Al-Rantisi Hospital Siege",
  fitBounds: {
    bounds: [
      [34.46045348679, 31.532989715314],
      [34.46045348679, 31.532989715314],
    ],
    options: { maxZoom: 14 },
  },
  kind: "image",
  imgSrc: "/images/alrantisi.webp",
  layerOverrides: [
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["==", ["get", "Public_ID"], "31113-72105"],
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("tank"),
        "icon-size": 1.2,
        "icon-offset": [0, 0],
      },
    },
  ],
};

const curtains: GazaEvent = {
  kind: "video-only",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "Curtains",
  videoSrc: "/videos/curtains.mp4",
};

const list: GazaEvent = {
  kind: "video-only",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  layerOverrides: [],
  title: "List",
  videoSrc: "/videos/list.mp4",
};

export const healthcare: Timeline = [
  intro,
  attackOnHospitals,
  destroyedHospitals,
  stageOne,
  bombingOfEyeHospital,
  hospitalCapacity,
  beitHanoun,
  muhammadAlDurra,
  alKarama,
  hospitalStatus,
  drHammam,
  hospitalStatus2,
  allHospitalsAttacked,
  stageTwo,
  groundInvasionRoutes,
  gazaCityHospitals,
  gazaAndNorthHospitals,
  netzarimAdd,
  besiegedHospitals,
  alRantisi,
  curtains,
  list,
];
