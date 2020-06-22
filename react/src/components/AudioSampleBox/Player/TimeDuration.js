import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

import "./TimeDuration.scss";

export const TimeDuration = ({ currentTime, audioDuration }) => {
  const uiClasses = {
    samplePlayerTimeDuration: "SamplePlayer__TimeDuration",
    currentTime: "TimeDuration--CurrentTime",
    duration: "TimeDuration--Duration",
  };

  return (
    <div className={uiClasses.samplePlayerTimeDuration}>
      <div className={uiClasses.currentTime}>{currentTime}s</div>
      <span>/</span>
      <div className={uiClasses.duration}>{audioDuration}s</div>
    </div>
  );
};

TimeDuration.defaultProps = {
  currentTime: "" || 0,
  audioDuration: "" || 0,
};

TimeDuration.propTypes = {
  currentTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  audioDuration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
