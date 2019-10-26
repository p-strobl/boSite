import React, { useContext } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

import "./TissuePriceCalculatorInputRange.scss";

export const TissuePriceCalculatorInputRange = ({
  context,
  dataDefaultValue,
  defaultValue,
  max,
  step,
  text,
}) => {
  const {
    [context]: [, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const rangeInputSlided = (element) => {
    element.target.previousElementSibling.getElementsByTagName(
      "output",
    ).innerHTML = element.target.value;
    setInput(parseFloat(element.target.value));
  };

  return (
    <div className="TissuePriceCalculatorInput__RangeContainer">
      <div className="TissuePriceCalculatorInput__Output">
        <output className="TissuePriceCalculatorInput__OutputValue">
          {defaultValue}
        </output>
        <span className="TissuePriceCalculatorInput__OutputText">{text}</span>
      </div>
      <input
        className="TissuePriceCalculatorInput__Range"
        type="range"
        defaultValue={defaultValue}
        data-default={dataDefaultValue}
        min="0"
        max={max}
        name={text}
        step={step}
        onInput={rangeInputSlided}
      />
    </div>
  );
};

TissuePriceCalculatorInputRange.defaultProps = {
  context: PropTypes.string,
  defaultValue: PropTypes.number,
  dataDefaultValue: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  text: PropTypes.string,
};

TissuePriceCalculatorInputRange.propTypes = {
  context: PropTypes.string,
  defaultValue: PropTypes.number,
  dataDefaultValue: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  text: PropTypes.string,
};
