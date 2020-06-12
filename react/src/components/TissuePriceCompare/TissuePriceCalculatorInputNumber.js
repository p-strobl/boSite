import React, { useContext } from "react";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

import "./TissuePriceCalculatorInputNumber.scss";

export const TissuePriceCalculatorInputNumber = ({
  context,
  dataDefaultValue,
  placeholder,
  value,
}) => {
  const uiClasses = {
    inputRangeContainer: "TissuePriceCalculatorInput__RangeContainer",
    inputRangePrice: "TissuePriceCalculatorInput__Price",
  };

  const numbersOnly = (element, inputValue) => {
    const numberRegex = /[^0-9,]/g;

    if (numberRegex.test(inputValue)) {
      element.target.value = inputValue.replace(numberRegex, "");
      return false;
    }

    return true;
  };

  const validatePrice = (element) => {
    let inputValue = element.target.value;

    if (inputValue.length === 0) return false;

    const inputIsValid = numbersOnly(element, inputValue);

    if (inputIsValid) {
      const digitRegex = /\D/g;
      const decimalCommaRegex = /\B(?=(\d{2})(?!\d))/g;

      inputValue = inputValue.replace(digitRegex, "").replace(decimalCommaRegex, ",");
      element.target.value = inputValue;
      inputValue = inputValue.replace(",", ".");

      return parseFloat(inputValue);
    }

    return false;
  };

  const {
    [context]: [input, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const validateInputPrice = (clickedElement) => {
    setInput(validatePrice(clickedElement));
  };

  return (
    <div className={uiClasses.inputRangeContainer}>
      <input
        className={uiClasses.inputRangePrice}
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
  dataDefaultValue: "",
  context: "",
  placeholder: "",
  value: () => {},
};

TissuePriceCalculatorInputNumber.propTypes = {
  dataDefaultValue: PropTypes.string,
  context: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func,
};
