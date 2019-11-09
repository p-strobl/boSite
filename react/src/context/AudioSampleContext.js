import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import { AudioSampleData } from "./data/AudioSampleData";

export const AudioSampleBoxContext = createContext(null);

export default function AudioSampleBoxContextStore({ children }) {
  return <AudioSampleBoxContext.Provider value={AudioSampleData}>{children}</AudioSampleBoxContext.Provider>;
}

AudioSampleBoxContextStore.displayName = "AudioSampleBoxContextStore";

AudioSampleBoxContextStore.defaultProps = {
  children: PropTypes.element,
};

AudioSampleBoxContextStore.propTypes = {
  children: PropTypes.element,
};
