import "./App.css";
import Map from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { SlideshowControls } from "./components/slideshowControls/slideshowControls";
import { GAZA_DEFAULT_ZOOM, GAZA_LATITUDE, GAZA_LONGITUDE } from "./constants";

function App() {
  return (
    <div id="anas-map-container" className="size-screen relative">
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: GAZA_LONGITUDE,
          latitude: GAZA_LATITUDE,
          zoom: GAZA_DEFAULT_ZOOM,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      <SlideshowControls className="absolute bottom-8 right-8" />
    </div>
  );
}

// 4354913030504, 428771029447
export default App;
