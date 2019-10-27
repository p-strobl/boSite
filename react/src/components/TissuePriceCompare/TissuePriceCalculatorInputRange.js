import React, { useContext } from "react";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

import "./TissuePriceCalculatorInputRange.scss";

export const TissuePriceCalculatorInputRange = ({ context, dataDefaultValue, defaultValue, max, step, text }) => {
  const {
    [context]: [, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const initialProgress = () => {
    if (defaultValue.length === 0 || max.length === 0) return 0;

    return (100 * defaultValue) / max;
  };

  const getProgress = (rangeInput) => {
    if (typeof rangeInput === "undefined") return 0;

    return (100 * rangeInput.value) / rangeInput.getAttribute("max");
  };

  const setProgressBar = (progressBarFiller, rangeInput) => {
    if (typeof progressBarFiller === "undefined") return;

    progressBarFiller.style.width = `${getProgress(rangeInput)}%`;
  };

  const setRangeOutputValue = (rangeInput) => {
    if (typeof rangeInput === "undefined") return;

    const rangeInputOutputContainer = rangeInput.previousElementSibling.getElementsByTagName("output");

    rangeInputOutputContainer.innerHTML = rangeInput.value;
    setInput(parseFloat(rangeInput.value));
  };

  const rangeInputSlided = (element) => {
    if (typeof element === "undefined") return;

    const rangeInput = element.target;
    const progressBarFiller = rangeInput.previousElementSibling.querySelector(
      ".TissuePriceCalculatorInput__ProgressBar--filler",
    );

    setProgressBar(progressBarFiller, rangeInput);
    setRangeOutputValue(rangeInput);
  };

  return (
    <div className="TissuePriceCalculatorInput__Container">
      <div className="TissuePriceCalculatorInput__RangeOutput">
        <output className="TissuePriceCalculatorInput__RangeOutputValue">{defaultValue}</output>
        <span className="TissuePriceCalculatorInput__RangeOutputText">{text}</span>
      </div>
      <div className="TissuePriceCalculatorInput__RangeInput">
        <span className="TissuePriceCalculatorInput__ProgressBar">
          <span
            className="TissuePriceCalculatorInput__ProgressBar--filler"
            style={{ width: `${initialProgress()}%` }}
          />
        </span>
        <input
          className="TissuePriceCalculatorInput__RangeSlider"
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
