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

const allHospitals: GazaEvent = {
  kind: "basic",
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
        "icon-image": IMAGE_MAP.get("hospital"),
        "icon-size": 0.5,
      },
      filterOverrides: [],
    },
  ],
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
        "icon-image": IMAGE_MAP.get("red-dot"),
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
        "icon-image": IMAGE_MAP.get("red-dot"),
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
        "icon-image": IMAGE_MAP.get("red-dot"),
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
        "icon-image": IMAGE_MAP.get("red-dot"),
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
  kind: "video-only",
  videoSrc: "/videos/dark-op.mp4",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
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
        "icon-image": IMAGE_MAP.get("red-dot"),
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

const alShifa: GazaEvent = {
  title: "Al-Shifa Hospital",
  fitBounds: {
    bounds: [
      [34.4431513343082, 31.5242793470932],
      [34.4431513343082, 31.5242793470932],
    ],
    options: { maxZoom: 14 },
  },
  kind: "video",
  videoSrc: "/videos/alshifahealth.mp4",
  layerOverrides: [
    {
      id: "GAZA_HOSPITALS_STATUS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["==", ["get", "name"], "Al-Shifa Medical Complex"],
    },
  ],
};

const alShifaContd: GazaEvent = {
  title: "Al-Shifa Hospital Continued",
  fitBounds: {
    bounds: [
      [34.4431513343082, 31.5242793470932],
      [34.4431513343082, 31.5242793470932],
    ],
    options: { maxZoom: 14 },
  },
  kind: "image",
  imgSrc: "/images/shifa-truck.jpeg",
  layerOverrides: [
    {
      id: "GAZA_HOSPITALS_STATUS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["==", ["get", "name"], "Al-Shifa Medical Complex"],
    },
  ],
};

const alShifaTruckInside: GazaEvent = {
  title: "Al-Shifa Hospital Continued",
  fitBounds: {
    bounds: [
      [34.4431513343082, 31.5242793470932],
      [34.4431513343082, 31.5242793470932],
    ],
    options: { maxZoom: 14 },
  },
  kind: "image-only",
  imgSrc: "/images/alshifa-truck-inside.jpeg",
  layerOverrides: [
    {
      id: "GAZA_HOSPITALS_STATUS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["==", ["get", "name"], "Al-Shifa Medical Complex"],
    },
  ],
};

const shifaBomb: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "video-only",
  title: "Bombing of Al-Shifa",
  videoSrc: "/videos/hosp-morn.mp4",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
};

const shifaAfter: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "video-only",
  title: "Aftermath at Al-Shifa",
  videoSrc: "/videos/alshifa-aftermath.mp4",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
};

const prematureBabies: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image-only",
  title: "Premature Babies",
  imgSrc: "/images/premature-babies.jpg",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
};

const stageThree: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image-only",
  title: "Ceasefire",
  imgSrc: "images/titles/healthcare-3.jpg",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
};

const indonesian: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.5093535915469, 31.5349897895014],
      [34.5093535915469, 31.5349897895014],
    ],
    options: { maxZoom: 14 },
  },
  kind: "image",
  title: "Indonesian Hospital",
  imgSrc: "/images/indonesian.jpeg",
  layerOverrides: [
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["==", ["get", "Public_ID"], "31124-77291"],
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("tank"),
      },
    },
  ],
};

const stageFour: GazaEvent = {
  title: "Ground Invasion of the South",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image-only",
  imgSrc: "/images/titles/healthcare-4.jpg",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
};

const hospitalsNextTo: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image-only",
  title: "Kamal Adwan and Al-Awda",
  imgSrc: "/images/kamal-and-adwa.jpg",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
};

const nasserInvasion: GazaEvent = {
  title: "Nasser Invasion",
  fitBounds: {
    bounds: [
      [34.263836054110975, 31.324517901387676],
      [34.32832974392797, 31.379755182613692],
    ],
    options: { padding: 120 },
  },
  kind: "image",
  imgSrc: "/images/nasser-deaths.jpg",
  layerOverrides: [
    {
      id: "NASSER_INVASION_RASTER",
      paintOverrides: { "raster-opacity": 1 },
    },
  ],
};

