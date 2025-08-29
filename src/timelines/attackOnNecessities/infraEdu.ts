import type { LngLatBoundsLike } from "mapbox-gl";
import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const BEIT_LAHIA_BBOX: LngLatBoundsLike = [
    [34.4629561, 31.5669839],
    [34.4989881, 31.5717589],
];

const JABALIA_BBOX: LngLatBoundsLike = [
        [34.4647731, 31.539434],
        [34.4788551, 31.524053],
];
const RAFAH_BBOX: LngLatBoundsLike = [
    [34.2403061, 31.3140219],
    [34.2388261, 31.2818529],
];
const ISRAA_UNIVERSITY: LngLatBoundsLike = [
    [34.4055144, 31.483674],
    [34.408459, 31.479076],
];
const GAZA_UNIVERSITY: LngLatBoundsLike = [
    [34.4484542, 31.513989],
    [34.4472521, 31.5093149],
];
const AQSA_UNIVVERSITY: LngLatBoundsLike = [
    [34.2691861, 31.3608989],
    [34.2725401, 31.3530409],
];

const intro: GazaEvent = {
    kind: "image-only",
    imgSrc: "/images/infrastructure.png",
    audioOverrideSrc: "/audio/internalize.wav",
    layerOverrides: [
      { id: "WHOLE_WORLD_FILL", paintOverrides: { "fill-opacity": 1 } },
    ],
    title: "Attack on Infrastructure",
    fitBounds: {
      bounds: GAZA_BBOX,
      options: {},
    },
  };

const beitLahiaDamage: GazaEvent = {
    kind: "image",
    imgSrc: "/images/gaza infrastructure damage.jpg",
    title: "Infrastructure Damage",
    fitBounds: {
      bounds: BEIT_LAHIA_BBOX,
      options: {},
    },
    layerOverrides: [
    ],
  };

  const jabaliaDamage: GazaEvent = {
    kind: "image",
    imgSrc: "/images/jabalia damage.avif",
    title: "Infrastructure Damage",
    fitBounds: {
      bounds: JABALIA_BBOX,
      options: {},
    },
    layerOverrides: [
    ],
  };

  const rafahDamage: GazaEvent = {
    kind: "image",
    imgSrc: "/images/rafah infrastrucure damage.jpg",
    title: "Infrastructure Damage",
    fitBounds: {
      bounds: RAFAH_BBOX,
      options: {},
    },
    layerOverrides: [
    ],
  };

  const bombingTiming: GazaEvent = {
    kind: "image-only",
    imgSrc: "/images/airstrike timing.png",
    title: "Airstrikes Per Day and Night",
    fitBounds: {
      bounds: RAFAH_BBOX,
      options: {},
    },
    layerOverrides: [
    ],
  };

  const roadDamage: GazaEvent = {
    kind: "image",
    imgSrc: "/images/targeting roads.avif",
    title: "Targeting of main roads",
    fitBounds: {
      bounds: GAZA_BBOX,
      options: {},
    },
    layerOverrides: [
        // {
        // id: "SALAH_AL_DIN_LINE",
        // paintOverrides: { "fill-opacity": 1 },
        // },
      ],
  };

  const bombsNearHospital: GazaEvent = {
    kind: "image-only",
    imgSrc: "/images/MK-84 near hospitals.png",
    title: "Craters by 2000lb General Dynamics MK84 bombs near hospitals",
    fitBounds: {
      bounds: GAZA_BBOX,
      options: {},
    },
    layerOverrides: [
    ],
  };

  const rafahDamageHousing: GazaEvent = {
    kind: "image",
    imgSrc: "/images/infrastructure damage.jpg",
    title: "Damage to Housing Units",
    fitBounds: {
      bounds: RAFAH_BBOX,
      options: {},
    },
    layerOverrides: [
    ],
  };

  const aqsaUniversity: GazaEvent = {
    kind: "image",
    imgSrc: "/images/soldier_hospital.jpg",
    title: "Burning Al Aqsa University",
    fitBounds: {
      bounds: AQSA_UNIVVERSITY,
      options: {},
    },
    layerOverrides: [
    ],
  };

  const gazaUniversity: GazaEvent = {
    kind: "image",
    imgSrc: "/images/conference hall of university of gaza.png",
    title: "Damage to Gaza University Conference Hall",
    fitBounds: {
      bounds: GAZA_UNIVERSITY,
      options: {},
    },
    layerOverrides: [
    ],
  };

  const israaUniversity: GazaEvent = {
    kind: "video",
    videoSrc: "/videos/Israel blows up Israa University in Gaza.mp4",
    title: "Blowing Up Israa University",
    fitBounds: {
      bounds: ISRAA_UNIVERSITY,
      options: {},
    },
    layerOverrides: [
    ],
  };

export const infraEdu: Timeline = [
    intro,
    beitLahiaDamage,
    jabaliaDamage,
    rafahDamage,
    bombingTiming,
    roadDamage,
    bombsNearHospital,
    rafahDamageHousing,
    israaUniversity,
    aqsaUniversity,
    gazaUniversity,
];
