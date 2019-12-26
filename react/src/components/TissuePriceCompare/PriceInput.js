import React from "react";
import PropTypes from "prop-types";

import "./PriceInput.scss";

export const PriceInput = ({ dataDefaultValue, getNumberInput, placeholder, setter, value }) => {
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

  const validateInput = (clickedElement) => {
    if (typeof clickedElement === "undefined") return;

    getNumberInput(validatePrice(clickedElement), setter);
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
  dataDefaultValue: "",
  placeholder: "",
  setter: "",
  value: () => {},
  getNumberInput: () => {},
};

PriceInput.propTypes = {
  dataDefaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  setter: PropTypes.string,
  value: PropTypes.func,
  getNumberInput: PropTypes.func,
};
