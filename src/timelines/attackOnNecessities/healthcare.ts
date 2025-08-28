import { GAZA_BBOX } from "../../constants/constants";
import { IMAGE_MAP } from "../../constants/images";
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
];
