import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

export const ArrowButton = ({ direction, wheel }) => {
  const scrollIntoView = (target) => {
    if (typeof target === "undefined") return;

    target.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const clickHandler = () => {
    const activeWheelElement = wheel.current.querySelector(".Wheel__Number--Active");

    if (direction === "Prev" && activeWheelElement.previousSibling) {
      scrollIntoView(activeWheelElement.previousSibling);
    }

    if (direction === "Next" && activeWheelElement.nextSibling) {
      scrollIntoView(activeWheelElement.nextSibling);
    }
  };

  return (
    <button
      className={`Wheel__Button Wheel__Button--${direction}`}
      onClick={clickHandler}
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
  wheel: {},
};

ArrowButton.propTypes = {
  direction: PropTypes.string,
  wheel: PropTypes.objectOf(PropTypes.object),
};
