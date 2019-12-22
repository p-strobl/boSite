import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

export const WheelElements = ({ range }) => {
  const clickedWheelElement = (event) => {
    event.target.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const wheelRange = [];

  for (let i = 0; i < range + 1; i += 1) {
    wheelRange.push(
      <div
        className="TissueInputWheel__Number"
        key={uuidv4()}
        onClick={clickedWheelElement}
        onKeyUp={() => {}}
        role="button"
        tabIndex={0}>
        {i}
      </div>,
    );
  }

  return <div className="TissueInputWheel__Container">{wheelRange || ""}</div>;
};

WheelElements.defaultProps = {
  range: 0,
};

WheelElements.propTypes = {
  range: PropTypes.number,
};