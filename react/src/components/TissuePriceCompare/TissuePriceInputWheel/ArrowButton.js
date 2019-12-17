import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

export const ArrowButton = ({ direction }) => {
  const clickedUpArrow = (event) => {
    console.log("Up", event.target);
  };

  const clickedDownArrow = (event) => {
    console.log("Down", event.target);
  };

  return (
    <button
      className={`TissueInputWheel__Button TissueInputWheel__Button--${direction}`}
      onClick={direction === "Up" ? clickedUpArrow : clickedDownArrow}
      onKeyUp={() => {}}
      type="button"
      tabIndex={0}
      aria-label={direction}
      key={uuidv4()}
    />
  );
};

ArrowButton.defaultProps = {
  direction: "",
};

ArrowButton.propTypes = {
  direction: PropTypes.string,
};
