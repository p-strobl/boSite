import React from "react";
import PropTypes from "prop-types";
import Class from "classnames";
import uuidv4 from "uuid/v4";

import { WheelInputArrow } from "~components/TissuePriceCompare/Calculator.Input.Wheel.Arrow";
import { WheelInputElements } from "~components/TissuePriceCompare/Calculator.Input.Wheel.Elements";

import "./Calculator.Input.Wheel.scss";

export const WheelInput = ({ calculatorIndex, type }) => {
  return (
    <div className={Class("WheelContainer")} key={uuidv4()}>
      <WheelInputArrow direction="Prev" />
      <WheelInputElements calculatorIndex={calculatorIndex} type={type} />
      <WheelInputArrow direction="Next" />
    </div>
  );
};

WheelInput.defaultProps = {
  calculatorIndex: 0,
  type: 0,
};

WheelInput.propTypes = {
  calculatorIndex: PropTypes.number,
  type: PropTypes.string,
};
