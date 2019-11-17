import React, { createContext } from "react";

import { AudioSampleData } from "./data/AudioSampleData";

export const AudioSampleBoxContext = createContext(null);

export default function AudioSampleBoxContextStore({ children }) {
  return (
    <AudioSampleBoxContext.Provider value={AudioSampleData}>
      {children}
    </AudioSampleBoxContext.Provider>
  );
}

AudioSampleBoxContextStore.displayName = "AudioSampleBoxContextStore";
