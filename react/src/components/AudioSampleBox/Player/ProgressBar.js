import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

import "./ProgressBar.scss";

export const ProgressBar = ({ progressBar, isPlaying, paused }) => {
  const progressBarFillerRef = useRef(null);

  const uiClasses = {
    samplePlayerProgressBar: "SamplePlayer__ProgressBar",
    samplePlayerProgressBarFiller: "SamplePlayer__ProgressBar--filler",
  };

  const removeStyleProperty = () => {
    if (!isPlaying && !paused && progressBarFillerRef.current !== null) {
      progressBarFillerRef.current.style.removeProperty("transform");
    }
  };

  useEffect(() => {
    removeStyleProperty();
  });

  return (
    <div className={uiClasses.samplePlayerProgressBar}>
      <div
        className={uiClasses.samplePlayerProgressBarFiller}
        style={{ transform: `scaleX(${progressBar})` }}
        key={uuid()}
        ref={progressBarFillerRef}
      />
    </div>
  );
};

ProgressBar.defaultProps = {
  isPlaying: false,
  paused: false,
  progressBar: 0,
};

ProgressBar.propTypes = {
  isPlaying: PropTypes.bool,
  paused: PropTypes.bool,
  progressBar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
