import React, { useContext } from "react";
import Class from "classnames";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";
import { validatePrice } from "./TissuePriceCompareController";

import "./TissuePriceCalculatorInputRange.scss";

export const TissuePriceCalculatorInputNumber = ({
  context,
  dataDefaultValue,
  placeholder,
  value,
}) => {
  const {
    [context]: [input, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const validateInputPrice = (clickedElement) => {
    setInput(validatePrice(clickedElement));
  };

  return (
    <div className="TissuePriceCalculatorInput__RangeContainer">
      <input
        className="TissuePriceCalculatorInput__Price"
        data-default={dataDefaultValue}
        defaultValue={value}
        placeholder={placeholder}
        type="tel"
        onKeyUp={validateInputPrice}
      />
    </div>
  );
};

TissuePriceCalculatorInputNumber.defaultProps = {
  context: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func,
};

TissuePriceCalculatorInputNumber.propTypes = {
  context: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func,
};
