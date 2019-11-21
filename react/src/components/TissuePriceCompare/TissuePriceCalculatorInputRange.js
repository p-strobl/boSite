import React, { useContext } from "react";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

import "./TissuePriceCalculatorInputRange.scss";

export const TissuePriceCalculatorInputRange = ({
  context,
  dataDefaultValue,
  defaultValue,
  max,
  min,
  step,
  text,
}) => {
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

  const setRangeOutputValue = (rangeInput, rangeInputOutputContainer) => {
    if (typeof rangeInput === "undefined") return;

    rangeInputOutputContainer.innerHTML = rangeInput.value;
    setInput(parseFloat(rangeInput.value));
  };

  const blinkRangeOutputValue = (rangeInputOutputValueContainer) => {
    rangeInputOutputValueContainer.classList.add(
      "TissuePriceCalculatorInput__RangeOutputValue--blink",
    );
    setTimeout(() => {
      rangeInputOutputValueContainer.classList.remove(
        "TissuePriceCalculatorInput__RangeOutputValue--blink",
      );
    }, 50);
  };

  const rangeInputSlided = (element) => {
    if (typeof element === "undefined") return;

    const rangeInput = element.target;
    const rangeInputOutputContainer = rangeInput.previousElementSibling.getElementsByTagName(
      "output",
    );
    const rangeInputOutputValueContainer = rangeInput.parentElement.previousElementSibling
      .getElementsByTagName("output")
      .item(0);
    const progressBarFiller = rangeInput.previousElementSibling.querySelector(
      ".TissuePriceCalculatorInput__ProgressBar--filler",
    );

    setProgressBar(progressBarFiller, rangeInput);
    setRangeOutputValue(rangeInput, rangeInputOutputContainer);
    blinkRangeOutputValue(rangeInputOutputValueContainer);
  };

  return (
    <div className="TissuePriceCalculatorInput__Container">
      <div className="TissuePriceCalculatorInput__RangeOutput">
        <output className="TissuePriceCalculatorInput__RangeOutputValue">{defaultValue}</output>
        <span className="TissuePriceCalculatorInput__RangeOutputText">{text}</span>
      </div>
      <div className="TissuePriceCalculatorInput__RangeInput">
        <div className="TissuePriceCalculatorInput__ProgressBar">
          <div
            className="TissuePriceCalculatorInput__ProgressBar--filler"
            style={{ width: `${initialProgress()}%` }}
          />
        </div>
        <input
          className="TissuePriceCalculatorInput__RangeSlider"
          type="range"
          defaultValue={defaultValue}
          data-default={dataDefaultValue}
          min={min}
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
  min: PropTypes.number,
  step: PropTypes.number,
  text: PropTypes.string,
};

TissuePriceCalculatorInputRange.propTypes = {
  context: PropTypes.string,
  defaultValue: PropTypes.number,
  dataDefaultValue: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  text: PropTypes.string,
};
