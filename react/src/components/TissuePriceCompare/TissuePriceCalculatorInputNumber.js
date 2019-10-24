import React, { useContext } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { validate } from "./TissuePriceCompareController";

import "./TissuePriceCalculatorInputRange.scss";

export const TissuePriceCalculatorInputNumber = ({ context, placeholder }) => {
  const {
    [context]: [input, setInput],
  } = useContext(TissuePriceCalculatorContext);

  return (
    <div className="TissuePriceCalculatorInput__RangeContainer">
      <input className="TissuePriceCalculatorInput__Range" type="tel" placeholder={placeholder} />
    </div>
  );
};

TissuePriceCalculatorInputNumber.defaultProps = {
  context: PropTypes.string,
  placeholder: PropTypes.string,
};

TissuePriceCalculatorInputNumber.propTypes = {
  context: PropTypes.string,
  placeholder: PropTypes.string,
};
