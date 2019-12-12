import React, { useContext } from "react";
import Class from "classnames";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";

import "./TissuePriceInputWheel.scss";
import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

export const TissuePriceInputWheel = ({ context, range }) => {
  const {
    [context]: [input, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const clickedWheelElement = (event) => {
    console.log("", event.target);
    event.target.scrollIntoView({ behavior: "smooth" });
  };

  const clickedUpArrow = (event) => {
    console.log("Up", event.target);
  };

  const clickedDownArrow = (event) => {
    console.log("Down", event.target);
  };

  const createWheelElements = () => {
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

    return wheelRange;
  };

  const CreateUpDownButton = ({ direction }) => {
    return (
      <button
        className={`TissueInputWheel__Button TissueInputWheel__Button--${direction}`}
        onClick={direction === "Up" ? clickedUpArrow : clickedDownArrow}
        onKeyUp={() => {}}
        type="button"
        tabIndex={0}
        aria-label={direction}
      />
    );
  };

  return (
    <div className={Class("TissueInputWheel")} key={uuidv4()}>
      <CreateUpDownButton direction="Up" />
      <div className="TissueInputWheel__Container">{createWheelElements(range) || ""}</div>
      <CreateUpDownButton direction="Down" />
    </div>
  );
};

TissuePriceInputWheel.defaultProps = {
  context: "",
  range: 0,
};

TissuePriceInputWheel.propTypes = {
  context: PropTypes.string,
  range: PropTypes.number,
};
