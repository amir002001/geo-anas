import { GAZA_BBOX } from "../../constants/constants";
import type { GazaEvent, Timeline } from "../timelines";

const init: GazaEvent = {
  kind: "basic",
  fitBounds: {
    bounds: [
      [0, 0],
      [0, 0],
    ],
    options: { maxZoom: 10 },
  },
  audioOverrideSrc: "/audio/internalize.wav",
  layerOverrides: [
    {
      id: "WORLD_CENTER_SYMBOL",
      paintOverrides: {
        "text-opacity": 1,
      },
      layoutOverrides: { "text-field": "October 7th to November 24th" },
    },
  ],

  title: "North to South Evacuation",
};

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
  title: "North to South Evacuation",
};

const attackOnConvoy: GazaEvent = structuredClone(northToSouthEvac);

attackOnConvoy.title = "Attack on Convoy";
Object.assign(attackOnConvoy, {
  kind: "video-only",
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
  title: "1KM Buffer",
  kind: "basic",
  layerOverrides: [
    {
      id: "ONE_KM_BUFFER_FILL",
      paintOverrides: {
        "fill-opacity": 0.7,
      },
    },
  ],
};

const khanYounisBuffer: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.36498, 31.306504],
      [34.36498, 31.306504],
    ],
    options: { maxZoom: 13 },
  },
  title: "1KM Buffer - Khan Younis",
  kind: "image",
  imgSrc: "/images/khan-younis-buffer.png",
  layerOverrides: [
    {
      id: "ONE_KM_BUFFER_FILL",
      paintOverrides: {
        "fill-opacity": 0.7,
      },
    },
  ],
};

const netzarimCorridor: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.39598912345845, 31.44740653582869],
      [34.4621212513236, 31.49887545124438],
    ],
    options: {},
  },
  title: "Netzarim Corridor",
  kind: "basic",
  layerOverrides: [
    {
      id: "NETZARIM_RASTER",
      paintOverrides: {
        "raster-opacity": 1,
      },
    },
  ],
};

const netzarimCorridorCheckpoint1: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.436188, 31.474071],
      [34.436188, 31.474071],
    ],
    options: { maxZoom: 14 },
  },
  title: "Netzarim - Checkpoint",
  kind: "image",
  imgSrc: "/images/netzarim-one.jpg",
  layerOverrides: [
    {
      id: "NETZARIM_RASTER",
      paintOverrides: {
        "raster-opacity": 1,
      },
    },
  ],
};

const netzarimCorridorCheckpoint2: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.436188, 31.474071],
      [34.436188, 31.474071],
    ],
    options: { maxZoom: 14 },
  },
  title: "Netzarim - Checkpoint",
  kind: "video-only",
  videoSrc: "/videos/netzarim-two.mp4",
  layerOverrides: [
    {
      id: "NETZARIM_RASTER",
      paintOverrides: {
        "raster-opacity": 1,
      },
    },
  ],
};

const netzarimFacialId: GazaEvent = {
  fitBounds: {
    bounds: [
      [34.436188, 31.474071],
      [34.436188, 31.474071],
    ],
    options: { maxZoom: 14 },
  },
  title: "Netzarim - Facial ID",
  kind: "image-only",
  imgSrc: "/images/facial-id.png",
  layerOverrides: [
    {
      id: "NETZARIM_RASTER",
      paintOverrides: {
        "raster-opacity": 1,
      },
    },
  ],
};

export const phaseOne: Timeline = [
  init,
  northToSouthEvac,
  attackOnConvoy,
  oneKmBuffer,
  khanYounisBuffer,
  netzarimCorridor,
  netzarimCorridorCheckpoint1,
  netzarimCorridorCheckpoint2,
  netzarimFacialId,
];
