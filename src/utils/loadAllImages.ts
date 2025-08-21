import { MAPBOX_IMAGES } from "../constants/images";

export const loadAllImages = (map: mapboxgl.Map) => {
  MAPBOX_IMAGES.map((image: any) => {
    map.loadImage(image.url, (error, loadedImage) => {
      if (error || !loadedImage) {
        console.warn(error);
        return;
      }

      map.addImage(image.id, loadedImage);
    });
  });
};
