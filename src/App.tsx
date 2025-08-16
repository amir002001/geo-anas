import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Map, {
  Layer,
  MapProvider,
  Source,
  type MapEvent,
} from "react-map-gl/mapbox";
import "./App.css";
import { SlideshowControls } from "./components/slideshowControls/slideshowControls";
import { GAZA_DEFAULT_ZOOM, GAZA_LATITUDE, GAZA_LONGITUDE } from "./constants";
import { timelines } from "./timelines/timelines";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMapMoving, setIsMapMoving] = useState(false);

  const handleMapLoad = (e: MapEvent) => {
    const map = e.target;

    map.on("movestart", () => {
      setIsMapMoving(true);
    });

    map.on("moveend", () => {
      setIsMapMoving(false);
    });
  };

  return (
    <div
      id="anas-map-container"
      className="h-screen w-screen relative font-semibold"
    >
      <MapProvider>
        <Map
          onLoad={handleMapLoad}
          id="anasMap"
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          initialViewState={{
            longitude: GAZA_LONGITUDE,
            latitude: GAZA_LATITUDE,
            zoom: GAZA_DEFAULT_ZOOM,
          }}
          style={{ width: "100vw", height: "100vh" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          interactive={false}
        >
          {timelines[currentSlide].sources.map((source, sourceIndex) => (
            <Source key={sourceIndex} {...source.props}>
              {source.layers.map((layer, layerIndex) => (
                <Layer key={layerIndex} {...layer} />
              ))}
            </Source>
          ))}
        </Map>
        <SlideshowControls
          className="absolute bottom-8 right-8 z-10"
          currentSlide={currentSlide}
          isMapMoving={isMapMoving}
          setCurrentSlide={setCurrentSlide}
        />
      </MapProvider>
    </div>
  );
}

export default App;
