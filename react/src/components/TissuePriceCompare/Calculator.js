import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";

import { PriceInput } from "~components/TissuePriceCompare/PriceInput";
import { PriceOutput } from "~components/TissuePriceCompare/PriceOutput";
import { WheelInput } from "~components/TissuePriceCompare/Calculator.Input.Wheel";

import "./Calculator.scss";

export const Calculator = ({ calculatorIndex }) => {
  return (
    <div className={Class("Calculator")}>
      <div className={Class("Calculator__Item Calculator__Input")}>
        <WheelInput calculatorIndex={calculatorIndex} type="roll" />
        <WheelInput calculatorIndex={calculatorIndex} type="sheets" />
        <WheelInput calculatorIndex={calculatorIndex} type="layer" />
        <PriceInput calculatorIndex={calculatorIndex} />
      </div>
      <div className={Class("Calculator__Item Calculator__Output")}>
        <PriceOutput calculatorIndex={calculatorIndex} />
      </div>
    </div>
  );
};

Calculator.defaultProps = {
  calculatorIndex: 0,
};

Calculator.propTypes = {
  calculatorIndex: PropTypes.number,
};
