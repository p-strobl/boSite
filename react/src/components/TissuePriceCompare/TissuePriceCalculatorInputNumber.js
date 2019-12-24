import React, { useContext } from "react";
import PropTypes from "prop-types";

import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

import "./TissuePriceCalculatorInputNumber.scss";

export const TissuePriceCalculatorInputNumber = ({
  context,
  dataDefaultValue,
  placeholder,
  value,
  getNumberInput,
}) => {
  const numbersOnly = (element, inputValue) => {
    const numberRegex = /[^0-9,]/g;

    if (numberRegex.test(inputValue)) {
      element.target.value = inputValue.replace(numberRegex, "");
      return false;
    }
    return true;
  };

  const validatePrice = (input) => {
    const inputValue = input.target.value;

    if (inputValue.length === 0) return false;

    const inputIsValid = numbersOnly(input, inputValue);

    if (inputIsValid) {
      const digitRegex = /\D/g;
      const decimalCommaRegex = /\B(?=(\d{2})(?!\d))/g;

      input.target.value = inputValue.replace(digitRegex, "").replace(decimalCommaRegex, ",");

      return parseFloat(inputValue);
    }
    return false;
  };

  const {
    [context]: [input, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const validateInput = (clickedElement) => {
    getNumberInput(validatePrice(clickedElement));
  };

  return (
    <div className="TissuePriceCalculatorInput__RangeContainer">
      <input
        className="TissuePriceCalculatorInput__Price"
        data-default={dataDefaultValue}
        defaultValue={value}
        placeholder={placeholder}
        type="tel"
        onKeyUp={validateInput}
      />
    </div>
  );
};

TissuePriceCalculatorInputNumber.defaultProps = {
  dataDefaultValue: "",
  context: "",
  placeholder: "",
  value: () => {},
  getNumberInput: () => {},
};

TissuePriceCalculatorInputNumber.propTypes = {
  dataDefaultValue: PropTypes.string,
  context: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func,
  getNumberInput: PropTypes.func,
};
