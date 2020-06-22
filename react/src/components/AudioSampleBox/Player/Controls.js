import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

import "./Controls.scss";

export const Controls = ({ isPlaying, isLoading, togglePlay }) => {
  const uiClasses = {
    samplePlayerControl: "SamplePlayer__Control",
    samplePlayerControlLoading: "SamplePlayer__Control--Loading",
  };

  return (
    <div
      className={Class(
        [uiClasses.samplePlayerControl],
        [`${uiClasses.samplePlayerControl}--${isPlaying ? "Pause" : "Play"}`],
        { [uiClasses.samplePlayerControlLoading]: isLoading },
      )}
      role="button"
      onClick={togglePlay}
      onKeyUp={() => {}}
      tabIndex={0}
      aria-label="Play"
    />
  );
};

Controls.defaultProps = {
  isPlaying: false,
  isLoading: false,
  togglePlay: () => {},
};

Controls.propTypes = {
  isPlaying: PropTypes.bool,
  isLoading: PropTypes.bool,
  togglePlay: PropTypes.func,
};
