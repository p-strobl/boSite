import React from "react";
import PropTypes from "prop-types";

import "./Title.scss";

export const TimeDuration = ({ currentTime, audioDuration }) => {
  return (
    <div className="SamplePlayer__TimeDuration">
      <div className="TimeDuration--CurrentTime">{currentTime}s</div>
      <span>/</span>
      <div className="TimeDuration--Duration">{audioDuration}s</div>
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
