const IMAGE_IDS = ["wwts", "pipe", "well"] as const;

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
];

export const IMAGE_MAP = new Map(IMAGE_IDS.map((id) => [id, id]));
