import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

import type { MapEvent } from "mapbox-gl";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { AnasMapContext } from "./AnasMapContext";
import { SlideshowControls } from "./components/slideshowControls/slideshowControls";
import { GAZA_DEFAULT_ZOOM, GAZA_LATITUDE, GAZA_LONGITUDE } from "./constants";
import { loadAllLayers } from "./utils/loadAllLayers";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMapIdle, setIsMapIdle] = useState(false);
  const idleRef = useRef(true);
  const mapRef = useRef<mapboxgl.Map>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      center: [GAZA_LONGITUDE, GAZA_LATITUDE],
      zoom: GAZA_DEFAULT_ZOOM,
      interactive: false,
      style: "mapbox://styles/mapbox/streets-v9",
    });

    mapRef.current.on("load", handleMapLoad);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

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

    loadAllLayers(map);
  };

  return (
    <div
      id="anas-map-container"
      className="h-screen w-screen relative font-semibold"
    >
      <div
        id="map-container"
        ref={mapContainerRef}
        className="h-screen w-screen"
      />

      {mapRef.current !== null && (
        <AnasMapContext.Provider value={{ anasMap: mapRef.current }}>
          <SlideshowControls
            className="absolute bottom-8 right-8 z-10"
            currentSlide={currentSlide}
            isMapIdle={isMapIdle}
            setCurrentSlide={setCurrentSlide}
          />
        </AnasMapContext.Provider>
      )}
    </div>
  );
}

export default App;
