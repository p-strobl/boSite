import React, { useContext } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { validate } from "./TissuePriceCompareController";

import "./TissuePriceCalculatorInputRange.scss";

export const TissuePriceCalculatorInputRange = ({ context, text, defaultValue, max, step }) => {
  const {
    [context]: [input, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const slided = (e) => {
    e.target.previousElementSibling.lastChild.innerHTML = e.target.value;
  };

  return (
    <div className="TissuePriceCalculatorInput__RangeContainer">
      <div className="TissuePriceCalculatorInput__Output">
        <span className="TissuePriceCalculatorInput__OutputText">{text}</span>
        <output className="TissuePriceCalculatorInput__OutputValue">{defaultValue}</output>
      </div>
      <input
        className="TissuePriceCalculatorInput__Range"
        type="range"
        defaultValue={defaultValue}
        min="0"
        max={max}
        step={step}
        onInput={slided}
        readOnly
      />
    </div>
  );
};

TissuePriceCalculatorInputRange.defaultProps = {
  context: PropTypes.string,
  text: PropTypes.string,
  defaultValue: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

TissuePriceCalculatorInputRange.propTypes = {
  context: PropTypes.string,
  text: PropTypes.string,
  defaultValue: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};
