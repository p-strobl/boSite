import React from "react";
import PropTypes from "prop-types";

export const WheelInputElement = ({ value }) => {
  function clickedWheelElement(event) {
    event.target.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <div className="Wheel__Number" onClick={clickedWheelElement} onKeyUp={() => {}} role="button" tabIndex={value}>
      {value}
    </div>
  );
};

WheelInputElement.defaultProps = {
  value: 0,
};

WheelInputElement.propTypes = {
  value: PropTypes.number,
};
