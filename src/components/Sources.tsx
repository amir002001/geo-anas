import { Layer, Source } from "react-map-gl/mapbox";
import { LAYER_IDS } from "../constants";
import gazaBoundary from "../data/gaza-strip-boundary.json";

export const Sources = () => {
  return (
    <>
      <Source type="geojson" data={gazaBoundary as any}>
        <Layer
          id={LAYER_IDS.GAZA_BLOCKADE_RED}
          type="fill"
          paint={{
            "fill-color": "#FF0000",
            "fill-opacity": 0,
            "fill-opacity-transition": { duration: 1000 },
          }}
        />
      </Source>
    </>
  );
};
