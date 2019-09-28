import React from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import "./CalculatorOutput.scss";

export const CalculatorOutput = ({ totalPrice }) => {
  return <div className={Class("CalculatorOutput")}>{totalPrice}</div>;
};

CalculatorOutput.defaultProps = {
  totalPrice: PropTypes.number,
};

CalculatorOutput.propTypes = {
  totalPrice: PropTypes.number,
};
