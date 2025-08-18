import React from "react";
import { AnasMapContext } from "../AnasMapContext";

export function useAnasMapContext() {
  const context = React.useContext(AnasMapContext);
  if (!context) {
    throw new Error(
      "useAnasMapContext must be used within an AnasMapContext.Provider"
    );
  }
  return context;
}
