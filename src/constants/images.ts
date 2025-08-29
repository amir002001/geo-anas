const IMAGE_IDS = [
  "school",
  "red-chevron",
  "broken-pipe",
  "broken-factory",
  "tank",
  "hospital",
  "wwts",
  "hospital-destroyed",
  "pipe",
  "well",
  "power",
  "camp",
  "desalination",
  "crossing",
  "bad-rocket",
] as const;

export type ImageId = (typeof IMAGE_IDS)[number];
export interface IImage {
  url: string;
  id: ImageId;
}

export const MAPBOX_IMAGES: IImage[] = [
  { id: "wwts", url: "/mapbox-icons/wwts.png" },
  {
    id: "pipe",
    url: "/mapbox-icons/industrial-pipe.png",
  },
  { id: "well", url: "/mapbox-icons/well.png" },
  { id: "power", url: "/mapbox-icons/power.png" },
  { id: "hospital", url: "/mapbox-icons/hospital.png" },
  { id: "school", url: "/mapbox-icons/school.png" },
  { id: "camp", url: "/mapbox-icons/camp.png" },
  { id: "desalination", url: "/mapbox-icons/desalination.png" },
  { id: "crossing", url: "/mapbox-icons/crossing.png" },
  { id: "red-chevron", url: "/mapbox-icons/red-chevron.png" },
  { id: "bad-rocket", url: "/mapbox-icons/rocket.png" },
  { id: "hospital-destroyed", url: "/mapbox-icons/hospital-destroyed.png" },
  { id: "tank", url: "/mapbox-icons/tank.png" },
  { id: "broken-pipe", url: "/mapbox-icons/broken-pipe.png" },
  { id: "broken-factory", url: "/mapbox-icons/broken-factory.png" },
];

export const IMAGE_MAP = new Map(IMAGE_IDS.map((id) => [id, id]));
