import React from "react";

export interface IMapContext {
  anasMap: mapboxgl.Map;
}

export const AnasMapContext = React.createContext<IMapContext | null>(null);
