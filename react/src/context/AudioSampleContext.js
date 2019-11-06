import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AudioSampleBoxContext = createContext(null);

export default function AudioSampleBoxContextStore({ children }) {
  const kitchenSamples = {};

  const audioSampleStore = {
    kitchenSamples,
  };

  return <AudioSampleBoxContext.Provider value={audioSampleStore}>{children}</AudioSampleBoxContext.Provider>;
}

AudioSampleBoxContextStore.displayName = "AudioSampleBoxContextStore";

AudioSampleBoxContextStore.defaultProps = {
  children: PropTypes.element,
};

AudioSampleBoxContextStore.propTypes = {
  children: PropTypes.element,
};
