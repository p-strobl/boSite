import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./ProgressBar.scss";

export const ProgressBar = ({ progressBar, isPlaying }) => {
  const progressBarFillerRef = useRef(null);

  const removeStyleProperty = () => {
    if (!isPlaying && progressBarFillerRef.current !== null) {
      progressBarFillerRef.current.style.removeProperty("transform");
    }
  };

  useEffect(() => {
    removeStyleProperty();
  });

  return (
    <div className="SamplePlayer__ProgressBar">
      <div
        className="SamplePlayer__ProgressBar--filler"
        style={{ transform: `scaleX(${progressBar})` }}
        key={uuidv4()}
        ref={progressBarFillerRef}
      />
    </div>
  );
};

ProgressBar.defaultProps = {
  progressBar: 0,
};

ProgressBar.propTypes = {
  progressBar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
