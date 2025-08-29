import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

import type { MapEvent } from "mapbox-gl";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { AnasMapContext } from "./AnasMapContext";
import { SlideshowControls } from "./components/slideshowControls/slideshowControls";
import { Visual } from "./components/visual/visual";
import { timelines } from "./timelines/timelines";
import { handleSlideChange } from "./utils/controlsHandlers";
import { loadAllImages } from "./utils/loadAllImages";
import { loadAllLayers } from "./utils/loadAllLayers";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMapIdle, setIsMapIdle] = useState(false);
  const [isVisualVisible, setIsVisualVisible] = useState(true);
  const slideChangeRef = useRef(new Audio("/audio/slide.wav"));
  const idleRef = useRef(true);
  const mapRef = useRef<mapboxgl.Map>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const currentSlide = Math.floor(currentIndex / 2);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      interactive: false,
      style: "mapbox://styles/itsamir2001/cmehruhk5000001s2hrde4gvb",
    });

    mapRef.current.on("load", handleMapLoad);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    const audioSrc = timelines[currentSlide].audioOverrideSrc;
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    } else {
      slideChangeRef.current.play();
    }
  }, [currentSlide]);

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

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        handleSlideChange("next", map, setCurrentIndex, timelines.length);
      } else if (e.key === "ArrowLeft") {
        handleSlideChange("prev", map, setCurrentIndex, timelines.length);
      } else if (e.key === " ") {
        setIsVisualVisible((prev) => !prev);
      }
    });

    loadAllLayers(map);
    loadAllImages(map);
  };

  return (
    <div
      id="anas-map-container"
      className="relative h-screen w-screen font-semibold"
    >
      <div
        id="map-container"
        ref={mapContainerRef}
        className="h-screen w-screen"
      />
      {
        <Visual
          className="absolute"
          isVisualVisible={isVisualVisible && currentIndex % 2 === 1}
          event={timelines[currentSlide]}
        />
      }

      {mapRef.current !== null && (
        <AnasMapContext.Provider value={{ anasMap: mapRef.current }}>
          <SlideshowControls
            className="absolute right-3 bottom-3 z-10"
            currentIndex={currentIndex}
            isMapIdle={isMapIdle}
            setCurrentIndex={setCurrentIndex}
          />
        </AnasMapContext.Provider>
      )}
    </div>
  );
}

export default App;
