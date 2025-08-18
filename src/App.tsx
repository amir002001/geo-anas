import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState } from "react";
import Map, { MapProvider, type MapEvent } from "react-map-gl/mapbox";
import "./App.css";
import { SlideshowControls } from "./components/slideshowControls/slideshowControls";
import { Sources } from "./components/Sources";
import { GAZA_DEFAULT_ZOOM, GAZA_LATITUDE, GAZA_LONGITUDE } from "./constants";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMapIdle, setIsMapIdle] = useState(false);
  const idleRef = useRef(true);

  const handleMapLoad = (e: MapEvent) => {
    const map = e.target;

    map.on("idle", () => {
      if (idleRef.current) {
        return;
      }
      idleRef.current = true;
      setIsMapIdle(true);
    });

    map.on("render", () => {
      if (!idleRef.current) {
        return;
      }
      idleRef.current = false;
      setIsMapIdle(false);
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
          <Sources />
        </Map>
        <SlideshowControls
          className="absolute bottom-8 right-8 z-10"
          currentSlide={currentSlide}
          isMapIdle={isMapIdle}
          setCurrentSlide={setCurrentSlide}
        />
      </MapProvider>
    </div>
  );
}

export default App;
