import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const northToSouthEvac: GazaEvent = {
  kind: "basic",
  fitBounds: { bounds: GAZA_BBOX, options: {} },
  layerOverrides: [
    {
      id: "GAZA_GOVERNATES_POPULATION_FILL",
      paintOverrides: {
        "fill-opacity": 0.5,

        "fill-color": [
          "match",
          ["get", "name"],
          "Gaza",
          "#FF0000",
          "North Gaza",
          "#FF0000",
          "#B0D4FF",
        ],
      },
    },
    {
      id: "SALAH_AL_DIN_LINE",
      paintOverrides: {
        "line-opacity": 1,
      },
    },
    {
      id: "SALAH_AL_DIN_SYMBOL",
      paintOverrides: {
        "icon-opacity": 1,
      },
    },
  ],
  title: "Oct 7th → Nov 24th: North to South Evacuation",
};

const attackOnConvoy: GazaEvent = structuredClone(northToSouthEvac);

attackOnConvoy.title = "Attack on Convoy";
Object.assign(attackOnConvoy, {
  kind: "video",
  videoSrc: "/videos/attack-on-convoy.mp4",
});

attackOnConvoy.fitBounds = {
  bounds: [
    [34.449669, 31.487589],
    [34.449669, 31.487589],
  ],
  options: { maxZoom: 14 },
};

const oneKmBuffer: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "1KM TODO",
  kind: "basic", // TODO
  layerOverrides: [
    {
      id: "ONE_KM_BUFFER_FILL",
      paintOverrides: {
        "fill-opacity": 0.7,
      },
    },
  ],
};

const netzaremCorridorCheckpoint1: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Netzarem 1 TODO",
  kind: "image",
  imgSrc: "/images/netzarem-one.jpg",
  layerOverrides: [],
};

const netzaremCorridorCheckpoint2: GazaEvent = {
  fitBounds: {
    bounds: GAZA_BBOX,
    options: {},
  },
  title: "Netzarem 2 TODO",
  kind: "video",
  videoSrc: "/videos/netzarem-two.mp4",
  layerOverrides: [],
};

export const phaseOne: Timeline = [
  northToSouthEvac,
  attackOnConvoy,
  oneKmBuffer,
  netzaremCorridorCheckpoint1,
  netzaremCorridorCheckpoint2,
];
