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
  const uiClasses = {
    inputContainer: "TissuePriceCalculatorInput__Container",
    inputRangeOutput: "TissuePriceCalculatorInput__RangeOutput",
    inputRangeOutputValue: "TissuePriceCalculatorInput__RangeOutputValue",
    inputRangeOutputValueBlink: "TissuePriceCalculatorInput__RangeOutputValue--blink",
    inputRangeOutputText: "TissuePriceCalculatorInput__RangeOutputText",
    inputRangeInput: "TissuePriceCalculatorInput__RangeInput",
    inputProgressBar: "TissuePriceCalculatorInput__ProgressBar",
    inputProgressBarFiller: "TissuePriceCalculatorInput__ProgressBar--filler",
    inputRangeSlider: "TissuePriceCalculatorInput__RangeSlider",
    output: "output",
  };

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
    rangeInputOutputValueContainer.classList.add(`${uiClasses.inputRangeOutputValueBlink}`);
    setTimeout(() => {
      rangeInputOutputValueContainer.classList.remove(`${uiClasses.inputRangeOutputValueBlink}`);
    }, 50);
  };

  const rangeInputSlided = (element) => {
    if (typeof element === "undefined") return;

    const rangeInput = element.target;
    const rangeInputOutputContainer = rangeInput.previousElementSibling.getElementsByTagName(
      `${uiClasses.output}`,
    );
    const rangeInputOutputValueContainer = rangeInput.parentElement.previousElementSibling
      .getElementsByTagName(`${uiClasses.output}`)
      .item(0);
    const progressBarFiller = rangeInput.previousElementSibling.querySelector(
      `.${uiClasses.inputProgressBarFiller}`,
    );

    setProgressBar(progressBarFiller, rangeInput);
    setRangeOutputValue(rangeInput, rangeInputOutputContainer);
    blinkRangeOutputValue(rangeInputOutputValueContainer);
  };

  return (
    <div className={uiClasses.inputContainer}>
      <div className={uiClasses.inputRangeOutput}>
        <output className={uiClasses.inputRangeOutputValue}>{defaultValue}</output>
        <span className={uiClasses.inputRangeOutputText}>{text}</span>
      </div>
      <div className={uiClasses.inputRangeInput}>
        <div className={uiClasses.inputProgressBar}>
          <div
            className={uiClasses.inputProgressBarFiller}
            style={{ width: `${initialProgress()}%` }}
          />
        </div>
        <input
          className={uiClasses.inputRangeSlider}
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
  context: "",
  defaultValue: 0,
  dataDefaultValue: 0,
  max: 0,
  min: 0,
  step: 0,
  text: "",
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
