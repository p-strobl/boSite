import React from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import "./CalculatorOutput.scss";

export const CalculatorOutput = ({ totalPrice }) => {
  const localePrice = totalPrice.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 6,
  });

  return <div className={Class("CalculatorOutput")}>{localePrice}</div>;
};

CalculatorOutput.defaultProps = {
  totalPrice: PropTypes.number,
};

CalculatorOutput.propTypes = {
  totalPrice: PropTypes.number,
};
