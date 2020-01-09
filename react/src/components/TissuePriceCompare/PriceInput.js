import React, { useContext } from "react";
import PropTypes from "prop-types";

import "./PriceInput.scss";
import { TissuePriceCalculatorContext } from "~context/TissuePriceCalculatorContext";

export const PriceInput = ({ context, dataDefaultValue, placeholder, value }) => {
  const {
    [context]: [, setInput],
  } = useContext(TissuePriceCalculatorContext);

  const numbersOnly = (element, inputValue) => {
    const numberRegex = /[^0-9,]/g;

    if (numberRegex.test(inputValue)) {
      element.target.value = inputValue.replace(numberRegex, "");
      return false;
    }
    return true;
  };

  const validatePrice = (clickedElement) => {
    const inputValue = clickedElement.target.value;

    if (inputValue.length === 0) return false;

    const inputIsValid = numbersOnly(clickedElement, inputValue);

    if (inputIsValid) {
      const digitRegex = /\D/g;
      const decimalCommaRegex = /\B(?=(\d{2})(?!\d))/g;

      clickedElement.target.value = inputValue
        .replace(digitRegex, "")
        .replace(decimalCommaRegex, ",");

      return parseFloat(inputValue);
    }
    return false;
  };

  const validateInput = (clickedElement) => {
    if (typeof clickedElement === "undefined") return;

    setInput(validatePrice(clickedElement));
  };

  return (
    <div className="PriceContainer">
      <input
        className="Price__Input"
        data-default={dataDefaultValue}
        defaultValue={value}
        placeholder={placeholder}
        type="tel"
        onKeyUp={validateInput}
      />
    </div>
  );
};

PriceInput.defaultProps = {
  context: "",
  dataDefaultValue: "",
  placeholder: "",
  value: () => {},
};

PriceInput.propTypes = {
  context: PropTypes.string,
  dataDefaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.func,
};