const stageFive: GazaEvent = {
  title: "Ground Invasion of Rafah",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image-only",
  imgSrc: "/images/titles/healthcare-5.jpg",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
};

const womanMourning: GazaEvent = {
  title: "TODO",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image-only",
  imgSrc: "/images/woman-mourning.jpg",
  layerOverrides: [],
};

const stageSix: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image-only",
  imgSrc: "/images/titles/healthcare-6.jpg",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
  title: "Takeover of the North",
};

const jabaliaBombing: GazaEvent = {
  title: "TODO 2",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image-only",
  imgSrc: "/images/jabalia-bombing.webp",
  layerOverrides: [],
};

const kamalAdwanSecond: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.5012854400996, 31.5384211723648],
      [34.5012854400996, 31.5384211723648],
    ],
    options: { maxZoom: 14, duration: 1500 },
  },
  kind: "video",
  title: "Targeting Kamal Adwan Hospital",
  videoSrc: "/videos/kamal-adwan-2.mp4",
  layerOverrides: [
    {
      id: "INCIDENTS_SYMBOL",
      paintOverrides: { "icon-opacity": 1 },
      filterOverrides: ["==", ["get", "Public_ID"], "31023-07191"],
      layoutOverrides: {
        "icon-image": IMAGE_MAP.get("red-dot"),
      },
    },
  ],
};

const walkDownTanks: GazaEvent = {
  title: "TODO",
  fitBounds: {
    bounds: [
      [34.5012854400996, 31.5384211723648],
      [34.5012854400996, 31.5384211723648],
    ],
    options: { maxZoom: 14, duration: 1500 },
  },
  kind: "video-only",
  videoSrc: "/videos/walkdown-tanks.mp4",
  layerOverrides: [],
};

const hoassam: GazaEvent = {
  title: "TODO",
  layerOverrides: [],
  fitBounds: {
    bounds: [
      [34.5012854400996, 31.5384211723648],
      [34.5012854400996, 31.5384211723648],
    ],
    options: { maxZoom: 14 },
  },
  kind: "image-only",
  imgSrc: "/images/hossamabusafiya.jpg",
};

const tankWithRubble: GazaEvent = {
  title: "TODO",
  layerOverrides: [],
  fitBounds: {
    bounds: [
      [34.5012854400996, 31.5384211723648],
      [34.5012854400996, 31.5384211723648],
    ],
    options: { maxZoom: 14 },
  },
  kind: "video-only",
  videoSrc: "/videos/tank-with-rubble.mp4",
};

const tweet: GazaEvent = {
  title: "TODO",
  fitBounds: {
    bounds: [
      [34.5012854400996, 31.5384211723648],
      [34.5012854400996, 31.5384211723648],
    ],
    options: { maxZoom: 14 },
  },
  imgSrc: "/images/tweet.png",
  kind: "image-only",
  layerOverrides: [],
};

const stageSeven: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image-only",
  imgSrc: "/images/titles/healthcare-7.jpg",
  layerOverrides: [
    {
      id: "WHOLE_WORLD_FILL",
      paintOverrides: { "fill-opacity": 1 },
    },
  ],
  title: "Final Siege",
};

const alAhli: GazaEvent = {
  title: "TODO",
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  kind: "image-only",
  imgSrc: "/images/al-ahli.jpg",
  layerOverrides: [],
};

export const healthcare: Timeline = [
  intro,
  allHospitals,
  attackOnHospitals,
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
  alShifa,
  alShifaContd,
  alShifaTruckInside,
  shifaAfter,
  shifaBomb,
  prematureBabies,
  stageThree,
  indonesian,
  stageFour,
  hospitalsNextTo,
  nasserInvasion,
  stageFive,
  womanMourning,
  stageSix,
  jabaliaBombing,
  kamalAdwanSecond,
  walkDownTanks,
  hoassam,
  tankWithRubble,
  tweet,
  stageSeven,
  alAhli,
];
