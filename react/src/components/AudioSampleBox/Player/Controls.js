import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

import "./Controls.scss";

export const Controls = ({ isPlaying, togglePlay }) => {
  const uiClasses = {
    samplePlayerControl: "SamplePlayer__Control",
  };

  return (
    <div
      className={Class(
        `${uiClasses.samplePlayerControl} ${uiClasses.samplePlayerControl}--${
          isPlaying ? "Pause" : "Play"
        }`,
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
  togglePlay: () => {},
};

Controls.propTypes = {
  isPlaying: PropTypes.bool,
  togglePlay: PropTypes.func,
};
